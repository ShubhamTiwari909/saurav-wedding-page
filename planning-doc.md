# Wedding Invitation Website — Astro + Tailwind CSS

## 1. Project Goal

Build a premium, single-page Indian wedding invitation website inspired by the provided reference:

https://spiffy-sprite-eb204b.netlify.app/

The site should preserve the reference's simple storytelling structure while adding beautiful parallax effects, elegant yellow-and-white styling, and distinctive section navigation.

### Tech stack

- Astro
- TypeScript
- Tailwind CSS
- Native CSS animations and browser APIs
- Optional GSAP + ScrollTrigger for more advanced parallax effects

### Design direction

Create a warm, romantic Indian wedding aesthetic using:
- Ivory and off-white backgrounds.
- Soft butter-yellow and marigold accents.
- Antique-gold decorative lines.
- Elegant serif headings and understated sans-serif body text.
- Floral illustrations, ornamental arches, and delicate borders.
- Large photographic backgrounds and layered decorative elements.
- Smooth scrolling and subtle scroll-triggered animations.

The design should feel like a beautifully crafted wedding invitation, not a generic landing page.

---

## 2. Exact Page Structure

The page consists of seven primary sections.

| Section | Purpose | Visual treatment |
|---|---|---|
| 1. Hero | Introduce the couple and wedding date | Full-screen cinematic parallax |
| 2. Invitation details | Present the main invitation information | Elegant floating invitation card |
| 3. Sangeet Sandhya | First event details | Yellow-and-white editorial event section |
| 4. Wedding Rituals | Second event details | Layered floral or architectural composition |
| 5. The Wedding | Main wedding ceremony | Most visually prominent event section |
| 6. Reception | Final event details | Elegant evening-inspired composition |
| 7. Closing message | Personal message from the couple | Minimal, romantic closing scene |

All seven sections must belong to the same continuous scrolling page. Do not create separate routes for the individual events.

---

## 3. Section-by-Section Design

### Section 1 — Hero

**Goal:** Create a beautiful first impression.

Design:
- Full-screen background featuring an Indian wedding venue, mandap, or floral installation.
- Couple names displayed prominently in an elegant serif typeface.
- Wedding date displayed beneath the names.
- A short invitation line.
- Decorative marigold garlands or floral illustrations around the edges.
- A subtle scroll indicator at the bottom.

Suggested dummy content:

> Together with our families
>
> **Aarav & Ananya**
>
> Request the pleasure of your company
>
> 10–13 December 2027

Visual effects:
- Background moves slowly as the visitor scrolls.
- Decorative floral layers move at different speeds.
- Couple names fade or move gently as the hero leaves the viewport.
- A fine ornamental arch or gold frame provides visual structure.

Implementation requirements:
- Use a `100svh` hero on desktop, with sensible mobile adjustments.
- Use CSS transforms for simple parallax.
- Keep the main text readable over the background.
- Optimize the hero image because it is the page's most important visual asset.
- Do not introduce an excessively long loading animation.

### Section 2 — Wedding Invitation Details Card

**Goal:** Present the overall wedding invitation in a beautiful, easy-to-read format.

This section should visually contrast with the hero.

Design:
- Warm ivory or pale yellow background.
- A centered invitation card with a thin gold border.
- Slightly rounded or ornamental corners.
- Couple names, a short invitation message, and the overall wedding date.
- Optional decorative flowers overlapping the card edges.
- A subtle shadow or paper texture.

Suggested dummy content:

> Together with our families
>
> Aarav & Ananya
>
> Invite you to celebrate the beginning of their forever.
>
> 10–13 December 2027
>
> Gandhinagar & Ahmedabad

The card should feel like a physical wedding invitation placed over a beautifully textured surface.

Animation:
- Card fades in and moves upward slightly.
- Decorative elements appear with a subtle stagger.
- Keep the effect restrained and elegant.

### Section 3 — Sangeet Sandhya

**Goal:** Introduce the first event.

Content structure:

**Thursday, 10 December**

## Sangeet Sandhya

An evening of music, raas and garba.

**6:00 pm onwards**

**Jiviba Party Plot**

Koba, Gandhinagar

Design:
- Ivory background with a butter-yellow accent area.
- Event heading in large serif typography.
- Date in small uppercase or letter-spaced text.
- Large photograph or illustration of a festive Indian evening.
- Decorative garba-inspired patterns or floral line art.
- Fine gold ornamental divider between the date and event title.

Layout:
- Text on one side.
- Image on the other.
- A slight overlap between the image and a decorative background shape.

Animation:
- Image reveals as the visitor scrolls.
- Decorative elements move at a slower rate than the foreground.
- Heading and event details appear with a gentle fade.

Use dummy details in the initial implementation; the real event content must be configurable through `data.ts`.

### Section 4 — Wedding Rituals

**Goal:** Introduce the intimate family ceremonies.

Content structure:

**Friday, 11 December**

## Wedding Rituals

Traditional ceremonies at home, with family.

**1:00 pm onwards**

**At our home**

2/A Saraswatinagar Society, opposite K.R. Raval School, Ranip, Ahmedabad

Design:
- Soft ivory background.
- A more intimate and traditional visual composition than the Sangeet section.
- Botanical illustrations, a delicate doorway arch, or subtle Indian ornamental patterns.
- Elegant text hierarchy.
- A large supporting photograph on the opposite side of the previous section's image.

Animation:
- Image and text enter from opposite directions, with small movement distances.
- Decorative gold lines draw in as the section becomes visible.
- Use minimal parallax to avoid distracting from the address.

The address should wrap naturally on mobile and remain readable. If directions are available later, the address can link to Google Maps.

### Section 5 — The Wedding

**Goal:** Make the main wedding ceremony the emotional centerpiece of the page.

Content structure:

**Saturday, 12 December**

## The Wedding

With your blessings, we begin our forever.

**5:00 pm onwards**

**Rasleela Party Plot**

Nikol, Ahmedabad

Design:
- The strongest visual treatment among the four event sections.
- Full-width or oversized wedding photograph.
- Ivory typography panel overlapping the image.
- A delicate ornamental arch inspired by an Indian mandap.
- Antique-gold accents and subtle marigold decorations.
- Generous whitespace around the event title.

Animation:
- Background photograph has a gentle parallax effect.
- Main text appears after the photograph begins revealing.
- Decorative floral elements move independently.
- Use a restrained cinematic transition into the next section.

The Wedding section should feel special without changing the overall visual identity.

### Section 6 — Reception

**Goal:** Close the event schedule with a celebratory atmosphere.

Content structure:

**Sunday, 13 December**

## Reception

An evening to celebrate with the newlyweds.

**6:30 pm onwards**

**Madhuvan Party Plot**

Koba, Gandhinagar

Design:
- Cream and warm butter-yellow palette.
- A slightly more luminous, celebratory composition.
- Elegant venue photography or a floral evening backdrop.
- Fine gold lines and restrained decorative lighting effects.
- Serif typography and a carefully balanced image-text layout.

Animation:
- Image gently scales into view.
- Heading and event information reveal progressively.
- Decorative elements drift subtly.
- Transition into the final section using a soft background-color change or floral divider.

### Section 7 — Closing Message

**Goal:** End the invitation on a warm, personal note.

Content:

> Do come. These days will not be the same without you.
>
> With love,
>
> **Neel & Himaxi**

Design:
- Minimal ivory background.
- Couple names in large, elegant serif typography.
- Small ornamental divider or floral illustration.
- A subtle yellow gradient or paper texture.
- Optional couple portrait or initials.
- Generous whitespace.

Animation:
- Closing message fades into view.
- Couple names appear with a subtle upward transition.
- A small decorative emblem animates gently.

Avoid adding unrelated sections after this. The page should finish with the couple's message.

---

## 4. Distinctive Section Navigation

Create a unique navigation system inspired by Indian invitation ornamentation.

### Desktop navigation

Use a fixed vertical navigation rail on the right side of the viewport.

Navigation items:
- Home
- Invitation
- Sangeet
- Rituals
- Wedding
- Reception
- Closing

Visual treatment:
- A thin vertical gold line connecting small ornamental markers.
- Active marker changes from an outlined circle to a filled gold marker.
- Hovering over a marker reveals its section label.
- Navigation remains compact and unobtrusive.
- Use a subtle ivory background only if needed for contrast over photography.

Interaction:
- Clicking a marker smoothly scrolls to the corresponding section.
- Active state updates automatically as the visitor scrolls.
- Each marker uses a native anchor link for accessibility and graceful fallback.

### Mobile navigation

Use a compact fixed bottom navigation control or a small floating floral menu.

Behavior:
- Opens a compact list of section names.
- Highlights the active section.
- Closes after the user selects a section.
- Does not cover event details or form controls.
- Supports keyboard navigation and visible focus states.

Implementation:
- Use `IntersectionObserver` for active-section detection.
- Use native anchor links such as `#sangeet` and `#wedding`.
- Set `scroll-margin-top` where necessary.
- Respect reduced-motion preferences.

---

## 5. Parallax and Animation Requirements

The site should feel cinematic without becoming difficult to navigate.

### Hero parallax
- Slow-moving background image.
- Separate decorative foreground layer.
- Gentle movement of floral illustrations.
- Subtle fade-out of hero text during scrolling.

### Event-section parallax
- Background and foreground images move at different rates.
- Decorative SVGs move slightly as the visitor scrolls.
- Image and text reveal with a subtle stagger.
- Alternate the direction of image-text layouts between event sections.

### Section transitions
- Soft background-color transitions.
- Ornamental dividers between selected sections.
- Small fade and translate effects.
- No sudden zooms or excessive motion.

### Technical guidelines
- Use CSS transitions and keyframes for simple effects.
- Use `IntersectionObserver` for reveal animations.
- Use GSAP ScrollTrigger only for advanced effects requiring coordinated timelines or pinned scenes.
- Avoid multiple animation libraries that perform the same job.
- Reduce or disable parallax on small screens when necessary.
- Support `prefers-reduced-motion: reduce`.
- Ensure content is visible if JavaScript fails.

---

## 6. Centralized Content in `data.ts`

All section content must live in one editable data file.

Create:

`src/data.ts`

Use typed objects and arrays so that event content remains consistent and easy to maintain.

Example implementation:

```ts
export interface WeddingEvent {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  description: string;
  time: string;
  venue: string;
  address: string;
  image: string;
  mapsUrl?: string;
}

export const weddingData = {
  couple: {
    bride: "Ananya",
    groom: "Aarav",
    closingNames: "Neel & Himaxi",
  },

  hero: {
    eyebrow: "Together with our families",
    title: "Aarav & Ananya",
    message: "Request the pleasure of your company",
    date: "10–13 December 2027",
    backgroundImage: "/images/hero/wedding-hero.webp",
  },

  invitation: {
    heading: "A Celebration of Love",
    message:
      "Together with our families, we invite you to celebrate the beginning of our forever.",
    date: "10–13 December 2027",
    location: "Gandhinagar & Ahmedabad",
  },

  events: [
    {
      id: "sangeet",
      date: "2027-12-10",
      dateLabel: "Thursday, 10 December",
      title: "Sangeet Sandhya",
      description: "An evening of music, raas and garba.",
      time: "6:00 pm onwards",
      venue: "Jiviba Party Plot",
      address: "Koba, Gandhinagar",
      image: "/images/events/sangeet.webp",
      mapsUrl: "",
    },
    {
      id: "rituals",
      date: "2027-12-11",
      dateLabel: "Friday, 11 December",
      title: "Wedding Rituals",
      description: "Traditional ceremonies at home, with family.",
      time: "1:00 pm onwards",
      venue: "At our home",
      address:
        "2/A Saraswatinagar Society, opposite K.R. Raval School, Ranip, Ahmedabad",
      image: "/images/events/rituals.webp",
      mapsUrl: "",
    },
    {
      id: "wedding",
      date: "2027-12-12",
      dateLabel: "Saturday, 12 December",
      title: "The Wedding",
      description: "With your blessings, we begin our forever.",
      time: "5:00 pm onwards",
      venue: "Rasleela Party Plot",
      address: "Nikol, Ahmedabad",
      image: "/images/events/wedding.webp",
      mapsUrl: "",
    },
    {
      id: "reception",
      date: "2027-12-13",
      dateLabel: "Sunday, 13 December",
      title: "Reception",
      description: "An evening to celebrate with the newlyweds.",
      time: "6:30 pm onwards",
      venue: "Madhuvan Party Plot",
      address: "Koba, Gandhinagar",
      image: "/images/events/reception.webp",
      mapsUrl: "",
    },
  ] satisfies WeddingEvent[],

  closing: {
    message:
      "Do come. These days will not be the same without you.",
    signOff: "With love,",
    names: "Neel & Himaxi",
  },
};
```

**Important:** The sample intentionally contains placeholder couple details. The event names, dates, times, venues, and addresses are sample content for development. Replace the entire configuration with the final approved details before deployment.

### Data-management rules

- Do not hardcode event content inside individual section components.
- Render all four event sections by mapping over `weddingData.events`.
- Keep image paths in the configuration.
- Keep the navigation list in configuration or derive it from the event data.
- Keep styling and animation settings separate from content.
- Avoid duplicating the same date or venue in multiple components.
- Use the `id` property to generate section anchors and navigation links.
- Validate image paths and ensure all referenced assets exist.

---

## 7. Recommended Component Structure

```text
src/
├── components/
│   ├── HeroSection.astro
│   ├── InvitationCard.astro
│   ├── EventSection.astro
│   ├── ClosingSection.astro
│   ├── SectionNavigation.astro
│   ├── FloralDivider.astro
│   ├── OrnamentalFrame.astro
│   └── ScrollReveal.astro
├── data.ts
├── layouts/
│   └── MainLayout.astro
├── scripts/
│   ├── parallax.ts
│   ├── navigation.ts
│   └── reveal.ts
├── styles/
│   └── global.css
└── pages/
    └── index.astro
```

### Component responsibilities

**`HeroSection.astro`**
- Renders the couple names, invitation message, date, and hero background.
- Defines the parallax layers.

**`InvitationCard.astro`**
- Renders the main invitation details using the data configuration.

**`EventSection.astro`**
- Accepts a `WeddingEvent` object.
- Renders the date, title, description, time, venue, address, and image.
- Uses a layout variant based on the event index or an explicit visual variant.

**`ClosingSection.astro`**
- Renders the closing message and couple names.

**`SectionNavigation.astro`**
- Renders all navigation links.
- Tracks the currently visible section.
- Provides desktop and mobile presentations.

**`FloralDivider.astro`**
- Reusable decorative SVG divider.

**`ScrollReveal.astro`**
- Provides a lightweight reveal-on-scroll treatment without hiding content permanently when JavaScript is unavailable.

---

## 8. Layout and Section Rendering

In `src/pages/index.astro`, import the centralized data and render the sections in the required order.

Conceptually:

```astro
---
import { weddingData } from "../data";
import HeroSection from "../components/HeroSection.astro";
import InvitationCard from "../components/InvitationCard.astro";
import EventSection from "../components/EventSection.astro";
import ClosingSection from "../components/ClosingSection.astro";
import SectionNavigation from "../components/SectionNavigation.astro";
---

<SectionNavigation />

<main>
  <HeroSection data={weddingData.hero} />

  <InvitationCard data={weddingData.invitation} />

  {weddingData.events.map((event, index) => (
    <EventSection
      event={event}
      variant={index % 2 === 0 ? "image-left" : "image-right"}
    />
  ))}

  <ClosingSection data={weddingData.closing} />
</main>
```

Treat this as the intended rendering structure. Adjust component props and Astro syntax as needed during implementation.

---

## 9. Tailwind Styling Guidelines

Use Tailwind CSS for responsive layouts, typography, spacing, and decorative composition.

Suggested styling principles:
- `min-h-svh` for viewport-sized sections where appropriate.
- `max-w-7xl` for content containers.
- Fluid display typography using `clamp()`.
- `overflow-hidden` only where needed to contain decorative layers.
- `relative` and `absolute` for parallax compositions.
- `object-cover` and carefully selected `object-position` values for photography.
- Fine borders using the antique-gold color.
- Consistent vertical spacing across all sections.

Use `global.css` for:
- Font-face declarations.
- Paper texture.
- Custom parallax keyframes.
- Floral sway animations.
- Shared ornamental styles.
- Reduced-motion overrides.

Do not apply rounded cards to every event. Alternate between open editorial layouts, image-led compositions, and decorative panels to make the page feel custom-designed.

---

## 10. Image and Asset Strategy

Use a consistent set of high-quality images.

Recommended asset groups:
- Hero: a grand Indian wedding setting or floral mandap.
- Invitation: subtle paper texture or botanical background.
- Sangeet: festive Indian evening with warm lighting.
- Rituals: intimate traditional ceremony.
- Wedding: ceremonial mandap or wedding venue.
- Reception: elegant evening venue or floral installation.
- Closing: minimal floral or couple portrait.

Prefer real couple photographs when available. Until then, use licensed placeholder images or temporary generated assets.

Avoid mixing unrelated stock photography with significantly different lighting and color grading. Apply a consistent warm, soft treatment across the image collection.

Use optimized WebP or AVIF where appropriate, with responsive dimensions and descriptive alt text.

---

## 11. Responsive and Accessibility Requirements

### Desktop
- Full-screen hero.
- Floating vertical section navigation.
- Large editorial image-text layouts.
- Multi-layer parallax.

### Mobile
- Stacked event layouts.
- Compact floating navigation.
- Reduced parallax movement.
- Readable addresses and event details.
- No horizontal overflow.
- Comfortable tap targets.

### Accessibility
- Semantic section headings and navigation landmarks.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Adequate text contrast.
- Descriptive alt text.
- Reduced-motion support.
- No hover-only essential information.
- No JavaScript-only content visibility dependency.

---

## 12. Implementation Order

### Phase 1 — Foundation
1. Initialize Astro and Tailwind CSS.
2. Create `src/data.ts`.
3. Define the design tokens and global styles.
4. Build the page layout.

### Phase 2 — Visual sections
1. Build the hero.
2. Build the invitation details card.
3. Build the reusable event section.
4. Render all four events from `data.ts`.
5. Build the closing section.

### Phase 3 — Signature interactions
1. Add layered hero parallax.
2. Add event-image movement.
3. Add scroll reveals.
4. Implement the distinctive navigation.
5. Add mobile navigation behavior.

### Phase 4 — Polish
1. Refine typography and section spacing.
2. Add floral SVGs and gold ornaments.
3. Optimize image assets.
4. Verify responsive behavior.
5. Test keyboard and reduced-motion support.

### Phase 5 — Deployment
1. Run the Astro production build.
2. Resolve TypeScript and build errors.
3. Test the production preview.
4. Deploy to Netlify or Vercel.
5. Replace dummy content and confirm all details before sharing the invitation.

---

## 13. Definition of Done

- The website has exactly seven primary sections in the specified order.
- All event content comes from `src/data.ts`.
- Four event sections are rendered using one reusable component.
- The hero has a convincing parallax effect.
- The invitation card looks like a premium Indian wedding invitation.
- The four event sections have distinct but cohesive visual compositions.
- The section navigation works on desktop and mobile.
- All text remains readable over images and decorative backgrounds.
- The layout is responsive.
- Reduced-motion preferences are respected.
- The production build completes successfully.
- All dummy data can be replaced without modifying section components.

## Final Creative Direction

The most important aspect is to preserve the reference's **simple, sequential invitation experience**. The page should tell one continuous story: introduce the couple, present the invitation, guide guests through four celebration days, and end with a personal message.

Use parallax to add depth, the navigation to make the experience distinctive, and the yellow-and-white palette to unify the entire design. Avoid adding unrelated sections, dashboards, excessive cards, or unnecessary interactions that dilute the wedding invitation's emotional impact.
