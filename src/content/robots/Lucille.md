---
fileClass: CombatRobot
robot_name: Lucille
created: 2026-03-07
status: discontinued
discontinued_date: 2026-05-26
discontinued_after: Iberanime
successor: "[[Lucille MK2]]"
concept: The Walking Dead (Negan's Bat)
cover: mk1-assembly-isometric.png
photos: https://photos.app.goo.gl/uwMD6yo8ADeRi4NT9
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
> Lucille (MK1) was retired after **Iberanime**. The platform has been superseded by **[[Lucille MK2]]**, which moves to a brushless drivetrain and a wider front-mounted horizontal drum with replaceable teeth.
> This page is preserved as historical reference for the original beetleweight build.

**Lucille** is a combat robot that prioritizes aggressive, intimidating aesthetics paired with a low-slung, durable chassis. Named after the infamous bat from _The Walking Dead_, its design language is centered around a "brute force" approach to kinetic energy.

---

### Events
- [[Oeiras Gaming 2026]]

### Photos
- [Build & combat album on Google Photos](https://photos.app.goo.gl/uwMD6yo8ADeRi4NT9)

### Visual & Physical Profile

![[Robotics/Lucille/_resources/f41cbabb7da661a5207849c15a316721_MD5.png]]

The robot features a **low-profile wedge** design, intended to slide underneath opponents and feed them directly into its spinning drum.

- **The Chassis:** Primarily composed of **3D-printed TPU**, the body acts as a shock absorber. It's thick and "rubbery," allowing it to bounce back from high-energy impacts rather than shattering like rigid plastics.

- **The Wedge:** At the front sits a **45-degree 2mm steel feeder wedge**. This provides a hard, heavy-duty edge to win the "ground game," ensuring Lucille can get under an opponent's armor.

- **The Weaponry:** The centerpiece is a redesigned **310g split drum**. It features two **1.5mm machined aluminum sleeves** flanking a central **GT2 belt drive**. To maximize "bite" on impact, the drum uses a specific asymmetric screw layout: 4× M6 screws arranged in two pairs 180 degrees apart — one pair aligned close together and the other spread wide across the drum's width.

![[Robotics/Lucille/_resources/mk1-assembly-isometric.png]]
![[Robotics/Lucille/_resources/mk1-assembly-back.png]]
![[Robotics/Lucille/_resources/mk1-assembly-right.png]]

---

### Internal Mechanics

- [[Radio Config|EdgeTX & ELRS Configuration]]

- **The Heart (Weapon System):** A high-speed **RS2205 2300kv** motor drives the drum via a central **GT2 200-2M-10 belt**. On a **3S LiPo** battery, this motor spins at roughly **25,000 RPM** (unloaded). The central belt drive reduces the risk of belt slippage compared to side-mounted systems.

- **The Muscle (Drive System):** Lucille moves on **Lego 56x28 ZR tires**, which provide a unique balance of grip and impact resistance. These are driven by **400 RPM geared motors**, giving it a controlled but authoritative presence on the arena floor.

- **The Brains (Control):** Utilizing the **ExpressLRS (ELRS)** protocol via a RadioMaster ER6, Lucille benefits from ultra-low latency. This means the driver's inputs are near-instantaneous, crucial for lining up a shot with the drum.

---

### Combat Strategy

Lucille is designed to be a **distractor and a destroyer**. The 2mm steel wedge forces the opponent upward, where the screw-studded drum makes contact. Because the drum is solid PETG but weighted with steel screws and tie-rods, it carries significant rotational inertia — enough to flip or severely gouge opponents of the same weight class.

The TPU armor ensures that even if Lucille takes a hit, the internal electronics remain isolated from the vibration and shock of the impact.

---

### Descrição Técnica (Português)

**Lucille** é um robô de combate da categoria **Beetleweight (1,5 kg)**, com peso final de **1100g**, construído em torno de um tambor rotativo como arma principal.

#### Estrutura e Blindagem

O chassis é fabricado em **TPU impresso em 3D**, com espessuras entre **10 mm e 30 mm**. O TPU funciona como amortecedor estrutural — absorve e dissipa energia de impacto por deformação elástica, protegendo os componentes internos contra vibrações e choques. Na frente, uma cunha de **aço de 2 mm a 45°** serve como alimentador, forçando o adversário para cima e em direção ao tambor.

#### Sistema de Arma

A arma é um **tambor bipartido** com **310g** de massa, composto por duas **mangas de alumínio usinado de 1.5 mm** e uma **polia central GT2**. O tambor utiliza uma configuração de 4 parafusos M5 para maximizar o "bite": dois pares posicionados a 180°, com um par próximo ao centro e o outro afastado, cobrindo uma maior área de impacto. O tambor é acionado por um motor brushless **RS2205 de 2300 kv** através de uma **correia GT2 200-2M-10**, alimentado por uma bateria **LiPo 3S (11,1V) de 850 mAh a 70C**. A configuração de tração central minimiza o risco de a correia saltar durante impactos. Sem carga, o motor atinge aproximadamente **25.000 RPM**.

#### Sistema de Locomoção

A tração é feita por **motores DC com caixa de redução 25GA-370** a **400 RPM (12V)**, acoplados a **pneus Lego 56x28 ZR**. Esta combinação oferece aderência elevada e controlo preciso a baixa velocidade — ideal para manobras de posicionamento em combate.

#### Sistema de Controlo

O robô utiliza um recetor **RadioMaster ER6** com protocolo **ExpressLRS (ELRS) a 2,4 GHz**, garantindo latência ultra-baixa na comunicação entre o comando e o robô. O sinal PWM do recetor controla diretamente os ESCs de arma e locomoção.

#### Princípio de Funcionamento

A estratégia de combate baseia-se em dois mecanismos: (1) a cunha frontal desestabiliza o adversário, levantando-o do solo; (2) o tambor rotativo, com elevada inércia rotacional devido à massa dos parafusos e tirantes de aço, transfere energia cinética ao ponto de contacto, causando dano estrutural por arranque de material ou projeção do oponente. A blindagem em TPU garante que o chassis absorva impactos de retorno sem falha frágil.
