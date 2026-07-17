export const activeRetailEvents = [
  {
    title: "Footfest 2026",
    date: "17.–19. července 2026",
    place: "Želeč u Tábora",
    image: "https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg",
    href: "https://tickets.nfctron.com/event/danekr-sro/footfest-2026/cart",
  },
  {
    title: "Štěrkovna Open Music 2026",
    date: "23.–26. července 2026",
    place: "Hlučínské jezero",
    image: "https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg",
    href: "https://tickets.nfctron.com/event/new-wind-production/sterkovna-open-music-2026",
  },
  {
    title: "LET IT ROLL 2026",
    date: "30. července–1. srpna 2026",
    place: "Jezero Most",
    image: "https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg",
    href: "https://tickets.letitroll.cz/festival/2026-czk?backUrl=https%3A%2F%2Ftickets.nfctron.com%2Fhome",
  },
] as const;

export const activeRetailers = [
  { name: "Rafani", category: "FoodTruck", company: "Denis Koller", activeAt: "Aktivní nabídka pro festivaly", icon: "truck" },
  { name: "Burger by Crew", category: "Rychlé občerstvení", company: "bbcrew, s.r.o.", activeAt: "Aktivní v NFCtron Hub", icon: "burger" },
  { name: "KROULE", category: "Rychlé občerstvení", company: "KROULE", activeAt: "Aktivní v NFCtron Hub", icon: "food" },
  { name: "Matolicloud", category: "Shisha & cocktail bar", company: "Pavel Oliva", activeAt: "Mobilní provoz pro akce", icon: "drink" },
  { name: "Crazy Potato", category: "FoodTruck", company: "MATEBAL s.r.o.", activeAt: "Aktivní v NFCtron Hub", icon: "truck" },
  { name: "DIAN", category: "Světová kuchyně", company: "KHAGIA BB s.r.o.", activeAt: "Aktivní v NFCtron Hub", icon: "food" },
] as const;

export const hubHref = "https://hub.nfctron.com";
