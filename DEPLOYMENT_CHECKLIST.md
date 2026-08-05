# Deployment checklist

## Required before production
- Confirm official domain and `NEXT_PUBLIC_SITE_URL`.
- Confirm company representative, address, contact email, privacy officer, retention period, processors, and effective date.
- Replace prototype visuals with rights-cleared campaign assets or retain explicit placeholder labeling.
- Configure and test `CONTACT_WEBHOOK_URL` and optional bearer token.
- Review CSP/connect-src if external analytics or webhook clients are added.
- Run `npm run validate`, `npm run build`, and browser QA at desktop/mobile widths.
- Verify robots, sitemap, Open Graph image, canonical metadata, accessibility, and form delivery.

Vercel project connection and production deployment are intentionally excluded from this candidate.

