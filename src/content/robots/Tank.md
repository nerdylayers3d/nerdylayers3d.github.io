---
robot_name: Tank
concept: Tracked combat platform (research / video project)
category: experimental
status: research
cover: tank-assembly-isometric.png
cad: https://cad.onshape.com/documents/b5fc3de47f9783a0e782fa1e/w/d84ed20dc66694b38c119e54/e/fe9bde119f5d73d806d04fc7
chassis_bbox: 356 x 350 x 131 mm (from Onshape assembly bounding box)
drive_motors: 2x DC Gear Motor 25GA-370 (280 RPM, 12V brushed) + 1x TT-gearbox motor (auxiliary, role TBD)
weapon_type: None (research platform, no weapon currently)
track_type: 3D-printed segmented tracks with sprocket drive (16 segment variants from `sprocket and track` Part Studio)
bearings: 6x 688ZZ (8x16x5 mm sealed deep-groove)
fasteners: 17x M5x50 socket head, 2x M5 thin nuts, 1x M8x80 + M8 nut (track tensioner?), 1x M3x6 countersunk
peg_fit_variable: "#base = 8 mm (peg/hole base diameter, with ±0.1/0.2/0.3 mm clearance variants for press-fit tuning)"
target_weight: TBD (CAD mass-properties report ~214 g, but many parts likely lack assigned material density)
---

**Tank** is a tracked combat platform — currently a research / video project rather than an active competition build. The CAD shows a low-slung wedge-fronted tracked vehicle with **3D-printed segmented tracks**, a brushed gear motor for drive, and a parametric peg-and-hole snap-fit system used throughout the chassis. The work in this Onshape doc spans several years of iteration (multiple Part Studios named `Part Studio 1`–`12`, several Assembly attempts, and a `tank main old` tab) — what's documented here is the **`tank main assembly Copy 1`** tab, which is the most current state.

The project is currently shelved at the prototype stage; the main outputs are the disassembly and journey videos still to be edited (see [[#To Do]]).

---

### To Do

- [ ] Edit disassembly video
- [ ] Edit journey video
- [ ] Reconcile the many duplicated Part Studios — pick a canonical chassis studio and archive the rest
- [ ] Decide whether Tank gets a weapon or stays a pure mobility / R&D platform

---

### Visual & Physical Profile

#### Multi-view (rendered from Onshape shaded-views API)

| CAD view | Filename | What's in frame |
|---|---|---|
| Isometric | `tank-assembly-isometric.png` | Hero shot — long flat top plate, blue 3D-printed track on the left, segmented "modular" chassis sections, raised battery-holder block on top |
| Top | `tank-assembly-top.png` | Top-down: large flat top plate with battery-holder block centered, raised antenna boss on its top face, two flush slots through the deck, TT-gearbox motor visible at lower-right edge of frame |
| Bottom | `tank-assembly-bottom.png` | Underside — chassis split into **5 transverse "ribs" / sections** (each ~one body-extrude block wide), the blue track wraps around the **right edge** in this view, brushed motor body visible at far right |
| Front (CAD) | `tank-assembly-front.png` | End-on view with blue track + sprocket cluster at the **right** of frame, ground-clearance lugs on the **left** (the non-driven idler end), and the battery-holder block protruding up out of the top plate |
| Back (CAD) | `tank-assembly-back.png` | Mirror of front — sprocket cluster on the **left**, idler lugs on the **right**, brushless-style motor can visible below the deck on the sprocket side |
| Right (CAD) | `tank-assembly-right.png` | Side profile — wedge-shaped ends both front and rear, sprocket gear cluster at the **left** (combat front?), driven shaft pokes through the chassis side mid-height, six M5 cap heads visible along the deck edge |
| Left (CAD) | `tank-assembly-left.png` | Side profile, opposite side — no sprocket visible (track loops behind the chassis); the non-driven side is mostly clean panels |
| Trimetric | `tank-assembly-trimetric.png` | Alternative iso angle, useful for showing the deck cutouts + track-side relationship together |

![[Robotics/Tank/_resources/tank-assembly-isometric.png]]
![[Robotics/Tank/_resources/tank-assembly-top.png]]
![[Robotics/Tank/_resources/tank-assembly-bottom.png]]
![[Robotics/Tank/_resources/tank-assembly-right.png]]
![[Robotics/Tank/_resources/tank-assembly-left.png]]
![[Robotics/Tank/_resources/tank-assembly-front.png]]
![[Robotics/Tank/_resources/tank-assembly-back.png]]
![[Robotics/Tank/_resources/tank-assembly-trimetric.png]]

#### Layout observations (from CAD only)

- **Wedge-shaped ends on both front and rear** — the chassis tapers down at both ends to give some self-righting / climbing geometry, similar in spirit to Lucile's front wedge but applied symmetrically.
- **Only one side appears driven** in the current assembly: the sprocket + track cluster is visible on only one side in the side views. This may be a CAD-state thing (mirror not applied or second side suppressed) rather than a design decision — needs CAD review.
- **Modular chassis**: the body is split into **5 transverse rib sections** that bolt together edge-to-edge (visible most clearly in the bottom view). M5x50 socket-head screws are the dominant fastener; the 17x M5x50 in the BOM are the section-to-section joiners.
- **Battery holder is exposed on top of the deck** as a separate raised block (the `top` + `battery holder` parts from the `batteryHolderTop` studio). Antenna mount sits on top of that.
- **Track-side mass / armour**: the blue track-side panels are visually thick and likely act as side armour as well as track guides.

---

### Hardware

- [[Driver VNH2SP30]]
- [[Buck Converter LM2596S]]
- [[ESP32-WROOM-32U DevKitC]]

> [!note] Control stack
> Tank uses **ESP32 + dual VNH2SP30 H-bridges** rather than the ELRS/PWM-receiver stack used on the Lucilles. The VNH2SP30 drives the brushed 25GA-370 + TT gear motors directly; the buck converter steps the battery down to logic level for the ESP32. This is an explicitly R&D control choice — the Tank is a platform for trying things that wouldn't be appropriate to risk on a competition robot.

---

### Onshape Reference (CAD discovery 2026-05-28)

**Document:** [Tank on Onshape](https://cad.onshape.com/documents/b5fc3de47f9783a0e782fa1e/w/d84ed20dc66694b38c119e54)

- **Document ID:** `b5fc3de47f9783a0e782fa1e`
- **Workspace ID:** `d84ed20dc66694b38c119e54`
- **Main assembly element ID:** `fe9bde119f5d73d806d04fc7` (`tank main assembly Copy 1`)

The doc contains **49 tabs total** — many are abandoned iterations (`Part Studio 1`–`12`, `Assembly 1`–`7`, multiple BOMs). The list below covers the tabs actually referenced by the current `tank main assembly Copy 1`, plus the noteworthy historical / experimental ones.

#### Tab map (current build)

| Tab | Type | Role |
|---|---|---|
| `tank main assembly Copy 1` | Assembly | **Current assembly** — 102 instances, 45 mate features (40 fastened, 5 slider for the track segments, 1 pin-slot, 3 planar) |
| `tank main old` | Assembly | Earlier version — 41 instances, smaller bounding box. Kept as reference. |
| `body` | Part Studio | **Master chassis** — 61 features (8 sketches, 14 extrudes, 12 booleans, 3 mirrors, 3 splits, 5 derived imports, 6 holes, 2 chamfers, 8 construction planes). Where the bulk of the chassis geometry lives. |
| `sprocket and track` | Part Studio | **Track + sprocket** — 33 features; uses the **`Spocket`** custom feature (gear-tooth generator), one `Circular pattern`, one `Thicken`, two `Mirror`. 16 distinct track-part variants are instanced into the assembly. |
| `back wheel` | Part Studio | The non-driven idler end of the track loop — 22 features. |
| `motor_holder` | Part Studio | Mount bracket for the brushed gear motor — 13 features incl. `Shell`, `Fillet`, hole feature. |
| `batteryHolderTop` | Part Studio | Battery holder block on the top deck — 5 features, parts named `top` and `battery holder`. |
| `batteryHolderTop_Antenna` | Part Studio | Derived from `batteryHolderTop`; adds the antenna boss (one part: `top_with_antenna`). |
| `joint` | Part Studio | The peg-joint geometry between chassis sections — 15 features incl. 4 `Mate connectors` and a `#name = #value` variable. |
| `pegs` | Part Studio | **Parametric peg pillars** — 13 features, 7 variables (`#base`, `#base_1`/`_2`/`_3`, `#base_m1`/`_m2`/`_m3`). Pegs at Ø8 mm nominal with ±0.1/0.2/0.3 mm fit-tuning siblings. |
| `holes` | Part Studio | Matching **parametric hole pattern** for the pegs above — same 7 base/base±N variables. The peg-and-hole pair is how the chassis sections register and snap together. |
| `Holder` | Part Studio | Generic holder shapes — 27 features. |
| `rail` | Part Studio | Long extruded rail — 4 features. |
| `Part Studio 1`–`12` | Part Studios | Mostly experimental / superseded; not in the current build path. |
| `Assembly 1`–`7` | Assemblies | Older / fragmentary assemblies. |
| `28BYJ-48_5VDC`, `track Assembly`, `Assembly 5` | Assemblies | Earlier experiments — stepper-motor variant, track-only sub-assembly. |
| `Feature Studio 1`–`3` | Feature Studios | Custom features used in the Part Studios (the `Spocket` feature in `sprocket and track` is defined here). |

#### Bounding box & mass (current assembly)

- **Bounding box:** `356.0 × 350.1 × 131.2 mm` (X × Y × Z, in Onshape's assembly frame)
- **Mass property report:** ~214 g — **do not trust this**: many of the chassis parts come from Part Studios with no material assignment, so the assembly is using Onshape default density. Real-world weight needs to be measured on the prototype.

#### Component inventory (filtered — fasteners collapsed)

| Component | Quantity | Source eid | Role |
|---|---|---|---|
| `body` parts (`Part 1`–`Part 31`) | 31 instances | `fa52a06e` (this doc) | Main chassis bodies — 5 ribbed sections plus internal mounting features |
| `sprocket and track` parts (`Part 1`–`Part 16`) | 16 instances | `1eed2eb1` (this doc) | Sprocket + track segments. Track is segmented; each segment is mate-slid against the next via `Slider 1`–`Slider 5` mates. |
| `Part Studio 7` parts (`Part 1`, 2, 5, 11, 12, 13, 14, 19, 29, 30) | 11 instances | `e534212a` (this doc) | Misc internal frame / brackets — needs naming pass |
| `back wheel` parts (`Part 4`–`Part 11`) | 8 instances | `96206a86` (this doc) | Idler-end hardware |
| `688ZZ` bearings | 6 | `144d617d…` (external std-content) | **8 × 16 × 5 mm sealed deep-groove** — sprocket / idler shaft support |
| `motor_holder` (`Part 1`, `Part 2`) | 2 | `0dd76b63` (this doc) | Bracket halves for the 25GA-370 motor |
| `batteryHolderTop` (`top`, `battery holder`) | 2 | `2b6131cf` (this doc) | Battery box on top deck |
| `batteryHolderTop_Antenna` (`top_with_antenna`) | 1 | `3a0825b1` (this doc) | Antenna-mount variant of the top |
| `25ga-370-280-rpm-dc Motor` | 1 | `0ec023d9…` (external `components` doc) | **Brushed gear motor, 280 RPM @ 12V** — main drive |
| `Motor, DC Gearbox (TT)` | 1 | `01a1ab25…` (external) | **TT-style yellow gear motor** — auxiliary / second drive side? Role not yet confirmed from CAD. |
| Hex socket head cap screw M5×0.80 × 50 | 17 | external std-content | Section-to-section chassis joiners |
| Hex socket head cap screw M5×0.80 × 16 | 1 | external std-content | One shorter M5 (motor-mount?) |
| Hex socket head cap screw M8×1.25 × 80 | 1 | external std-content | Long M8 — likely the **track-tensioner / idler axle** |
| Prevailing torque thin nut M5×0.8 | 2 | external std-content | Matched to the M5x50s |
| Prevailing torque thin nut M8×1.25 | 1 | external std-content | Matched to the M8x80 |
| Hex socket countersunk head M3×0.5 × 6 | 1 | external std-content | Small fastener (PCB / sensor?) |

> [!warning] Two motors of different types
> The current assembly has **one 25GA-370 (brushed gear, 280 RPM)** *and* **one TT-style yellow gearbox motor**. That's asymmetric for a tracked vehicle — a real tracked drive would normally use two matched motors, one per track. Likely interpretations:
> 1. The TT is a leftover from an earlier iteration that hasn't been deleted, **or**
> 2. The 25GA drives one track and the TT was being trialled on the other (different gearing / torque characteristics intentionally).
> Needs a CAD walk-through to confirm which is which and whether a second 25GA was planned.

#### Key dimensions (from sketch constraints)

**Chassis (`body` Part Studio — 8 sketches)**

| Sketch | Type | Value | Best read |
|---|---|---|---|
| Sketch 1 | DIAMETER | 16.1 mm | **688ZZ bearing seat** (16 mm OD + 0.1 mm clearance) |
| Sketch 1 | DIAMETER | 9 mm | M8 clearance through-hole (axle pass-through) |
| Sketch 1 | DISTANCE | 55 mm | Recurring chassis-section dimension (also LENGTH 55 mm) |
| Sketch 1 | DISTANCE | 10, 15 mm | Hole-pattern spacings on the chassis sections |
| Sketch 1 | DISTANCE | 3 mm | Wall thickness |
| Sketch 8 | DIAMETER | 5 mm | M5 clearance hole |
| Sketch 8 | DIAMETER | 2.9 mm | M3 tap-size hole |

**Sprocket & track (`sprocket and track` — 4 sketches)**

| Sketch | Type | Value | Best read |
|---|---|---|---|
| Sketch 1 | DIAMETER | 40 mm | **Sprocket pitch diameter** (drives the printed track) |
| Sketch 2 | DIAMETER | 10 mm | Sprocket hub feature |
| Sketch 2 | DIAMETER | 5.3 mm | Sprocket shaft bore (5 mm shaft + 0.3 mm clearance) |
| Sketch 2 | DIAMETER | 4.8 mm | Tapped hole / set-screw thread |
| Sketch 2 | DISTANCE | 5 mm | Hub thickness |
| Sketch 3 | DIAMETER | 8 mm | Track-segment pin hole (matches the `#base = 8 mm` peg system) |
| Sketch 3 | DIAMETER | 5.2 / 4.8 mm | Track-segment clearance / tap pair |
| Sketch 3 | LENGTH | 6.8 mm | Track segment pitch / length feature |

**Idler / back wheel (`back wheel` — 2 sketches)**

| Sketch | Type | Value | Best read |
|---|---|---|---|
| Sketch 1 | DIAMETER | 16.1 mm | **688ZZ seat** (same bearing as the sprocket end) |
| Sketch 1 | DIAMETER | 10 mm | Hub / collar diameter |
| Sketch 1 | LENGTH | 7 mm | Hub thickness |
| Sketch 2 | DIAMETER | 8.5 / 8.3 mm | M8 axle clearance (8 mm shaft + ~0.3 mm fit) |
| Sketch 2 | DIAMETER | 5, 10, 16.1 mm | Stepped-shaft / bearing features |

**Battery holder (`batteryHolderTop` — Sketch 1)**

| Type | Value | Best read |
|---|---|---|
| DISTANCE | 60 × 80 mm | **Battery cavity footprint** — fits a ~60 × 80 mm pack |
| LENGTH | 30 mm | Box height/length feature |
| DISTANCE | 21.5 mm, 25 mm | Mount hole positions on the top deck |
| DIAMETER | 2.9 mm | M3 tap hole (deck mount) |

**Antenna mount (`batteryHolderTop_Antenna`)**

| Type | Value | Best read |
|---|---|---|
| DIAMETER | 8 mm | Antenna shaft / cable grommet hole |
| DIAMETER | 6.2 mm | Inner sleeve / tap hole |
| DISTANCE | 20 mm | Boss height |

**Holder (`Holder` — 4 sketches)**

| Type | Value | Best read |
|---|---|---|
| DIAMETER | 16 mm | 688ZZ outer-race seat (no clearance variant) |
| DIAMETER | 5, 3 mm | M5 + M3 clearance holes |
| DIAMETER | 5.5, 5.8 mm | M5 with various tolerances |
| LENGTH | 8 mm | Boss depth |

**Joint (`joint` — Sketch 1)**

| Type | Value | Best read |
|---|---|---|
| DIAMETER | 8.3 / 7.9 mm | M8 ±tolerance pair (axle / bolt fit) |
| DIAMETER | 5.2 mm | M5 clearance |
| LENGTH | 8 mm | Joint feature depth |

**Pegs & holes — parametric snap-fit system (`pegs`, `holes`)**

The chassis sections register against each other with **8 mm-nominal pegs** driven by a single variable, with seven fit variants stepping by 0.1 mm so the same geometry can be tuned per-print:

| Variable | Value | Use |
|---|---|---|
| `#base` | **8 mm** | Nominal peg/hole diameter |
| `#base_1` | `#base + 0.1 mm` = 8.1 mm | Light-press fit |
| `#base_2` | `#base + 0.2 mm` = 8.2 mm | Slip fit |
| `#base_3` | `#base + 0.3 mm` = 8.3 mm | Loose / clearance |
| `#base_m1` | `#base - 0.1 mm` = 7.9 mm | Tight interference |
| `#base_m2` | `#base - 0.2 mm` = 7.8 mm | Hard press |
| `#base_m3` | `#base - 0.3 mm` = 7.7 mm | Press-only (likely too tight in PLA) |

This is the same parametric pattern Tank uses everywhere it needs a printable peg / hole pair, and it's why both `pegs` and `holes` Part Studios share the exact same variable set.

#### Mate features (assembly logic)

The 45 mate features break down as:

- **40× Fastened** — chassis section-to-section joins, fasteners holding bearings + motor bracket + battery box.
- **5× Slider** (`Slider 1`–`Slider 5`) — these are the **mobile track segments** sliding along the track-loop path. The track is articulated, not rigid.
- **3× Planar** — flat-against-flat alignments (likely battery box and motor bracket sat against the deck).
- **1× Pin slot** — single articulating joint somewhere in the build (possibly the idler tensioner).

> [!note] Slider mates = articulated track
> Onshape doesn't have a native "track / chain" mate, so the printed track is modelled as a sequence of segments each with a Slider mate to its neighbour. That's why the assembly has many `Part N` instances from `sprocket and track` — each one is a different segment shape (curve segment, straight segment, etc.) in the loop.

---

### Drive system math (rough — needs verification)

From the CAD:
- **Drive motor:** 25GA-370 brushed gear motor, **280 RPM @ 12V** (matches the instance name)
- **Sprocket pitch diameter:** 40 mm (Sketch 1 in `sprocket and track`)
- **Sprocket circumference:** π × 40 ≈ **125.7 mm**
- **Theoretical top speed:** 280 RPM × 125.7 mm = 35,200 mm/min ≈ **0.59 m/s** ≈ 2.1 km/h

That's slow — appropriate for a research / video platform but well below combat-robot drive speeds. If the TT motor is on the other track, its native ~200 RPM @ 6V (≈400 RPM @ 12V if it tolerates it) would mismatch the 25GA badly and force a single-track-faster-than-the-other situation — another reason to suspect the TT is leftover rather than intentional.

---

### Open questions

- [ ] Why is the second drive side missing a 25GA motor? Single-motor mockup, or did the second motor get removed during cleanup?
- [ ] What is the `Motor, DC Gearbox (TT)` instance actually doing? Drives a track? Drives something else? Leftover?
- [ ] What's the intended **battery** for the 60 × 80 mm holder cavity? (LiPo pack, NiMH brick, lead-acid sealed cell?)
- [ ] Are the 5 chassis "rib sections" mechanically equivalent (modular, swappable) or each a unique shape?
- [ ] Is the wedge-front-and-back geometry intended for self-righting, or just for low-profile / climbing?
- [ ] Does the printed track tolerate combat impacts, or is it strictly a slow-speed research / video prop?
