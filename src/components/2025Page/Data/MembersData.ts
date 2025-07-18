//program committee
import img10 from "../../../assets/organisation/img10_SJ.svg";
import img11 from "../../../assets/organisation/img11_SS.svg";
import img12 from "../../../assets/organisation/img12_UB.svg";
import img1 from "../../../assets/organisation/img1_UK.svg";
import img2 from "../../../assets/organisation/img2_DD.svg";
import img3 from "../../../assets/organisation/img3_GR.svg";
import img4 from "../../../assets/organisation/img4_KN.svg";
import img5 from "../../../assets/organisation/img5_KRN.svg";
import img7 from "../../../assets/organisation/img7_MT.svg";
import img8 from "../../../assets/organisation/img8_RU.svg";
import img9 from "../../../assets/organisation/img9_RR.svg";

//steering commitee
import prof_krishna_nandivada from "../../../assets/organisation/prof_krishna_nandivada.webp";
import professor_sorav_bansal from "../../../assets/organisation/professor_sorav_bansal.webp";
import sameer_sahasrabuddhe from "../../../assets/organisation/sameer_sahasrabuddhe.webp";

//organizing commitee
import img1_OC from "../../../assets/organisation/image1_OC_AK.svg";
import img2_OC from "../../../assets/organisation/image2_OC_AP.svg";
import img3_OC from "../../../assets/organisation/image3_OC_PK.svg";
import img4_OC from "../../../assets/organisation/image4_OC_PC.svg";
import img5_OC from "../../../assets/organisation/image5_OC_RK.svg";
export interface MemberCardData {
  id: string;
  image: string;
  name: string;
  institute: string;
  position: string;
  link: string;
}

export const programCommitteeMemberData: MemberCardData[] = [
  {
    id: "program_committee_m1",
    image: img1,
    name: "Prof. Uday Khedker",
    institute: "IIT Bombay",
    position: "(PC Chair)",
    link: "https://www.cse.iitb.ac.in/~uday/",
  },
  {
    id: "program_committee_m2",
    image: img2,
    name: "Dr. Dibyendu Das",
    institute: "Sr. Principal Engineer, Intel",
    position: "(PC Member)",
    link: "https://www.linkedin.com/in/dibyendu-das-80341b8/",
  },
  {
    id: "program_committee_m3",
    image: img3,
    name: "Prof. Govindarajan Ramaswamy",
    institute: "IISc Bangalore",
    position: "(PC Member)",
    link: "https://eecs.iisc.ac.in/people/govindarajan-r/",
  },
  {
    id: "program_committee_m4",
    image: img4,
    name: "Prof. Kartik Nagar",
    institute: "IIT Madras",
    position: "(PC Member)",
    link: "https://kartiknagar.github.io/",
  },
  {
    id: "program_committee_m5",
    image: img5,
    name: "Prof. Krishna Nandivada",
    institute: "IIT Madras",
    position: "(PC Member)",
    link: "http://www.cse.iitm.ac.in/~krishna/",
  },
  {
    id: "program_committee_m6",
    image: img7,
    name: "Prof. Manas Thakur",
    institute: "IIT Bombay",
    position: "(PC Member)",
    link: "https://www.cse.iitb.ac.in/~manas/",
  },
  {
    id: "program_committee_m7",
    image: img8,
    name: "Prof. Ramakrishna Upadrasta",
    institute: "IIT Hyderabad",
    position: "(PC Member)",
    link: "https://people.iith.ac.in/ramakrishna/",
  },
  {
    id: "program_committee_m8",
    image: img9,
    name: "Ramana Radhakrishnan",
    institute: "Director - CPU Compilers, NVIDIA",
    position: "(PC Member)",
    link: "https://in.linkedin.com/in/themadrasi",
  },
  {
    id: "program_committee_m9",
    image: img10,
    name: "Dr. Saurabh Joshi",
    institute: "Principal Researcher, Supra Research",
    position: "(PC Member)",
    link: "https://sbjoshi.github.io/",
  },
  {
    id: "program_committee_m10",
    image: img11,
    name: "Prof. Subodh Sharma",
    institute: "IIT Delhi",
    position: "(PC Member)",
    link: "https://subodhvsharma.github.io/",
  },
  {
    id: "program_committee_m11",
    image: img12,
    name: "Prof. Uday Bondhugula",
    institute: "IISc, Bangalore and Polymage Labs",
    position: "(PC Member)",
    link: "https://www.csa.iisc.ac.in/~udayb/",
  },
];

export const organizingCommitteeMemberData: MemberCardData[] = [
  {
    id: "organizing_committee_m1",
    image: img1_OC,
    name: "Aditya Kumar",
    institute: "Distinguished Speaker at ACM",
    position: "(General Chair)",
    link: "https://linkedin.com/in/hiraditya",
  },
  {
    id: "organizing_committee_m2",
    image: img2_OC,
    name: "Ashutosh Pandey",
    institute: "AMD",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/ashupdsce/",
  },
  {
    id: "organizing_committee_m3",
    image: img3_OC,
    name: "Pradeep Kumar",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/pradeep-kumar-786a66114",
  },
  {
    id: "organizing_committee_m4",
    image: img4_OC,
    name: "Prerona Chaudhuri",
    institute: "NVIDIA",
    position: "(Co-chair)",
    link: "https://www.linkedin.com/in/prerona-chaudhuri-893091141/",
  },
  {
    id: "organizing_committee_m5",
    image: img5_OC,
    name: "Dr. Raveendra Kumar",
    institute: "TCS Research",
    position: "(Volunteer)",
    link: "https://www.linkedin.com/in/raveendrakumar/",
  },
];

export const steeringCommitteeMemberData: MemberCardData[] = [
  {
    id: "steering_committee_m1",
    image: prof_krishna_nandivada,
    name: "Prof. Krishna Nandivada",
    institute: "IIT Madras",
    position: "(SC Member)",
    link: "http://www.cse.iitm.ac.in/~krishna/",
  },
  {
    id: "steering_committee_m2",
    image: img9,
    name: "Ramana Radhakrishnan",
    institute: "Director - CPU Compilers, NVIDIA",
    position: "(SC Member)",
    link: "https://in.linkedin.com/in/themadrasi",
  },
  {
    id: "steering_committee_m3",
    image: sameer_sahasrabuddhe,
    name: "Sameer Sahasrabuddhe",
    institute: "Principal Member Of Technical Staff at AMD",
    position: "(SC Member)",
    link: "https://www.linkedin.com/in/sameerds/",
  },
  {
    id: "steering_committee_m4",
    image: professor_sorav_bansal,
    name: "Prof. Sorav Bansal",
    institute: "Graviton Fellow at Graviton Research LLP | IIT Delhi",
    position: "(SC Member)",
    link: "https://sorav.compiler.ai/",
  },
  {
    id: "steering_committee_m5",
    image: img1,
    name: "Prof. Uday Khedker",
    institute: "IIT Bombay",
    position: "(SC Member)",
    link: "https://www.cse.iitb.ac.in/~uday/",
  },
];
