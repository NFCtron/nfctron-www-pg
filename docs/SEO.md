# NFCtron web — indexing checklist

## Adding a public page

Every new public page must be registered in `src/config/site.ts` under
`INDEXABLE_ROUTES` when it is ready for indexing. This registry generates the
XML sitemap automatically.

For every new page:

1. Add a unique title and meta description.
2. Add the route to `INDEXABLE_ROUTES`.
3. Confirm the page is not blocked in `robots.ts`.
4. Verify the canonical production URL uses `NEXT_PUBLIC_SITE_URL`.
5. Run the production build and inspect `/robots.txt` and `/sitemap.xml`.

## Current behavior

- Public pages are crawlable and indexable.
- API routes are excluded from crawling.
- `robots.txt` points crawlers to the XML sitemap.
- The sitemap includes the visitor, organizer, retailer and artist pages.
- The site hostname comes from `NEXT_PUBLIC_SITE_URL`, with
  `https://www.nfctron.com` as the fallback.
