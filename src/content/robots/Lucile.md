---
fileClass: CombatRobot
robot_name: Lucille
status: discontinued
discontinued_date: 2026-05-26
discontinued_after: Iberanime
successor: "[[Lucile MK2]]"
concept: The Walking Dead (Negan's Bat)
cover: mk1-assembly-isometric.png
weapon_type: Split Metal-Sleeved Drum
weapon_mass: 310g
weapon_hardware: 2x 1.5mm Aluminum Sleeves, Central GT2 Pulley (200-2M-10 belt), 4x M6 Screws (Asymmetric Bite Configuration)
weapon_motor: RS2205 2300kv
battery_voltage: "[[Battery CNHL MiniStar Lipo 3S 11.1V 850mAh 70C XT30U]]"
gearing: 30T to 40T GT2
drive_motors: "[[DC Gear Motor, 25mm DC 12V 25GA-370 Low Speed Metal Gear Motor for Electronic Lock(12V 400RPM)  Amazon.es Industrial & Scientific]]"
wheels: Lego 56x28 ZR Tires
armor_material: 10mm-30mm TPU
wedge_specs: 2mm Steel (45-degree)
receiver: "[[ER6 2.4GHz ELRS PWM Receiver]]"
category: beetle
weight: "1100"
---

> [!warning] DISCONTINUED
> Lucille (MK1) was retired after **Iberanime**. The platform has been superseded by **[[Lucile MK2]]**, which moves to a brushless drivetrain and a wider front-mounted horizontal drum with replaceable teeth.
> This page is preserved as historical reference for the original beetleweight build.

**Lucille** is a combat robot that prioritizes aggressive, intimidating aesthetics paired with a low-slung, durable chassis. Named after the infamous bat from _The Walking Dead_, its design language is centered around a "brute force" approach to kinetic energy.

---


### **Events**
- [[Oeiras Gaming 2026]]

### **Visual & Physical Profile**
[[Robotics/Lucile/_resources/f41cbabb7da661a5207849c15a316721_MD5.png|Open: Pasted image 20260504165523.png]]
![[Robotics/Lucile/_resources/f41cbabb7da661a5207849c15a316721_MD5.png]]
The robot features a **low-profile wedge** design, intended to slide underneath opponents and feed them directly into its spinning drum.

- **The Chassis:** Primarily composed of **3D-printed TPU**, the body acts as a shock absorber. It’s thick and "rubbery," allowing it to bounce back from high-energy impacts rather than shattering like rigid plastics.
    
- **The Wedge:** At the front sits a **45-degree 2mm steel feeder wedge**. This provides a hard, heavy-duty edge to win the "ground game," ensuring Lucille can get under an opponent's armor.
    
- **The Weaponry:** The centerpiece is a redesigned **310g split drum**. It features two **1.5mm machined aluminum sleeves** flanking a central **GT2 belt drive**. To maximize "bite" on impact, the drum uses a specific asymmetric screw layout: 4x M6 screws arranged in two pairs 180 degrees apart—one pair aligned close together and the other spread wide across the drum's width.
    

---

### **Internal Mechanics**
- [[Radio Config|EdgeTX & ELRS Configuration]]

- **The Heart (Weapon System):** A high-speed **RS2205 2300kv** motor drives the drum via a central **GT2 200-2M-10 belt**. On a **3S LiPo** battery, this motor spins at roughly **25,000 RPM** (unloaded). The central belt drive reduces the risk of belt slippage compared to side-mounted systems.
    
- **The Muscle (Drive System):** Lucille moves on **Lego 56x28 ZR tires**, which provide a unique balance of grip and impact resistance. These are driven by **400RPM geared motors**, giving it a controlled but authoritative presence on the arena floor.
    
- **The Brains (Control):** Utilizing the **ExpressLRS (ELRS)** protocol via a RadioMaster ER6, Lucille benefits from ultra-low latency. This means the driver's inputs are near-instantaneous, crucial for lining up a shot with the drum.
    

---

### **Combat Strategy**

Lucille is designed to be a **distractor and a destroyer**. The 2mm steel wedge forces the opponent upward, where the screw-studded drum makes contact. Because the drum is solid PETG but weighted with steel screws and tie-rods, it carries significant rotational inertia—enough to flip or severely gouge opponents of the same weight class.

The TPU armor ensures that even if Lucille takes a hit, the internal electronics remain isolated from the vibration and shock of the impact.

---

### **Descrição Técnica**

**Lucille** é um robô de combate da categoria **Beetleweight (1,5 kg)**, com peso final de **1100g**, construído em torno de um tambor rotativo como arma principal.

#### **Estrutura e Blindagem**

O chassis é fabricado em **TPU impresso em 3D**, com espessuras entre **10 mm e 30 mm**. O TPU funciona como amortecedor estrutural — absorve e dissipa energia de impacto por deformação elástica, protegendo os componentes internos contra vibrações e choques. Na frente, uma cunha de **aço de 2 mm a 45°** serve como alimentador, forçando o adversário para cima e em direção ao tambor.

#### **Sistema de Arma**

A arma é um **tambor bipartido** com **310g** de massa, composto por duas **mangas de alumínio usinado de 1.5mm** e uma **polia central GT2**. O tambor utiliza uma configuração de 4 parafusos M5 para maximizar o "bite": dois pares posicionados a 180°, com um par próximo ao centro e o outro afastado, cobrindo uma maior área de impacto. O tambor é acionado por um motor brushless **RS2205 de 2300 kv** através de uma **correia GT2 200-2M-10**, alimentado por uma bateria **LiPo 3S (11,1V) de 850 mAh a 70C**. A configuração de tração central minimiza o risco de a correia saltar durante impactos. Sem carga, o motor atinge aproximadamente **25.000 RPM**.

#### **Sistema de Locomoção**

A tração é feita por **motores DC com caixa de redução 25GA-370** a **400 RPM (12V)**, acoplados a **pneus Lego 56x28 ZR**. Esta combinação oferece aderência elevada e controlo preciso a baixa velocidade — ideal para manobras de posicionamento em combate.

#### **Sistema de Controlo**

O robô utiliza um recetor **RadioMaster ER6** com protocolo **ExpressLRS (ELRS) a 2,4 GHz**, garantindo latência ultra-baixa na comunicação entre o comando e o robô. O sinal PWM do recetor controla diretamente os ESCs de arma e locomoção.

#### **Princípio de Funcionamento**

A estratégia de combate baseia-se em dois mecanismos: (1) a cunha frontal desestabiliza o adversário, levantando-o do solo; (2) o tambor rotativo, com elevada inércia rotacional devido à massa dos parafusos e tirantes de aço, transfere energia cinética ao ponto de contacto, causando dano estrutural por arranque de material ou projeção do oponente. A blindagem em TPU garante que o chassis absorva impactos de retorno sem falha frágil.

---

### **Onshape Reference** (CAD discovery 2026-05-28)

**Document:** [Lucile (B2 workspace) on Onshape](https://cad.onshape.com/documents/7384224e9f8d48c6f38a9f45/w/7336d37dc577d20cabe8bf1a) — MK1 lives in the **`v1` folder** of this workspace.

**Tabs in the `v1` folder:**

| Tab | Type | Role |
|---|---|---|
| `Lucile` | Assembly | The complete MK1 assembly — 36 instances, ~17 mate features |
| `lucile` | Part Studio | **Master chassis** — 87 features (sketches, extrudes, shell, sheet metal, mirrors, booleans). Where the bulk of the chassis geometry lives. |
| `Drum2` | Part Studio | The MK1 weapon drum |
| `fiiins` | Part Studio | Derived from chassis; adds the fin/tooth features (the 18 M5 screws on the drum surface) |
| `TopHat` | Part Studio | Derived from chassis; the **top plate** (3D printed shell on top) |
| `baeline` | Part Studio | Derived from chassis; baseline/reference for sheet-metal flat-pattern |
| `taQeta` | Part Studio | Small derived studio (88×23×59 mm) — likely a fastener or shaft detail |
| `headbut`, `jig`, `Part Studio 1` | Part Studios | Experimental / fixtures (small bbox, few features) |

#### Component inventory (from Assembly API — 36 instances)

| Instance | Quantity | What it is |
|---|---|---|
| `MainBody`, `Armour`, `TopPlate`, `BottomPlate`, `Front`, `wedge` | 1 each | Chassis bodies (TPU + steel wedge) |
| `Wheel` | 2 | Lego 56x28 ZR tires |
| `25ga-370-280-rpm-dc Motor` | 2 | Drive motors (one per side, brushed gearmotor) |
| `RS2205_v2 v1` | 1 | **Weapon motor** (brushless, 2300kv) |
| `gt2 40t` | 1 | GT2 40-tooth pulley (motor side, drives drum) |
| `gt2 60t` | 2 | GT2 60-tooth pulleys (drum side — split drum with one pulley each side?) |
| `625ZZ` | 2 | **5×16×5 mm** sealed bearings (drum shaft support) |
| `XT30_DIST_BOARD_LC 1 invert` | 1 | XT30 power distribution board, low-current variant |
| `Hex socket head countersunk M5x0.8 × 20` | ~22 | Body fasteners |
| `Hex socket head cap M3x0.50 × 20` | ~4 | Smaller fasteners (motor mounts, PCB) |
| `Hex socket head cap M5x0.80 × 20` | 2 | Heavier-duty fasteners |
| `Part 1, 10, 11, 13, pin` | various | Miscellaneous local parts |

#### Key dimensions (from sketch constraints)

**Chassis (`lucile` Part Studio bbox: 245 × 186 × 69 mm)**
- Wheelbase / chassis length cues: **100 mm**, **70 mm**, **45 mm** (Sketch 1)
- Top-plate features: Sketch 15 has multiple distances of **22, 25, 27, 35, 55, 65, 70, 75 mm** — likely the fin/screw mounting pattern
- Motor mount hole: **Ø 4.8 mm / Ø 5.2 mm** clearance + tap holes
- Drum-bearing seat: **Ø 16 mm** (matches 625ZZ OD)

**Drum (`Drum2` bbox: 88 × 50 × 50 mm)**
- Drum body OD: **50 mm**
- Drum length: **88 mm** (full assembly), bore feature length **20 mm**
- Drum shaft: **Ø 8 mm** at one end, **Ø 5 mm** at the other ← *asymmetric shaft, matching 625ZZ bearings (5 mm bore)*
- Central pulley pitch reference: **Ø 30 mm** (visible in Sketch 1)

> [!note] Drum-bearing mismatch
> The drum sketch shows an **Ø 8 mm boss** but the assembly uses **625ZZ bearings** (5 mm bore, 16 mm OD). The 5 mm shaft side of the drum mates to the bearing; the 8 mm side is the pulley mounting boss. Asymmetric arrangement — drum is **driven on the 8 mm side** with a flanged pulley, and **supported on the 5 mm side** by the 625ZZ.

**Belt drive geometry**
- Drum pulley: **60T GT2** (× 2 in the assembly — one for each side of the split drum? More likely 2 spare/different revisions present in the same studio)
- Motor pulley: **40T GT2**
- Belt: per spec doc, **GT2 200-2M-10** (200 mm pitch length, 2 mm pitch, 10 mm width)
- Pulley ratio: **60/40 = 1.5:1 reduction** (matches "30T to 40T GT2" in spec doc frontmatter — possibly an older config; CAD shows 40/60)

#### Onshape multi-view (rendered from API, axis-convention same as MK2: CAD-front looks at robot rear)

| CAD view | Filename | What's in frame |
|---|---|---|
| Isometric | `mk1-assembly-isometric.png` | Hero shot — blue TPU chassis, drum + 18-screw teeth ring, drive motors with green PCBs, weapon motor + bracket on top |
| Top | `mk1-assembly-top.png` | Top-down: orange wedge (combat-front, at bottom of image), drum spans horizontally, two drive motors flanking, weapon motor on top |
| Bottom | `mk1-assembly-bottom.png` | Underside view |
| Front (CAD) | `mk1-assembly-front.png` | Looking at robot's REAR — narrow profile, top plate edge visible |
| Back (CAD) | `mk1-assembly-back.png` | **Looking at robot's combat-front.** Orange wedge runs the full width, drum visible above with bristled M5 screws |
| Right (CAD) | `mk1-assembly-right.png` | **Robot's LEFT side.** Clean side profile of wedge-to-chassis ramp, weapon motor bracket sticking up |
| Left (CAD) | `mk1-assembly-left.png` | Mirror of right |
| Trimetric | `mk1-assembly-trimetric.png` | Alternative iso |

![[Robotics/Lucile/_resources/mk1-assembly-isometric.png]]
![[Robotics/Lucile/_resources/mk1-assembly-top.png]]
![[Robotics/Lucile/_resources/mk1-assembly-back.png]]
![[Robotics/Lucile/_resources/mk1-assembly-right.png]]
![[Robotics/Lucile/_resources/mk1-assembly-bottom.png]]

#### MK1 → MK2 design changes (apparent from CAD diff)

| Aspect | MK1 (this doc) | MK2 ([[Lucile MK2]]) |
|---|---|---|
| Chassis colour / material | Blue TPU | Orange TPU |
| Chassis bbox | 245 × 186 × 69 mm | (similar overall, drum geometry shifted) |
| Drum OD | 50 mm | 60 mm |
| Drum length | 88 mm | 130 mm |
| Drum bearings | 625ZZ (5×16×5 mm) | MR688 (8×16×5 mm) |
| Drum teeth | **18× M5 screws** bristled in the drum body | **3× replaceable teeth** (machined) bolted with M5×40 in a circular pattern |
| Pulley setup | GT2 40T motor → 60T drum, 1.5:1 reduction | Placeholder 42mm OD drum pulley; flat-belt with motor-can-as-pulley planned |
| Weapon motor | RS2205 2300kv (brushless) | D2830 1000kv (brushless, slower kv for bigger drum) |
| Drive motors | 2× 25GA-370 brushed gearmotors | 2× 2322 brushless + 25:1 planetary |
| Drive train | Direct: motor → wheel | Belt-driven: motor → side belt → both wheels (4WD per side, 1:1) |
| Wedge | 2 mm steel, 45°, full-width front | **No wedge** — drum IS the front face |
| Wheels | Lego 56×28 ZR (2 wheels) | 56x28rz tires (4 wheels) |
| Bearings, fasteners | Mostly M3/M5 cap+countersunk steel | M5 countersunk + MR688 sealed |
| Power distribution | XT30_DIST_BOARD_LC (low-current variant) | TBD in MK2 |

---

### **Improvements TODO**

#### Weapon System
- [ ] Upgrade drum material from PETG to **UHMW or aluminum** for better impact resistance
- [ ] Replace M5 screw teeth with **hardened steel inserts** to reduce wear and improve bite
- [ ] Test **4S LiPo** compatibility with the RS2205 motor for higher weapon spin-up speed
- [ ] Add a **dedicated weapon ESC** with active braking for faster spin-down between matches
- [ ] Experiment with **asymmetric tooth geometry** for more aggressive bite angle

#### Drive System


#### Armor & Structure
- [ ] Redesign the wedge to have 2 different sloaps[[Robotics/Lucile/_resources/63d2f59dab43b2c022a00f945d3ea5de_MD5.png|Open: Pasted image 20260417121123.png]]
![[Robotics/Lucile/_resources/63d2f59dab43b2c022a00f945d3ea5de_MD5.png]]
- [ ] Add **top armor plate** to protect against overhead spinners and hammerbots
- [ ] Raise the weapon towers for inverted driving

#### Electronics & Control
	

#### Weight & Optimization


#### Competition Readiness
- [ ] Build a **spare drum assembly** (pre-balanced) for quick swaps
- [ ] Create a **pit repair kit** checklist with spare motors, ESCs, and hardware
- [ ] Practice **inverted driving** — current design may not self-right easily