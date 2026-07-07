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
  slug?: string;  // URL slug for original articles, e.g. "adoption-was-the-easy-part"
  body?: string[]; // full article paragraphs, rendered on /writing/[slug]
}

export const issues: Issue[] = [
  {
    section: "The argument",
    date: "2026-07-07",
    title: "Adoption was the easy part",
    excerpt:
      "Almost every charity now uses AI. Only a tiny share say it has changed what they can actually do. The gap between those two groups has less to do with budgets or software than you might expect.",
    href: "https://REPLACE-WITH-YOUR-SUBSTACK-POST-URL",
    featured: true,
    original: true,
    slug: "adoption-was-the-easy-part",
    body: [
      "For most people, using AI looks much the same from one day to the next. A paragraph tidied, a document summarised, a first draft pulled together a little faster. It is genuinely useful, and for most of us, that is roughly where it stops.",
      "Across the nonprofit sector, that pattern now has numbers behind it. A 2026 benchmark from the fundraising platform Virtuous, drawn from 346 organisations, found that around 92% of nonprofits use AI in some form, but only about 7% report a major improvement in what their organisation can actually do. Most of the rest report the same thing: small, real efficiency gains, and little that changes the work itself. The report calls it the efficiency plateau.",
      "This is not unique to charities. A Bain survey of chief executives this year found that more than 80% are dissatisfied with what AI has delivered so far, largely because they have used it for productivity alone. Bain's own estimate is that only 20 to 30% of the value comes from the tools; the rest comes from changing how the work is done. That the same gap appears in organisations with deep budgets and dedicated teams suggests it is a structural problem, common across sectors, rather than a failing particular to social impact.",
      "It is worth being honest about why most people stop where they do. Learning to use these tools for anything beyond the obvious is genuinely difficult, and it takes time that almost nobody has spare. The technology has also moved extraordinarily fast: a year or two ago, the most that everyday tools could reliably do was roughly the simple work people are still using them for now. Most workers have not so much fallen behind as found themselves chasing a target that keeps moving, while still doing the job they were already hired to do.",
      "The pressure is particularly acute in the social sector. In one recent survey, 95% of nonprofit leaders cited concern about staff burnout, and more than one in five nonprofit workers live in households that struggle to afford basics like housing and healthcare. When you are covering several roles and the work in front of you is urgent, spending scarce hours teaching yourself a fast-moving tool is a hard thing to justify, however useful it might turn out to be. And there is often something quieter in the mix: a fair wariness about being seen to hand work to a machine, and about what these tools mean for the job itself.",
      "The usual advice tends to miss all of this. It implies either that people cannot be bothered to learn, or that there is nothing out there specific enough to their work. Neither is convincing. People are trying to do their jobs as well as they can. The harder truth is that the knowledge that would genuinely help them is not waiting the moment they open a browser. It is still specialised. You have to know it exists and where to look, and finding it costs the one thing they have least of.",
      "None of this means the plateau is permanent, because some organisations have already crossed it. The more useful question is what the 7% did differently, and the answer is not what most people would guess. According to the same report, what separated the organisations seeing major impact was not bigger budgets or better software. It was structural: simple shared guidance on how AI is used, workflows that more than one person follows, ownership that sits across a team rather than with a single enthusiast, and some real measurement of whether any of it is working. The organisations reporting major impact are, more or less, the ones that have built AI into how the team works, rather than leaving it to one person's browser tabs. Tellingly, smaller organisations reported gains at a slightly higher rate than large ones, which suggests headcount and budget are not the deciding factor. Shared practice is.",
      "It is worth remembering where the 7% figure comes from. The study was run by a company that sells AI fundraising software, and it measured impact largely in fundraising terms — things like prospect research and donor communication. So \"major impact\" here means a major impact on fundraising specifically, which is narrower than what impact means for most organisations. That does not make the gap any less real, and the broader pattern — that scattered individual use stalls while shared practice compounds — holds up well beyond this one report.",
      "What that shared practice makes possible is not a charity run by machines. It is the steady clearing of rote work. The repetitive, form-shaped tasks are the ones that eat the most time and leave the least room for anything creative, and they are the ones most worth handing over. There are real limits to respect. Some funders now reject grant applications substantially written by AI, so this is not about getting a machine to do the thinking. But there is a meaningful difference between asking AI to write a grant and asking it to turn a tangled internal process into a clear set of steps someone can actually follow. Clear the rote layer, and what is freed up is the part of the work that only a person can do.",
      "So the real obstacle was never the technology, and it was never the people. It is the quiet assumption that this should already have happened, and that anything short of full transformation counts as failure. The 7% prove it is possible. The reason it is not yet widespread is not reluctance or mystery; it is that the path is still hard to find. Showing that path, from the people who have actually walked it, is the point of what we are building. The goal is to turn that 7% into something much greater.",
    ],
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
