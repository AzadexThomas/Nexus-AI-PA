# Private identity storage

The assistant uses a separate private service for encrypted identity records. Its database contains AES-256-GCM ciphertext; the encryption key is a Worker secret held only by that service. The application accesses it through a service binding and a separate authentication secret. Public service URLs and plaintext retrieval endpoints are disabled.

Owners manage enrollment in the application's Identity vault page. Login and a separate, purpose-specific, five-minute approval are required before entering or updating identity fields. Financial read approval does not authorize enrollment. Status responses contain presence metadata only. Logging out revokes enrollment grants. Family sessions cannot enroll or read owner identity data.

Provider resources have role tags and purpose annotations. A private workspace recovery guide and the existing private dossier pair describe the service references, management path and recovery responsibilities without storing identity values. Public documentation contains no owner records or provider identifiers.

Storage readiness is separate from creditor authentication. Bank voice/keypad disclosure is not implemented in this release. No identity values are put into shared knowledge bases or general prompts. Key rotation requires a coordinated re-encryption/recovery procedure; a Windows-bound local recovery copy is not a portable backup.

Validation: 49 storage/access/client checks, 19 full application route checks, 325 core checks, 24 notebook checks, 21 dossier contract checks and six inline-script checks passed. Synthetic browser enrollment verified field clearing and resource guidance. Production read-only checks verified access denial, disabled public service exposure and empty enrollment status. No live bank call or identity disclosure was used for testing.
