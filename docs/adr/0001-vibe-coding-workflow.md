# ADR 0001: Vibe Coding Workflow

## Status

Accepted

## Date

2026-06-23

## Context

南望玉叙 is being developed as a real client-facing jewelry project, not as a throwaway exercise. The user wants to use Codex for step-by-step vibe coding, but the project needs enough durable context to avoid drifting between sessions.

OpenAI Codex guidance recommends turning durable project conventions into `AGENTS.md`, keeping repeatable work reusable, and pairing written instructions with checks such as linters, tests, and review checklists.

## Decision

Use a documentation-first vibe coding workflow:

1. Keep durable agent instructions in root-level `AGENTS.md`.
2. Keep detailed project rules in `docs/rules/`.
3. Use `docs/05-step-by-step-task-plan.md` as the task queue.
4. Use `docs/06-task-briefing-context.md` as the handoff context for staged prompts.
5. Use QA and release checklists before accepting or sharing work.
6. Record meaningful architecture or workflow choices in `docs/adr/`.

## Consequences

Positive:

- Future tasks can be assigned by task ID.
- Codex has stable context without the user repeating everything.
- Product, mobile, deployment, and acceptance rules stay explicit.
- Decisions become easier to explain in project review or interviews.

Tradeoffs:

- More documentation must be maintained.
- Specs can become stale if implementation changes are not reflected.

## Operational Rule

When implementation and docs disagree, stop and reconcile the mismatch before making broad changes.
