/*
  Site configuration — the one place to edit the basics.
  ------------------------------------------------------
  Change the values here and they update everywhere on the site (header, footer,
  buttons, page metadata). You don't need to touch the page markup for these.
*/

export const site = {
  // The publication name, shown as the wordmark in the header and in the browser tab.
  name: "The Practitioners",

  // One-line description used under the name and as the site's meta description.
  tagline: "How AI is actually being used in the social impact sector.",

  // 👉 Paste your real Substack URL here once. The Subscribe button and the Writing
  //    page both link to it. (This is a placeholder until you update it.)
  substackUrl: "https://thepractitioners.substack.com",

  // Navigation links shown in the header. Add a new entry here to add a nav item
  // (e.g. later: { label: "Jobs", href: "/jobs" }).
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Writing", href: "/writing" },
  ],
};
