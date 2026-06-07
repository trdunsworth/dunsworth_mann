# Dunsworth, Mann, & Associates, LLC website

Static marketing site for **Dunsworth, Mann, & Associates, LLC**, built with
**Deno**, **Fresh**, **Vite**, **Tailwind CSS**, and **TypeScript**.

## Stack

- **Deno** for the runtime and project tasks
- **Fresh** for routing and page composition
- **Vite** as the build/dev pipeline used by the Fresh plugin
- **Tailwind CSS** for styling
- **TypeScript** for route, component, and content structure

## Prerequisites

1. Install Deno if it is not already available.
2. Make sure `deno` is on your shell `PATH`.

If Deno was installed into `~/.deno/bin`, add this to your shell profile:

```sh
export PATH="$HOME/.deno/bin:$PATH"
```

## Environment variables

- `SITE_URL` (or `PUBLIC_SITE_URL`) sets the canonical base URL used for
  `<link rel="canonical">`, `og:url`, and absolute social image URLs.
- Example: `SITE_URL=https://www.dunsworth-mann.com`

## Project commands

Run these from the project root:

| Command           | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `deno task dev`   | Start the local development server with Vite |
| `deno task build` | Build the site for production                |
| `deno task start` | Serve the production build                   |
| `deno task check` | Run formatting, linting, and type-checking   |

## How the site is organized

### Content-first files

Most of the editable business content lives in:

- `data/site.ts`

That file controls:

- company name, phone number, mailing address, and principals
- navigation labels
- service descriptions
- presentation topics and formats
- workflow/value statements used across multiple pages

If you only want to update copy, this is usually the first file to edit.

### Layout and reusable UI

- `components/SiteLayout.tsx` contains the site header, navigation, skip link,
  and footer
- `components/PageHero.tsx` is the reusable page header block
- `components/PageSeo.tsx` sets each page title and description

### Page routes

- `routes/index.tsx` - landing page
- `routes/about.tsx` - about page
- `routes/services.tsx` - services page
- `routes/presentations.tsx` - presentations page
- `routes/contact.tsx` - contact page
- `routes/_404.tsx` - custom 404 page

### Styling and assets

- `assets/styles.css` contains the Tailwind import plus a small set of shared
  custom styles
- `static/company-logo.jpg` is the current business logo used in the header and
  landing page

## Editing the site

### Update company details

Edit `data/site.ts` if you need to change:

- the business address
- the phone number
- principal names or titles
- service descriptions
- presentation topics

### Replace the logo

1. Replace `static/company-logo.jpg` with the new image.
2. Keep the same filename if you do not want to update code references.
3. If you use a different filename, update the image paths in:
   - `components/SiteLayout.tsx`
   - `routes/index.tsx`
   - `components/PageSeo.tsx` if you also want the social preview image changed

### Change page copy or structure

If the content change is small, update `data/site.ts`.

If the layout itself should change, edit the relevant route file in `routes/`.
For example:

- homepage hero or section order -> `routes/index.tsx`
- contact page layout -> `routes/contact.tsx`
- services page structure -> `routes/services.tsx`

### Change colors or visual styling

Use:

- Tailwind utility classes in the route/component files for most layout work
- `assets/styles.css` for shared global styles such as the skip link or the hero
  background treatment

## Adding a new page

1. Create a new route file in `routes/`, for example `routes/new-page.tsx`
2. Reuse `PageSeo` and `PageHero` to keep the site consistent
3. Add the page to `navigation` in `data/site.ts` if it should appear in the top
   menu
4. Run `deno task check`

## Accessibility notes for future edits

This site was built to stay screen-reader and keyboard friendly. When editing:

- keep one clear `<h1>` per page
- preserve descriptive link text
- keep alt text meaningful when images are informative
- avoid introducing low-contrast text or button styles
- keep the skip link and focus-visible styles intact

## Expanding the site later

### Add more services or presentation topics

In most cases you only need to expand the arrays in `data/site.ts`.

Because the page routes map over those arrays, new entries will render
automatically without rebuilding the layout structure.

### Add case studies, resources, or an insights section

Recommended approach:

1. Create a `content/` directory for long-form source files
2. Add route files such as `routes/resources.tsx` or `routes/case-studies.tsx`
3. Keep reusable metadata in TypeScript files and reserve Markdown for longer
   documents

## Future blog plan

The current stack is compatible with a future blog. The cleanest path is:

1. Create `content/blog/`
2. Store each post as a Markdown file with front matter, for example:

   ```md
   ---
   title: Example post
   slug: example-post
   published: 2026-04-15
   summary: Short teaser text
   ---

   Post content goes here.
   ```

3. Add:
   - `routes/blog/index.tsx` for the blog listing
   - `routes/blog/[slug].tsx` for individual posts
4. Add a small content loader utility that reads Markdown files and parses front
   matter
5. Add `"Blog"` to the `navigation` array when the section is ready to publish

### Recommendation for the future blog implementation

Keep the first version simple:

- use Markdown files for authoring
- parse front matter on the server with a Deno-compatible library
- render HTML in Fresh routes

That approach fits the current stack well, keeps content easy to edit, and does
not force a CMS decision too early.

When the team is ready to add that feature, choose the Markdown/front-matter
parser at that time and approve any new package installation before adding it.

## Build and deployment flow

Typical workflow:

```sh
deno task check
deno task build
deno task start
```

For day-to-day editing, `deno task dev` is enough.

## Deploying to an external webserver

This project is not deployed as plain static HTML alone. After
`deno task build`, the production server entrypoint is the built file
`_fresh/server.js`, which is served with Deno.

### What to upload to the server

For a production deployment on another host, copy at least these items:

- `_fresh/`
- `static/`
- `deno.json`

Keeping the full project checkout on the server is also fine and is often the
simplest option.

### Start the production server

From the project root on the target host:

```sh
export SITE_URL=https://www.dunsworth-mann.com
deno task start
```

That task runs:

```sh
deno serve -A _fresh/server.js
```

By default, `deno serve` listens on port `8000`. To bind a different host or
port, start it directly instead of using the task:

```sh
SITE_URL=https://www.dunsworth-mann.com deno serve -A --hostname 127.0.0.1 --port 8000 _fresh/server.js
```

### Recommended production setup

Use a reverse proxy in front of the Deno process. A common layout is:

1. Build the site locally or on the server with `deno task build`
2. Run the Deno app on `127.0.0.1:8000`
3. Put Nginx or Apache in front of it for TLS, compression, and public traffic

### Example Nginx configuration

Point your public domain at Nginx, then proxy requests to the Deno process:

```nginx
server {
   listen 80;
   server_name www.dunsworth-mann.com dunsworth-mann.com;

   location / {
      proxy_pass http://127.0.0.1:8000;
      proxy_http_version 1.1;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
   }
}
```

If TLS is enabled, add your normal `listen 443 ssl` settings and certificate
paths in the same server block or in a separate HTTPS block.

### Keep the app running after logout

For a real deployment, run the Deno server under a process manager such as:

- `systemd`
- `supervisord`
- `pm2`

The important detail is that the managed command should start the built server,
not the dev server:

```sh
deno serve -A --hostname 127.0.0.1 --port 8000 _fresh/server.js
```

### Typical deployment sequence on a host

```sh
git pull
deno task check
deno task build
SITE_URL=https://www.dunsworth-mann.com deno serve -A --hostname 127.0.0.1 --port 8000 _fresh/server.js
```

In production, the last command should usually be launched by your process
manager rather than by an interactive shell.
