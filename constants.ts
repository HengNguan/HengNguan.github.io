import { Award, Education, Experience, Project, SkillCategory, SocialLink } from './types';
import { Linkedin, Github, Mail, Phone, MapPin, Download } from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Ting Heng Nguan",
  role: "HPC Embedded Software Engineer | Scrum Master",
  email: "hengnguan@gmail.com",
  phone: "+65 8881 3304",
  location: "Singapore (PR) / Malaysian",
  about: "Active learner and self-motivated goal setter. Passionate communicator and collaborative team player who is emotionally attuned. Experienced in full-stack embedded development from kernel to application, with a strong foundation in Data Science and Electrical Engineering.",
  profileImage: "./profile.jpg" // Ensure you add a file named profile.jpg to your project root
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/heng-nguan-ting-28359414a/", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/HengNguan/", icon: "github" },
  { platform: "Email", url: "mailto:hengnguan@gmail.com", icon: "mail" },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master in Data Science and Analytics",
    institution: "Universiti Sains Malaysia",
    period: "Sept 2019 - June 2021",
    cgpa: "3.18 / 4.0",
    details: ["Exposed to structured Data Science knowledge", "Passionate to apply learnt knowledge in real-world"]
  },
  {
    degree: "Bachelor in Electrical and Electronics Engineering (HONS)",
    institution: "Universiti Teknologi PETRONAS",
    period: "May 2015 - May 2019",
    cgpa: "3.01 / 4.0",
    details: ["Major in Computer and Communication"]
  },
  {
    degree: "Foundation in Electrical and Electronics Engineering",
    institution: "Universiti Teknologi PETRONAS",
    period: "May 2014 - May 2015",
    cgpa: "3.55 / 4.0",
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Embedded Software Engineer | Scrum Master",
    company: "Continental Automotive",
    period: "September 2022 - Current",
    description: [
      "Actively contribute in a fast-paced, POC ADAS Cockpit HPC team, collaborating with NTU on research for efficient TFLite AI models in computer vision perception and LLM model using Ethos NPU and MALI GPU.",
      "Hands-on experience with Hugging Face models and fine-tuning BERT into a text-classification model achieving 87.5% accuracy for intent extraction.",
      "Integrated llama.cpp with Vulkan backend to boost inference efficiency up to 50%.",
      "Simulated Android and Yocto Linux environments as a cloud-hosted digital twin on AWS, replicating full-stack hardware behavior (kernel to application).",
      "Bring-Up DisplayPort functionality on ARM SoC platform by implementing bootloader (U-Boot), kernel driver, and device tree modifications.",
    ],
    techStack: ["HPC", "ADAS", "TFLite", "Ethos NPU", "Android", "Yocto Linux", "AWS", "U-Boot", "Kernel"]
  },
  {
    role: "SoC Design Engineer",
    company: "Intel Corporation",
    period: "January 2021 - August 2022",
    description: [
      "Contributed towards Full Chip Integration Reliability Team, focusing on power intent verification using UPF, electrical rule checking (ERC).",
      "Recognized with a Design Recognition Award (DRA) as spearheaded root-cause analysis and designed a validation experiment that uncovered a critical flaw contributing to a 3000 DPM issue.",
      "Improved team efficiency by developing automation scripts to streamline repetitive tasks, reducing manual effort, cycle time, and human error."
    ],
    techStack: ["SoC Design", "UPF", "ERC", "Automation", "Validation"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Bluetooth Smart Bottle Mobile Application",
    period: "Sept 2024 - March 2025",
    description: "Developed Flutter-based mobile applications for Android/iOS integrating external edge devices via Bluetooth. Built frontend interfaces optimized for iOS, integrated Firebase Auth and Cloud Firestore. Delivered signed APK and TestFlight builds.",
    techStack: ["Flutter", "Dart", "Firebase", "Bluetooth Low Energy", "Android", "iOS"]
  },
  {
    title: "Debate Timer 2.0",
    subtitle: "Mandarin Debate Competition Tool",
    period: "Personal Project",
    description: "Designed and deployed a specialized web-based timer for Mandarin debate competitions. Features customizable timing phases, visual/audio alerts, and a responsive interface to ensure fair and accurate timekeeping during matches.",
    techStack: ["JavaScript", "HTML/CSS", "GitHub Pages", "Web Audio API"],
    link: "https://hengnguan.github.io/Debate_Timer2.0/",
    repo: "https://github.com/HengNguan/Debate_Timer2.0"
  },
  {
    title: "One Photo Facial Recognizer with Siamese Network",
    subtitle: "Intel Cooperation Capstone",
    period: "June 2021 - Nov 2020",
    description: "Led a team in CAPSTONE Project to build a facial recognizer successfully able to classify among large-scale of people using only one photo for each training and testing set.",
    techStack: ["Siamese Network", "Computer Vision", "Deep Learning"]
  },
  {
    title: "Food Classifier By Tensorflow",
    subtitle: "Universiti Sains Malaysia",
    period: "June 2020 - August 2020",
    description: "Developed a supervised learning neural network model that differentiates images between eggs and other foods. Handled data collecting, processing, and model training.",
    techStack: ["TensorFlow", "Python", "Machine Learning"]
  },
  {
    title: "Street Fighter on NUVOTON Board",
    subtitle: "Universiti Teknologi PETRONAS",
    period: "Jan 2019 - March 2019",
    description: "Developed a video game on NuvoTon NUC140 (ARM Cortex M0) supporting multiplayer via UART protocol. Real-time display updates across boards.",
    techStack: ["C/C++", "ARM Cortex M0", "UART", "Embedded Systems"]
  },
  {
    title: "Installation Solar Powered Light",
    subtitle: "Voluntary Work (Bota, Perak)",
    period: "May 2018 - Dec 2018",
    description: "Technical lead installing solar-powered lights in rural areas. Distilled complex technical knowledge into simplified documentation for team guidance.",
    techStack: ["Leadership", "Solar Technology", "Documentation"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Software & Programming",
    items: ["C", "C++", "Python", "Dart (Flutter)", "TypeScript (React)", "Git", "OpenCV", "TensorFlow (LITE)", "NI LabVIEW"]
  },
  {
    category: "Platforms & Tools",
    items: ["AWS", "CARLA", "NI Vision", "Tableau", "RapidMiner", "MATLAB", "Yocto", "Android"]
  },
  {
    category: "Hardware",
    items: ["ARM SoC", "Raspberry Pi", "Arduino", "NUVOTON Board", "Ethos NPU", "MALI GPU"]
  },
  {
    category: "Soft Skills",
    items: ["Scrum Master", "Public Speaking", "Debate", "Logical Thinking", "Problem Solving", "Team Leadership"]
  },
  {
    category: "Languages",
    items: ["Mandarin (Primary)", "English", "Malay"]
  }
];

export const AWARDS: Award[] = [
  {
    title: "Award of Excellence (Team)",
    organization: "Continental",
    year: "2024"
  },
  {
    title: "Value Contributor Innovation Award",
    organization: "CLEPA",
    year: "2024"
  },
  {
    title: "Division Recognition Award (DRA)",
    organization: "Intel Cooperation",
    year: "2021"
  },
  {
    title: "Champion in World Mandarin Debating Championship (SEA Trial)",
    organization: "World Mandarin Debating Championship",
    year: "2019"
  },
  {
    title: "1st Runner Up in World Mandarin Debating Championship (SEA Trial)",
    organization: "World Mandarin Debating Championship",
    year: "2017"
  }
];