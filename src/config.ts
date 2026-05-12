export const siteConfig = {
  name: "Victoria A. Tokareva",
  title: "Postdoctoral Researcher and Data Scientist at KIT",
  description: "Interdisciplinary researcher in astroparticle physics, FAIR data management, and scientific computing at KIT.",
  accentColor: "#1d4ed8", // change this hex to any color you like

  social: {
    email: "victoria.tokareva@kit.edu",
    linkedin: "https://www.linkedin.com/in/vict-tokareva/",
    orcid: "https://orcid.org/0000-0001-6699-830X",
    github: "", // add if you have a public GitHub
  },

  aboutMe: `I am a postdoctoral researcher at the Karlsruhe Institute of Technology (KIT),
Institute for Astroparticle Physics, with over a decade of experience applying digital
technologies in physics. My research focuses on scientific computing, FAIR data management.`,

  skills: [
    "Python", "C++", "R", "Matlab", "Bash",
    "FAIR Data Management", "Metadata Standards", "Linked Data / Semantic Technologies",
    "MySQL", "PostgreSQL", "SQLite", "MongoDB",
    "Scientific Computing", "HPC (CUDA, OpenMP, OpenMPI)",
    "Machine Learning (KNN, CNN)", "Git", "LaTeX", "Linux"
  ],

  projects: [
    {
      name: "PUNCH4NFDI – Particle, Universe, NuClei, CHadron for Nationale Forschungsdateninfrastruktur",
      description: "Lead of work package 'Mapping and collating metadata'. Coordinating use-case-based metadata schema development for the Science Data Platform of PUNCH4NFDI - the consortium for of particle, astroparticle, astro-, hadron and nuclear physics communities.",
      link: "https://www.punch4nfdi.de/",
      dateRange: "Jan 2022 – Present",
      skills: ["FAIR Data", "Metadata Standards", "Data Infrastructure", "Python", "Dublin Core", "Data Cite", "Organisational skills", "Scientfic Communication"],
    },
    {
      name: "NAPMIX – Nuclear, Astro & Particle Metadata Integration for eXperiments",
      description: "Contrbute to the NAPMIX schema development. Curate astroparticle physics usecase with focus on data findability and interoperability of research data.",
      dateRange: "Dec 2024 – Present",
      link: "https://oscars-project.eu/projects/napmix-nuclear-astro-and-particle-metadata-integration-experiments",
      skills: ["FAIR Data", "Metadata Standards", "Astroparticle Physics", "Dublin Core", "Data Cite"],
    },
    {
      name: "KCDC - KASCADE Cosmic-ray Data Centre",
      description: "Development and support of KCDC metadata schema and OAI-PMH server. Integration of the data center into PUNCH4NFDI data infrastructure.",
      dateRange: "July 2018 – Present",
      link: "https://kcdc.iap.kit.edu/",
      skills: ["Python", "Databases", "Data Harvesting", "Astroparticle Physics", "OAI-PMH", "Ro-Crate", "Dublin Core", "Data Cite"],
    },
    {
      name: "GRADLCI – German-Russian Astroparticle Data Life Cycle Initiative",
      description: "Developed (meta)data models and data management solutions for federated data starage.",
      dateRange: "July 2018 – Dec 2021",
      link: "",
      skills: ["Data Modelling", "Metadata", "Databases", "Astroparticle physics", "MariaDB", "PostgreSQL", "MongoDB"],
    },
  ],

  experience: [
    {
      company: "Karlsruhe Institute of Technology (KIT)",
      title: "Postdoctoral Researcher",
      dateRange: "Jan 2023 – Present",
      bullets: [
        "Lead of PUNCH4NFDI work package 'Mapping and collating metadata'",
        "Curation of astroparticle physics use case for PUNCH4NFDI Science Data Platform",
        "PI from KIT side on the NAPMIX metadata integration project",
        "Continued development of KCDC metadata schema and integration with national data infrastructure",
      ],
    },
    {
      company: "FAIR Data Systems, Madrid",
      title: "Visiting Researcher",
      dateRange: "Sep 2025 – Dec 2025",
      bullets: [
        "Research visit funded by Karlsruhe House of Young Scientists (KHYS) Travel Grant",
        "Focused on use of Artificial Intelligence and Natural Language Processing for discipline-specififc ontology development ot promote interoperabile publishing of astroparticle research data",
      ],
    },
    {
      company: "Karlsruhe Institute of Technology (KIT)",
      title: "Doctoral Researcher",
      dateRange: "Jul 2018 – Dec 2022",
      bullets: [
        "Doctoral research on mathematical models and algorithms for job scheduling in distributed data processing systems",
        "Developed metadata schemas and data harvesting tools for KCDC and GRADLCI projects",
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
      dateRange: "2022",
      achievements: [
        "Thesis: Mathematical models and algorithms for job scheduling in distributed data processing systems with aggregated access to information resources",
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
      ],
    },
  ],
};
