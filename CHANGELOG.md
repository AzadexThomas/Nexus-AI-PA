# Changelog

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
