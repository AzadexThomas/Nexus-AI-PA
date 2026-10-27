# Contact notebook design

Status: deployed on 2026-10-27. The initial private mirror has 23 readback-verified documents. A subsequent consented live check-in verified automatic source-bound saving, private mirror readback and the hosted next-call context path. See CHANGELOG.md for evidence and remaining legacy coverage limits.

## Sources of truth

The hosted database owns live tasks, source-bound memories, permissions, corrections, expiry and forgetting. OneDrive is a readable mirror under `AI_Workspace/Nexus/`, separate from other workspace users. The public repository owns sanitized design and development history.

## Contact profiles and conversations

Profiles contain dated ordinary owner reports and recipient statements explicitly shared for future conversation and owner review. Adult-private self notes are excluded. Reports, observations and verified outcomes must remain distinguishable. Names, phone numbers and all personal content remain outside this repository.

New eligible outbound personal check-ins first confirm the intended person, then ask permission for brief notes reviewable by the owner. The background worker verifies the completed provider source, the actual recipient channel and the existing authorized task. It retains selected ordinary source quotes without an extra LLM extraction call. No consent, wrong party, sensitive content or unsupported source means no content is saved. Older calls are not silently backfilled under a new consent policy.

Before the next eligible call, only that recipient's own shared notes enter the bounded frozen call context. The agent confirms identity and note consent before using a dated detail. Notes never grant authority, trigger actions, or replace authentication. Authenticated owner/family context tools can retrieve owner-reviewable notes with source attribution.

## OneDrive mirror

Fixed allowlisted filenames only: README, recovery runbook, operating status, hashed contact-profile filenames and per-contact selected-conversation summaries. No arbitrary paths, sharing links or other workspace writes. Content hashes avoid unchanged uploads; a write is confirmed only after exact readback. Failed syncs retain retry state. Current notes reflect corrections, forgetting and expiry on the next successful sync; provider version-history erasure is a separate concern.

## Verification

Use mocked full-path tests for consent, source mismatch, recipient mismatch, subject isolation, expiry, forgetting, unchanged-file deduplication and readback failure. Use bounded production checks for the actual hosted adapter. A live phone conversation is a separate verification stage and must not be inferred from a completed queue item.

## Prompt completion discovery and short replies

While a recent authorized note-eligible Core call remains unprocessed, the worker can check the latest 20 provider conversation metadata records at most once per five minutes. This avoids waiting for the separate six-hour cost scan. Discovery is explicitly partial when more records exist; original task and recipient proof remain mandatory before saving. Per-task dispositions prevent continued discovery after processing.

Short answers can be useful when the actual preceding question establishes the topic. Retain that question alongside the exact quote instead of inferring a standalone fact. The bounded next-call context preserves valid JSON and only the same recipient's shared notes. An admin-only, read-only preview uses the actual runtime call-preparation function without creating a task, session or call.
