# Clover SEO page plan

Saved 2026-10-20. Nothing in this plan has been built yet.

## Services dropdown

Header nav item "Services" becomes a dropdown. Clicking "Services" itself still goes to the current services page.

- **Mobile Bartending**: the current /services page. Keep its URL, only rename it in the menu.
- **Weddings**
- **Private Parties**: one page for birthdays, showers, graduations, engagements, holiday parties.
- **Cocktail Class**

Not in the dropdown:
- Corporate events stay as a section on the Mobile Bartending page. Almost no search volume.
- Mocktail / alcohol-free bar page gets linked from the other pages. Add to the dropdown later only if it becomes a big seller.
- Location pages are linked from the footer ("Areas I serve") and from the home and Mobile Bartending pages, not the main nav.

## Page order

1. **Lakes Region** location page (Laconia, Meredith, Gilford, Wolfeboro, Lake Winnipesaukee)
2. **Seacoast** location page (Portsmouth, Rye, Hampton, Exeter, Dover)
3. **Weddings**
4. **Private Parties**
5. **Cocktail Class** (blocked until Sydni describes the class)
6. **Mocktail / alcohol-free bar**
7. **How much alcohol to buy** guide or calculator
8. **Wedding signature cocktail ideas** (uses her 11 menu designs)
9. **Manchester and Nashua** location page
10. **Concord** location page
11. **North Conway / White Mountains** and **Keene / Monadnock**, only if Sydni travels there

Not building: a corporate events page, or one page per individual town.

Rules for every location page: one page per region, real local content (her photos, venues she has worked, setup logistics for that area). No copy-and-swap town pages.

## Open questions for Sydni

1. **Home town.** Sets which region comes first.
2. **Travel range.** North Conway? Keene? Southern Maine? Massachusetts?
3. **Past events by region.** Venues, towns, and photos from events in the Lakes Region and the Seacoast.
4. **Liquor license.** Does Clover hold an NH liquor license, and what is the legal setup for serving client-bought alcohol? No NH law or Liquor Commission page clearly says labor-only BYOB bartending is allowed without a license (see `nh_liquor_rules.md`). The Seacoast Science Center requires "a caterer or insured bartending service with a valid NH liquor license." Get written confirmation from the NH Liquor Commission, (603) 271-3521, before any page names venues or says "no license needed." Ask: is labor-only BYOB legal, can a hired vendor work under a client's one-day license, and which server trainings do they recognize.
5. **Insurance.** Liquor liability carrier, and can she send venues a certificate of insurance?
6. **Cocktail Class.** Format, group size, where it happens, length, price range, and whether guests bring the alcohol.
7. **Bars and packages copy.** The descriptions now live on the services page are placeholders written without her input. Most urgent: Cocktail Class, Bartenders Only, Mobile Bar, and Full Bar (what it includes).
8. **Gallery photo.** Is the bartender in gallery-37-2.jpg Sydni? Alt text currently says "a smiling bartender."
9. **Google Business Profile.** Is it set up, are service areas listed, and how many reviews? The map listing outranks every page for these searches.

## What the competitor research found

- No competitor has a genuinely local Lakes Region or Seacoast page. Twist's town pages are about 98% identical apart from the town name. Clover can win organic results with two well-built regional pages.
- Search volume for "bartending + town or region" is too small to measure. Target "mobile bartending Lakes Region NH" and "mobile bartending Seacoast NH" plus the statewide terms.
- The real local demand is venue searches, e.g. "portsmouth nh wedding venues" (170/mo in NH) and "lake winnipesaukee wedding venues" (50/mo in NH). A later guide such as BYOB-friendly venues could reach that and link to the region pages.
- Map listings: the Seacoast is beatable (leaders have 9 and 15 reviews). The Lakes Region is harder (three 5-star bars based there), so organic results are the realistic target.
- FAQ rich results stopped showing in Google on May 7, 2026. A visible FAQ is still useful for visitors.

## Copy rules from the research

- Never say "state-licensed bartender." NH has no individual bartender license.
- BYOB only works at homes, unlicensed barns, tents, and rentals. Licensed venues must sell their own alcohol.
- No cash bars or drink tickets under the BYOB model. Those count as sales and need a license.
- Target private homes, lake houses, rentals, and tented backyard events. The big Lakes Region venues found so far (Castle in the Clouds, Mill Falls) ban outside alcohol, and big Seacoast venues like Wentworth by the Sea do too. Do not name a venue on a page unless its policy allows outside bar service.
- Do not promise beach or public park bars. Alcohol is banned on Seacoast state beaches without a permit, and in Hampton, Rye, Portsmouth (including Prescott Park), and Laconia parks and Weirs Beach.

## Files in this folder

- `seacoast_local.md`: Seacoast venues, venue bar policies, beach alcohol rules, logistics, place names.
- `nh_liquor_rules.md`: NH law for BYOB bartending, one-day licenses, server training, liability insurance, beach and park alcohol bans, NH Liquor & Wine Outlet locations, ID rules.
- `lakes_region_local.md`: Lakes Region venues and their alcohol policies, seasonality, Bike Week, islands, public-land alcohol rules, landmarks, driving times, vendors.
- `competitors_and_structure.md`: teardown of competitor location pages, keyword targets, Google's doorway-page rules, recommended page structure, titles, URLs, schema, internal links, Business Profile and review strategy.
- `competitor_pages/`: saved copies of the competitor pages reviewed (Twist, BarMasters, Vintage Cocktail, Sunset Sips, Lake Libations, and others), plus `fetch_log.txt`.
- `dataforseo/`: raw DataForSEO results.
  - `volumes_us.json`: town + "mobile bartending" style searches, nationwide.
  - `volumes_geo.json`: head terms by NH, ME, MA, and four NH cities.
  - `volumes_topics.json`, `topic_volumes_nh.txt`: event types, mocktails, classes, planning topics (US and NH).
  - `volumes_regional.json`: Lakes Region / Seacoast phrasings.
  - `serps.json`, `nh_keyword_ideas_and_event_serps.txt`: Google results pages for NH queries.
  - `regional_serps.txt`: Google results, including map listings, searched from Lakes Region and Seacoast towns.
  - `ideas_nh.json`: Google's related keyword ideas for NH.
  - `competitor_ranked_keywords.txt`: what competitor pages rank for and how much traffic they get.
  - `dfs.py`, `run_vol.py`, `run_serp.py`: helpers to rerun calls. They read the DataForSEO login from the Claude Code MCP config. No credentials are stored here.
