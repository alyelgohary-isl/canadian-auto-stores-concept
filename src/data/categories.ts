/* The six product categories, lists verbatim from the current site's category pages.
   Brand-to-category mapping is ours (from the home-page logo strip + page copy). CONFIRM. */
export type Group = { title: string; items: string[] };
export type Category = {
  slug: string; key: string; name: string; short: string;
  title: string; meta: string; h1: string; lede: string; cardMeta: string;
  groups: Group[]; brands: string[]; hero: "plain" | "scrub" | "loop";
};

export const categories: Category[] = [
  {
    slug: "replacement-parts", key: "rp", name: "Replacement Parts", short: "Replacement parts",
    title: "Replacement Car Parts in Windsor | Canadian Auto Stores",
    meta: "Brakes, suspension, electrical, cooling, exhaust, ignition and engine parts for every make, from Windsor's independent parts counter since 1938.",
    h1: "Replacement parts for every make.",
    lede: "Too many lines to list, so here's the shape of it. Call ahead or request a part below and the counter will check the shelf.",
    cardMeta: "9 groups", hero: "plain",
    groups: [
      { title: "Belts / Hoses / Cooling", items: ["Belts, hoses, tensioners, pulleys", "Thermostats, housings, rad caps", "Water pumps", "Gaskets", "Hose clamps", "Radiators"] },
      { title: "Brakes / Wheel Bearings", items: ["Brake pads: semi-metallic, ceramic, carbon metallic", "Regular rotors, coated rotors", "Smart sensor – ABS, wheel sensors", "Master cylinders, brake boosters", "Power steering pumps", "Brake hardware kits", "Wheel cylinders, flex hoses", "Brake lines", "Hub bearings, wheel bearings"] },
      { title: "Electrical", items: ["Automotive and non-automotive batteries", "Starters and alternators", "Window regulators, window motors", "Electrical connectors (wire, cable ties)", "Electronics", "Control modules, mass air flow sensors, TPS sensors"] },
      { title: "Steering and Suspension", items: ["Motor mounts", "CV boots", "CV shafts", "Rack and pinions", "Power steering hoses", "Control arms, chassis parts, tie rods, ball joints, idler and pitman arms", "Shocks and struts, quick struts, lift struts, strut mounts, hood lift supports"] },
      { title: "Ignition, Filtration and Fuel", items: ["Import and domestic wire sets", "Spark plugs", "Transmission filters and gaskets", "O2 sensors", "Emission sensor, EGR valves, temp and oil sending units"] },
      { title: "Heating and Cooling", items: ["A/C compressors", "Heater cores", "RED TEK 12A auto refrigerants, stop leak, pro seal, dye charge, oil charge, speciality A/C kits, hoses, gauges, 22A home refrigerant and kits"] },
      { title: "Engine Parts", items: ["Oil pans", "Gaskets", "Timing belts"] },
      { title: "Exhaust", items: ["Economy mufflers", "Walker pipes and mufflers", "Pipe adaptors", "Universal catalytic converters", "Flex pipes, muffler clamps", "Stainless steel tips"] },
      { title: "Wipers / Fuses / Lighting", items: ["Bulbs, headlight bulbs", "Primelite lighting products", "Rain-X Latitude wiper blades", "Clearview Latitude wiper blades"] },
    ],
    brands: ["Monroe", "MOOG", "Dorman", "Cardone", "Interstate Batteries", "Fel-Pro", "Walker", "Red Tek", "Rain-X", "Clearview", "Primelite", "FCS Auto"],
  },
  {
    slug: "motor-oils-filtration", key: "oil", name: "Motor Oils & Filtration", short: "Motor oils & filtration",
    title: "Motor Oils and Filters in Windsor | Canadian Auto Stores",
    meta: "Synthetic, blend and conventional motor oils with the oil, air, cabin and fuel filters to match. Ask the counter which one your engine wants.",
    h1: "The right oil. The right filter.",
    lede: "Not sure what goes in your car or truck? Ask. We'll help you get the most miles out of any engine.",
    cardMeta: "Oils · Filters", hero: "plain",
    groups: [
      { title: "Motor Oils", items: ["Prime Guard regular, synthetic blend and fully synthetic motor oils", "Mileage Master fully synthetic motor oils", "Lucas Oil: motorcycle oil, racing oil, semi synthetic, supercharger oil, transfer case oil, transmission oil, gear oil", "Lucas Oil: stop leak, power steering stop leak, quick detailer, diesel additive, fuel injector cleaner, fuel treatment, octane booster", "Lucas Oil: 2 cycle, air tool lube, assembly lube, chain oil, grease cartridges, hydraulic fluids, oil stabilizer, penetrating oil"] },
      { title: "Filters", items: ["Prime Guard oil filters", "Air filters", "Cabin air filters", "Fuel filters"] },
    ],
    brands: ["Prime Guard", "Mileage Master", "Lucas Oil", "Valvoline", "Shell", "WIX Filters"],
  },
  {
    slug: "chemicals-waxes-lubricants", key: "chem", name: "Chemicals, Waxes & Lubricants", short: "Chemicals, waxes & lubricants",
    title: "Auto Chemicals, Fluids and Waxes in Windsor | Canadian Auto Stores",
    meta: "Antifreeze, brake fluid, gasket makers, cleaners, lubricants, waxes and polish for inside, outside and under the hood.",
    h1: "Fluids, chemicals and a good wax.",
    lede: "Interior, exterior and everything under the hood. Stop by and the staff will point you at the right can.",
    cardMeta: "40+ lines", hero: "plain",
    groups: [
      { title: "Fluids", items: ["Antifreeze: green 4L, green 50/50, DEX-COOL 4L, DEX-COOL 50/50, universal 4L, universal 50/50", "Windshield washer fluid –45C", "DOT 3, DOT 4 and DOT 5 brake fluid", "Power steering fluid, Honda power steering fluid", "Jack oil", "Starting fluid"] },
      { title: "Chemicals and Adhesives", items: ["Blue, red, black and copper plus silicone gasket makers", "Motor flush, octane treatment, smoke eliminator, transmission sealer", "Brake cleaner, air intake cleaner, carb and choke spray, air brake antifreeze", "Belt dressing, penetrating oil, silicone lube, white lithium grease, anti-seize compound", "Rubberized undercoating", "Thread locker, rear view mirror adhesive, super glue, weather strip adhesive", "Fuel treatment, rad stop leak, rad flush, lock de-icer, muffler cement, industrial soap, tire repair", "Battery cleaner, sealer, protector", "Bug and tar remover"] },
      { title: "Waxes and Car Care", items: ["Car shine waxes", "Metal polish, car wax, vinyl cleaner, leather cleaner, tire shine", "Hi-Tech Industries carpet dye, carpet cleaner, tire shine, glass cleaner, upholstery cleaner, tire dressing", "Calliper paint"] },
    ],
    brands: ["Permatex", "J-B Weld", "Solder Seal Gunk", "Meguiar's", "Mothers", "Turtle Wax", "No Touch", "Emzone", "Hi-Tech Industries", "Red Tek"],
  },
  {
    slug: "performance-accessories", key: "perf", name: "Performance & Accessories", short: "Performance & accessories",
    title: "Performance Parts and Car Accessories in Windsor | Canadian Auto Stores",
    meta: "HID and LED lighting kits, performance accessories, and the organizers, chargers, mats and covers that make the drive nicer.",
    h1: "A bit more power. A lot more comfortable.",
    lede: "Lighting kits and performance accessories, plus the organizers, chargers, mats and covers that make the drive nicer.",
    cardMeta: "Lighting · Accessories", hero: "scrub",
    groups: [
      { title: "Performance", items: ["HID lighting kits", "LED lighting"] },
      { title: "Car Accessories", items: ["Headrest tablet holders, car organizers, auto litterbags, car clothes carriers, cargo organizers", "Steering wheel covers, cell phone chargers, 2 and 4 piece car mat sets", "Seat covers, mesh back supports, universal car phone holders, USB car chargers, ice scrapers"] },
    ],
    brands: ["Performance Tool", "Inroble"],
  },
  {
    slug: "tools-shop-supplies", key: "tools", name: "Tools & Shop Supplies", short: "Tools & shop supplies",
    title: "Auto Tools and Shop Supplies in Windsor | Canadian Auto Stores",
    meta: "Hand tools, air tools, battery chargers and shop supplies from gloves to oil dry, with free delivery in Windsor, Tecumseh and LaSalle.",
    h1: "Wrenches to garbage bags.",
    lede: "If a tool isn't in your kit, it's probably on our shelf. Shop supplies too: gloves, cleaners, oil dry, paint.",
    cardMeta: "Tools · Supplies", hero: "loop",
    groups: [
      { title: "Tools", items: ["Performance hand tools", "Sockets, wrenches, ratchets", "Pipe wrenches, adjustable wrenches", "Tube benders, riveting tools, drill bits", "Screwdrivers", "Grinders, sanders, air tools, wire wheels", "Hose reels, grease guns", "Battery chargers"] },
      { title: "Shop Supplies", items: ["Masking tape, garbage bags and drop cloths", "Floor cleaning supplies", "Gloves: latex, nitrile, vinyl", "Soaps, cleaners, wipes", "Oil dry", "Aerosol spray paint, upside-down paint"] },
    ],
    brands: ["Performance Tool", "CBK"],
  },
  {
    slug: "upholstery-carpet", key: "uph", name: "Upholstery & Carpet", short: "Upholstery & carpet",
    title: "Car Upholstery and Carpet in Windsor | Canadian Auto Stores",
    meta: "Vinyl, headliner, foam, auto carpet and hardware by the yard, for cars, boats, restaurant seating and the house. Established 1938.",
    h1: "The parts store with a fabric counter.",
    lede: "Vinyl, headliner, foam and carpet by the yard, for cars, boats, restaurant seating and the house.",
    cardMeta: "By the yard", hero: "plain",
    groups: [
      { title: "Products Offered", items: ["Vinyl", "Teralyn", "Auto headliner", "Auto headliner glue", "High-density foam", "Couch backing", "Auto carpet, assorted colours", "Felt underlay", "Clear vinyl", "Zippers", "Snaps", "Foam"] },
      { title: "Also on the shelf", items: ["Carpet dye, carpet cleaner and upholstery cleaner (Hi-Tech Industries)"] },
    ],
    brands: ["Hi-Tech Industries"],
  },
];

export const bySlug = (slug: string) => categories.find((c) => c.slug === slug)!;
