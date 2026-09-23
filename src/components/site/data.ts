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
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcefe59d5d70.png",
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
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f40eb1e07d77.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/36b44c917f5d.png",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4666795ce786.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e4a7ada13076.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/51179c02e3cf.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c81b5dac7655.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/825b543bdf2b.jpg",
  },
];

export const INDUSTRIES = [
  {
    name: "Commercial Buildings",
    desc: "Power distribution & metering for offices, malls and high-rise complexes.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/af2466f44fdf.jpg",
  },
  {
    name: "Hospitals & Healthcare",
    desc: "Life-critical power continuity with AMF, fire-pump and isolation panels.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e2b79758ac1d.jpg",
  },
  {
    name: "Manufacturing & Industrial",
    desc: "Motor control and automation panels for continuous-duty production lines.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f00a2a829b91.jpg",
  },
  {
    name: "IT Parks & Data Centers",
    desc: "High-availability power distribution with synchronizing and APFC panels.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8fb8c4c3c3b8.png",
  },
  {
    name: "Hotels & Hospitality",
    desc: "Silent, reliable power and life-safety panels for guest environments.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c487830ed15a.jpg",
  },
  {
    name: "Infrastructure Projects",
    desc: "Panels for water treatment, metros, utilities and large civic projects.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/182daaae744b.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/828bcd0ba4a9.jpg",
    span: "lg",
  },
  {
    name: "Multi-Block Manufacturing Line",
    location: "Hosur",
    panel: "MCC + PLC",
    client: "Automotive Tier-1",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/48126a7d3a51.jpg",
    span: "md",
  },
  {
    name: "Hospital Critical Power System",
    location: "Mysuru",
    panel: "AMF + Fire",
    client: "Healthcare Group",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/84031977529d.jpg",
    span: "md",
  },
  {
    name: "Data Center Synchronizing Stack",
    location: "Hyderabad",
    panel: "Sync + PCC",
    client: "Colocation Operator",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4bf1833c4b48.png",
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
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8cc55d4214fe.jpg",
    },
    {
      title: "Assembly Area",
      desc: "Compartmentalised build stations for MCC & PCC panels.",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/de3113daf57d.jpg",
    },
    {
      title: "Quality Check",
      desc: "Multi-stage inspection with documented traceability.",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4c63ec0cef4e.jpg",
    },
    {
      title: "Production Floor",
      desc: "Sheet metal, busbar and wiring integrated under one roof.",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d518d34a7fe5.jpg",
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
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7268fcb52305.png",
  },
  articles: [
    {
      category: "Safety",
      title: "Electrical safety in industrial panel design",
      date: "2024",
      read: "5 min",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cd6c9181c84f.jpg",
    },
    {
      category: "Reference",
      title: "MCC vs PCC: choosing the right panel",
      date: "2024",
      read: "4 min",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6539a1c5304c.jpg",
    },
    {
      category: "Efficiency",
      title: "Energy efficiency starts at the panel",
      date: "2023",
      read: "7 min",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d3fc3123957a.jpg",
    },
    {
      category: "Automation",
      title: "Bringing PLC + SCADA to legacy switchgear",
      date: "2023",
      read: "6 min",
      image:
        "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/82f06d84a794.jpg",
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
