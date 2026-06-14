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
    section: "Field report",
    date: "2026-06-12",
    title:
      "A Nairobi health network triaged 40,000 patients with an AI chatbot — here's what broke",
    excerpt:
      "A six-month account from the clinic floor: where the tool genuinely helped, where it failed, and what the nurses actually thought.",
  },
  {
    section: "On the record",
    date: "2026-06-05",
    title: "A food bank automated its intake forms. Demand didn't fall — the paperwork did.",
    excerpt:
      "What changed, what didn't, and the hours it gave back to a team of four.",
  },
  {
    section: "Tools",
    date: "2026-05-29",
    title: "Five transcription tools, tested on accented English by a refugee legal-aid clinic",
    excerpt: "An honest, plain-language comparison — accuracy, cost, and privacy.",
  },
  {
    section: "Policy",
    date: "2026-05-22",
    title: "What the EU AI Act actually means for a twelve-person charity",
    excerpt: "The obligations that apply to you, and the ones that don't, without the jargon.",
  },
  {
    section: "Analysis",
    date: "2026-05-15",
    title: "The quiet cost of 'free' AI pilots for small nonprofits",
    excerpt: "Who pays when the pilot ends, and how to read the offer before you sign.",
  },
  {
    section: "What to steal",
    date: "2026-05-08",
    title: "The prompt a disaster-relief team uses to draft situation reports in minutes",
    excerpt: "Copy it, adapt it, and the reasoning behind why it works.",
  },
];
