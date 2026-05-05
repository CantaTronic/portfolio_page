export const config = {
  name: "Victoria A. Tokareva",
  title: "Postdoctoral Researcher",
  description: "Interdisciplinary researcher in astroparticle physics, FAIR data management, and scientific computing at KIT.",
  accentColor: "#1d4ed8", // change this hex to any color you like

  social: {
    email: "victoria.tokareva@kit.edu",
    linkedin: "", // add your LinkedIn URL if you have one
    github:   "", // add if you have a public GitHub
  },

  aboutMe: `I am a postdoctoral researcher at the Karlsruhe Institute of Technology (KIT),
Institute for Astroparticle Physics, with over a decade of experience applying digital
technologies in physics. My research focuses on scientific computing, FAIR data management,
metadata standards, and linked data objects. I lead the metadata work package in
PUNCH4NFDI and serve as PI for the NAPMIX project, developing interoperable metadata
standards for nuclear, astro, and particle physics.`,

  skills: [
    "Python", "C++", "R", "Matlab", "Bash",
    "FAIR Data Management", "Metadata Standards", "Linked Data / Semantic Technologies",
    "MySQL", "PostgreSQL", "SQLite", "MongoDB",
    "Scientific Computing", "HPC (CUDA, OpenMP, OpenMPI)",
    "Machine Learning (KNN, CNN)", "Git", "LaTeX", "Linux"
  ],

  projects: [
    {
      name: "NAPMIX – Nuclear, Astro & Particle Metadata Integration for eXperiments",
      description: "PI from KIT side. Co-developing a metadata standard for astroparticle physics with focus on data findability and interoperability.",
      link: "",
      skills: ["FAIR Data", "Metadata Standards", "Astroparticle Physics"],
    },
    {
      name: "PUNCH4NFDI – Science Data Platform",
      description: "Lead of work package 'Mapping and collating metadata'. Coordinating metadata schema development across 7 use cases from particle, astroparticle, astro-, hadron and nuclear physics communities.",
      link: "",
      skills: ["Metadata", "Data Infrastructure", "Python"],
    },
    {
      name: "KASCADE Cosmic-ray Data Centre (KCDC)",
      description: "Development of KCDC metadata schema and tooling, data harvesting, database management, and integration into PUNCH4NFDI data infrastructure.",
      link: "https://kcdc.iap.kit.edu/",
      skills: ["Python", "Databases", "Data Harvesting"],
    },
    {
      name: "GRADLCI – German-Russian Astroparticle Data Life Cycle Initiative",
      description: "Developed (meta)data models, metadata schemas, data harvesting and management solutions.",
      link: "",
      skills: ["Data Modelling", "Metadata", "Databases"],
    },
  ],

  experience: [
    {
      company: "Karlsruhe Institute of Technology (KIT)",
      title: "Postdoctoral Researcher",
      dateRange: "Jan 2023 – Present",
      bullets: [
        "PI from KIT side on the NAPMIX metadata integration project",
        "Lead of PUNCH4NFDI work package 'Mapping and collating metadata'",
        "Curation of astroparticle physics use case for PUNCH4NFDI Science Data Platform",
        "Continued development of KCDC metadata schema and integration with national data infrastructure",
      ],
    },
    {
      company: "FAIR Data Systems, Madrid",
      title: "Visiting Researcher",
      dateRange: "Sep 2025 – Dec 2025",
      bullets: [
        "Research visit funded by Karlsruhe House of Young Scientists (KHYS) Travel Grant",
        "Focused on FAIR data systems and interoperability standards",
      ],
    },
    {
      company: "Karlsruhe Institute of Technology (KIT)",
      title: "Doctoral Researcher",
      dateRange: "Jul 2018 – Dec 2022",
      bullets: [
        "Doctoral research on mathematical models and algorithms for job scheduling in distributed data processing systems",
        "Developed metadata schemas and data harvesting tools for KCDC and GRADLCI",
        "Applied machine learning methods (KNN, CNN) for astroparticle physics data analysis",
      ],
    },
    {
      company: "Joint Institute for Nuclear Research (JINR)",
      title: "Research Associate",
      dateRange: "Nov 2015 – May 2018",
      bullets: [
        "High-performance computing in C++ (CUDA, OpenMP, OpenMPI) for BES-III partial wave analysis framework",
        "CT reconstruction software for MARS Bioimaging",
        "Mathematical optimization using FUMILI package in C++",
      ],
    },
    {
      company: "V.A. Trapeznikov Institute of Control Sciences RAS",
      title: "Research Engineer",
      dateRange: "Nov 2013 – Jun 2015",
      bullets: [
        "Research in active systems and applied mathematics",
      ],
    },
  ],

  education: [
    {
      school: "VAK Moskau",
      degree: "Dr./VAK Moskau in Physics and Mathematics",
      dateRange: "2018 – 2022",
      achievements: [
        "Thesis: Mathematical models and algorithms for job scheduling in distributed data processing systems with aggregated access to information resources",
        "Scholarship from Graduate School KSETA (Karlsruhe School for Elementary and Astroparticle Physics)",
      ],
    },
    {
      school: "Moscow Institute of Physics and Technology (MIPT)",
      degree: "M.Sc. in Applied Mathematics and Physics",
      dateRange: "2013 – 2015",
      achievements: [
        "Department for Radio Engineering and Cybernetics",
        "Thesis: Mathematical model of the hierarchy of needs in relation to work motivation",
        "President of Russia Scholarship for students and postgraduates (2014–2015)",
      ],
    },
    {
      school: "Voronezh State University",
      degree: "B.Sc. with Distinction in Applied Mathematics and Informatics",
      dateRange: "2009 – 2013",
      achievements: [
        "Faculty of Applied Mathematics, Informatics and Mechanics",
        "Graduated with distinction",
        "Federal Budget Scholarship from the Russian government",
      ],
    },
  ],
};
