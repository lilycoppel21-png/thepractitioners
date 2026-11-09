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
    date: "2026-11-02",
    title: "The Engineer Will See You Now",
    excerpt:
      "In conversation with Bo Ghirardelli of Sky's the Limit",
    href: "https://thepractitioners.substack.com/p/the-engineer-will-see-you-now",
    featured: true,
    original: true,
    slug: "the-engineer-will-see-you-now",
    body: [
      "Bo Ghirardelli is the co-founder and CEO of Sky's the Limit, a free mentorship community for early-stage, low-income entrepreneurs. He has spent fifteen years building it, and lately the organisation has been doing things with AI that are worth knowing about. Since launching CoFounder AI, its AI business adviser, members have been reaching business milestones at more than three times the rate they did before. I spoke to Bo about what made that possible.",
      "## Six weeks to six days",
      "Bo is nobody's idea of a technology sceptic. He grew up on science fiction, has been dreaming about advanced technology since he was five, and believes what AI can do for learning is \"literally a miracle\". Even so, through 2022 and 2023, during the birth of modern AI, the team held off on building anything with it. Each time the models improved, they asked themselves whether it was really worth building with yet. With a small engineering team, building early could have meant burning scarce resources on a technology that was changing every day. So instead, everyone experimented on their own and brought their insights back to the team.",
      "The team finally committed to building in 2025, starting with their internal processes. Bo says they \"completely stopped everything\" and redesigned how their engineers worked, with entirely new workflows and tools, before a single member-facing feature was written. He estimates that the amount of time to complete the same work has gone from six weeks to six days. None of it is accidental: STL treats experimentation as a core value, and the team runs designated weeks where staff must use AI in their own roles and then debrief together on what worked. By Bo's account, the whole team is now enthusiastic about it, at a time when many organisations rolling out AI internally have met pushback from their staff.",
      "If you run a team of any kind, this is the idea that should jump the queue, and the best part is that it needs no additional budget. Most organisations keep their teams siloed, each department holding its own meetings, but STL deliberately mixes them. A colleague brings a problem they have struggled with for long enough to know it inside out, and explains exactly what a fix would need to do. An engineer, who knows what AI can make possible, builds them a tailored solution on the spot. Nobody has to be persuaded that AI matters in the abstract after watching it remove the most tedious part of their own week.",
      "At STL, AI use sits \"somewhere in between strongly encouraged and required\". Changing how you work every day has a definite switching cost, which is why so many people put it off. In Bo's experience, a clear expectation from leadership can relieve \"some of the mental load\" of deciding alone how much and which parts of your routine to rethink. The point of the push is for each person to spend their time on \"that which only they can do\", while AI takes the rote work out of the day.",
      "## CoFounder AI",
      "An early-stage entrepreneur faces a large set of problems all at once. CoFounder AI is an AI business adviser made for working through each one of them, personalised for every member. Bo's observation about first-time founders is that a raw, generic chatbot does not help them very much, because they don't know \"what the questions are to ask\", and useful answers are usually based on memory and the context of their specific situation. CoFounder AI is that missing layer. It remembers everything as the entrepreneur and their venture grow: the pitch, the goals, the obstacles already worked through. Each new piece of advice builds on all of it, growing more specific as the business takes shape. More than anything, it is a guide, walking a founder through the whole journey in order, from creating a pitch to finding the first customers.",
      "Every nonprofit exists to achieve a certain mission, and it has a fixed set of inputs to achieve it with: its team, its money, its time and its technology. For Bo, the point is to maximise those inputs, and AI is now one of the biggest levers available for doing it. He thinks the sector carries \"too much hesitancy\" about AI, because the cost of not adopting a useful tool is invisible: opportunity cost is a what-if, and humans tend to make poor estimations of what they might have gained. Hesitancy about powerful new tools is also nothing new. Well over two thousand years ago, Socrates warned of an invention that would erode people's memory and hand them the appearance of wisdom without the reality. That alarming new technology was writing. On the long list of tools humanity has been warned would degrade its thinking, AI is simply the newest entry.",
      "## The meat proxy",
      "For all his enthusiasm, there is one use of AI Bo warns against. He calls it the \"meat proxy\": a person who takes AI output and passes it along to colleagues without necessarily reading it properly or adding any thought of their own. Done once it is easy to miss. Bo's warning is about what happens when it becomes a habit: \"if they do it enough times, you stop reading what they sent, and then your team breaks down\". Multiply that across an organisation and you get his diagnosis: \"it's not a lack of information, you're drowning in bad information.\" STL's guardrails are clear and practical: a human stays in the loop on any major decision an AI is involved in, and their internal AI policy is rewritten in step with technology advancements.",
      "Before Sky's the Limit, Bo taught world history to sixth graders through Teach for America, with 36 children in one class at varying levels of literacy and background knowledge. The dream for every teacher, he says, was to meet each student exactly where they were, which no one person standing in front of so many can do. CoFounder AI returns to that dream, a coach that meets each entrepreneur exactly where they are and knows their ambitions, their strengths and their blind spots. He told me he \"would have killed for this\" when he was starting his own organisation fifteen years ago. His members now get that and more on day one.",
    ],
  },
  {
    section: "The interview",
    date: "2026-08-25",
    title: "Fighting computerized dictators with typewriters",
    excerpt:
      "In conversation with Alex Gladstein of The Human Rights Foundation",
    href: "https://thepractitioners.substack.com/p/fighting-computerized-dictators-with",
    original: true,
    slug: "fighting-computerized-dictators-with-typewriters",
    body: [
      "One of the most common reasons nonprofits give for holding back on AI adoption is that their data is too sensitive. Beneficiary records, donor lists, casework. It is a reasonable concern, and for some organisations it is their biggest. The Human Rights Foundation supports dissidents and activists working against authoritarian governments, with funding, training and campaigning that depend on keeping people's identities safe. A data leak there can endanger the very people the organisation exists to protect.",
      "You might expect an organisation like that to be the most cautious adopter in the sector. Instead, HRF has gone all in. It runs a program dedicated to getting AI into activists' hands, builds its own tools, and hosts hackathons for people using them in the field. I spoke to Alex Gladstein, HRF's Chief Strategy Officer, about why. As he sees it, organisations like his face a choice between adopting these tools carefully and being outpaced by governments that will use them without hesitation. Refusing them, in his words, is \"fighting computerized dictators with typewriters.\"",
      "## Why they don't use the mainstream products",
      "Going all in does not mean using AI the way everyone else does. Gladstein draws a hard line at what he calls corporate AI: the products most of us know, like ChatGPT, Claude and Gemini, which run on the servers of large companies. In his view, human rights organisations cannot responsibly hand their information to those companies, because they share data with governments, respond to censorship requests, and can cut users off. An activist group has to weigh those risks in a way that, as he put it, \"some random software company\" does not.",
      "He argues that corporate AI is a bad deal for everyone, whatever your line of work, and some would say that position is too strong. But what it did for HRF was to force a discipline few organisations ever go through. With the default products off the table, they had to work out what was still on it: what each tool does, where the data goes, what could leak and how. That exercise is worth doing with any tool an organisation ends up choosing, because it turns adoption from a default into a decision. Gladstein frames it as a question every organisation should be asking itself: how do you bend this technology so that it matches your virtues and values?",
      "## What they use instead",
      "HRF's answer starts with open-source AI: models that anyone can inspect and run on their own computers or servers. For everyday research Gladstein suggests Maple, an encrypted chatbot built on open models that cannot see what you type into it. As he put it: \"Maple can't spy on you. It's open. It's wonderful.\" I asked about the trade-off here, whether the tools that protect your data fall short of the ones that don't on quality or cost. Not any more, in his view. For the work most small teams actually do, the private options are now roughly level with the big-name products.",
      "The bigger project is the personal AI agent. The typical activist, as Gladstein describes them, is \"a Swiss army knife\": running a small organisation, often on the move, doing ten different jobs at once. A chatbot helps that person with one task at a time. An agent remembers, grows with its user, and takes on whole tasks. HRF has built a private one and is putting it in the hands of leading activists first, because, as he told me, \"the agent is the Rubicon moment.\"",
      "He gave a concrete example of what crossing it looks like: \"It normally takes months of coordination for a nonprofit to create an annual report. If you integrate AI properly, this now takes a couple of hours.\" The operative word is integrate. The hours come back when the AI holds the organisation's knowledge, which is why HRF is building what he calls organisational brains: shared AI memory, rolled out one team at a time, with the aim of covering most of the organisation by the end of the year.",
      "## What this means if you are not HRF",
      "Most readers of this publication do not work in human rights, but three things from the conversation apply broadly.",
      "The first is a question worth asking before adopting any new tool: should this information live on a cloud we don't control? Gladstein often hears organisations reason that they already trust Google with everything, so one more service makes little difference. He thinks that logic runs backwards. Each new place your data sits is a new place it can leak from, so the exposure you have already accepted is even more of a reason to be more careful with the next decision. None of this means abandoning the tools that keep your organisation running. It means having a clear rule about where your most sensitive information is allowed to go, and applying that rule to AI products the same way you would apply it to anything else, keeping in mind that whatever you type into a chatbot is information you have handed over, just as much as a file uploaded to a drive.",
      "The second is a habit. He told me: \"It's impossible to have discussions about AI if you don't use it every day.\" The judgement these decisions require only develops through use, so his advice is to start with something safe, keep sensitive data out while you learn, and let the understanding build from there.",
      "He was most emphatic on the third: \"Most people in the nonprofit space aren't using it at all. That's the main mistake.\" Despite his caution about the big platforms, he is still pragmatic about getting started. Experimenting with a mainstream product, without inputting sensitive information, still beats waiting. The tools that respect privacy exist now, the gap between organisations that use them and those that don't is widening, and privacy, however legitimate the concern, does not have to mean inaction.",
      "A great deal rests on nonprofits that have little to run on: the trust of donors, the data of vulnerable people, services whole communities rely on. That is exactly what these tools can protect and extend when organisations choose them deliberately. HRF's answer to Gladstein's question, how to bend the technology to your values, took its own engineers and a dedicated program. Your organisation's answer might start with an encrypted chatbot and a clear rule about what goes into it. Both are answers, and the second can begin today.",
    ],
  },
  {
    section: "The interview",
    date: "2026-08-17",
    title: "What the next step looks like",
    excerpt:
      "In conversation with Matthias Scheffelmeier of ChangemakerXchange",
    href: "https://thepractitioners.substack.com/p/what-the-next-step-looks-like",
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
      "---",
      "There is a key point in this interview worth drawing out. The everyday uses Scheffelmeier lists (research, drafting, refining documents) are the ones most organisations in the sector would list too, and they are where adoption usually stops. The Support Finder is what comes after: hours of funder research cut to a few minutes, for the founders with the fewest hours to spare.",
      "Tools that help an organisation work faster are now everywhere. Tools that change what it can offer are still rare. How evenly that happens, and who falls behind in the meantime, is the open question. Scheffelmeier thinks it is too early for a verdict, because most founders have only just begun to experiment. So has almost everyone else, which is what makes this moment so unfamiliar for the social impact sector: new technology often arrives there last, built for someone else and adapted long after the fact. We believe this time is different, and the next step is still anyone's to take.",
      "Matthias Scheffelmeier is the co-founder and managing director of ChangemakerXchange. This interview was conducted in writing and has been edited for length and clarity.",
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
    date: "2026-11-06",
    title: "A foundation puts AI agents in charge of drafting its grant recommendations",
    excerpt:
      "The Chronicle of Philanthropy profiles the Circle Foundation, where AI agents draft, challenge and analyze grant decisions inside a closed system while two human staff retain final say. Funded by shares set aside in Circle Internet Group's 2025 IPO, it's an early test of what its leaders call being 'AI-native' without being 'AI-autonomous.'",
    href: "https://www.philanthropy.com/news/ai-recommends-humans-decide-circle-foundations-bet-on-agentic-philanthropy/",
  },
  {
    section: "Policy watch",
    date: "2026-10-29",
    title: "A nonprofit AI-safety group says pre-launch testing isn't enough for AI agents",
    excerpt:
      "Writing in MIT Technology Review, Madhulika Srikumar of the nonprofit Partnership on AI argues that as agents spread into finance, government and medicine, regulators and developers need continuous, real-time monitoring of what deployed agents actually do, rather than evaluation that stops once they ship.",
    href: "https://www.technologyreview.com/2026/10/29/1147824/monitor-ai-agents-actions-real-time/",
  },
  {
    section: "In good company",
    date: "2026-10-26",
    title: "Anthropic widens its nonprofit program the same week it files to go public",
    excerpt:
      "The Associated Press reports that Anthropic has expanded free and discounted Claude access for roughly 25,000 nonprofits, most with fewer than ten staff, and broadened its Claude Corps fellowship, even as it pursues a stock listing expected to value the company near $1 trillion. Critics quoted in the piece see the nonprofit pledges partly as a goodwill play ahead of the IPO.",
    href: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/26/anthropic-expands-ai-support-for-nonprofits-as-it-files-to-sell-shares-to-the-public",
  },
];
