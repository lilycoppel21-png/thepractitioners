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
    section: "The interview",
    date: "2026-08-17",
    title: "What the next step looks like",
    excerpt:
      "In conversation with Matthias Scheffelmeier, co-founder of ChangemakerXchange, on the gap between using AI to work faster and using it to do something genuinely new — and why the social impact sector may only just be starting to find out which is which.",
    href: "https://thepractitioners.substack.com/p/REPLACE-WITH-YOUR-SUBSTACK-POST-URL",
    featured: true,
    original: true,
    slug: "what-the-next-step-looks-like",
    body: [
      "Ask organisations in the social impact sector what they use AI for and you could almost fill in the answers before they arrive: faster research, first drafts, documents refined. Useful, genuinely. Also roughly identical everywhere, and some distance from the transformation the technology keeps being sold on. The harder question, the one whose answer this publication exists to chase, is what the step beyond looks like, and who has actually taken it.",
      "Matthias Scheffelmeier has spent his career among the practitioners this publication is named for, including more than a decade at Ashoka, the organisation that helped popularise the concept of the social entrepreneur. ChangemakerXchange, which he co-founded in 2012, brings young social founders together and matches them with the funding, guidance and resources their ventures need, across some 140 countries today. When it comes to AI, he describes his team as sceptical pragmatists: they use it every day, but on their own terms.",
      "Q: What does AI actually do for you in your own work today?",
      "We realised pretty early that for certain use cases it clearly brings benefits to impact founders who are already stretched thin, and started experimenting with AI right around the time the first LLMs were launched. We use AI mostly to support (not replace) work we do: it helps us do research much quicker than before, draft documents we then take over to refine, think through strategy, run due diligence processes for partners, draft proposals, and match the needs of our changemakers with offers for support we have within our network.",
      "Q: Has it changed what you're able to do for the people you serve, or mainly saved time for your team?",
      "I think the best example is the Possibilists Support Finder, which we built to help changemakers navigate and find the best possible support and resources they need to scale their impact. You can try it yourself at thepossibilists.org/directory. It used to take us, and them, hours to research potential funders, accelerator programmes, stipends or free resources. Now all it takes is a few minutes of sharing with the bot exactly what you need, and it finds dozens of great offers and opportunities for you.",
      "Q: How would you describe your own approach?",
      "Generally speaking I'd say we're sceptical pragmatists when it comes to AI. We clearly see the environmental and ethical risks, and therefore support changemakers in mindfully using, navigating and shaping AI. We're also warning changemakers about becoming too dependent on certain models or tech companies, and encourage them to explore local, independent solutions at the same time.",
      "Q: Almost everyone in the sector now reports using AI, yet very few say it has truly changed what they can do. Does that match what you see?",
      "Within our own network we actually see the whole spectrum. Those who downright refuse to use AI, for ethical, environmental or other concerns. Those who use it in limited ways to support with repetitive tasks. All the way to those who have started to replace all key processes within their organisations and have built systems that nearly completely run their organisations. I think it's too early for a verdict, and my sense is people have actually still only just begun to experiment and think about their approach to AI.",
      "Q: And is there anything that worries you about how AI is landing?",
      "We see a risk that, as with many things, the people with the resources and time are able to use AI to progress quickly, whereas people and organisations who already have only scarce resources may fall behind. We started ChangemakerXchange.AI to address this gap, and make sure impact founders and changemakers have equal access to the knowledge, guidance and resources to mindfully and successfully navigate and shape AI.",
      "Q: You've been doing this since 2012. What keeps you in the work?",
      "We started ChangemakerXchange when we realised that a lot of young changemakers keep facing similar issues: feeling alone or lost, struggling financially, unsure how to grow their social ventures. We wanted to create a space and community where founders could come together, share experiences and support each other. Over time it grew to 1,700 members in 140 countries, and it has supported thousands of impact founders over the past 14 years. What keeps me in this is a deep passion for helping people thrive and scale their impact. There are so many great ideas out there to fix the world; we just need to provide them with better support.",
      "There is a key point in this interview worth drawing out. The everyday uses Scheffelmeier lists (research, drafting, refining documents) are the ones most organisations in the sector would list too, and they are where adoption usually stops. The Support Finder is what comes after: hours of funder research cut to a few minutes, for the founders with the fewest hours to spare.",
      "Tools that help an organisation work faster are now everywhere. Tools that change what it can offer are still rare. How evenly that happens, and who falls behind in the meantime, is the open question. Scheffelmeier thinks it is too early for a verdict, because most founders have only just begun to experiment. So has almost everyone else, which is what makes this moment so unfamiliar for the social impact sector: new technology often arrives there last, built for someone else and adapted long after the fact. We believe this time is different, and the next step is still anyone's to take.",
      "Matthias Scheffelmeier is co-founder and managing director of ChangemakerXchange. This interview was conducted in writing and has been edited for length and clarity.",
    ],
  },
  {
    section: "The argument",
    date: "2026-07-07",
    title: "Adoption was the easy part",
    excerpt:
      "Almost every non-profit now uses AI. Only a tiny share say it has changed what they can actually do. The gap between those two groups has less to do with budgets or software than you might expect.",
    href: "https://thepractitioners.substack.com/p/adoption-was-the-easy-part",
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
    section: "Follow the money",
    date: "2026-08-15",
    title: "AI is creating a new wave of philanthropists. The system they're walking into is broken",
    excerpt:
      "Fortune reports that a coming wave of AI-industry wealth is running into philanthropic infrastructure built around donor-advised funds, where more than $300 billion sits in accounts that pay out only around a quarter of their assets in a given year, with no legal requirement to give more.",
    href: "https://fortune.com/2026/08/15/ai-billionaires-philanthropy-broken/",
  },
  {
    section: "Policy watch",
    date: "2026-08-04",
    title: "World Bank urges emerging nations to embrace AI amid weak growth",
    excerpt:
      "Bloomberg covers the World Bank's new World Development Report, which finds low- and middle-income countries face far less job displacement from AI than wealthy ones and argues they should adopt cheap, localized tools for health, education and agriculture rather than compete on data centers and large models.",
    href: "https://www.bloomberg.com/news/articles/2026-08-04/world-bank-urges-emerging-nations-to-embrace-ai-amid-weak-growth",
  },
  {
    section: "Field report",
    date: "2026-08-07",
    title: "Education's AI 'gold rush' comes with risks for students",
    excerpt:
      "The Christian Science Monitor reports that US school districts are being courted by an AI-in-education market that barely existed before ChatGPT and is now projected to reach $18.5 billion within a decade, even as a growing body of research warns the tools can erode students' ability to think for themselves.",
    href: "https://www.csmonitor.com/USA/Education/2026/0807/ai-risks-schools-students",
  },
];
