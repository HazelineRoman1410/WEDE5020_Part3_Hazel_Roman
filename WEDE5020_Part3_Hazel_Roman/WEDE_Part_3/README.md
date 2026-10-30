# Mastercard Foundation Website — WEDE5020 Part 3

**Student:** Hazel Zintle Roman  
**Student number:** ST10438046  
**Module:** Web Development (Introduction) — WEDE5020  
**Assessment:** POE Part 3 — Enhancing Functionality and SEO  

## Project overview
This project extends the Mastercard Foundation informational website from Parts 1 and 2. Part 3 introduces JavaScript interactions, client-side form validation, SEO metadata, image viewing, programme filtering, location map embeds, and deployment preparation. The website is a student project and is not an official Mastercard Foundation website.

## Pages
- `index.html` — homepage
- `about.html` — organisation overview
- `services.html` — programme/service information and keyword filtering
- `enquiry.html` — volunteer/sponsor/programme enquiry form with client-side validation and response feedback
- `contact.html` — general contact form that validates fields and prepares an email using the visitor's email application; two map embeds
- `gallery.html` — gallery images can open in an accessible lightbox

## File structure
```text
WEDE_Part_3/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── gallery.html
├── css/                 # page styles and Part 3 additions
├── js/main.js           # interactions and validation
├── images/              # place project-owned/licensed images here if needed
├── evidence/            # add genuine screenshots before submission
├── robots.txt
├── sitemap.xml
└── README.md
```

## Part 3 implementation
### JavaScript and interaction
- Programme search filters matching content sections on the Services page.
- Enquiry form validates required fields, email and telephone formats where those input types are present, and displays a contextual acknowledgement. This is client-side demonstration behaviour; it does not submit information to a Foundation server.
- Contact form validates inputs and prepares a `mailto:` message for `canadainfo@mastercardfdn.org`. The visitor must review and send it in their own email application. `mailto:` is not a server-side or AJAX submission and depends on a configured mail application.
- Gallery images can be opened in a keyboard-accessible dialog/lightbox.
- Map embeds provide two location previews using Google Maps.
- Focus-visible styling and reduced-motion support improve accessibility.

### SEO and performance
- Page-specific title tags, meta descriptions, author/robots metadata and Open Graph title/description metadata.
- Semantic page headings, descriptive image alt text where available, internal navigation and mobile viewport metadata retained from the earlier site.
- `robots.txt` and `sitemap.xml` included. Replace the example site URL in `sitemap.xml` with the final published URL before deployment.
- Lazy loading is added to images. Use optimised, properly licensed image files and descriptive file names.
- Local SEO and backlinks are promotion activities and cannot be guaranteed by code alone. Share the deployed website through relevant official/social channels only where permitted.

## Part 2 feedback addressed
1. **Part 1 feedback: file/folder structure unchanged (4/10).** The Part 3 version uses a clearer structure with dedicated `css`, `js`, `images` and `evidence` folders and a consistently named `index.html`.
2. **GitHub descriptive commits (1/5).** Use the commit plan below and make separate commits for real development stages. Do not create fake historical commits; Git records the dates and changes.
3. **README responsiveness screenshots (2/5).** The `evidence/` folder is provided for real desktop, tablet and mobile screenshots. Add screenshots taken from your running site before submitting; do not claim screenshot evidence until it is added.

## Run locally
1. Extract this folder.
2. Open `index.html` in a modern browser, or use Visual Studio Code with a local static server such as Live Server.
3. Test navigation, the services search, both forms, gallery lightbox, maps and mobile layouts.
4. Open Developer Tools → Console and resolve JavaScript errors.
5. Test forms with blank fields, invalid email, invalid phone, and valid entries. The contact form opens a mail application; it does not send mail automatically.

## Responsive evidence checklist
Add genuine screenshots to `evidence/` and update the entries below with the exact filenames/device widths:
- [ ] **Figure 1 — Desktop homepage** (approximately 1366 × 768 or wider): `evidence/figure-01-desktop-home.png`
    <img width="1853" height="899" alt="image" src="https://github.com/user-attachments/assets/77cfd977-b763-41b9-a22f-3c65a73adc84" />
<img width="1777" height="979" alt="image" src="https://github.com/user-attachments/assets/f03168b8-b88c-4ab0-8381-52a60eab62b0" />
- [ ] **Figure 3 — Services search results**: `evidence/figure-04-services-search.png`
      <img width="1488" height="813" alt="image" src="https://github.com/user-attachments/assets/1060fec1-a754-458d-b143-9b36c3b3f69e" />

- [ ] **Figure 4 — Enquiry validation feedback**: `evidence/figure-05-enquiry-validation.png`
    <img width="1729" height="905" alt="image" src="https://github.com/user-attachments/assets/25e200fd-d3e1-4785-a708-1a8f1cdd4cbe" />
<img width="1482" height="639" alt="image" src="https://github.com/user-attachments/assets/ab6704c4-b9db-4a24-aee7-4c450d5b582d" />
<img width="810" height="208" alt="image" src="https://github.com/user-attachments/assets/1dd7896f-f9fe-47ad-8202-963b5c203e5b" />
- [ ] **Figure 5 — Contact validation/email preparation**: `evidence/figure-06-contact-form.png`
    <img width="1517" height="874" alt="image" src="https://github.com/user-attachments/assets/7386c763-3221-462f-bbd4-86ed2bf7665c" />
<img width="1082" height="764" alt="image" src="https://github.com/user-attachments/assets/02718839-c8d8-4659-bd15-272f89f55179" />
- [ ] **Figure 7 — Gallery lightbox**: `evidence/figure-07-gallery-lightbox.png`
    <img width="1696" height="905" alt="image" src="https://github.com/user-attachments/assets/5088b541-8058-4067-8284-73bc92a44d1a" />
    <img width="1600" height="789" alt="image" src="https://github.com/user-attachments/assets/e7e39387-2ed1-4644-a4bd-9f7cd177f0f5" />




## Suggested descriptive commit sequence
Make each commit after completing and checking the corresponding change:
1. `Part 3: organise pages, stylesheets and asset folders`
2. `Part 3: add page-specific SEO metadata and crawler files`
3. `Part 3: implement enquiry and contact form validation`
4. `Part 3: add services keyword filtering and gallery lightbox`
5. `Part 3: add location map embeds and accessibility refinements`
6. `Docs: document Part 3 features, test results and evidence`
7. `Docs: add desktop tablet and mobile demonstration screenshots`

## Test record
Fill this table in after testing the final version; do not mark a test passed unless you ran it.
| Test | Expected result | Result/date |
|---|---|---|
| All navigation links | Open the intended local page | Passed |
| Services search | Matching sections remain visible | Passed |
| Enquiry required fields | Errors shown and focus moves to first invalid field | Passed |
| Enquiry valid fields | Contextual acknowledgement shown | Passed |
| Contact valid fields | Email application opens with subject/body | Passed |
| Gallery image activation | Lightbox opens and closes by button/Escape | Passed |
| Desktop/tablet/mobile | No unintended horizontal overflow; readable layout | Passed |
| Console | No project JavaScript errors | Passed |

## Deployment (GitHub Pages)
1. Create a **new repository** named `WEDE_Part_3` (or your lecturer's required naming convention).
2. Upload/push the contents of the `WEDE_Part_3` folder to the repository root, not the enclosing ZIP folder.
3. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for the Pages build to finish and open the URL shown under Pages.
5. Replace `https://example.github.io/WEDE_Part_3/` in `sitemap.xml` with the actual published URL; commit and push. Recheck all pages and forms after deployment.

## Changelog
### Part 3 — 25 October 2026
- Reorganised the site into root HTML pages and dedicated CSS, JavaScript, image and evidence folders. Renamed the homepage to `index.html` for conventional hosting support.
- Removed injected design-editor credit scripts from the supplied Part 1 copy.
- Extracted existing page styling into external page-specific stylesheets and added a shared Part 3 stylesheet.
- Added page-specific descriptions, author/robots and Open Graph metadata.
- Added JavaScript client-side validation and visible feedback for enquiry and contact forms. Contact messages are prepared with `mailto:`; no backend or AJAX endpoint is configured.
- Added keyword filtering for service content, an accessible gallery lightbox, two map embeds, lazy loading and focus/reduced-motion refinements.
- Added `robots.txt`, `sitemap.xml`, test checklist and responsive screenshot evidence checklist.
- Part 2 feedback actions: document folder-structure improvements, a descriptive commit plan, and screenshot evidence requirements.

## References (Harvard style)
Google (n.d.) *Google Maps*. Available at: https://www.google.com/maps (Accessed: 25 October 2026).

Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 25 October 2026).

MDN Web Docs (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 25 October 2026).

MDN Web Docs (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 25 October 2026).

MDN Web Docs (n.d.) *Using the Fetch API* (consulted for general client-side web development context; no Fetch/AJAX endpoint is configured in this project). Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 25 October 2026).

The Independent Institute of Education (2026) *Web Development (Introduction) WEDE5020: POE Paper and Marking Rubric*. Internal module assessment document.

**AI disclosure:** If AI tools were used to plan, draft or troubleshoot any part of this project, follow the IIE's current AI disclosure requirements. Add your own accurate disclosure and screenshots of the relevant AI interaction as required by the module brief. Review, understand, test and personalise all generated work before submission.
