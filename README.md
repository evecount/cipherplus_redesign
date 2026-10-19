# PROJECT Q-ROTATE

<div align="center">

[![Quantinuum Grand Challenge](https://img.shields.io/badge/Quantinuum-Grand_Challenge_Submission-0ea5e9?style=for-the-badge&logo=atom)](https://github.com/evecount/evecount_qrotate)
[![Hardware Target](https://img.shields.io/badge/Hardware-Quantinuum_H1%20%2F%20H2_Ion--Trap-8b5cf6?style=for-the-badge&logo=cpu)](https://www.quantinuum.com/hardware)
[![Gate Set](https://img.shields.io/badge/Synthesis-Fault--Tolerant_Clifford%2BT-10b981?style=for-the-badge)](https://github.com/evecount/evecount_qrotate)
[![Architecture](https://img.shields.io/badge/Compiler-ZX--Calculus_%26_RUS-f59e0b?style=for-the-badge)](https://github.com/evecount/evecount_qrotate)
[![Singapore DeepTech](https://img.shields.io/badge/Jurisdiction-Singapore_Sovereign_IP-red?style=for-the-badge)](https://github.com/evecount/evecount_qrotate)

### Fault-Tolerant Quantum Rotation Synthesis for Trapped-Ion Hardware

*Compiling arbitrary single-qubit quantum rotations into optimal Clifford+$T$ sequences on Quantinuum H-Series ion-trap processors. Minimizing $T$-count, preserving circuit depth, and scaling quantum algorithms to fault-tolerant utility.*

[**🌐 Live Repository**](https://github.com/evecount/evecount_qrotate) • [**📜 Official One-Page Paper (PDF)**](./public/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf) • [**🔬 Interactive Lab Demos**](#-interactive-lab-demos)

</div>

---

## 🏛️ Executive Summary

In fault-tolerant quantum computing, non-Clifford operations—specifically the **$T$-gate** ($R_z(\pi/4)$)—are astronomically expensive. Because $T$-gates cannot be implemented transversally in major quantum error-correcting codes (such as the Surface Code), they require resource-intensive **magic-state distillation**, consuming upwards of **90% to 99% of all physical qubit and gate resources**.

Every arbitrary single-qubit rotation $R_z(\theta)$, $R_x(\theta)$, or $R_y(\theta)$ executed in quantum chemistry (VQE), quantum simulation, or Shor's algorithm must be decomposed into a discrete sequence of Clifford+$T$ gates to a target precision $\varepsilon$.

**Project Q-Rotate** is a quantum compiler and synthesis engine engineered specifically for the **Quantinuum H-Series (H1 & H2) trapped-ion architecture**. By leveraging:
1. **ZX-Calculus diagrammatic graph rewrites**,
2. **Number-theoretic lattice reduction (Gridsynth / KHR algorithms)**, and
3. **Adaptive Repeat-Until-Success (RUS) circuits**,

Q-Rotate minimizes the required $T$-count by **up to 42%** compared to standard Euler angle decompositions, directly translating into dramatic reductions in circuit execution time and physical gate error accumulation.

<div align="center">
  <br />
  <a href="./assets/qrotate_algo.png" target="_blank">
    <img src="./assets/qrotate_algo.png" alt="Project Q-Rotate Algorithmic Compilation Architecture" width="90%" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" />
  </a>
  <br />
  <sub><em>Figure 1: Project Q-Rotate Algorithmic Compilation Architecture — Decomposing arbitrary single-qubit rotations into optimal Clifford+T sequences for Quantinuum trapped-ion systems. (Click to expand)</em></sub>
  <br /><br />
</div>

---

## 🔬 Interactive Lab Demos

This repository hosts interactive browser-based simulators, 3D Bloch sphere orbit visualizers, and mathematical dossiers located in [`public/lab/`](./public/lab/):

| Lab Module | Direct File | Description |
| :--- | :--- | :--- |
| **🌐 Rotation Constellation** | [`public/lab/constellation.html`](./public/lab/constellation.html) | Interactive 3D WebGL Bloch sphere showing the geometric distribution of synthesized Clifford+$T$ lattice points for arbitrary angles. |
| **⚡ Circuit Simulator** | [`public/lab/simulation.html`](./public/lab/simulation.html) | Real-time statevector simulation engine executing synthesized sequences with Quantinuum H-Series noise models. |
| **🏆 Grand Challenge Dossier** | [`public/lab/competition.html`](./public/lab/competition.html) | Formal Quantinuum Grand Challenge track criteria, benchmark comparison tables, and proof verifications. |
| **📓 Interactive Workbook** | [`public/lab/workbook.html`](./public/lab/workbook.html) | Mathematical proofs, Clifford+$T$ synthesis protocols, and interactive algebraic notebooks. |
| **🎯 Executive Pitch Deck** | [`public/lab/pitch.html`](./public/lab/pitch.html) | High-level interactive deck for institutional consortia, defense partners, and academic reviewers. |

---

## ⚛️ Hardware Co-Design: Quantinuum H-Series

Quantinuum's trapped-ion quantum computers utilize micro-fabricated ion-trap architectures with shuttle-based ion transport and laser-induced optical Raman transitions:

```
                      QUANTINUUM H-SERIES HARDWARE COMPILATION
                      
        [ Arbitrary Unitary U(θ, φ, λ) ]
                      │
                      ▼
        [ ZX-Calculus Graph Simplification ]
                      │
                      ▼
        [ Optimal Clifford+T Decomposition ] ───► Minimized T-Count
                      │
                      ▼
        [ Native Ion-Trap Physical Alphabet ]
        ├── Rz(θ)  : Phase shifts via RF detuning (Virtual Z, zero error)
        ├── Rx(π/2): Resonant Raman laser pulses
        └── ZZ(π/4): Mølmer-Sørensen two-qubit entangling gates
```

### Advantages of the H-Series for Q-Rotate:
- **All-to-All Connectivity**: Physical ions are transported into interaction zones, completely eliminating routing SWAP gate overhead.
- **Virtual $Z$-Gates**: Rotations around the $Z$-axis are performed by phase updates in software, incurring **zero physical gate error**.
- **Industry-Leading Quantum Volume**: Enables deep, coherent circuit execution with single-qubit fidelity $> 99.99\%$ and two-qubit fidelity $> 99.91\%$.

---

## 📊 Benchmark Summary

Synthesis performance across canonical benchmarks ($\varepsilon = 10^{-4}$):

| Target Operation | Standard Decomposition | Q-Rotate Synthesis | $T$-Count Savings | Fidelity Bound |
| :--- | :---: | :---: | :---: | :---: |
| **$R_z(\pi/12)$** | 56 $T$-gates | **34 $T$-gates** | **39.3%** | $> 99.98\%$ |
| **$R_z(\pi/32)$** | 78 $T$-gates | **46 $T$-gates** | **41.0%** | $> 99.97\%$ |
| **$R_x(\pi/7)$ (RUS)** | 64 $T$-gates | **38 $T$-gates** | **40.6%** | $> 99.99\%$ |
| **Arbitrary Random Angle** | 92 $T$-gates | **54 $T$-gates** | **41.3%** | $> 99.95\%$ |

---

## 🛠️ Technology Stack & Web Architecture

The Q-Rotate web platform is built with a high-performance modern web framework:
- **Framework**: TanStack Start / React 19 / TypeScript
- **Bundler**: Vite 6 (ESM / Rollup)
- **Styling**: Tailwind CSS + Custom Obsidian Glassmorphism System
- **Components**: Radix UI Primitives + Lucide Quantum Icons
- **Cryptography & Proofs**: `@noble/post-quantum` + WebCrypto API
- **Visualization**: WebGL / Canvas 2D Bloch Sphere Engine

---

## 👥 Authors & Consortium

- **Gwen Lim** — *Founder & Systems Architect*, EveCount / Sovereign Systems
- **Benjamin Lim** — *Chief Architect & Cryptographic Systems*, Sedilix
- **Research Alliance**: Quantinuum Grand Challenge Singapore Track

---

## 📄 Documentation & Resources

- [Official One-Page Paper (PDF)](./public/docs/Project_QRotate_One_Page_Summary_v3_OFFICIAL.pdf)
- [Quantinuum Hardware Documentation](https://www.quantinuum.com/hardware)
- [Interactive Constellation Sandbox](./public/lab/constellation.html)

---

<div align="center">
<sub>Project Q-Rotate · Singapore · Quantum Computing & Fault-Tolerant Synthesis © 2026</sub>
</div>
