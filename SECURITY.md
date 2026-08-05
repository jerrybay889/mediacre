# Security

Do not commit secrets. Configure webhooks and bearer tokens only in the hosting provider's encrypted environment variables. The contact endpoint accepts JSON only, enforces a body-size limit, validates input, uses a honeypot, times out upstream requests, and defaults to mock mode. Report suspected vulnerabilities privately to the repository owner; do not include personal data in public issues.
