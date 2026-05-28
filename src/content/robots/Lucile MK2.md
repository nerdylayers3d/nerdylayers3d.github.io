---
fileClass: CombatRobot
robot_name: Lucille MK2
status: in-development
predecessor: "[[Lucile]]"
concept: The Walking Dead (Negan's Bat)
cover: assembly-isometric.png
weapon_type: Front-mounted Horizontal Drum (Machined Aluminum, Replaceable Teeth)
weapon_motor: D2830 1000kv
weapon_drive: Single belt, length 225.366 mm (driven by Onshape variable #weapBelt, measured from sketch)
weapon_drum_od: 60 mm
weapon_drum_bore: 16 mm
weapon_drum_length: ~130 mm (from Extrude 8 in Weapon part studio)
weapon_drum_bearings: 2x MR688 (8x16x5 mm, sealed deep-groove)
weapon_drum_shaft: 8 mm (set by MR688 bore)
weapon_tooth_fastener: M5 x 40 mm countersunk hex (3 teeth, circular pattern)
drive_motors: 2x 2322 Brushless w/ 25:1 Planetary Gearbox
drive_layout: 4WD, mid-mounted motor per side, dual-belt to front and rear wheel (1:1, no reduction)
wheel_pulley_diameter: 42 mm (chassis Drive sketch)
wheels: 56x28 RZ knobby rubber tires (per Onshape instance name "56x28rz assembly")
battery_voltage: 3S LiPo (TBD capacity)
receiver: "[[ER6 2.4GHz ELRS PWM Receiver]]"
category: beetle
target_weight: "1500"
cad: https://cad.onshape.com/documents/7384224e9f8d48c6f38a9f45/w/7336d37dc577d20cabe8bf1a
---

> [!info] MK2 — In Development
> Successor to **[[Lucile|Lucille MK1]]**, retired after Iberanime. MK2 keeps the *Walking Dead* identity and the ELRS control stack but is a ground-up redesign: brushless 4WD with belt-driven wheels, and a much wider front-mounted machined aluminum drum with replaceable teeth.

**Lucille MK2** doubles down on the original "brute force" thesis with a heavier weapon and a more reliable drivetrain. Where MK1 was a small split drum + 2WD geared brushed motors, MK2 is a full-width front drum + 4WD brushless with planetary reduction.

---

### **Events**
- _TBD_

### **Visual & Physical Profile**
![[Robotics/Lucile MK2/_resources/lucille-mk2-cad-isometric.png]]
![[Robotics/Lucile MK2/_resources/lucille-mk2-cad-top.png]]
![[Robotics/Lucile MK2/_resources/lucille-mk2-cad-side.png]]

#### Multi-view (LucilleMK2 Assembly, rendered from Onshape)

> [!note] Axis convention
> Onshape's **Front view looks at the BACK of the robot** — the CAD `+Y` axis points away from the drum, but in combat the **drum side is the front** (the business end that engages the opponent). The view filenames use Onshape's axis labels (`assembly-front-cad.png` = Onshape Front = robot rear). Mentally flip when reading.

| CAD view | Filename | What's in frame (robot-relative) |
|---|---|---|
| Isometric | `assembly-isometric.png` | Hero shot — drum across the combat front, weapon motor on the robot's right upright |
| Top | `assembly-top.png` | Looking down — weapon motor + bracket toward the bottom of the image is the **robot front**; drive pulleys visible at the chassis sides |
| Bottom | `assembly-bottom.png` | Underside — chassis floor + four wheel positions; weapon motor pokes through at the top of frame (robot front) |
| Front (CAD) | `assembly-front-cad.png` | **Looking at the robot's REAR.** Bottom cylinder = back bumper; orange uprights flank a flat top plate. |
| Back (CAD) | `assembly-back-cad.png` | **Looking at the robot's FRONT (drum-first).** Big cylinder at top-center is the **drum viewed end-on**; bracket above it bolts the upright into the top plate. |
| Right (CAD) | `assembly-right-cad.png` | **Looking at the robot's LEFT side.** Front + rear wheel with central drive pulley; small shaft stub at upper-right (combat-front side, no motor on this side). |
| Left (CAD) | `assembly-left-cad.png` | **Looking at the robot's RIGHT side.** Same wheel layout; cylindrical body poking out upper-left is the **D2830 weapon motor** mounted to this upright. |
| Trimetric | `assembly-trimetric.png` | Alternative iso angle for layout discussion |

![[Robotics/Lucile MK2/_resources/assembly-isometric.png]]
![[Robotics/Lucile MK2/_resources/assembly-top.png]]
![[Robotics/Lucile MK2/_resources/assembly-back-cad.png]]
![[Robotics/Lucile MK2/_resources/assembly-front-cad.png]]
![[Robotics/Lucile MK2/_resources/assembly-left-cad.png]]
![[Robotics/Lucile MK2/_resources/assembly-right-cad.png]]
![[Robotics/Lucile MK2/_resources/assembly-bottom.png]]

The MK2 chassis carries the orange/red TPU outer shell language from MK1 but expands to accommodate four wheels and a wide front drum. Layout (from CAD):

- **Front:** Machined aluminum horizontal drum, **OD 60 mm**, **length ~130 mm**, spanning between two orange TPU side towers. Drum runs on **2x MR688 bearings** (8x16x5 mm sealed) seated in the towers, on an **8 mm shaft**.
- **Weapon motor:** Mounted to the **right upright** (not perched on the top plate as the earliest concept render suggested). Single belt of measured length **225.366 mm** (Onshape variable `#weapBelt`) runs from the motor pulley down to a pulley on the outboard end of the drum shaft. Drum is still **driven from one end only** — far bearing is support.
- **Drive:** One brushless drive motor per side, mounted between the front and rear wheels along the chassis side. Each motor drives both wheels on its side via twin equal pulleys (1:1) — see the chassis `Drive` sketch.
- **Wheel pulleys:** 42 mm pitch diameter (chassis `Drive` sketch, DIAMETER constraint).
- **Wheels:** 56x28 RZ knobby tires (the `56x28rz assembly` instance in the LucilleMK2 assembly).

---

### **Internal Mechanics**

- **The Heart (Weapon System):** A brushless **D2830 1000kv** motor (mounted on the right upright) drives the **60 mm OD machined aluminum drum** via a single 225.366 mm belt to an outboard pulley on the drum shaft. The drum carries **3 replaceable teeth** placed in a circular pattern, each fastened with M5 x 40 mm countersunk hex screws (from the Weapon part studio).

- **The Muscle (Drive System):** Four-wheel drive. **2x 2322 brushless motors with 25:1 planetary gearboxes** (one per side) sit between the front and rear wheels along the chassis side, and each drives both wheels on its side through **two equal-size belts to 42 mm pitch-diameter pulleys (1:1, no further reduction)**. Both wheels on a side spin in lockstep at the gearbox output speed.

- **The Brains (Control):** Carried over from MK1 — RadioMaster ER6 receiver on **ExpressLRS 2.4GHz**. See [[Radio Config MK2|EdgeTX & ELRS Configuration]].

---

### **Combat Strategy**

MK2 trades MK1's "feed-with-wedge" approach for **direct horizontal drum engagement across the full front**. There's no separate wedge — the drum *is* the front face, spinning at high tip speed. The robot is harder to flank because both sides drive symmetrically, and the planetary gearboxes give meaningfully more pushing torque than the MK1 brushed gearmotors.

Replaceable teeth let MK2 stay competitive across a multi-match event without rebuilding the weapon: damaged teeth swap out in the pit instead of forcing a full drum reprint/remachine.

---

### **Weapon Motor Placement — Decision & Constraints**

**Decision (2026-05-26, updated 2026-05-28 from CAD):** Placement **A — right-outboard**, refined: motor is **structurally tied into the right upright tower** rather than perched on the top plate. Belt runs to a pulley on the outboard end of the drum shaft, length pinned by the Onshape variable `#weapBelt` (225.366 mm, measured from the sketch). Drum is **driven from one end only** (cantilever-style — far bearing is support).

The on-upright mount softens two of the original placement-A drawbacks: belt path is shorter, and the upright shields part of the motor body from overhead hits. The asymmetric-mass and cantilever-bearing concerns are unchanged.

#### Live CAD exploration session (2026-05-28)

While investigating whether the motor could be lowered for better CG, the weapon-motor mate (originally `Planar 1`) was converted to **`Fastened 3`** type to expose three editable offset axes (X, Y, Z) instead of just the planar normal offset. Net change: same mount face, same connectors, all offsets at 0 mm — geometrically equivalent to the original Planar 1 but with editable offsets available for future iteration.

**Mate-axis decode (mate-local → assembly-frame):**
- **Mate X+** = assembly +Y = **robot's right side** (confirmed by 50 mm probe)
- **Mate Y** = uncertain direction; needs another probe with the dialog open and live observation
- **Mate Z** = perpendicular to the mount face (pushing motor into/out of the chassis face); also uncertain in robot-frame mapping

**Belt-system pivot (during the session):**

The drive belts are confirmed **S3M** (3 mm pitch). For the **weapon belt** the design has shifted to a **flat-belt / friction-drive configuration**: the belt teeth point *outward* (cosmetic), pulleys are smooth, and slip on impact acts as a sacrificial clutch. The **motor body itself doubles as the motor pulley** (no separate pulley pressed onto the shaft) — D2830 can OD ≈ 30 mm. This unlocks much more freedom: drum pulley diameter is a free parameter, belt length is no longer pitch-constrained, only friction wrap angle matters.

**LOW-4 target (motor behind drum, 20 mm lower):** not reachable by mate-offset alone — it would require placing the motor outside the existing mount face on the right upright (since the upright doesn't extend 90 mm rearward). Implementing LOW-4 requires either a new mate connector on the chassis interior, or relocating the existing one in the chassis Part Studio sketch. Held off from making this structural change pending user direction.

**Recommended modest move (achievable via offsets only):** ~10 mm right + slight Z adjustment to lower CG marginally without moving off the existing mount face. The Fastened 3 mate is in place ready for offset edits when desired.

Tradeoffs accepted by choosing A — these need active mitigation elsewhere in the build:

- [ ] **Asymmetric mass — compensate on the left.** All weapon-side mass lives on the right. Place the **battery and the largest ESC on the left** side of the chassis. Target: assembled CG within ~5mm of the longitudinal centerline. Weigh the subassembly before final TPU print and shift the battery if needed.

- [ ] **Motor exposure — recess and shroud.** Top-right corner is a target for overhead spinners and hammerbots.
    - Recess the motor as far down into the chassis as the belt geometry allows.
    - Add a small TPU shroud attached to the top plate to deflect glancing hits (doesn't need to stop a hit, just kick it off line).

- [ ] **Cantilever bearing on the driven side eats both the drum radial load *and* the belt pre-tension.** Don't undersize it.
    - Largest bore that fits the shaft.
    - Sealed deep-groove ball bearing, not open.
    - Flanged outer race to locate it axially in the TPU tower.

- [ ] **Belt tension — keep it as low as the system tolerates without skipping.** Every extra Nm of pre-tension is a sideways load on the driven-side bearing.

- [ ] **Drum balance — budget a real balancing pass.** With drive on one end, any imbalance becomes a cyclic torque the driven bearing absorbs at full weapon RPM. Balance the assembled drum (with teeth installed) before the first event.

- [ ] **Belt wrap on the motor pulley ≥ 120°.** Small wrap angle is where asymmetric layouts most often slip under shock load. If the current geometry gives marginal wrap, add an idler that pushes the belt into the motor pulley.

---

### **Onshape Reference**

**Document:** [Lucile (B2 workspace) on Onshape](https://cad.onshape.com/documents/7384224e9f8d48c6f38a9f45/w/7336d37dc577d20cabe8bf1a)

**Tabs:**
- `v1` — folder containing earlier (MK1) versions
- `LucilleMK2` (Part Studio) — 26 features, 11 parts. Features include named sketches `DrumSpace`, `UpRights`, `Drive`, plus the `#weapBelt` measured-variable feature. Parts: `MainBody`, `Front`, `Armour`, `BottomPlate`, plus 7 unnamed (`Part 5`–`Part 11`).
- `LucilleMK2` (Assembly, green E badge) — sources parts from the chassis Part Studio + the external `components` document (`docId 1679072012d40b3f64358bb7`) for wheels, sprockets, motors, and gearbox; 7 mates (4 revolutes for the wheels, 1 planar, 2 fastened).
- `Weapon` (Part Studio) — 25 features, 6 parts: `Drumm` + 3x `Teeth` + 2 unnamed. `Circular pattern 1` places the 3 teeth around the drum.
- `WeaponAssembly` — drum + 2x `MB-688` (MR688 bearings) + countersunk M5 screws via Replicate features; 4 fastened mates.

#### Component inventory (from Assembly API)

The "9 instances" shown grouped in the UI panel expand into the following actual components — most are linked from the external `components` document for reuse across the project:

| Source eid (external) | Component | Configuration | Quantity | Notes |
|---|---|---|---|---|
| `36c9874a2e65608d1a3dd8f0` | **Wheel assembly** (`56x28rz assembly`) | `id=5.3 mm, t=33` | 4x (2 in panel + Mirror) | 56 mm OD × 28 mm wide RZ knobby tire on hub |
| `00a8f9da4f23b0358af0d348` | **Drive belt sprocket** (Part 1 in panel) | `BeltWidht=4 mm, ID=5 mm, T=33` | 2x | **33-tooth pulley, 4 mm belt width, 5 mm bore** — fits gearbox output shaft |
| `fdca097663375a0b69bf5df4` | **Wheel-side belt sprocket** | `id=5.3 mm, t=33` | 4x | Same 33T pulley, 5.3 mm bore — fits wheel axle |
| `4d594701780e39fe1d5b3cca` | Motor (Part 1/2 ×2, cfg default) | — | 2x | Either D2830 weapon motor or 2322 drive motor — **needs CAD confirmation** |
| `e0be2520677b194d81ae0b11` | Motor (Part 1/2 ×2, cfg default) | — | 2x | The other motor — **needs CAD confirmation** |
| `3cd4dfa0cf3773531c96efd0` | **Planetary gearbox** (`recGearBox`) | `List_TeoiCDa5IJL3AV=_25` (25:1) | 2x (4 parts each) | 25:1 reduction, 4 sub-parts per gearbox (housing + planets + carrier + output) |
| local `6550c19291db3295e85db52c` | `WeaponAssembly` | default | 1x | Drum + 3 teeth + 2 MR688 bearings + 3x M5x40 countersunk screws |

> [!info] Drive system implication
> Drive train per side: **2322 brushless → 25:1 planetary → 33T sprocket (5mm bore) → 4mm belt → 33T sprocket (5.3mm bore) → wheel axle.** Both wheels on a side are belted off the gearbox output, both at 1:1 (33T → 33T). The belt has 4 mm width (likely GT2 profile at this scale).

> [!warning] Two motor types to disambiguate
> Two different external motor elements (`4d59…` and `e0be…`) are used. One is the D2830 1000kv weapon motor, the other is the 2322 brushless drive motor. The instance names in the UI panel (`Motor`, `2322 NEEBRK`) suggest `2322 NEEBRK` = the drive motor and the generic `Motor` = the weapon D2830, but this should be confirmed by inspecting which element each label maps to.

**Key dimensions pulled from sketches (Onshape API):**

| Source sketch | Constraint | Value | What it is (best read) |
|---|---|---|---|
| Weapon / Sketch 1 | DIAMETER | **60 mm** | Drum OD |
| Weapon / Sketch 1 | DIAMETER | 40 mm | Drum inner hub or end-cap recess |
| Weapon / Sketch 1 | DIAMETER | **16 mm** | Drum shaft bore (matches MR688 OD) |
| Weapon / Sketch 1 | DIAMETER | 10 mm | Hub feature |
| Weapon / Extrude 8 | depth | **130 mm** | Drum length |
| Weapon hole features | Ø 5 x 40 mm | M5 x 40 | Tooth-mount fasteners (x3) |
| Chassis / DrumSpace | DIAMETER | 81 mm | Drum clearance circle |
| Chassis / DrumSpace | DIAMETER | 50 mm | Inner clearance (around shaft/pulley) |
| Chassis / DrumSpace | DIAMETER | 42 mm | Weapon-belt pulley reference |
| Chassis / Drive | DIAMETER | **56 mm** | Wheel-side reference (matches 56x28 tire) |
| Chassis / Drive | DIAMETER | **42 mm** | Wheel pulley pitch diameter |
| Chassis / Drive | DISTANCE | 55 mm | Wheel-to-wheel or motor-to-wheel center |
| Chassis / Drive | DISTANCE | 18 mm | Pulley spacing |
| Chassis / UpRights | LENGTH | 180 mm | Tower long edge |
| Chassis / UpRights | LENGTH | 35 mm / 30 mm | Tower short features |
| Chassis / UpRights | RADIUS | 25 mm | Tower corner radius |
| Chassis / UpRights | DIAMETER | 16 mm | Bearing seat (MR688 OD) |
| Chassis / UpRights | DIAMETER | 4.8 mm | Tower fastener clearance (M5 clearance) |
| Chassis / Shell | LENGTH | 7 mm | Wall feature |
| Chassis / Shell | DIAMETER | 2.8 mm | Tap-size hole (likely M3 tapped) |
| Variable `#weapBelt` | measured length | **225.366 mm** | Weapon belt length |

> [!note] How the belt length is set
> `#weapBelt` is a `MEASURED` variable: it measures actual geometry in the sketch and writes the result back as a variable, so any change to pulley size or motor position automatically updates the belt length used downstream. Don't hand-edit it — change the pulley/motor geometry instead.

**Onshape screenshots:**
- ![[Robotics/Lucile MK2/_resources/onshape-lucillemk2-assembly.png]] LucilleMK2 Assembly — full robot view with motor mounted on right upright
- ![[Robotics/Lucile MK2/_resources/onshape-lucillemk2-partstudio.png]] LucilleMK2 Part Studio in assembly context — chassis bodies + parts list
- ![[Robotics/Lucile MK2/_resources/onshape-weapon-partstudio.png]] Weapon Part Studio — drum with 2 of 3 teeth visible
- ![[Robotics/Lucile MK2/_resources/onshape-weapon-assembly.png]] WeaponAssembly — drum + bearings + tooth fasteners
- ![[Robotics/Lucile MK2/_resources/onshape-chassis-sketch1.png]] Chassis Sketch 1 — side view showing wheel pulleys, drive belt path, weapon belt path

---

### **Open Design Questions**

- [x] ~~Drum diameter and final mass~~ — **OD 60 mm, length 130 mm** from CAD. Mass still TBD until material density × volume is run.
- [ ] Tooth geometry and material (hardened steel? tool steel inserts?) — 3 teeth, M5 x 40 mm bolts; geometry visible in CAD but material is undecided
- [ ] Belt sizing — weapon belt length pinned at 225.366 mm; pitch/width/tooth profile still need a spec
- [ ] Battery: capacity and physical mounting location (asymmetric-mass placement on the left, per placement-A constraints)
- [ ] ESC selection — weapon ESC current rating for D2830 stall, drive ESCs for the 2322 brushless
- [ ] Top armor / weapon guard above the drum
- [ ] Self-righting strategy — is the new geometry symmetric enough to drive inverted?
- [ ] Final weight target vs. beetleweight 1500g cap
- [ ] Rename `Part 5`–`Part 11` (chassis) and `Part 5`–`Part 6` (weapon) in CAD for legibility

---

### **Build TODO**

#### Weapon
- [ ] Finalize drum diameter and tooth count
- [ ] Source machined aluminum drum blank
- [ ] Design replaceable tooth inserts (geometry + fastener spec)
- [ ] Select weapon ESC sized for D2830 1000kv on 3S
- [ ] Belt + pulley sizing between D2830 and drum shaft

#### Drive
- [ ] Confirm 2322 + 25:1 planetary output speed/torque math at 3S
- [ ] Design belt tensioner / mounting for the dual-belt-per-side layout
- [ ] Select wheel hubs and tire size compatible with the belt routing
- [ ] Drive ESC pair sized for the 2322 brushless stall

#### Chassis & Armor
- [ ] Side tower TPU print — bearing fit for drum shaft
- [ ] Top plate material (carbon? G10? rigid composite?)
- [ ] Wiring channels through TPU to keep belts clear

#### Electronics
- [ ] Battery selection (3S capacity for 4x brushless drive + brushless weapon)
- [ ] Power distribution: arming link, master switch, fuse strategy
- [ ] Reuse ER6 receiver and EdgeTX model profile from MK1 (see [[Radio Config MK2]])

#### Competition
- [ ] First event target (TBD)
- [ ] Spare drum + spare tooth set in pit kit
- [ ] Verify final weight ≤ 1500g (Portuguese Beetleweight)
