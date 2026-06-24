/* ============================================================
   CONFIG — this is the ONLY file you need to edit per client.
   Swap the business info, images, menu items, reviews, and FAQ
   below, and the whole site updates across all pages.
   ============================================================ */

export const business = {
  name: "Sizzling Fire Restaurant and Bar",
  tagline: "Flavors that stay",
  overlineLeft: "Serving Khorsane Chowk",
  overlineRight: "Est. 2019",
  intro:
    "Sizzling Fire brings live-grill energy to Khorsane Chowk. Sizzling platters, slow-smoked specials, and a bar that keeps the evening going.",
  story:
    "What started as a single grill stand has grown into Dharan's go-to spot for evenings out. We cook over open flame, season the way our grandmothers did, and pour generously. Every table here has a story — pull up a chair and start yours.",
  storyExtended:
    "Our kitchen runs on three things: fire, patience, and good company. The grill never really goes cold — it's been lit every evening since we opened, and the char on every plate is proof of that. We source what we can locally, keep the menu honest, and let the smoke do most of the talking. Whether you're here for a quiet dinner or a long night with friends, the table is yours for as long as you want it.",
  phone: "9819357228",
  whatsappMessage: "Hi! I'd like to know more about Sizzling Fire Restaurant and Bar.",
  address: "M99V+43C, Khorsane Chowk, Dharan",
  mapEmbedUrl: "https://www.google.com/maps?q=Dharan&output=embed",
  hours: "12:00 PM – 10:30 PM, all week",
  hoursDetailed: [
    { day: "Monday – Thursday", time: "12:00 PM – 10:00 PM" },
    { day: "Friday – Saturday", time: "12:00 PM – 11:30 PM" },
    { day: "Sunday", time: "1:00 PM – 10:00 PM" },
  ],
};

export const hero = {
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
};

export const aboutImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop";

export const aboutImageSecondary =
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1200&auto=format&fit=crop";

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    alt: "Sizzling grilled platter",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    alt: "Restaurant bar with drinks",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=800&auto=format&fit=crop",
    alt: "Open flame grilling",
  },
  {
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop",
    alt: "Restaurant interior seating at night",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop",
    alt: "Plated dinner special",
  },
  {
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
    alt: "Cocktail on bar counter",
  },
];

export const highlights = [
  {
    name: "Fire-Grilled Platter",
    note: "Smoked overnight, finished over open flame",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "House Special Sizzler",
    note: "The dish we built the name on",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Bar Favorites",
    note: "Cocktails poured generously, all night",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=600&auto=format&fit=crop",
  },
];

export const rating = {
  score: "4.7",
  label: "Excellent",
  basedOn: "Based on 180+ reviews",
};

export const reviews = [
  {
    text: "The grill platter alone is worth the trip. Smoky, generous portions, and the staff actually remember regulars.",
    author: "Bipin K.",
    source: "Google",
  },
  {
    text: "Best evening spot in Khorsane Chowk right now. Great for groups, great for a quiet date too.",
    author: "Sangita R.",
    source: "Facebook",
  },
  {
    text: "Their bar program is underrated. Came for dinner, stayed for two more rounds.",
    author: "Anish T.",
    source: "Google",
  },
];

export const faq = [
  {
    q: "Do I need a reservation?",
    a: "Walk-ins are welcome, but for groups of 6 or more, messaging us ahead on WhatsApp helps us hold a table for you.",
  },
  {
    q: "Do you have vegetarian options?",
    a: "Yes — a full vegetarian selection is available alongside our grill menu. Just ask when you arrive.",
  },
  {
    q: "Is there parking nearby?",
    a: "Street parking is available right around Khorsane Chowk, with additional space just behind the building.",
  },
  {
    q: "Can you host private events?",
    a: "Yes, we've hosted birthdays and small celebrations before — message us on WhatsApp to talk through your date and group size.",
  },
];
