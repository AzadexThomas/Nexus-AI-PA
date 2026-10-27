# Decision 0001: storage ownership and change history

Accepted: 2026-10-27.

## Decision

Keep the hosted database authoritative. Maintain readable, source-attributed private notes under the clearly labeled `AI_Workspace/Nexus/` OneDrive area. Use this public repository for reviewed implementation contracts, design decisions, tests, issues and releases.

## Reasons

Duplicating authority across editable documents and a task database creates stale permissions and replay risks. Human-readable notes improve continuity and recovery, while the database retains scoped access, provenance, correction and deletion semantics.

## Publishing rules

Explicitly allowlist each public file. Never push private local repository history or an entire deployment bundle. Reject personal names, phone/email addresses, provider IDs, call transcripts, profiles, raw task payloads, financial records and secrets. New public code should use synthetic fixtures and deployment-independent constants.

## Change records

Each release records the problem, resulting behavior, tests, production verification and limits. A plan, deployed change, mocked test, successful upload and live conversation outcome are separate evidence categories. Open issues identify executable work and exact blockers. Keep failed tests and corrective changes distinguishable from verified success.
