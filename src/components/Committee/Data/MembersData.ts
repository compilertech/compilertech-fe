import { MemberCardProps } from "../MemberCard";
//program committee
import img1 from "../../../assets/organisation/img1_UK.svg"
import img2 from "../../../assets/organisation/img2_DD.svg"
import img3 from "../../../assets/organisation/img3_GR.svg"
import img4 from "../../../assets/organisation/img4_KN.svg"
import img5 from "../../../assets/organisation/img5_KRN.svg"
import img6 from "../../../assets/organisation/img6_KVR.svg"
import img7 from "../../../assets/organisation/img7_MT.svg"
import img8 from "../../../assets/organisation/img8_RU.svg"
import img9 from "../../../assets/organisation/img9_RR.svg"
import img10 from "../../../assets/organisation/img10_SJ.svg"
import img11 from "../../../assets/organisation/img11_SS.svg"
import img12 from "../../../assets/organisation/img12_UB.svg"

//organizing commitee 
import img1_OC from "../../../assets/organisation/image1_OC_AK.svg"
import img2_OC from "../../../assets/organisation/image2_OC_AP.svg"
import img3_OC from "../../../assets/organisation/image3_OC_PK.svg"
import img4_OC from "../../../assets/organisation/image4_OC_PC.svg"
import img5_OC from "../../../assets/organisation/image5_OC_RK.svg"
import img6_OC from "../../../assets/organisation/image6_OC_VB.svg"


export const programCommitteeMemberData: MemberCardProps[] = [  
  {
    id: "program_committee_m1",
    image: img1,
    name: "Prof. Uday Khedker",
    institute: "IIT Bombay",
    position: "(PC Chair)",
    link:"https://www.cse.iitb.ac.in/~uday/",
  },
  {
    id: "program_committee_m2",
    image: img2,
    name: "Dr. Dibyendu Das",
    institute: "Sr. Principal Engineer, Intel",
    position: "(PC Member)",
    link:"https://www.researchgate.net/profile/Dibyendu-Das",
  },
  {
    id: "program_committee_m3",
    image: img3,
    name: "Prof. Govindarajan Ramaswamy",
    institute: "IISc Bangalore",
    position: "(PC Member)",
    link:"https://eecs.iisc.ac.in/people/govindarajan-r/",
  },
  {
    id: "program_committee_m4",
    image: img4,
    name: "Prof. Kartik Nagar",
    institute: "IIT Madras",
    position: "(PC Member)",
    link:""    //missing
  },
  {
    id: "program_committee_m5",
    image: img5,
    name: "Prof. Krishna Nandivada",
    institute: "IIT Madras",
    position: "(PC Member)",
    link:"http://www.cse.iitm.ac.in/~krishna/",
  },
  {
    id: "program_committee_m6",
    image: img6,
    name: "Prof. Komondoor V. Raghavan",
    institute: "IISc Bangalore",
    position: "(PC Member)",
    link:" https://www.csa.iisc.ac.in/~raghavan/",
  },
  {
    id: "program_committee_m7",
    image: img7,
    name: "Prof. Manas Thakur",
    institute: "IIT Bombay",
    position: "(PC Member)",
    link:"https://www.cse.iitb.ac.in/~manas/"
  },
  {
    id: "program_committee_m8",
    image: img8,
    name: "Prof. Ramakrishna Upadrasta",
    institute: "IIT Hyderabad",
    position: "(PC Member)",
    link:"https://people.iith.ac.in/ramakrishna/",
  },
  {
    id: "program_committee_m9",
    image: img9,
    name: "Ramana Radhakrishnan",
    institute: "Director - CPU Compilers, Nvidia",
    position: "(PC Member)",
    link:""    //missing
  },
  {
    id: "program_committee_m10",
    image: img10,
    name: "Dr. Saurabh Joshi",
    institute: "Principal Researcher, Supra Research",
    position: "(PC Member)",
    link:"https://supra.com/research-team/saurabh-joshi/",
  },
  {
    id: "program_committee_m11",
    image: img11,
    name: "Prof. Subodh Sharma",
    institute: "IIT Delhi",
    position: "(PC Member)",
    link:"https://subodhvsharma.github.io/",
  },
  {
    id: "program_committee_m12",
    image: img12,
    name: "Dr. Uday Bondhugula",
    institute: "Founder, CEO & CTO, Polymage Labs",
    position: "(PC Member)",
    link:""    //missing
  },
];


export const organizingCommitteeMemberData: MemberCardProps[] = [
    {
      id: "organizing_committee_m1",
      image: img1_OC,
      name: "Aditya Kumar",
      institute: "Distinguished Speaker at ACM",
      position: "(Chair)",
      link:"https://speakers.acm.org/speakers/kumar_12579",
    },
    {
      id: "organizing_committee_m2",
      image: img2_OC,
      name: "Ashutosh Pandey",
      institute: "AMD",
      position: "(Co-chair)",
      link:"https://www.linkedin.com/in/ashupdsce/",
    },
    {
      id: "organizing_committee_m3",
      image: img3_OC,
      name: "Pradeep Kumar",
      institute: "Nvidia",
      position: "(Co-chair)",
      link:"https://www.linkedin.com/in/pradeep-kumar-786a66114",
    },
    {
      id: "organizing_committee_m4",
      image: img4_OC,
      name: "Prerona Chaudhuri",
      institute: "Nvidia",
      position: "(Volunteer)",
      link:"https://www.linkedin.com/in/prerona-chaudhuri-893091141/",
    },
    {
      id: "organizing_committee_m5",
      image: img5_OC,
      name: "Dr. Raveendra Kumar",
      institute: "TCS Research",
      position: "(Volunteer)",
      link:"https://www.linkedin.com/in/raveendrakumar/",
    },
    {
      id: "organizing_committee_m6",
      image: img6_OC,
      name: "Vinayaka Bandishti",
      institute: "Google",
      position: "(Volunteer)",
      link:"https://www.linkedin.com/in/vinayaka-bandishti-0825265a/",
    },
  ];