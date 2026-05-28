---
tags:
  - Robotics/Lucile/Config
---

# EdgeTX Model Profile: Lucille

This document provides the technical configuration for **Lucille** on EdgeTX-based radios (e.g., RadioMaster Boxer, TX16S).

## 🎮 Model Settings (Standard)

| Feature | Value | Notes |
| :--- | :--- | :--- |
| **Model Name** | LUCILLE | |
| **Internal RF** | OFF | Using ELRS External Module |
| **External RF** | CRSF | (ExpressLRS) |
| **Channel Range** | CH1 - CH8 | |

## 🕹 Inputs
*   **[I]Steer:** Source: `Ail`, Weight: `75`, Expo: `25` (Smoother turns).
*   **[I]Drive:** Source: `Ele`, Weight: `100`, Expo: `15`.
*   **[I]Wep:** Source: `Thr`, Weight: `100` (Left stick).

## 🎛 Mixes (Single-Stick Drive)
*   **CH1 (L_MOT):**
    *   `+100% [I]Drive`
    *   `+100% [I]Steer`
*   **CH2 (R_MOT):**
    *   `+100% [I]Drive`
    *   `-100% [I]Steer` (Inverted steering for tank mix)
*   **CH3 (WEAPON):**
    *   `+100% [I]Wep`
*   **CH5 (ARMING):**
    *   Source: `SF` (2-position switch). Must be High (+100%) for ELRS Arm.

## 🔄 Inverted Profile (Inverted Mode)
To drive easily when Lucille is flipped, create a **Global Variable** or a **Special Function** triggered by a switch (e.g., `SC`).

### Inverted Mixes:
*   **CH1:**
    *   `-100% [I]Drive` (Inverted forward/back)
    *   `+100% [I]Steer`
*   **CH2:**
    *   `-100% [I]Drive`
    *   `-100% [I]Steer`

---

# ExpressLRS Settings

For the RadioMaster ER6 receiver on Lucille, use the following settings in the `elrs.lua` script:

| Setting | Value | Why? |
| :--- | :--- | :--- |
| **Packet Rate** | 150Hz | Solid reliability in noisy arena environments. |
| **Telem Ratio** | Off (or 1:128) | Prioritize control over telemetry. |
| **Switch Mode** | Wide | Required for full resolution on weapon channel. |
| **Model Match** | ON | **CRITICAL:** Prevents driving the wrong bot in the pits. |
| **TX Power** | 100mW | Sufficient for arena penetration. |

## ⚠️ Safety Logic (Logical Switches)
*   **L01:** `a < x`, `[I]Wep`, `-98%` (Weapon stick at zero).
*   **L02:** `AND`, `L01`, `SF↑` (Arming switch is ON).
*   **Special Function:** `SF1`: `IF !L02`, `Override CH3`, `-100` (Safety cutoff: weapon cannot spin unless stick is at zero AND arming is active).
