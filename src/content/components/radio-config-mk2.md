---
tags:
  - Robotics/Lucille MK2/Config
---

# EdgeTX Model Profile: Lucille MK2

Carried over from [[Radio Config|MK1 Radio Config]] with the model name updated. The control stack (RadioMaster ER6, ExpressLRS 2.4GHz, EdgeTX radio) is unchanged from MK1 — only the model entry on the radio and the channel assignments need to match MK2's brushless ESCs.

## 🎮 Model Settings (Standard)

| Feature | Value | Notes |
| :--- | :--- | :--- |
| **Model Name** | LUCILLE MK2 | New model slot, separate from MK1 |
| **Internal RF** | OFF | Using ELRS External Module |
| **External RF** | CRSF | (ExpressLRS) |
| **Channel Range** | CH1 - CH8 | |

## 🕹 Inputs
*   **[I]Steer:** Source: `Ail`, Weight: `75`, Expo: `25` (Smoother turns).
*   **[I]Drive:** Source: `Ele`, Weight: `100`, Expo: `15`.
*   **[I]Wep:** Source: `Thr`, Weight: `100` (Left stick).

## 🎛 Mixes (Single-Stick Drive)

MK2 has **two drive ESCs** (one per side, each driving the front+rear wheel via belt). The mix is the same tank-style arcade mix as MK1 — left stick = throttle, right stick = steering, mixed into per-side outputs.

*   **CH1 (L_DRIVE_ESC):**
    *   `+100% [I]Drive`
    *   `+100% [I]Steer`
*   **CH2 (R_DRIVE_ESC):**
    *   `+100% [I]Drive`
    *   `-100% [I]Steer` (Inverted steering for tank mix)
*   **CH3 (WEAPON ESC):**
    *   `+100% [I]Wep`
*   **CH5 (ARMING):**
    *   Source: `SF` (2-position switch). Must be High (+100%) for ELRS Arm.

> [!note] Brushless ESC calibration
> Unlike MK1's brushed ESCs, MK2's drive and weapon ESCs are brushless. They need throttle endpoint calibration on first power-up (full stick high → beep → full stick low → beep) before the mixes will track correctly. Do this on the bench with wheels off the ground / drum unbalanced-side-down.

## 🔄 Inverted Profile (Inverted Mode)
Same approach as MK1 — Global Variable or Special Function on a switch (e.g., `SC`) inverts the drive axis.

### Inverted Mixes:
*   **CH1:**
    *   `-100% [I]Drive` (Inverted forward/back)
    *   `+100% [I]Steer`
*   **CH2:**
    *   `-100% [I]Drive`
    *   `-100% [I]Steer`

---

# ExpressLRS Settings

Same as MK1 — copy the settings from [[Radio Config]] when first binding the ER6 on MK2.

| Setting | Value | Why? |
| :--- | :--- | :--- |
| **Packet Rate** | 150Hz | Solid reliability in noisy arena environments. |
| **Telem Ratio** | Off (or 1:128) | Prioritize control over telemetry. |
| **Switch Mode** | Wide | Required for full resolution on weapon channel. |
| **Model Match** | ON | **CRITICAL:** Prevents driving the wrong bot in the pits — and now there are two Lucille model entries on the radio. |
| **TX Power** | 100mW | Sufficient for arena penetration. |

## ⚠️ Safety Logic (Logical Switches)
*   **L01:** `a < x`, `[I]Wep`, `-98%` (Weapon stick at zero).
*   **L02:** `AND`, `L01`, `SF↑` (Arming switch is ON).
*   **Special Function:** `SF1`: `IF !L02`, `Override CH3`, `-100` (Safety cutoff: weapon cannot spin unless stick is at zero AND arming is active).

---
**Back to:** [[Lucille MK2]]
