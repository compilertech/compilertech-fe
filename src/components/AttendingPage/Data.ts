import vector1 from "../../assets/attending/Vector.svg";
import vector2 from "../../assets/attending/Vector2.svg";
import vector3 from "../../assets/attending/Vector3.svg";
import vector4 from "../../assets/attending/Vector4.svg";
import vector5 from "../../assets/attending/Vector5.svg";
import vector6 from "../../assets/attending/Vector6.svg";

export const attendingText = {
  heading: "Venue: Dayananda Sagar College of Engineering, BANGALORE",

  location: {
    title: "LOCATION",
    address:
      "Shavige Malleshwara Hills, 91st Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka - 560078.",
  },
  accommodation: {
    title: "ACCOMMODATIONS",
    description:
      "The following locations are near the venue and are relatively cheaper.",
  },
  advices: {
    title: "ADVICES",
    description: [
      "Identity proof (Driver's License, Student Id, Aadhaar, or Passport)",
      "Email confirmation of the registration",
    ],
  },
} as const;

export const vectors = {
  location: [
    {
      icon: vector1,
      details: "Via Location",
      href: "https://maps.app.goo.gl/jo4HcTA3QhKR7Tsz7",
    },
    {
      icon: vector2,
      details: "Kempegowda International Airport",
      href: "https://maps.app.goo.gl/MTTh75P6HRqJ7JdF7",
    },
    {
      icon: vector3,
      details: "KSR Bengaluru City Junction",
      href: "https://maps.app.goo.gl/ThjaxRQ5GvbztLjx5",
    },
  ],
  accomodation: [
    {
      icon: vector4,
      details: "Hotel SY comfort",
      href: "https://maps.app.goo.gl/TLYn3Ad4bgTzvgog8",
    },
    {
      icon: vector5,
      details: "Sri Shambhavi Comforts",
      href: "https://maps.app.goo.gl/HpwQWEuhQLQHWrDQ9",
    },
    {
      icon: vector6,
      details: "OYO 8501 Abhimani",
      href: "https://maps.app.goo.gl/m3N9enJUkHEjaW8h8",
    },
  ],
} as const;
