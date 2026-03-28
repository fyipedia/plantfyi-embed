# plantfyi-embed

[![npm](https://img.shields.io/npm/v/plantfyi-embed)](https://www.npmjs.com/package/plantfyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/plantfyi-embed)

Embed **PlantFYI** widgets — plants, glossary terms, interactive tools, and inline elements — on any website. **10 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, organic), and live data from the [PlantFYI](https://plantfyi.com) database.

Every widget includes a "Powered by PlantFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.plantfyi.com](https://widget.plantfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-plantfyi="entity" data-slug="plants" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the PlantFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-plantfyi="entity" data-slug="..."></div>` | Entity detail card — species, bird, fish, plant, or dinosaur |
| `glossary` | `<div data-plantfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-plantfyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-plantfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-plantfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `iucn-badge` | `<div data-plantfyi="iucn-badge" data-slug="..."></div>` | IUCN conservation status badge with 9 status levels |
| `hardiness-zone` | `<div data-plantfyi="hardiness-zone" data-slug="..."></div>` | USDA hardiness zone indicator with color scale |
| `bloom-calendar` | `<div data-plantfyi="bloom-calendar" data-slug="..."></div>` | 12-month bloom season visualization |
| `iucn-inline` | `<div data-plantfyi="iucn-inline" data-slug="..."></div>` | Inline IUCN status colored pill |
| `taxonomy-inline` | `<div data-plantfyi="taxonomy-inline" data-slug="..."></div>` | Italic scientific binomial name |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-plantfyi` | entity, compare, glossary, guide, search, [tools] | required | Widget type |
| `data-slug` | e.g. "plants" | — | Entity slug from the PlantFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style` | modern, organic | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Plants..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-plantfyi="entity" data-slug="plants" data-theme="light"></div>

<!-- Dark -->
<div data-plantfyi="entity" data-slug="plants" data-theme="dark"></div>

<!-- Sepia -->
<div data-plantfyi="entity" data-slug="plants" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-plantfyi="entity" data-slug="plants" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-plantfyi="entity" data-slug="plants" data-style="modern"></div>

<!-- Organic — natural curves, earth-tone aesthetics, field-guide look -->
<div data-plantfyi="entity" data-slug="plants" data-style="organic"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<plantfyi-entity slug="plants" theme="light"></plantfyi-entity>
<plantfyi-compare slugs="plants,other-slug"></plantfyi-compare>
<plantfyi-search placeholder="Search Plants..."></plantfyi-search>

<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-plantfyi="entity" data-slug="plants" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-plantfyi="compare" data-slugs="plants,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-plantfyi="search" data-placeholder="Search Plants..."></div>
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-plantfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/plantfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install plantfyi-embed
```

```javascript
import 'plantfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Organic (natural curves, field-guide aesthetic)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: PlantFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on PlantFYI

## Learn More About Plants

Visit [plantfyi.com](https://plantfyi.com) — PlantFYI is a comprehensive plants reference with interactive tools, guides, and developer resources.

- **API docs**: [plantfyi.com/developers/](https://plantfyi.com/developers/)
- **Widget builder**: [widget.plantfyi.com](https://widget.plantfyi.com)
- **npm package**: [npmjs.com/package/plantfyi-embed](https://www.npmjs.com/package/plantfyi-embed)
- **GitHub**: [github.com/fyipedia/plantfyi-embed](https://github.com/fyipedia/plantfyi-embed)

## Nature FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Nature FYI covers species taxonomy, ornithology, marine biology, botany, and paleontology. Hub: [naturefyi.com](https://naturefyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| SpeciesFYI | [speciesfyi.com](https://speciesfyi.com) | Species taxonomy, biodiversity, IUCN conservation status | [npm](https://www.npmjs.com/package/speciesfyi-embed) |
| BirdFYI | [birdfyi.com](https://birdfyi.com) | 11,251 birds, biometrics, conservation, habitats | [npm](https://www.npmjs.com/package/birdfyi-embed) |
| FishFYI | [fishfyi.com](https://fishfyi.com) | 35,729 fish, game fishing, aquarium care, compatibility | [npm](https://www.npmjs.com/package/fishfyi-embed) |
| **PlantFYI** | [plantfyi.com](https://plantfyi.com) | 379,774 plants, hardiness zones, bloom seasons, gardening | **[npm](https://www.npmjs.com/package/plantfyi-embed)** |
| DinoFYI | [dinofyi.com](https://dinofyi.com) | 6,142 dinosaurs, geological periods, paleontology | [npm](https://www.npmjs.com/package/dinofyi-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
