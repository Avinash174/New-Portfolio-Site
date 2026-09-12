export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  focus: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech — Information Technology",
    institution: "Vishwakarma Institute of Information Technology (VIIT)",
    location: "Pune, Maharashtra",
    period: "Dec 2019 – May 2023",
    grade: "CGPA: 8.56",
    focus: "Software Engineering, Database Systems, Mobile Application Architecture, Algorithms",
    highlights: [
      "Graduated with high distinction (CGPA 8.56 / 10.0)",
      "Core coursework in Object-Oriented Architecture, Data Structures, Operating Systems & Networks",
      "Led full-stack capstone projects bridging mobile interfaces with relational backend databases",
    ],
  },
  {
    degree: "Diploma — Computer Engineering",
    institution: "Government Polytechnic",
    location: "Aurangabad, Maharashtra",
    period: "July 2015 – Nov 2019",
    grade: "Aggregate: 66.20%",
    focus: "Computer Hardware, Low-Level Programming, Linux Environments, C/C++ & Java Foundations",
    highlights: [
      "Strong foundation in low-level systems programming, networking, and relational database design",
      "Hands-on embedded systems and Java application development",
    ],
  },
];
