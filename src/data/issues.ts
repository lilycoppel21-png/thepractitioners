/*
  Front-page stories.
  -------------------
  Each issue has:
    - section:  a short category label (shown small) e.g. "Field report"
    - date:     publish date as "YYYY-MM-DD"
    - title:    the headline
    - excerpt:  one-sentence standfirst / summary
    - featured: set to true on the ONE you want as the big lead story
    - original: set to true for pieces written by The Practitioners
    - href:     link for that specific issue (falls back to substackUrl)

  TIP: newest first. The first item with featured:true becomes the lead story.
*/

export interface Issue {
  section: string;
  date: string; // YYYY-MM-DD
  title: string;
  excerpt: string;
  featured?: boolean;
  original?: boolean;
  href?: string;
  body?: string[]; // full article paragraphs, for original pieces shown on the homepage
}

export const issues: Issue[] = [
  {
    section: "The argument",
    date: "2026-07-07",
    title: "Nonprofits use AI everywhere and it changes almost nothing",
    excerpt:
      "The report everyone's citing says 92% of nonprofits use AI and 7% see real gains. It comes from a fundraising software company, and once you read it that way, cautious and individual AI use stops looking like failure and starts looking like a reasonable response to constraints the benchmark leaves out.",
    href: "https://REPLACE-WITH-YOUR-SUBSTACK-POST-URL",
    featured: true,
    original: true,
  },
  {
    section: "In good company",
    date: "2026-07-07",
    title: "Susan Mernit reads the Stanford AI numbers and reaches our conclusion",
    excerpt:
      "She argues small nonprofits skipped AI governance not out of negligence but because the tools arrived faster than anyone funded the staff time to handle them. Worth reading next to this week's lead.",
    href: "https://susanmernit.com/2026/04/2026-ai-index-report-small-nonprofit-leaders/",
  },
  {
    section: "The other side",
    date: "2026-07-07",
    title: "A product update turned a nonprofit's chatbot harmful",
    excerpt:
      "Access Now documents a US nonprofit whose chatbot began giving misleading and harmful answers after a routine update quietly switched on AI features nobody chose. When this is the downside, sector caution reads as sense, not timidity.",
    href: "https://www.accessnow.org/ai-infiltrating-humanitarian-aid/",
  },
  {
    section: "What's working",
    date: "2026-07-07",
    title: "A teacher-support AI reaches 4,700 teachers in northeast Nigeria",
    excerpt:
      "The IRC's aprendIA grew from 500 teachers toward 22,000, and its team credits the fit over the technology: low bandwidth, local languages, and educators in the room, not a clever model.",
    href: "https://restofworld.org/2026/irc-signpost-humanitarian-ai-refugee-assistance/",
  },
  {
    section: "Have your say",
    date: "2026-07-07",
    title: "NTEN and Bridgespan survey nonprofits on the real state of AI",
    excerpt:
      "An open, anonymous survey feeding a free report this summer. If you want the sector's picture drawn from practitioners rather than vendors, it's five minutes well spent.",
    href: "https://www.surveymonkey.com/r/5277QR7",
  },
];
