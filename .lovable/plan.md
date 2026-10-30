# Unpublish site and hand domain to client

## 1. Unpublish (you do this, one click)
I can't unpublish for you. In the editor: **Project Settings → Unpublish** (or Publish dialog → Unpublish). The live address and onyxbarberlounge.com will then stop showing this site.

Before you do this, **disconnect the domain**: Project Settings → Domains → the domain's ⋯ menu → Remove/Disconnect. Then the client's new site can use it.

## 2. Client PDF: "Pointing Your Domain to Your New Website"
I'll make a 1–2 page PDF in the same Onyx style as the earlier guides. It covers:
- **Find where the domain is registered**: look it up at lookup.icann.org, or search your email for "onyxbarberlounge.com" receipts (GoDaddy, Namecheap, Cloudflare, Lovable, etc.). If it was bought through Lovable, ask me to move it to you.
- **Get the records from the new host**: every host (Wix, Squarespace, Shopify, Vercel, Netlify, another Lovable project) shows the exact records to add when you connect a custom domain.
- **Log in to the registrar → DNS settings**.
- **Remove the old records**: A records for `@` and `www` pointing to `185.158.133.1`, and TXT records `_lovable` / `_lovable.www`.
- **Add the new host's records** exactly as shown (usually an A record for `@` and a CNAME for `www`).
- **Wait**: changes can take up to 72 hours; the new host then switches on https.
- Quick table of common hosts and where their domain settings live.
- Contact: c.shiers@live.com.

I'll check every page visually before sending it to you.
