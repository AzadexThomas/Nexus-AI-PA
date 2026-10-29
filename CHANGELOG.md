# Changelog

## 2026-10-29 — Preserve creditor offers after call completion

A finished provider call with saved options now moves to owner review instead of being mislabeled as having no verified options. Reserved acceptance retains its uncertain state and cannot be retried automatically. Offer records remain available for review.

Validation: 108 mocked creditor/dossier checks passed, including saved-offer preservation and uncertain-acceptance precedence. Production source/authentication checks passed after deployment. Scheduled calls remained unchanged; no live call or enrollment was used as a test.

## 2026-10-29 — Authorization-first creditor calls

Scheduled the authorized first calls to begin with the institutions' public assistant-authorization process. Private facts remain gated on task/destination/account-specific verification; enrollment stays disabled until written-source handling is verified. Added same-source financial freshness checks and deduplicated owner outcome/admission notices. No real creditor outcome is claimed before the scheduled calls run.

Validation: 101 mocked creditor/dossier checks, 325 main regressions, 12 access checks, 12 synchronization contracts, four rendered interface views and two focused hosted mock simulations passed. Scheduled receipts were read back from the deployed worker. Personal identifiers, destinations, source documents and call receipts remain private.

## 2026-10-28 — Scoped dossier and creditor-assistance foundation

Fixed a helper-scope error that prevented routed private views from rendering. Added authenticated section-level private reference lookup, source-checked owner corrections, optimistic Markdown/PDF synchronization, and a separate account-scoped creditor worker with durable states, duplicate prevention and written-term/confirmation guards. Ordinary contact and family scopes remain separate.

Validation: 325 main regressions, 94 mocked creditor/dossier checks, 12 access-isolation checks, 12 file-sync contracts, four rendered browser views, and two focused hosted mock simulations passed. A real authorized private directory-metadata update passed both file readbacks. No live creditor call, financial commitment or enrollment was used for testing. Institution authentication and supported assistant authorization remain blockers. See [architecture](docs/architecture/creditor-assistance.md).

## 2026-10-27 — Live contact-note verification and prompt processing repair

A consented human check-in completed. The scheduled worker automatically saved three source-linked ordinary notes, and both private OneDrive copies passed content/source readback. The actual hosted next-call preparation included the saved context without creating another call or private session. A deidentified hosted follow-up test passed against that saved context. No second live call was placed.

Live testing exposed and repaired two gaps: note discovery depended on the separate six-hour cost scan, and short answers could be missed when the topic appeared in the preceding question. The worker now performs bounded, task-gated metadata discovery while an eligible call is awaiting processing, deduplicates per-task results, and preserves the actual question with short source quotes. Next-call note context now remains valid bounded JSON.

Validation: notebook24 and core325 checks passed; a real scheduled save, exact OneDrive readback, protected read-only next-context preview and hosted recall response were verified. Anonymous/admin-route access was rejected, and the scheduler/Graph health checks reported no errors. Existing legacy-call coverage limits remain tracked in issue #2. Personal content and provider identifiers remain outside this repository.

## 2026-10-27 — Contact notebook and workspace organization

- Created a separately labeled `AI_Workspace/Nexus/` private area with Contacts, Conversation_Summaries, Operating_Notes and Recovery folders and a contact-name index.
- Deployed fixed-path hosted OneDrive writes with exact content readback and changed-file hashing. Initial synchronization verified 23 files with no sync errors.
- Added source-bound processing for new eligible Core-authorized outbound personal check-ins: recipient-channel and task correlation, explicit note-taking consent, selected ordinary quotes, per-conversation deduplication and expiry.
- Added same-contact prior-note retrieval for subsequent eligible check-ins and source-attributed retrieval in existing authenticated memory context.
- Added current-view forgetting propagation. Provider version history may retain older content and requires separate erasure handling.
- Added a current operating journal, recovery boundaries, sanitized design decisions, repository publishing rules, a public contract test and CI workflow.

Validation: 322 mocked core checks, 21 notebook checks, 25 existing contact guard checks, 17 memory-retention checks and 7 callback-store checks passed. Two hosted agent behavior tests passed. One earlier behavior run generated the exact required disclosure but the judge graded the preceding input history; after correcting the judge scope, the check passed. Hosted OneDrive read/write and source-metadata access were verified in production. No new live human call was placed for this release.

Limits: older transcripts were not backfilled without consent evidence. Existing memories classified sensitive remain in the authenticated database and are excluded from this ordinary-note mirror. A future real consented contact call has not yet verified the complete live note-saving cycle. Some legacy/direct calls do not have the required Core task correlation. Other integrations and blocked task categories remain separate work.

Privacy: this public repository contains only reviewed design, development policy and deployment-independent contract code with synthetic tests. The private implementation history and personal records were not imported.
