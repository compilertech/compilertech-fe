import { ScheduleTable } from "./DayInterface";

const dayTwoData: ScheduleTable = {
  date: "Sun 29 Sep",
  scheduleTableChildren: [
    {
      mainTime: "9:00 - 10:00",
      leading: "Optimizations for Object Oriented Programs",
      subLeading: "Manas Thakur",
      subChildren: [
        {
          time: "10:00 - 10:20",
          heading:
            "CoS-SSA: SSA for Context-Sensitive Interprocedural Analysis",
          description:
            "Pritam Gharat, Uday P. Khedker, Alan Mycroft, Supriya Bhide and Aditya Pradhan",
          color: "#EDEFFA",
        },
        {
          time: "10:20 - 10:40",
          heading:
            "A Correspondence Between ϕ-function Placement in SSA and Reaching Definitions Analysis",
          description: "Supriya Bhide, Uday Khedker and Pritam Gharat",
          color: "#EDEFFA",
        },
        {
          time: "10:40 - 11:00",
          heading: "pliron: An Extensible IR Framework in Rust",
          description: "Vaivaswatha Nagaraj",
          color: "#EDEFFA",
        },
      ],
      color: "#D6D9F5",
    },
    {
      mainTime: "11:00 - 11:30",
      leading: "Tea break",
      subChildren: [
        {
          time: "11:30-11:50",
          heading:
            "SLIM: A High-Level Abstraction on LLVM IR Suitable for Program Analysis",
          description:
            "Aditi Raste, Aditya Pradhan, Akshat Oke and Uday Khedker",
          color: "#F8EFE7",
        },
        {
          time: "11:50 - 12:10",
          heading: "Why generating Three Address Code for Javascript is hard",
          description: "Meetesh Kalpesh Mehta",
          color: "#F8EFE7",
        },
        {
          time: "12:10-12:30",
          heading:
            "Program Analysis for Managed Runtimes in Presence of Dynamic Features",
          description: "Aditya Anand",
          color: "#F8EFE7",
        },
        {
          time: "12:30-12:50",
          heading: "Engineering behind OCaml's Effect handlers",
          description: "Manas Jayanth",
          color: "#F8EFE7",
        },
      ],
      color: "#F5E6D6",
    },
    {
      mainTime: "12:50 - 14:00",
      leading: "Lunch",
      subChildren: [
        // {
        //   time: "11.00 15m",
        //   heading: "Introduction",
        //   description: "Prof. Komondoor V. Raghavan",
        //   subDescription: "IISc Bangalore",
        //   color: "#FDECEF",
        // },
        // {
        //   time: "11.15 45m",
        //   heading: "Keynote of tracks 3",
        //   description: "Prof. Manas Thakur",
        //   subDescription: "IIT Bombay",
        //   link: "File Attached",
        //   color: "#FDECEF",
        // },
      ],
      color: "#F5D6E0",
    },
    {
      mainTime: "14:00-15:00",
      leading: "Translation Validation",
      subLeading: "Supratik Chakraborty",
      subChildren: [
        {
          time: "15:00-15:20",
          heading:
            "Memspect: Tiny Static Analysis Framework for Real-World C Codebases",
          description: "Hari Varsha",
          color: "#F8EFE7",
        },
        // {
        //   time: "12.10 25m",
        //   heading: "Keynote of tracks 4",
        //   description: "Dr. Saurabh Joshi",
        //   subDescription: "IIT Bombay",
        //   link: "File Attached",
        //   color: "#F8EFE7",
        // },
        // {
        //   time: "12.35 25m",
        //   heading: "Keynote of tracks 5",
        //   description: "Prof. Subodh Sharma",
        //   subDescription: "Supra Research",
        //   link: "File Attached",
        //   color: "#F8EFE7",
        // },
      ],
      color: "#F5E6D6",
    },
    {
      mainTime: "15:20 - 15:50",
      leading: "Tea break",
      subChildren: [
        {
          time: "15:50 - 16:10",
          heading:
            "Fuzzing Programs with Structure-aware Fuzzers: An Industrial Case Study",
          description:
            "Das K Darshana, P Krishnahari, Kuriakose T Libna and C M Parvathy",
          color: "#FAEDEB",
        },
        {
          time: "16:10 - 16:30",
          heading: "Automated Verification of Concurrent Programs",
          description: "Divyanjali Sharma and Subodh Sharma",
          color: "#FAEDEB",
        },
        {
          time: "16:30 - 16:50",
          heading: "Live Code EMI Mutation: A Practical Approach",
          description: "Kshitij Roodkee",
          color: "#FAEDEB",
        },
        {
          time: "16:50 - 17:10",
          heading:
            "Machine Learning Based Compiler Verification using Mutation Technique",
          description: "Sushil Kr Soni",
          color: "#FAEDEB",
        },
      ],
      color: "#F5DBD6",
    },
    // {
    //   mainTime: "14.00-15.00",
    //   leading: "Session 5",

    //   subChildren: [
    //     {
    //       time: "14.00 15m",
    //       heading: "Introduction",
    //       description: "Prof. Uday Khedker",
    //       subDescription: "Indian Institute of Technology Bombay",
    //       color: "#E7F8EB",
    //     },
    //     {
    //       time: "14.15 45m",
    //       heading: "Keynote of tracks 1",
    //       description: "Dibyendu Das",
    //       subDescription: "Sr. Principal Engineer, Intel",
    //       link: "File Attached",
    //       color: "#E7F8EB",
    //     },
    //   ],
    //   color: "#D9F5D6",
    // },
    // {
    //   mainTime: "15.00-16.00",
    //   leading: "Session 6",

    //   subChildren: [
    //     {
    //       time: "15.00 15m",
    //       heading: "Introduction",
    //       description: "Prof. Govindarajan Ramaswamy",
    //       subDescription: "IISc Bangalore",
    //       color: "#EFF8E7",
    //     },
    //     {
    //       time: "15.15 45m",
    //       heading: "Keynote of tracks 2",
    //       description: "Prof. Krishna Nandivada",
    //       subDescription: "IIT Madras",
    //       link: "File Attached",
    //       color: "#EFF8E7",
    //     },
    //   ],
    //   color: "#E0F5D6",
    // },
    // {
    //   mainTime: "16.00-17.00",
    //   leading: "Session 7",

    //   subChildren: [
    //     {
    //       time: "16.00 15m",
    //       heading: "Introduction",
    //       description: "Prof. Komondoor V. Raghavan",
    //       subDescription: "IISc Bangalore",
    //       color: "#FDECEF",
    //     },
    //     {
    //       time: "16.15 45m",
    //       heading: "Keynote of tracks 3",
    //       description: "Prof. Manas Thakur",
    //       subDescription: "IIT Bombay",
    //       link: "File Attached",
    //       color: "#FDECEF",
    //     },
    //   ],
    //   color: "#F5D6E0",
    // },
  ],
};

export default dayTwoData;
