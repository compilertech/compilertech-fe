import { ScheduleTable } from "./DayInterface";

const dayOneData: ScheduleTable = {
  date: "Sat 28 Sep",
  scheduleTableChildren: [
    {
      mainTime: null,
      leading: null,
      sessionLink: null,
      subChildren: [
        {
          time: "8:00 - 9:00",
          heading: "Registration and Breakfast",
          color: "#FAEBEB",
          YTLink: null,
          presenters: []
        },
        {
          time: "9:00 - 9:30",
          heading: "Welcome and General Address",
          color: "#FAEBEB",
          YTLink: null,
          presenters: []
        },
      ],
      color: "#F5D6D6",
    },
    {
      mainTime: "9:30 - 10:30",
      leading: "Building compilers for AI programming frameworks",
      sessionLink: "https://youtu.be/-ZxDqcSCrhg",
      presenters: [
        {
          name: "Uday Reddy Bondhugula",
          link: "https://www.csa.iisc.ac.in/~udayb/",
        },
      ],
      subChildren: [
        {
          time: "10:30 - 10:50",
          heading: "FireDucks: Pandas Accelerator using MLIR",
          YTLink: "https://youtu.be/66HU88aZZoc",
          presenters: [
            {
              name: "Sourav Saha",
              link: "https://fireducks-dev.github.io/",
            },
            { name: "Kazuhisa Ishizaka" },
            { name: "Ashu Thakur" },
          ],
          color: "#FDEDE0",
        },
        {
          time: "10:50 - 11:10",
          heading: "STGraph: A Framework for Temporal Graph Neural Networks",
          YTLink: "https://youtu.be/X6GBpO07yHs",
          presenters: [
            { name: "Joel Mathew Cherian" },
            { name: "Nithin Puthalath Manoj" },
            { name: "Kevin Jude Concessao" },
            { name: "Unnikrishnan Cheramangalath" },
          ],
          color: "#FDEDE0",
        },
      ],
      color: "#FAE2CE",
    },
    {
      mainTime: "11:10 - 11:40",
      leading: "Tea break",
      sessionLink: null,
      subChildren: [
        {
          time: "11:40 - 12:00",
          heading: "New Age of compilation for AI HPC",
          YTLink: "https://youtu.be/kgRGQfwLkqc",
          presenters: [{ name: "Srihari Karnam" }, { name: "Judhajit Dutta" }],
          color: "#F5FAE5",
        },
        {
          time: "12:00 - 12:20",
          heading: "No-ISA is the Best ISA",
          YTLink: "https://youtu.be/G4fxdHozm5I",
          presenters: [
            {
              name: "Shreeyash Pandey",
              link: "https://bojle.github.io/",
            },
            {
              name: "Rishik Ram Jallarapu",
              link: "https://github.com/markram1729",
            },
          ],
          color: "#F5FAE5",
        },
        {
          time: "12:20 - 12:40",
          heading:
            "Towards Higher First Silicon Success via Improved Finite-State Machine Detection",
          YTLink: "https://youtu.be/taPgiRXyrvo",
          presenters: [
            { name: "Ian D. Taras" },
            { name: "Nicholas V. Giamblanco" },
            { name: "Thomas Peters" },
            { name: "Vikram Narayan" },
            { name: "Samir Mitta" },
          ],
          color: "#F5FAE5",
        },
        {
          time: "12:40 - 13:00",
          heading:
            "Unveiling the Future: A Glimpse into the Emerging Landscape of Quantum Compilers",
          YTLink: "https://youtu.be/igidoLf4Exk",
          presenters: [
            {
              name: "Tanmay Sarkar",
              link: "https://www.linkedin.com/in/tanmay-sarkar-02891519a",
            },
          ],
          color: "#F5FAE5",
        },
      ],
      color: "#EAF3D1",
    },
    {
      mainTime: "13:00 - 14:00",
      leading: "Lunch",
      sessionLink: null,
      color: "#E0F7F1",
      subChildren: [
        //     {
        //       time: "12.00 10m",
        //       heading: "Introduction",
        //       description: "Prof. Ramakrishna Upadrasta",
        //       subDescription: "IIT Hyderabad",
        //       color: "#E6FAF7",
        //     },
        //     {
        //       time: "12.10 25m",
        //       heading: "Keynote of tracks 4",
        //       description: "Dr. Saurabh Joshi",
        //       subDescription: "IIT Bombay",
        //       link: "",
        //       color: "#E6FAF7",
        //     },
        //     {
        //       time: "12.35 25m",
        //       heading: "Keynote of tracks 5",
        //       description: "Prof. Subodh Sharma",
        //       subDescription: "Supra Research",
        //       link: "",
        //       color: "#E6FAF7",
        //     },
      ],
    },
    {
      mainTime: "14:00 - 14:30",
      leading: "Web3 and Program Analysis",
      sessionLink: "https://youtu.be/CZLJ28Sw9nw",
      presenters: [{ name: "Saurabh Joshi" }],
      color: "#D6F5D6",
      subChildren: [
        {
          time: "14:30 - 14:50",
          heading:
            "Techniques for IDE-friendly Compiler Construction and Applications in Blockchain",
          YTLink: "https://youtu.be/4u3uNgtO8TU",
          presenters: [
            {
              name: "Bhavya Bhatt",
              link: "https://www.linkedin.com/in/bhavyabhatt/",
            },
          ],
          color: "#EBFAEB",
        },
        {
          time: "14:50 - 15:10",
          heading: "Formal verification of smart contracts",
          YTLink: "https://youtu.be/cJOEvSnjuH8",
          presenters: [{ name: "Vikramaditya Kokil" }],
          color: "#EBFAEB",
        },
        {
          time: "15:10 - 15:30",
          heading: "C-lisp and Flexible Macro Programming with S-expressions",
          YTLink: "https://youtu.be/FeML_j7pdNY",
          presenters: [
            {
              name: "Vedanth Padmaraman",
              link: "https://github.com/GlowingScrewdriver",
            },
            {
              name: "Sasank Chilamkurthy",
              link: "https://chsasank.com",
            },
          ],
          color: "#EBFAEB",
        },
      ],
    },
    {
      mainTime: "15:30 - 16:00",
      leading: "Tea break",
      sessionLink: null,
      color: "#DBE8F7",
      subChildren: [
        {
          time: "16:00 - 16:20",
          heading: "What is Dyalog APL and What Can It Do For You?",
          YTLink: "https://youtu.be/d584-WA2rA0",
          presenters: [{ name: "Aarush Bhat", link: "https://sloorush.com" }],
          color: "#E8EEF8",
        },
      ],
    },
    {
      mainTime: "16:20 - 17:35",
      leading:
        "DL4Compilers - Turbo-charging compiler optimizations via Deep Learning",
      sessionLink: "https://youtu.be/o1XXac_jaLk",
      presenters: [
        {
          name: "Dibyendu Das",
          link: "https://in.linkedin.com/in/dibyendu-das-80341b8?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
        },
        {
          name: "Ramakrishna Upadrasta",
          link: "https://people.iith.ac.in/ramakrishna/",
        },
      ],
      color: "#D5E9FC",
      subChildren: [
        // {
        //   time: "15.00 15m",
        //   heading: "Introduction",
        //   description: "Prof. Govindarajan Ramaswamy",
        //   subDescription: "IISc Bangalore",
        //   color: "#E6F2FD",
        // },
        // {
        //   time: "15.15 45m",
        //   heading: "Keynote of tracks 2",
        //   description: "Prof. Krishna Nandivada",
        //   subDescription: "IIT Madras",
        //   link: "",
        //   color: "#E6F2FD",
        // },
      ],
    },
    // {
    //   mainTime: "16.00-17.00",
    //   leading: "Session 7",

    //   color: "#D2EAF3",
    //   subChildren: [
    //     {
    //       time: "16.00 15m",
    //       heading: "Introduction",
    //       description: "Prof. Komondoor V. Raghavan",
    //       subDescription: "IISc Bangalore",
    //       color: "#E3F4F7",
    //     },
    //     {
    //       time: "16.15 45m",
    //       heading: "Keynote of tracks 3",
    //       description: "Prof. Manas Thakur",
    //       subDescription: "IIT Bombay",
    //       link: "",
    //       color: "#E3F4F7",
    //     },
    //   ],
    // },
   
  ],
};

export default dayOneData;
