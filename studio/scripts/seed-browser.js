(async () => {
  const token = JSON.parse(
    localStorage.getItem("__studio_auth_token_p5hejukj")
  ).token
  const api = "https://p5hejukj.api.sanity.io/v2026-02-01"
  const headers = { Authorization: `Bearer ${token}` }

  async function groq(query, params = {}) {
    const url = new URL(`${api}/data/query/production`)
    url.searchParams.set("query", query)
    if (Object.keys(params).length) {
      url.searchParams.set("$params", JSON.stringify(params))
    }
    const res = await fetch(url, { headers })
    const body = await res.json()
    if (!res.ok) throw new Error(JSON.stringify(body))
    return body.result
  }

  async function mutate(mutations) {
    const res = await fetch(`${api}/data/mutate/production`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ mutations }),
    })
    const body = await res.json()
    if (!res.ok) throw new Error(JSON.stringify(body))
    return body
  }

  const article = {
    readTime: "5-minute read",
    publishedOn: "2026-09-16",
    intro:
      "Over the past year, USCIS has been expanding its use of artificial intelligence tools in how it processes and adjudicates immigration petitions, including in the employment-based categories. This isn't speculative. USCIS maintains a public inventory of its AI use cases through the Department of Homeland Security. What's less discussed is what this shift actually looks like from the petitioner's side, and immigration practitioners have started noticing a pattern worth understanding.",
    sections: [
      {
        heading: "What's Actually Happening",
        paragraphs: [
          "USCIS has been incorporating AI tools into parts of its adjudication workflow, joining a broader trend across federal agencies toward AI-assisted processing. The specifics of how these tools are used in any individual case aren't fully public, but immigration practitioners handling EB-1A and EB-2 NIW petitions have reported a noticeable pattern: Requests for Evidence that are longer than they used to be, but less internally coherent, sometimes referencing evidence inconsistently or raising points that don't fully track with the specific petition being reviewed.",
          "This doesn't mean every RFE now involves AI, or that AI-assisted review is inherently less accurate. It does mean that petitioners and their representatives are encountering RFEs with a different character than the more tightly focused requests common in the past, and it's worth understanding why before you're staring at one on a ninety-day deadline.",
        ],
      },
      {
        heading: "Why This Matters for How You Respond to an RFE",
        paragraphs: [
          "If you receive an RFE that feels unusually long, references points that seem tangential, or asks for clarification on something you thought your original filing already addressed clearly, that's increasingly common under current adjudication patterns, not necessarily a sign that your case is in unusually serious trouble. The right response isn't to panic at the length. It's to carefully identify each specific point being raised, even ones that seem redundant or oddly framed, and address each one directly and completely.",
          "A scattered or inconsistent RFE is, if anything, more important to respond to with tight organization and clarity than a narrowly focused one, precisely because it's easier to accidentally miss or under-address one of several points buried in a longer, less coherent request.",
        ],
      },
      {
        heading: "Why This Matters Before You File",
        paragraphs: [
          "If adjudication increasingly involves automated review at some stage, even as a supplementary tool alongside human officers, the practical takeaway is the same one that's mattered all along, just more so: clarity and internal consistency in your petition matter enormously. A petition where your cover letter, your evidence index, and your recommendation letters all tell a clearly aligned, consistent story is easier to evaluate accurately, whether the reviewer is a person, a tool, or some combination of both. A petition with internal inconsistencies, vague claims, or evidence that doesn't clearly map to the criterion it's meant to support is more likely to generate exactly the kind of scattered, over-broad RFE this trend describes.",
        ],
      },
      {
        heading: "What This Doesn't Change",
        paragraphs: [
          "The legal standards for EB-1A and EB-2 NIW haven't changed because of how USCIS processes petitions internally. AI-assisted review, to whatever extent it's being used, is a tool for managing volume and consistency, not a new legal test you need to satisfy. The fundamentals remain the same: specific, well-organized, internally consistent evidence that clearly satisfies the applicable legal standard.",
        ],
      },
      {
        heading: "The Practical Takeaway",
        paragraphs: [
          "Treat this less as a reason for alarm and more as reinforcement of something that was already true: build your petition to be unambiguous. Don't leave room for a reviewer, human or otherwise, to misread or misconnect your evidence. And if you do receive an unusually long or scattered RFE, resist the urge to write a similarly scattered response. Organize your reply point by point, address everything raised, and keep your response as tightly structured as the original petition should have been.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I find out whether AI was used to review my specific case?",
        answer:
          "Not directly. USCIS doesn't disclose which tools were involved in adjudicating an individual petition, though its general AI use case inventory is publicly available through DHS.",
      },
      {
        question:
          "Does the AI-assisted adjudication mean my case is less likely to be approved?",
        answer: "",
      },
      {
        question:
          "Should I change how I write my petition because of this trend?",
        answer: "",
      },
    ],
  }

  const posts = [
    {
      slug: "uscis-ai-adjudicate",
      title:
        "USCIS Is Using AI to Adjudicate Cases. Here's What That Means for Your RFE",
      image: "capitol.jpg",
      imageAlt: "The US Capitol dome with an American flag",
      featured: true,
    },
    {
      slug: "eb-2-niw-approval-rate",
      title:
        "Is EB-2 NIW Actually Recovering? What the Approval Rate Rebound Really Means",
      image: "notice.jpg",
      imageAlt: "A close-up of an immigration approval notice form",
      featured: true,
    },
    {
      slug: "eb-1a-or-eb-2-niw",
      title: "EB-1A or EB-2 NIW: How to Choose the Right Pathway for Your Profile",
      image: "passport.jpg",
      imageAlt: "A US passport on an American flag with cash",
      featured: true,
    },
    {
      slug: "eb-1a-discretionary-review",
      title: "EB-1A's Big Shift: From Discretionary to Non-Discretionary Review",
      image: "capitol.jpg",
      imageAlt: "The US Capitol dome with an American flag",
      featured: false,
    },
    {
      slug: "eb-1a-vs-eb-2-niw-approval-gap",
      title:
        "EB-1A vs. EB-2 NIW: The Approval Rate Gap Is Real, and It's Not Closing",
      image: "notice.jpg",
      imageAlt: "A close-up of an immigration approval notice form",
      featured: false,
    },
    {
      slug: "eb-2-niw-backlog",
      title:
        "The EB-2 NIW Backlog Nobody's Talking About, and What Exactly Is Going On",
      image: "passport.jpg",
      imageAlt: "A US passport on an American flag with cash",
      featured: false,
    },
    {
      slug: "common-petition-mistakes",
      title:
        "Common Mistakes That May Weaken Your EB-1A and EB-2 NIW Petitions",
      image: "capitol.jpg",
      imageAlt: "The US Capitol dome with an American flag",
      featured: false,
    },
    {
      slug: "strong-recommendation-letters",
      title:
        "What Actually Makes a Strong Recommendation Letter for Your Petition",
      image: "notice.jpg",
      imageAlt: "A close-up of an immigration approval notice form",
      featured: false,
    },
    {
      slug: "rfe-risks-updated-policies",
      title:
        "Understanding Possible RFE Risks Under The Newly Updated USCIS Policies",
      image: "passport.jpg",
      imageAlt: "A US passport on an American flag with cash",
      featured: false,
    },
  ]

  const key = () => Math.random().toString(36).slice(2, 14)
  const assets = {}
  const log = []

  for (const file of ["capitol.jpg", "notice.jpg", "passport.jpg"]) {
    const existing = await groq(
      `*[_type == "sanity.imageAsset" && originalFilename == "${file}"][0]._id`
    )
    if (existing) {
      assets[file] = existing
      log.push(`reuse ${file}`)
      continue
    }
    const image = await fetch(`http://localhost:3001/images/knowledge/${file}`)
    if (!image.ok) throw new Error(`image ${file} ${image.status}`)
    const blob = await image.blob()
    const upload = await fetch(
      `${api}/assets/images/production?filename=${file}`,
      { method: "POST", headers, body: blob }
    )
    const uploaded = await upload.json()
    if (!upload.ok) throw new Error(JSON.stringify(uploaded))
    assets[file] = uploaded.document._id
    log.push(`uploaded ${file}`)
  }

  for (const post of posts) {
    const existing = await groq(
      `*[_type == "post" && slug.current == "${post.slug}"][0]._id`
    )
    if (existing) {
      log.push(`skip ${post.slug}`)
      continue
    }
    await mutate([
      {
        create: {
          _type: "post",
          title: post.title,
          slug: { _type: "slug", current: post.slug },
          coverImage: {
            _type: "image",
            alt: post.imageAlt,
            asset: { _type: "reference", _ref: assets[post.image] },
          },
          publishedOn: article.publishedOn,
          readTime: article.readTime,
          intro: article.intro,
          featured: post.featured,
          sections: article.sections.map((section) => ({
            _type: "articleSection",
            _key: key(),
            heading: section.heading,
            paragraphs: section.paragraphs,
          })),
          faqs: article.faqs.map((faq) => ({
            _type: "faqItem",
            _key: key(),
            question: faq.question,
            answer: faq.answer,
          })),
        },
      },
    ])
    log.push(`created ${post.slug}`)
  }

  return log
})()
