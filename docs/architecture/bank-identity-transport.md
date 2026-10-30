# Bank identity transport — unfinished integration

The encrypted identity store is operational; bank-call secret delivery is not enabled. This is a separate transport engineering dependency, not a missing owner login or a request to unlock the cloud dashboard.

## Current boundary

The existing hosted agent's keypad system tool takes a digit sequence chosen by the LLM. Returning a vault value through its webhook would expose the secret to conversation processing. Secret dynamic variables are restricted to headers and do not substitute secret keypad arguments. Caller keypad input redaction does not protect outgoing digit arguments. Post-call history redaction does not remove live model exposure. The Twilio bidirectional Media Streams interface has no outbound DTMF event from the media server. A call update that replaces TwiML is not a verified seamless continuation of the existing correlated agent call.

No secret-read endpoint, prompt injection of identity values, relaxed authorization, new provider subscription or bank call was introduced during this audit.

## Required implementation

A server-controlled telephony/SIP sideband or private media relay must send only the institution-requested field while preserving the active call. The model receives a metadata receipt only. Before decryption, recheck the official destination, provider conversation, case and attempt, current account-specific owner disclosure authority, requested field/format, expiry and one-time claim. Stop on transfer, wrong party or refusal. Unknown delivery must be held without automatic replay. Authentication is separate from authority to accept terms or move money.

Acceptance requires a synthetic institution endpoint receiving the correct fixture field, with no fixture secret in model messages, provider tool history, webhook exports, ordinary logs or readable notes; the session must survive delivery. Duplicate, expired, revoked, transferred and family-session attempts must not decrypt or send. A passing mock is not proof of live bank authorization.

## Verification

The audit added fifteen attempted secret-read/operation escalation checks. All 64 vault/access/client checks, 19 application-route checks and 63 creditor proof checks passed with synthetic values. Read-only production status and anonymous/public denial checks passed. These checks prove the existing privacy boundary, not successful bank secret delivery. The private guide documents the vault and call ends, provider settings and recovery roles. Identity enrollment is still a separate owner task.

## Provider references

- [ElevenLabs keypad tool](https://elevenlabs.io/docs/eleven-agents/customization/tools/system-tools/play-keypad-touch-tone)
- [Secret dynamic variables](https://elevenlabs.io/docs/eleven-agents/customization/personalization/dynamic-variables)
- [History redaction](https://elevenlabs.io/docs/eleven-agents/customization/privacy/conversation-history-redaction)
- [Twilio Media Streams](https://www.twilio.com/docs/voice/media-streams)
