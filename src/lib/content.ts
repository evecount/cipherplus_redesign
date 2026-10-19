export const NIST_URL = "https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program/details?validation=A7970";

export type Industry = { slug: string; n: string; name: string; short: string; mandate: string; risk: string; fix: string; scenario: { title: string; steps: string[] } };

export const industries: Industry[] = [
  { slug: "financial-services", n: "01", short: "Financial services", name: "Financial services, banking & fintech", mandate: "MAS Technology Risk Management guidelines and cross-border payment security.", risk: "Interbank pipelines, payment messaging and long-lived root certificate authorities exposed to future quantum decryption.", fix: "Drop-in post-quantum TLS and ML-DSA signature modules for transaction validation.",
    scenario: { title: "How a bank migrates its certificate authorities", steps: ["Inventory every RSA and ECC key, certificate and protocol across payment and messaging systems.", "Rank assets by data shelf-life — root CAs and long-term records first.", "Run hybrid classical + ML-DSA signatures in staging alongside existing PKI.", "Roll post-quantum TLS to internal pipelines, then external partners, with full rollback."] } },
  { slug: "defense", n: "02", short: "Defense & CII", name: "Sovereign defense & critical infrastructure", mandate: "National-security data longevity, dual-use secure communications and sovereign cryptographic independence.", risk: "Classified and operational data with decades-long sensitivity.", fix: "Air-gapped and embedded post-quantum libraries with zero external foreign dependencies.",
    scenario: { title: "Securing an air-gapped command network", steps: ["Audit cryptographic dependencies for foreign-sourced components.", "Embed validated ML-KEM key exchange in field and command devices.", "Sign every firmware and configuration update with ML-DSA.", "Train in-house teams to operate and audit the stack independently."] } },
  { slug: "telecom", n: "03", short: "Cloud & telecom", name: "Cloud providers & telecommunications", mandate: "Securing fibre backbones, 5G enterprise slices and customer cloud vaults.", risk: "High-volume key exchange across shared infrastructure.", fix: "High-throughput, hardware-accelerated quantum-safe key exchange.",
    scenario: { title: "Quantum-safe tunnels for enterprise customers", steps: ["Benchmark ML-KEM throughput on existing edge hardware.", "Offer hybrid quantum-safe VPN and TLS as a premium enterprise tier.", "Protect customer key vaults with post-quantum wrapping.", "Report migration progress to regulators and enterprise clients."] } },
  { slug: "healthcare", n: "04", short: "Healthcare & genomics", name: "Healthcare, genomics & biomedical research", mandate: "Protecting genomic data, clinical-trial IP and lifelong patient records under PDPA.", risk: "Genomic data stays sensitive for 70+ years — what is stolen today can be decrypted tomorrow.", fix: "Privacy-enhancing technologies combined with post-quantum encrypted storage.",
    scenario: { title: "Protecting a genomic data repository", steps: ["Classify datasets by sensitivity lifetime.", "Re-encrypt archives at rest with post-quantum key encapsulation.", "Enable research collaboration on encrypted data using privacy-enhancing tech.", "Sign data-sharing agreements and audit trails with ML-DSA."] } },
  { slug: "manufacturing", n: "05", short: "Manufacturing & semis", name: "Advanced manufacturing, aerospace & semiconductors", mandate: "Securing chip designs, supply-chain telemetry and industrial control systems.", risk: "Firmware update verification and IP transfer across multinational supply chains.", fix: "Quantum-resistant code signing with CipherSign and secure-boot firmware verification.",
    scenario: { title: "Signing firmware across a global supply chain", steps: ["Map every point where firmware and design files change hands.", "Introduce ML-DSA code signing in the build pipeline.", "Verify signatures at secure boot on devices and controllers.", "Exchange design IP with partners using quantum-safe encryption."] } },
];

export type Article = { slug: string; title: string; dek: string; date: string; read: string; body: { h?: string; p: string }[] };

export const articles: Article[] = [
  { slug: "harvest-now-decrypt-later", title: "Harvest now, decrypt later — explained for boards", dek: "Why data stolen today is a quantum problem today, not in ten years.", date: "2026-10-01", read: "5 min",
    body: [
      { p: "Encrypted data that looks useless to an attacker today can be stored cheaply and decrypted later, once a cryptographically relevant quantum computer exists. This is known as “harvest now, decrypt later”." },
      { h: "Why it is a board issue", p: "The risk is not when quantum computers arrive — it is how long your data must stay secret. If records must stay confidential for 10, 20 or 70 years, any encrypted copy taken today is already exposed." },
      { h: "A simple test", p: "Add how long your data must stay secret to how long a migration will take. If the total reaches past the arrival of quantum-capable adversaries, migration needs to start now." },
      { h: "What to ask your CISO", p: "Do we have an inventory of where RSA and elliptic-curve cryptography are used? Which data has the longest shelf-life? What is our post-quantum migration roadmap, and who owns it?" },
    ] },
  { slug: "nist-pqc-timeline", title: "The NIST post-quantum migration timeline", dek: "FIPS 203 and FIPS 204 are final. Here is what that means for your roadmap.", date: "2026-09-15", read: "6 min",
    body: [
      { p: "In 2024, NIST published its first finalised post-quantum standards: FIPS 203 (ML-KEM, for key establishment) and FIPS 204 (ML-DSA, for digital signatures). These are now the reference points for government and regulated-industry migration." },
      { h: "From standard to validated product", p: "A standard describes an algorithm; validation proves a specific implementation computes it correctly. NIST’s Cryptographic Algorithm Validation Program (CAVP) tests implementations independently and publishes a certificate." },
      { h: "Deprecation is coming", p: "NIST guidance signals that quantum-vulnerable algorithms such as RSA and ECC will be deprecated and then disallowed over the coming decade. Large organisations typically need several years to migrate." },
      { h: "Where to start", p: "Inventory, prioritise by data shelf-life, pilot hybrid deployments, then roll out. Choose implementations that are independently validated." },
    ] },
  { slug: "mas-trm-quantum", title: "Quantum risk and MAS Technology Risk Management", dek: "How financial institutions in Singapore can frame post-quantum readiness.", date: "2026-08-28", read: "4 min",
    body: [
      { p: "The MAS Technology Risk Management (TRM) guidelines expect financial institutions to manage cryptographic risk and keep pace with emerging threats. Quantum computing is one of those threats." },
      { h: "Cryptographic agility", p: "Institutions benefit from being able to swap algorithms without rebuilding systems. A post-quantum readiness programme is a practical way to build that agility." },
      { h: "Long-lived assets first", p: "Root certificate authorities, archived transaction records and interbank messaging carry the longest exposure and are natural first priorities." },
      { h: "Evidence for auditors", p: "A documented inventory, risk ranking and migration roadmap gives internal audit and regulators a clear picture of progress. This article is general information, not regulatory advice." },
    ] },
];
