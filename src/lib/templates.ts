export const templates = [
  {
    id: "general",
    name: "General Asset",
    icon: "FileText",
    description: "Create a custom intellectual property asset with flexible metadata",
    color: "slate",
    category: "other",
    features: ["Flexible schema", "Custom validation", "Adaptive forms"],
  },
  {
    id: "audio",
    name: "Audio",
    icon: "Music",
    description: "Register audio files, music, sound effects, podcasts, and other audio content.",
    color: "blue",
    category: "media",
    features: ["Audio waveform analysis", "Genre detection", "Royalty tracking"],
  },
  {
    id: "art",
    name: "Art",
    icon: "Palette",
    description: "Register digital or physical artwork, illustrations, paintings, and other visual creations.",
    color: "purple",
    category: "media",
    features: ["Color palette extraction", "Style classification", "Provenance tracking"],
  },
  {
    id: "nft",
    name: "NFT",
    icon: "Hexagon",
    description: "Register non-fungible tokens and blockchain-based digital assets.",
    color: "teal",
    category: "blockchain",
    features: ["Multi-chain support", "Rarity scoring", "Market analytics"],
  },
  {
    id: "video",
    name: "Video",
    icon: "Video",
    description: "Register video content, films, animations, and other moving image media.",
    color: "red",
    category: "media",
    features: ["Video analysis", "Thumbnail generation", "Quality metrics"],
  },
  {
    id: "software",
    name: "Software",
    icon: "Code",
    description: "Register software applications, code, algorithms, and digital tools.",
    color: "violet",
    category: "tech",
    features: ["Code analysis", "Dependency tracking", "Version control"],
  },
  {
    id: "documents",
    name: "Documents",
    icon: "FileText",
    description: "Register written documents, contracts, agreements, and other text-based content.",
    color: "gray",
    category: "legal",
    features: ["Text extraction", "Version tracking", "Digital signatures"],
  },
  {
    id: "patents",
    name: "Patents",
    icon: "Award",
    description: "Register patents, inventions, and novel technological solutions.",
    color: "amber",
    category: "legal",
    features: ["Prior art search", "Classification assistance", "Filing support"],
  },
  {
    id: "posts",
    name: "Posts",
    icon: "MessageSquare",
    description: "Register social media posts, articles, and other short-form content.",
    color: "sky",
    category: "media",
    features: ["Engagement tracking", "Sentiment analysis", "Viral detection"],
  },
  {
    id: "publications",
    name: "Publications",
    icon: "BookOpen",
    description: "Register books, journals, magazines, and other published materials.",
    color: "indigo",
    category: "media",
    features: ["ISBN validation", "Citation generation", "Distribution tracking"],
  },
  {
    id: "rwa",
    name: "Real World Assets",
    icon: "Building",
    description: "Register real-world assets that have been tokenized or digitally represented.",
    color: "emerald",
    category: "blockchain",
    features: ["Asset valuation", "Ownership verification", "Transfer tracking"],
  },
  {
    id: "custom",
    name: "Custom",
    icon: "Settings",
    description: "Create a custom template for your unique intellectual property needs.",
    color: "slate",
    category: "other",
    features: ["Flexible schema", "Custom validation", "Adaptive forms"],
  },
]

export function getTemplateById(id: string) {
  return templates.find((template) => template.id === id) || templates[0]
}

export function getTemplatesByCategory(category: string) {
  return templates.filter((template) => template.category === category)
}
