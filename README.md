# Nexus personal assistant

This public repository tracks sanitized architecture, implementation contracts, design decisions, tests, and release notes for Nexus.

## Storage boundaries

- The hosted database is the source of truth for live tasks, scoped memories, permissions, and audit evidence.
- The private OneDrive workspace contains a clearly labeled `AI_Workspace/Nexus/` area for readable notes and recovery records. Other workspace projects are outside Nexus's write scope.
- This public repository never contains personal contact profiles, call transcripts, family details, phone numbers, financial records, credentials, private endpoint identifiers, or production database exports.

## Development practice

Use issues for concrete work and blockers, commits for reviewed changes, and release notes for deployed behavior and validation. A saved request, provider acceptance, and verified outcome are distinct states. Documentation must say which stage is confirmed.

The full existing local implementation has not been imported into this public repository; it requires a separate privacy review. Only explicitly reviewed files may be published.
