import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { listRepos, generateProjectBrief, type ProjectBrief, type Repo } from "@/lib/portfolio.functions";

export function RepoGrid() {
  const fetchRepos = useServerFn(listRepos);
  const makeBrief = useServerFn(generateProjectBrief);
  const [briefs, setBriefs] = useState<Record<string, ProjectBrief>>({});
  const [pending, setPending] = useState<string | null>(null);
  const { data, isLoading, isError } = useQuery({ queryKey: ["github-repos"], queryFn: () => fetchRepos(), staleTime: 5 * 60 * 1000 });

  async function draft(repo: Repo) {
    setPending(repo.name);
    try {
      const brief = await makeBrief({ data: { name: repo.name, description: repo.description, language: repo.language, topics: repo.topics } });
      setBriefs((current) => ({ ...current, [repo.name]: brief }));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not generate a draft.");
    } finally {
      setPending(null);
    }
  }

  return (
    <section id="repos">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Open source / live feed</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] md:text-5xl">The repository wall.</h2></div>
        <a href="https://github.com/ArunRajoriya" target="_blank" rel="noreferrer" className="w-fit rounded-md border border-border bg-secondary px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary">GitHub profile ↗</a>
      </div>
      {isLoading && <div className="font-mono text-sm text-muted-foreground">Syncing repositories…</div>}
      {isError && <div className="font-mono text-sm text-muted-foreground">GitHub is not responding. Try refreshing shortly.</div>}
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((repo, index) => {
          const brief = briefs[repo.name];
          return (
            <article key={repo.name} className="group flex min-h-64 flex-col bg-background p-6 transition-colors hover:bg-card">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground"><span>{String(index + 1).padStart(2, "0")} / REPO</span><span>{repo.language ?? "CODE"} · ★ {repo.stars}</span></div>
              <h3 className="mt-8 break-words text-lg font-semibold tracking-[-0.01em] transition-colors group-hover:text-primary">{repo.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{brief?.summary ?? repo.description ?? "An open-source project from my engineering archive."}</p>
              {brief?.stack?.length ? <div className="mt-4 flex flex-wrap gap-2">{brief.stack.map((tech) => <span key={tech} className="rounded-sm border border-border px-2 py-1 font-mono text-[9px] uppercase text-muted-foreground">{tech}</span>)}</div> : null}
              <div className="mt-6 flex items-center gap-4 font-mono text-[10px] uppercase">
                <a href={repo.url} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Code ↗</a>
                {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Live ↗</a>}
                <button type="button" onClick={() => draft(repo)} disabled={pending === repo.name} className="ml-auto rounded-md border border-primary/30 px-2.5 py-1.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50">{pending === repo.name ? "Drafting…" : brief ? "Redraft" : "AI brief"}</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}