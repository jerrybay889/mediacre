# Architecture

- `app/`: routes, metadata, API endpoints.
- `components/`: reusable UI and client interactions.
- `content/`: reviewed company, project, and legal placeholder data.
- `lib/`: content access, analytics bridge, validation.
- `public/assets/`: lightweight prototype visuals.
- `scripts/`: deterministic content and contact validation.

The website can operate in mock contact mode without external services. Production form delivery is isolated behind a server-side webhook.
