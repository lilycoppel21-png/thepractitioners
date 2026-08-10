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
      "Almost every non-profit now uses AI. Only a tiny share say it has changed what they can actually do. The gap between those two groups has less to do with budgets or software than you might expect.",
    href: "https://thepractitioners.substack.com/p/adoption-was-the-easy-part",
    featured: true,
    original: true,
    slug: "adoption-was-the-easy-part",
    body: [
      "For most people, using AI looks much the same from one day to the next. A paragraph tidied, a document summarised, a first draft pulled together a little faster. It is genuinely useful, and for most of us, that is roughly where it stops.",
      "Across the non-profit sector, that pattern now has clear numbers behind it. A 2026 benchmark study from the fundraising platform Virtuous, drawn from 346 organisations, found that around 92% of non-profits use AI in some form, but only about 7% report a major improvement in what their organisation can actually do. Those that don't report the same thing: existing tasks completed faster, but nothing innovative arising. The report calls it the efficiency plateau.",
      "This is not unique to charities. A Bain survey of chief executives this year found that more than 80% are dissatisfied with what AI has delivered so far, largely because they have used it for productivity alone. Bain's estimate is that only 20 to 30% of the value comes from the tools; the rest comes from changing how the work is done. That the same gap appears in organisations with deep budgets and dedicated teams suggests it is a structural issue and common across sectors, rather than a problem unique to social impact.",
      "It is worth being honest about why most people stop where they do. Learning to use these tools for anything beyond the obvious is genuinely difficult, and it takes time that almost nobody has to spare. The technology has also moved extraordinarily fast: not long ago, the most that these tools could reliably do was roughly the same simple work people are still using them for now. Most workers have not so much fallen behind as found themselves chasing a target that keeps moving, while simultaneously doing the job they were hired to do.",
      "This pressure is particularly acute in the social sector. In one recent survey, 95% of non-profit leaders cited concern about staff burnout, and more than one in five non-profit workers live in households that struggle to afford basic necessities like housing and healthcare. When you are covering multiple roles and the work in front of you is urgent, spending scarce hours teaching yourself a fast-changing tool is hard to justify, however useful it might turn out to be. And there is often something else in the mix. For some, there is a fair wariness about being seen to hand work to a machine, and about what these tools mean for the job itself.",
      "The usual advice tends to miss all of this. It implies either that people cannot be bothered to learn, or that no tool is specific enough to their work. Neither is very convincing. People are trying to do their jobs as well as they can. The truth is that the knowledge that could genuinely help them is not waiting the moment they open a browser, it is still specialised. You have to know it exists and where to look, and finding it takes time and effort that people don't have.",
      "None of this means that the plateau is permanent, because some organisations have already crossed it. A useful question is what the 7% did differently, and the answer is not what most people would guess. According to the same report, what separated the organisations seeing major impact was not bigger budgets or better software. It was structural: simple shared guidance on how AI is used, workflows that more than one person follows, ownership that sits across a team rather than with a single AI enthusiast, and a clear way of measuring whether it is working. The organisations reporting major impact are, more or less, the ones that have built AI into how the team works, rather than leaving it to one individual's browser tabs. Interestingly, smaller organisations reported gains at a slightly higher rate than large ones, which suggests that headcount and budget are not the deciding factor but shared practice is.",
      "It is still worth remembering where the 7% figure comes from. The study was run by a company that sells AI fundraising software, and it measured impact largely in fundraising terms, such as prospect research and donor communication. So \"major impact\" here means a major impact on fundraising specifically, which is narrower than what impact can mean for most organisations. That does not make the gap any less real. The broader pattern, that organisations using AI collectively outpace those using it individually, holds across multiple reports.",
      "What that shared practice makes possible is not a charity run by machines. It is the steady clearing of rote work. The repetitive tasks are the ones that take the most time and leave the least room for anything creative, and they are the ones most worth handing over. There are, of course, real limits to respect. Some funders now reject grant applications substantially written by AI, so this is not about getting a machine to do the thinking. But there is a meaningful difference between asking AI to write a grant and asking it to turn a tangled internal process into a clear set of steps that someone can actually follow. Clear the rote layer, and what is freed up is the part of the work that only a person can do.",
      "So the real obstacle was never the technology, and it was never the people. It is the quiet assumption that this should already have happened, and that anything short of full transformation counts as failure. The 7% prove it is possible. The reason it is not yet widespread is not reluctance or fear; it is that the knowledge is still hard to find. Our goal is to build the platform that will turn that 7% into 100%.",
    ],
  },
  {
    section: "The other side",
    date: "2026-08-07",
    title: "AI's new millionaires want to disrupt philanthropy. They should fund what already exists",
    excerpt:
      "As SpaceX's IPO mints thousands of new millionaires, with Anthropic and OpenAI staff expected to follow, two nonprofit leaders push back on Silicon Valley's instinct to rebuild philanthropy from scratch, pointing to a US nonprofit sector that already moves $600 billion a year and has helped eradicate smallpox and lift a billion people out of poverty.",
    href: "https://fortune.com/2026/08/07/ai-wealth-philanthropy-nonprofits/",
  },
  {
    section: "Worth reading",
    date: "2026-08-03",
    title: "AI translators are getting more fluent — but communication is never just a matter of words",
    excerpt:
      "Writing in The Conversation, researchers warn that fluent AI speech translation can still miss hesitation, tone and ambiguity that matter in health, legal and social-service settings, and that errors fall hardest on speakers of underrepresented languages, exactly the population many public and humanitarian services rely on translation to reach.",
    href: "https://theconversation.com/ai-translators-are-getting-more-fluent-but-communication-is-never-just-a-matter-of-words-288739",
  },
  {
    section: "Field report",
    date: "2026-07-27",
    title: "What happens when AI chatbots handle a mental health crisis?",
    excerpt:
      "NPR's Consider This looks at what happens when people in psychological crisis turn to general-purpose AI chatbots instead of trained counselors or crisis lines, and asks what obligations AI companies and mental-health nonprofits now share for outcomes neither was originally built to handle.",
    href: "https://www.npr.org/2026/07/27/nx-s1-5906805/what-happens-when-ai-chatbots-handle-a-mental-health-crisis",
  },
];
