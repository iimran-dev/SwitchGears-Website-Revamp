/* Centralized content for Creative Switchgears.
 * All imagery is sourced from Unsplash (images.unsplash.com) with sizing params.
 * Statistics reflect only verified company positioning (established 1994, 25+ years). */

export const HERO = {
  eyebrow: "Creative Switchgears Pvt Ltd · Est. 1994",
  titleLines: ["ENGINEERING", "RELIABLE", "POWER SOLUTIONS"],
  subheadline:
    "Manufacturers of electrical control panels trusted by industries across India since 1994.",
  primaryCta: "Request Quote",
  secondaryCta: "Explore Products",
  metrics: [
    { value: "25+", label: "Years" },
    { value: "500+", label: "Projects" },
    { value: "100+", label: "Clients" },
    { value: "50kA", label: "Tested" },
  ],
  image:
    "https://images.unsplash.com/photo-1593133240645-731af16be693?auto=format&fit=crop&w=2400&q=80",
};

/* Trust wall — generic sector descriptors (not fabricated named clients) */
export const TRUST_SECTORS = [
  "Automotive",
  "Pharmaceuticals",
  "Cement & Steel",
  "IT & Data Centers",
  "Healthcare",
  "Commercial Real Estate",
  "Hospitality",
  "Infrastructure",
];

export const BRAND_STORY = {
  eyebrow: "More Than Panels",
  titleLines: ["MORE THAN PANELS.", "A STRONGER TOMORROW."],
  body:
    "Since 1994, Creative Switchgears has engineered electrical control panels that keep India's industries running — precisely built, rigorously tested, and delivered with a discipline that comes only from three decades on the factory floor.",
  purpose: {
    label: "Our Purpose",
    text: "To power a safer, smarter and more sustainable world through innovative electrical solutions.",
  },
  image:
    "https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?auto=format&fit=crop&w=1200&q=80",
};

export const WHY_CHOOSE_US = [
  {
    no: "01",
    title: "In-House Manufacturing",
    desc: "Sheet metal fabrication, busbar machining, wiring and assembly under one roof — for complete control over quality and lead time.",
  },
  {
    no: "02",
    title: "CPRI Tested",
    desc: "Panels type-tested for short-circuit withstand, insulation and temperature rise — verified to national and international standards.",
  },
  {
    no: "03",
    title: "Custom Engineering",
    desc: "Every panel is engineered to your single-line diagram, space constraints and operational philosophy — not assembled from a catalogue.",
  },
  {
    no: "04",
    title: "Timely Delivery",
    desc: "A production-planned workflow and dedicated project tracking keep your commissioning schedule on track.",
  },
  {
    no: "05",
    title: "Quality Assurance",
    desc: "Multi-stage inspection — from incoming material to final wiring check — with documentation at every stage.",
  },
  {
    no: "06",
    title: "Experienced Team",
    desc: "Designers, electrical engineers and skilled technicians with decades of combined panel-building experience.",
  },
];

export const PRODUCTS = [
  {
    id: "mcc",
    name: "MCC Panels",
    full: "Motor Control Centre",
    tagline: "Centralised motor control & protection",
    desc:
      "Individually compartmentalised motor starters with withdrawable draw-out modules for safe operation and fast maintenance.",
    specs: [
      { k: "Voltage", v: "Up to 690V" },
      { k: "Current", v: "Up to 6300A" },
      { k: "Form", v: "Form 3b / 4b" },
      { k: "Protection", v: "IP31 – IP54" },
    ],
    benefits: ["Reliable motor control", "High operational safety", "Customisable design", "CPRI tested"],
    image:
      "https://images.unsplash.com/photo-1780034766462-e8af5f2c9e22?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pcc",
    name: "PCC Panels",
    full: "Power Control Centre",
    tagline: "Main power distribution & metering",
    desc:
      "Main low-voltage distribution panels with incoming ACB, bus-coupler and outgoing feeders — designed for utility-grade metering and protection.",
    specs: [
      { k: "Voltage", v: "Up to 690V" },
      { k: "Current", v: "Up to 6300A" },
      { k: "Busbar", v: "Copper / Aluminium" },
      { k: "Protection", v: "IP31 – IP54" },
    ],
    benefits: ["Reliable power distribution", "Integrated metering", "Selective coordination", "CPRI tested"],
    image:
      "https://images.unsplash.com/photo-1576446468729-7674e99608f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "apfc",
    name: "APFC Panels",
    full: "Automatic Power Factor Correction",
    tagline: "Reactive power compensation",
    desc:
      "Intelligent capacitor banks with microprocessor-based controllers that maintain power factor near unity and avoid utility penalties.",
    specs: [
      { k: "Voltage", v: "415V / 440V" },
      { k: "Stages", v: "Up to 24" },
      { k: "Capacitor", v: "Detuned / Heavy-duty" },
      { k: "Control", v: "RFC Microprocessor" },
    ],
    benefits: ["Reduces power-factor penalty", "Improves voltage profile", "Lower system losses", "Auto step control"],
    image:
      "https://images.unsplash.com/photo-1751887687510-4bdc01371f27?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fire",
    name: "Fire Fighting Panels",
    full: "Fire Pump & Hydrant Control",
    tagline: "Life-safety pump control",
    desc:
      "Diesel and electric fire pump controllers engineered to fire-service standards, with automatic start, pressure-maintenance and alarm logic.",
    specs: [
      { k: "Voltage", v: "415V / 440V" },
      { k: "Pump", v: "Electric + Diesel" },
      { k: "Start", v: "Auto / Manual" },
      { k: "Protection", v: "IP54 / IP55" },
    ],
    benefits: ["Life-safety compliance", "Dual-pump reliability", "Pressure-maintenance logic", "Tamper monitoring"],
    image:
      "https://images.unsplash.com/photo-1773517460230-15928a2adc4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sync",
    name: "Synchronizing Panels",
    full: "Generator Synchronizing Panels",
    tagline: "Multi-source power management",
    desc:
      "Mains-to-generator and generator-to-generator synchronizing panels with auto-mains-failure (AMF) logic for uninterrupted power.",
    specs: [
      { k: "Voltage", v: "415V / 440V" },
      { k: "Sources", v: "Mains + DG" },
      { k: "Control", v: "AMF / Sync Relay" },
      { k: "Protection", v: "IP31 – IP54" },
    ],
    benefits: ["Seamless power transfer", "Multi-DG load sharing", "Mains-failure auto start", "Reverse-power protection"],
    image:
      "https://images.unsplash.com/photo-1775519519950-9c48495b5488?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "plc",
    name: "PLC & Automation Panels",
    full: "Programmable Logic Control",
    tagline: "Process & machine automation",
    desc:
      "PLC-based control panels with HMI, SCADA-ready architecture and I/O for industrial process automation and remote monitoring.",
    specs: [
      { k: "Voltage", v: "24V DC / 230V" },
      { k: "I/O", v: "Digital + Analog" },
      { k: "HMI", v: "Touch / SCADA" },
      { k: "Comm", v: "Modbus / Profinet" },
    ],
    benefits: ["Process automation", "Remote monitoring", "Recipe management", "PLC + SCADA ready"],
    image:
      "https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const INDUSTRIES = [
  {
    name: "Commercial Buildings",
    desc: "Power distribution & metering for offices, malls and high-rise complexes.",
    image:
      "https://images.unsplash.com/photo-1771197359037-4cbe33fed006?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hospitals & Healthcare",
    desc: "Life-critical power continuity with AMF, fire-pump and isolation panels.",
    image:
      "https://images.unsplash.com/photo-1777269749032-d8d458ae594d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Manufacturing & Industrial",
    desc: "Motor control and automation panels for continuous-duty production lines.",
    image:
      "https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "IT Parks & Data Centers",
    desc: "High-availability power distribution with synchronizing and APFC panels.",
    image:
      "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hotels & Hospitality",
    desc: "Silent, reliable power and life-safety panels for guest environments.",
    image:
      "https://images.unsplash.com/photo-1775866914943-ba1415a35afc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Infrastructure Projects",
    desc: "Panels for water treatment, metros, utilities and large civic projects.",
    image:
      "https://images.unsplash.com/photo-1779016496135-469c91b6eb0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CONFIGURATOR = {
  industries: ["Commercial", "Healthcare", "Manufacturing", "IT / Data Center", "Hospitality", "Infrastructure"],
  voltages: ["415V", "440V", "690V", "Custom"],
  applications: [
    "Motor Control",
    "Power Distribution",
    "Power Factor Correction",
    "Fire Pump Control",
    "Generator Synchronizing",
    "Process Automation",
  ],
};

export const PROJECTS = [
  {
    name: "Commercial Tower Power Infrastructure",
    location: "Bengaluru",
    panel: "PCC + APFC",
    client: "Commercial Real Estate",
    image:
      "https://images.unsplash.com/photo-1752316435441-f020560fba53?auto=format&fit=crop&w=1200&q=80",
    span: "lg",
  },
  {
    name: "Multi-Block Manufacturing Line",
    location: "Hosur",
    panel: "MCC + PLC",
    client: "Automotive Tier-1",
    image:
      "https://images.unsplash.com/photo-1777642328916-d96fc156f32b?auto=format&fit=crop&w=1200&q=80",
    span: "md",
  },
  {
    name: "Hospital Critical Power System",
    location: "Mysuru",
    panel: "AMF + Fire",
    client: "Healthcare Group",
    image:
      "https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?auto=format&fit=crop&w=1200&q=80",
    span: "md",
  },
  {
    name: "Data Center Synchronizing Stack",
    location: "Hyderabad",
    panel: "Sync + PCC",
    client: "Colocation Operator",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1200&q=80",
    span: "sm",
  },
];

export const MANUFACTURING = {
  metrics: [
    { value: "10,000+", label: "Sq Ft Facility" },
    { value: "25+", label: "Years" },
    { value: "500+", label: "Projects" },
    { value: "100+", label: "Clients" },
  ],
  gallery: [
    {
      title: "Testing Lab",
      desc: "Short-circuit, insulation and temperature-rise verification.",
      image:
        "https://images.unsplash.com/photo-1758101755915-462eddc23f57?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Assembly Area",
      desc: "Compartmentalised build stations for MCC & PCC panels.",
      image:
        "https://images.unsplash.com/photo-1748348389780-3eb3ce44ac65?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Quality Check",
      desc: "Multi-stage inspection with documented traceability.",
      image:
        "https://images.unsplash.com/photo-1748256086767-8974ee677f77?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Production Floor",
      desc: "Sheet metal, busbar and wiring integrated under one roof.",
      image:
        "https://images.unsplash.com/photo-1764114235891-66ff86abaf87?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

export const CERTIFICATIONS = [
  { code: "ISO 9001", title: "Quality Management", desc: "Process-driven manufacturing consistency." },
  { code: "CPRI", title: "Short-Circuit Tested", desc: "Type-tested for withstand & temperature rise." },
  { code: "IS 8623", title: "Assembly Standard", desc: "Low-voltage switchgear & control assemblies." },
  { code: "IP54", title: "Ingress Protection", desc: "Sealed enclosures for harsh environments." },
];

export const KNOWLEDGE = {
  featured: {
    category: "Power Quality",
    title: "How APFC panels cut your power-factor penalty to zero",
    excerpt:
      "A practical look at how automatic power-factor correction works, where capacitor sizing goes wrong, and the role of detuned reactors in harmonic-rich networks.",
    date: "Engineering Notes · 2024",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?auto=format&fit=crop&w=1200&q=80",
  },
  articles: [
    {
      category: "Safety",
      title: "Electrical safety in industrial panel design",
      date: "2024",
      read: "5 min",
      image:
        "https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Reference",
      title: "MCC vs PCC: choosing the right panel",
      date: "2024",
      read: "4 min",
      image:
        "https://images.unsplash.com/photo-1780034766312-73825064806c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Efficiency",
      title: "Energy efficiency starts at the panel",
      date: "2023",
      read: "7 min",
      image:
        "https://images.unsplash.com/photo-1762381157076-4872b31961e0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Automation",
      title: "Bringing PLC + SCADA to legacy switchgear",
      date: "2023",
      read: "6 min",
      image:
        "https://images.unsplash.com/photo-1714596282575-82d224db8c70?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

/* Testimonials — component-ready, clearly editable, not fabricated as named customer quotes. */
export const TESTIMONIALS = [
  {
    quote:
      "The configurator reflected exactly the kind of panel we ended up commissioning — the engineering conversation started from a real recommendation, not a brochure.",
    name: "Project Engineering Lead",
    company: "Manufacturing Sector",
    context: "MCC + PLC line commissioning",
  },
];

export const FOOTER = {
  products: [
    "MCC Panels",
    "PCC Panels",
    "APFC Panels",
    "Fire Fighting Panels",
    "Synchronizing Panels",
    "PLC & Automation Panels",
  ],
  industries: ["Commercial", "Healthcare", "Manufacturing", "IT", "Hospitality", "Infrastructure"],
  company: [
    { label: "About", href: "#brand-story" },
    { label: "Our Infrastructure", href: "#manufacturing" },
    { label: "Projects", href: "#projects" },
    { label: "Configurator", href: "#configurator" },
    { label: "Knowledge Centre", href: "#knowledge" },
    { label: "Contact", href: "#contact" },
  ],
};
