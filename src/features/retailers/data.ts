export const activeRetailEvents = [
  {
    title: "Footfest 2026",
    date: { cs: "17.–19. července 2026", en: "17–19 July 2026" },
    place: { cs: "Želeč u Tábora", en: "Želeč near Tábor" },
    image: "https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg",
    href: "https://tickets.nfctron.com/event/danekr-sro/footfest-2026/cart",
  },
  {
    title: "Štěrkovna Open Music 2026",
    date: { cs: "23.–26. července 2026", en: "23–26 July 2026" },
    place: { cs: "Hlučínské jezero", en: "Lake Hlučín" },
    image: "https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg",
    href: "https://tickets.nfctron.com/event/new-wind-production/sterkovna-open-music-2026",
  },
  {
    title: "LET IT ROLL 2026",
    date: { cs: "30. července–1. srpna 2026", en: "30 July–1 August 2026" },
    place: { cs: "Jezero Most", en: "Lake Most" },
    image: "https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg",
    href: "https://tickets.letitroll.cz/festival/2026-czk?backUrl=https%3A%2F%2Ftickets.nfctron.com%2Fhome",
  },
] as const;

export const activeRetailers = [
  { name: "Rafani", category: { cs: "Food truck", en: "Food truck" }, company: "Denis Koller", activeAt: { cs: "Aktivní nabídka pro festivaly", en: "Active offer for festivals" }, icon: "truck" },
  { name: "Burger by Crew", category: { cs: "Rychlé občerstvení", en: "Quick service" }, company: "bbcrew, s.r.o.", activeAt: { cs: "Aktivní v NFCtron Hub", en: "Active in NFCtron Hub" }, icon: "burger" },
  { name: "KROULE", category: { cs: "Rychlé občerstvení", en: "Quick service" }, company: "KROULE", activeAt: { cs: "Aktivní v NFCtron Hub", en: "Active in NFCtron Hub" }, icon: "food" },
  { name: "Matolicloud", category: { cs: "Shisha & cocktail bar", en: "Shisha & cocktail bar" }, company: "Pavel Oliva", activeAt: { cs: "Mobilní provoz pro akce", en: "Mobile event operation" }, icon: "drink" },
  { name: "Crazy Potato", category: { cs: "Food truck", en: "Food truck" }, company: "MATEBAL s.r.o.", activeAt: { cs: "Aktivní v NFCtron Hub", en: "Active in NFCtron Hub" }, icon: "truck" },
  { name: "DIAN", category: { cs: "Světová kuchyně", en: "International cuisine" }, company: "KHAGIA BB s.r.o.", activeAt: { cs: "Aktivní v NFCtron Hub", en: "Active in NFCtron Hub" }, icon: "food" },
] as const;

export const hubHref = "https://hub.nfctron.com";
