/*
  Front-page stories (placeholders for now).
  ------------------------------------------
  This is the list of issues shown on the home page. Edit the text freely.

  Each issue has:
    - section:  a short category label (shown small, in blue) e.g. "Field report"
    - date:     publish date as "YYYY-MM-DD" (used to show "12 June 2026")
    - title:    the headline
    - excerpt:  one-sentence standfirst / summary
    - featured: set to true on the ONE you want as the big lead story (top of page)
    - href:     (optional) link for that specific issue. If you leave it out, it links
                to your Substack (site.substackUrl). When you later pull posts in from
                Substack automatically, this same shape is what you'll fill in.

  TIP: newest first. The first item with featured:true becomes the lead story.
*/

export interface Issue {
  section: string;
  date: string; // YYYY-MM-DD
  title: string;
  excerpt: string;
  featured?: boolean;
  href?: string;
}

export const issues: Issue[] = [
  {
    featured: true,
    section: "The argument",
    date: "2026-07-07",
    title: "Nonprofits aren't failing at AI. They're being rational.",
    excerpt:
      "Everyone's citing the 92% adoption, 7% transformation gap as a failure of nerve. Read the source and a different story appears: it's a fundraising CRM vendor's report, and cautious, individual, un-restructured AI use is exactly what you'd expect from people carrying real constraints the benchmark ignores.",
    href: "https://REPLACE-WITH-YOUR-SUBSTACK-POST-URL",
  },
  {
    section: "In good company",
    date: "2026-07-07",
    title: "Someone else is reading the adoption data the way we are",
    excerpt:
      "Susan Mernit takes the Stanford HAI numbers apart and lands where we did: small nonprofits skipped AI governance not out of negligence but because the tools arrived faster than the frameworks, and nobody funded the staff time to build them. Worth reading alongside this week's lead.",
    href: "https://susanmernit.com/2026/04/2026-ai-index-report-small-nonprofit-leaders/",
  },
  {
    section: "The other side",
    date: "2026-07-07",
    title: "When the AI shows up whether you chose it or not",
    excerpt:
      "Access Now documents a U.S. nonprofit whose chatbot started producing harmful responses after a routine product update quietly switched on AI features nobody asked for. If this is the downside, the sector's caution starts looking less like timidity and more like sense.",
    href: "https://www.accessnow.org/ai-infiltrating-humanitarian-aid/",
  },
  {
    section: "What's working",
    date: "2026-07-07",
    title: "A teacher-support tool that scaled because it fit, not because it dazzled",
    excerpt:
      "The IRC's aprendIA went from 500 teachers to 4,700 in northeast Nigeria, heading for 22,000, and the lesson its team draws is deliberately unglamorous: it worked because it fit low bandwidth, local languages, and actual educators, not because the technology was clever.",
    href: "https://restofworld.org/2026/irc-signpost-humanitarian-ai-refugee-assistance/",
  },
  {
    section: "Have your say",
    date: "2026-07-07",
    title: "NTEN and Bridgespan want to hear how it actually is",
    excerpt:
      "There's an open, anonymous survey on the real state of nonprofit AI adoption and governance, feeding a free report this summer. If you want the sector's picture drawn from practitioners rather than vendors, this is five minutes well spent.",
    href: "https://www.surveymonkey.com/r/5277QR7",
  },
];
