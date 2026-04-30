export const EVENT = {
  name: "Horizons Crux",
  fullName: "Horizons Oceania 2026",
  city: "Sydney",
  country: "Australia",
  dates: "July 10–12, 2026",
  dateShort: "JUL 10–12",
  year: "2026",
  ageMin: 13,
  ageMax: 18,
  cost: "$0",
  hoursRequired: 35,
  email: "crux@horizons.hackclub.com",
  generalEmail: "horizons@hackclub.com",
  applyUrl: "https://horizons.hackclub.com",
  applyDirectUrl: "https://horizons.hackclub.com/crux",
  qualifyDeadline: "June 30, 2026",
  qualifyPeriod: "Now through June 30, 2026",
} as const;

export const QUALIFY_STEPS = [
  {
    number: "01",
    title: "Join Hack Club",
    description:
      "Visit [horizons.hackclub.com](https://horizons.hackclub.com) and create an account. It's free and open to all high school students.",
    href: "https://horizons.hackclub.com",
  },
  {
    number: "02",
    title: "Start Building",
    description:
      "Create projects and upload them to Horizons. Anything counts: web, games, hardware, art.",
    href: null,
  },
  {
    number: "03",
    title: "Track Your Hours",
    description:
      "Your building time is automatically tracked as you ship projects on Horizons.",
    href: null,
  },
  {
    number: "04",
    title: "Hit 35 Hours",
    description:
      "Once you accumulate 35 hours of building, you're eligible to attend Horizons Crux.",
    href: null,
  },
  {
    number: "05",
    title: "Attend",
    description:
      "Spend your hours for a ticket at horizons.hackclub.com before July 10, 2026. After that you are all set to attend!",
    href: "https://horizons.hackclub.com/crux",
  },
] as const;

export const BUILDING_COUNTS = [
  "Coding projects (web, mobile, games, and more)",
  "Design and creative work",
  "Hardware and physical computing",
  "Learning while building something real",
];

export const COVERED_ITEMS = [
  { icon: "Plane", label: "Flight Stipends" },
  { icon: "Bed", label: "Accommodation" },
  { icon: "UtensilsCrossed", label: "All Meals" },
  { icon: "Bus", label: "Local Transport" },
  { icon: "Package", label: "Event Swag" },
  { icon: "Trophy", label: "Awards" },
] as const;

export const SCHEDULE_DAYS = [
  {
    day: "Day 1",
    date: "Friday, Jul 10",
    events: [
      "Arrive before 1 pm — check in and settle",
      "Opening ceremony and team formation",
      "Hacking begins",
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, Jul 11",
    events: [
      "Full build day",
      "Mentorship sessions and workshops",
      "Midnight snack run",
    ],
  },
  {
    day: "Day 3",
    date: "Sunday, Jul 12",
    events: [
      "Final submissions by midday",
      "Project demos and judging",
      "Awards ceremony and departure",
    ],
  },
] as const;

export const PACK_LIST = [
  "Laptop and charger",
  "Sleeping bag",
  "Toiletries (toothbrush, toothpaste, etc.)",
  "Refillable water bottle",
  "Passport and travel documents",
  "Comfortable clothing — Sydney is winter in July, bring layers",
  "Any necessary medication",
];

export const PAST_EVENTS = [
  {
    name: "Campfire",
    tagline: "Sydney · February 2026",
    blurb:
      "Sydney's largest high school hackathon yet. 200+ students from across Sydney came together for 20 hours of building, workshops, and fun.",
    href: "https://campfire.hackclub.com/sydney",
  },
  {
    name: "Daydream",
    tagline: "Sydney · September 2025",
    blurb:
      "Daydream brought together the next generation of game devs for a weekend of wild ideas, late nights, and projects nobody expected to ship.",
    href: "https://daydream.hackclub.com/sydney",
  },
  {
    name: "Midnight",
    tagline: "Vienna · January 2026",
    blurb:
      "A murder-mystery hackathon in Vienna, Austria. Spend 50 hours building personal projects, then fly out to solve the mystery and ship something unforgettable.",
    href: "https://midnight.hackclub.com",
  },
  {
    name: "Undercity",
    tagline: "San Fransisco · July 2025",
    blurb:
      "A hardware hackathon for high school builders. Solder, prototype, and ship real physical projects under one roof with 150 other hardware hackers.",
    href: "https://undercity.hackclub.com",
  },
  {
    name: "Kiwihacks",
    tagline: "Auckland · May 2026",
    blurb:
      "KiwiHacks is New Zealand's biggest hackathon run by high schoolers, for high schoolers, bringing together 100+ student innovators together for a weekend of building, workshops, and mentorship.",
    href: "https://kiwihacks.org",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "How much does it cost?",
    a: "Nothing. Horizons Crux is completely free to attend. We cover flights, accommodation, all meals, and local transport.",
  },
  {
    q: "Who can attend?",
    a: "High school students aged 13–18. You don't need to be from Australia, international attendees are welcome and we provide flight stipends.",
  },
  {
    q: "How do I qualify?",
    a: "Spend 35 hours building projects on [horizons.hackclub.com](https://horizons.hackclub.com/) before June 30, 2026, then spend your hours to get a ticket to Horizons Crux. Your hours are tracked automatically.",
  },
  {
    q: "Where do I sleep?",
    a: "You'll sleep at the hackathon venue. Bring a sleeping bag!",
  },
  {
    q: "What should I pack?",
    a: "A laptop and charger, sleeping bag, toiletries, a refillable water bottle, your passport and travel documents, and comfortable layers since Sydney is cold in July.",
  },
  {
    q: "How do flight stipends work?",
    a: "We provide stipends to help cover your travel costs. You can earn them at a rate of $8.5USD/hr for every hour you spend coding after the initial 35 required to qualify.",
  },
  {
    q: "Do I need a visa to travel to Australia?",
    a: "It depends on your nationality. Check the Australian Department of Home Affairs website for requirements and apply early, processing can take time. Contact us if you need help.",
  },
  {
    q: "Can my parents come?",
    a: "Parents won't be able to stay at the venue and won't have travel costs reimbursed. They're welcome to check the venue under staff supervision if they'd like peace of mind.",
  },
  {
    q: "Do I need a team?",
    a: "Nope! You can apply solo. We'll have time during Day 1 for team formation if you'd like to collaborate.",
  },
  {
    q: "How do I contact you?",
    a: "Email crux@horizons.hackclub.com, we'll help with anything from visa questions to team formation.",
  },
] as const;

export const HACKCLUB = {
  name: "Hack Club",
  url: "https://hackclub.com",
  nonprofit: "501(c)(3) nonprofit",
  ein: "81-2908499",
  students: "50,000+",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Qualify", href: "#qualify" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
] as const;
