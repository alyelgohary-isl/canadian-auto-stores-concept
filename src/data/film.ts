/* "Every part. Since 1938." The home film, passed to <ScrollFilm> in src/pages/index.astro.
   Six Kling clips split to 61 frames each (tools/frames.sh, 960px, 12 fps) = 366 frames.
   Returns and the rebuild are the same frames played backwards in the timeline; no extra files.
   Provenance: every frame derives from work/stills/S1_master_photo_v2.png (generated) via edit-mode stills. */

export const sources = {
  pull:    { dir: "frames/pull",    prefix: "pb_", count: 61 },   // C1: pull-back clip stored REVERSED on disk: frame 0 = wide shop, frame 60 = the master
  draw:    { dir: "frames/draw",    prefix: "dr_", count: 61 },   // C2: photo → blueprint, front-to-back wipe
  explode: { dir: "frames/explode", prefix: "ex_", count: 61 },   // C3: blueprint → exploded view
  oil:     { dir: "frames/oil",     prefix: "oi_", count: 61 },   // C4: filter + drain plug + one amber stream
  cabin:   { dir: "frames/cabin",   prefix: "cb_", count: 61 },   // C5: seats lift out, fill red
  wax:     { dir: "frames/wax",     prefix: "wx_", count: 61 },   // C6: one specular sweep on the photoreal car
};

type Ref = [keyof typeof sources, number];
type Segment = { id: string; units: number } & ({ from: Ref; to: Ref } | { hold: Ref });

export const timeline: Segment[] = [
  { id: "hero",    units: 0.9,  hold: ["pull", 0] },                       // wide, dark counter; the H1 sits beside it
  { id: "push",    units: 0.8,  from: ["pull", 0],     to: ["pull", 60] },   // 1 · push in to the master
  { id: "draw",    units: 0.9,  from: ["draw", 0],     to: ["draw", 60] },   // 2 · paint resolves into line work
  { id: "explode", units: 1.0,  from: ["explode", 0],  to: ["explode", 60] },// 3 · the explode
  { id: "holdx",   units: 0.4,  hold: ["explode", 60] },                     //     hold with category callouts
  { id: "oilf",    units: 0.6,  from: ["oil", 0],      to: ["oil", 60] },    // 4 · oil filter + drain plug
  { id: "oilh",    units: 0.35, hold: ["oil", 60] },
  { id: "oilr",    units: 0.45, from: ["oil", 60],     to: ["oil", 0] },     //     return (reversed)
  { id: "cabf",    units: 0.6,  from: ["cabin", 0],    to: ["cabin", 60] },  // 5 · seats and upholstery (the payoff)
  { id: "cabh",    units: 0.45, hold: ["cabin", 60] },
  { id: "cabr",    units: 0.45, from: ["cabin", 60],   to: ["cabin", 0] },   //     return (reversed)
  { id: "rebuild", units: 0.7,  from: ["explode", 60], to: ["explode", 0] }, // 6 · rebuild (explode reversed)
  { id: "redraw",  units: 0.7,  from: ["draw", 60],    to: ["draw", 0] },    //     line work back to paint (draw reversed)
  { id: "wax",     units: 0.7,  from: ["wax", 0],      to: ["wax", 60] },    //     one specular sweep
  { id: "pullout", units: 0.9,  from: ["pull", 60],    to: ["pull", 0] },    // 7 · pull back; the overlay dims the shop
  { id: "end",     units: 0.3,  hold: ["pull", 0] },
];

/* Frames loaded before the loader lifts; the rest stream in scroll order */
export const preload: Ref = ["draw", 0];   // = the first 61 frames (all of "pull")

/* Dark wash under the stats moment; back to 0 before the film ends so the footer reads at full contrast */
export const overlay = { enter: "pullout:0.15", leave: "end:0.2", max: 0.86, color: "#070d18" };
export const marquee: { text: string; enter: string; leave: string } | undefined = undefined;
