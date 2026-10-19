<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- Shared header, footer, page hero and CTA live in `src/components/Site.tsx`; every marketing route uses `PageShell` so navigation stays consistent.
- Industry and article content lives in `src/lib/content.ts`; detail pages (`industries_.$slug`, `insights_.$slug`) read from it so adding an entry needs no new route.
- All site forms go through `InquiryForm`, which inserts into the `leads` table (insert-only for visitors, no public reads) so enquiries are never exposed.
