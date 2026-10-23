# Kr4ftLabs Assets

## Source of truth

The supplied wordmark, symbol, and app icons in this folder are the authoritative brand artwork. Their web derivatives live in `public/brand/`; render them through `BrandMark`. Never ask an image model to redraw these assets.

Illustrations follow [DESIGN.md](../../DESIGN.md). They represent possible kinds of work, not announced products or screenshots. Keep the hero, typography, page layout, release language, and motion behavior intact when replacing artwork.

## Illustration inventory

Originals are in [illustrations/](illustrations/). Optimized production files are in [public/illustrations/](../../public/illustrations/). Each original PNG and WebP derivative is **1254 × 1254 px**, opaque RGB.

| Asset basename | Placement | WebP bytes |
| --- | --- | ---: |
| `everyday-utilities` | Everyday utilities | 57,440 |
| `productivity-organization` | Productivity and organization | 45,372 |
| `creative-work` | Creative work | 53,708 |
| `open-workshop` | Maker section backdrop | 69,108 |

Each basename maps to `src/assets/illustrations/<basename>.png` and `public/illustrations/<basename>.webp`. Preserve originals; never reference a generated image that exists only outside this repository.

## Generation and export

Generated on 2026-10-23 using Codex's built-in image generation tool, one call per image. The tool did not expose a model identifier, so no specific model version is asserted. Square high-resolution artwork was requested; the actual returned dimensions above are authoritative. The utilities original was used as the visual style reference for the other three assets.

WebP exports use Sharp, quality 85 and effort 6, with a maximum 1600 × 1600 bounding box and `withoutEnlargement: true`. There is no cropping or upscaling. The page uses Next.js Image, responsive `sizes`, native lazy loading and `object-fit: contain`. Aim for no more than approximately 300 KB per derivative; inspect sharp edges after compression.

## Accessibility descriptions

The four illustrations use `alt=""` within `aria-hidden="true"` containers because adjacent text supplies the meaning. Do not bake essential instructions, labels, product claims, or availability into images. Reference descriptions for any future standalone use:

- **everyday-utilities:** Three task slips pass through an orange mechanism and emerge as one checked result.
- **productivity-organization:** Loose task tiles connect through orange paths to an orderly planning structure.
- **creative-work:** A geometric sketch develops through drafting lines into a finished paper composition.
- **open-workshop:** Drafting tools and paper pieces frame a clear orange workspace behind the supplied brand symbol.

## Final generation prompts

These are the exact prompts used. For the last three, “Image 1” means the saved `everyday-utilities.png` original, supplied as a style reference.

### everyday-utilities

```text
Use case: illustration-story.
Asset type: a single high-resolution square editorial illustration for the Kr4ftLabs landing page, asset everyday-utilities.
Primary request: Show repeated everyday task slips passing through a compact precision mechanical tool and emerging as one clear finished result. Three slightly scattered warm-paper slips feed into a central angular orange sorting/press mechanism; one clean warm-paper result emerges, with one simple ink check shape. Clearly communicate reduced friction and fewer repeated steps.
Style/medium: sophisticated flat editorial illustration, orthographic drafting-table view, crisp geometric silhouettes, fine restrained technical construction linework, sharp corners, minimal hard-edged offset layers. Designed rather than childish; not a product screenshot or literal app UI.
Scene/backdrop: absolutely uniform solid #24231f charcoal background extending to every edge, with ample breathing room. Center the complete subject in the middle 76% of the square. No clipping.
Color palette: only #171714 ink, #24231f charcoal, #f2eee4 paper, #fffaf0 bright paper and #ff5a1f signal orange. Orange belongs mainly to the working mechanism. Warm-paper slips with a few short abstract line marks rather than writing.
Composition/framing: one coherent centered scene, strong graphic rhythm, readable at 320px. Flat front/top-down graphic perspective; balanced asymmetry, not isometric 3D.
Constraints: no text, letters, numbers, words, logos, watermark, interface chrome, photo elements, gradients, glow, soft shadows, textures or rounded SaaS cards. Generate one finished square artwork, not a contact sheet or multiple panels. Request approximately 1536x1536 or higher native resolution.
```

### productivity-organization

```text
Use case: illustration-story.
Asset type: one high-resolution square editorial illustration for Kr4ftLabs, asset productivity-organization.
Input images: Image 1 is the style reference only. Create a DIFFERENT subject, not a variation of the machine.
Primary request: Loose blank task tiles and small paper planning slips gather into an orderly connected planning structure. On the upper left, three separated warm-paper tiles; across the center and right, an intentional grid of five connected paper modules. A single vivid orange right-angle connector path links the loose pieces to the ordered structure. Small dark marks can suggest tasks but no writing. The visual should communicate giving moving parts a clearer shape.
Style/medium: match the reference's sophisticated flat technical editorial geometry, crisp silhouettes and delicate construction lines, but simplify surface detail. Orthographic top-down graphic drawing, not isometric 3D. Sharply squared paper and angular orange connectors, spacious visual rhythm.
Scene/backdrop: completely uniform #24231f charcoal to every edge. Square composition with generous outer margins; all objects fully visible and arranged centrally, easy to read at 320px.
Color palette: only #171714, #24231f, #f2eee4, #fffaf0, #ff5a1f. Paper tiles light, single orange signal path meaningful and clear.
Constraints: no text, letters, numbers, words, logos, watermark, app screenshot, interface chrome, photographs, gradients, glow or soft shadows. No realistic lighting or dimensional materials. One complete artwork, not a contact sheet. Request around 1536x1536 or higher native square resolution.
```

### creative-work

```text
Use case: illustration-story.
Asset type: one high-resolution square editorial illustration for Kr4ftLabs, asset creative-work.
Input images: Image 1 is a STYLE REFERENCE ONLY. Create a different subject, not the orange machine or paper workflow.
Primary request: An unfinished idea becomes tangible. Show a composition progressing diagonally from a sparse rough geometric sketch at upper left through precise thin construction lines in the center into one bold finished geometric print at lower right. The finished warm-paper sheet contains a charcoal angular shape, an orange rectangle and a purposeful circular orange cutout. Include a single simple drafting pencil near the sketch. Three clearly related stages of ONE creative idea, not an app interface.
Style/medium: match the reference's sophisticated flat technical editorial illustration, crisp warm-paper silhouettes, orange accents, delicate drafting lines and controlled hard-edged offsets. Orthographic top-down drawing, not isometric 3D. Keep lines clean and avoid texture or realistic shading.
Scene/backdrop: perfectly uniform #24231f charcoal to all four edges. Square centered artwork; complete subject inside generous margins; clear enough at 320px.
Color palette: only #171714, #24231f, #f2eee4, #fffaf0, #ff5a1f. Orange highlights the finished idea.
Constraints: no text, words, letters, numbers, logos, watermark, interface chrome, photographs, gradients, glow, soft shadows or decorative blur. One complete artwork, no contact sheet. Request around 1536x1536 or higher native square resolution.
```

### open-workshop

```text
Use case: illustration-story.
Asset type: one high-resolution square editorial background illustration for the maker section of Kr4ftLabs, asset open-workshop.
Input images: Image 1 is a STYLE REFERENCE ONLY for the flat technical drawing language and warm-paper/charcoal/orange palette.
Primary request: Draw a restrained overhead drafting workspace, with paper, a set square ruler, a pencil and small modular paper pieces arranged around the OUTER EDGES. This supports a real logo card that the website will place on top later.
CRITICAL COMPOSITION: The middle 52% width and middle 62% height must be completely empty uninterrupted orange background, no objects or lines at all there. Put one small warm-paper sketch corner and straightedge at upper left, a simple pencil and ruler near right edge, two warm-paper modular pieces at lower left and bottom. Keep all objects fully inside the square with outer margins. Do NOT draw a central board, central paper, logo, letter or placeholder.
Style/medium: sophisticated flat editorial illustration, top-down orthographic drawing, precise crisp silhouettes, fine technical lines, angular forms, subtle hard offsets only. No isometric or 3D render.
Scene/backdrop: completely solid uniform signal orange #ff5a1f to every edge; props in #171714, #24231f, #f2eee4, #fffaf0 only. No background grid in the central quiet space.
Constraints: no text, letters, words, numbers or ruler numerals, logos, watermark, people, interface chrome, photography, realistic material textures, gradients, glow, blurred shadows or decorative effects. One finished square artwork, not a contact sheet. Request around 1536x1536 or higher native square resolution.
```

