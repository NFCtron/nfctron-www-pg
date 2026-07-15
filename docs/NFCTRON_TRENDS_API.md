# NFCtron visitor trends API

The homepage trend component reads data through `getEventTrendGroups()`.
Static data is used until `NFCTRON_TRENDS_API_URL` is configured.

The endpoint must return four groups (`deals`, `festival`, `concert`, `music`),
each containing at least three events:

```json
[
  {
    "id": "festival",
    "label": "Festival",
    "hashtag": "Festival",
    "eyebrow": "Co teď vede mezi festivaly",
    "events": [
      {
        "id": "event-id",
        "title": "Event title",
        "meta": "Date · Place",
        "href": "https://tickets.nfctron.com/..."
      }
    ]
  }
]
```

Responses are validated, limited to three events per group and cached for 15
minutes. Invalid or unavailable API responses fall back to the local dataset.
