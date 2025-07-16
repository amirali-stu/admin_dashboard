import { image } from "framer-motion/client";

const chartData = [
  { name: "Jan", sale: 90_000 },
  { name: "Feb", sale: 100_000 },
  { name: "Mar", sale: 160_000 },
  { name: "Apr", sale: 135_000 },
  { name: "May", sale: 2_000 },
  { name: "Jun", sale: 50_000 },
  { name: "Jul", sale: 90_000 },
  { name: "Aug", sale: 100_000 },
  { name: "Sep", sale: 160_000 },
  { name: "Oct", sale: 200_000 },
  { name: "Nov", sale: 2_000 },
  { name: "Dec", sale: 50_000 },
];
const featureData = [
  {
    id: 1,
    title: "Revanue",
    mony: "$2,415",
    monyStatus: "-11.4",
    status: "down",
    desc: "Compared to last month",
  },
  {
    id: 2,
    title: "Revanue",
    mony: "$2,415",
    monyStatus: "-11.4",
    status: "down",
    desc: "Compared to last month",
  },
  {
    id: 3,
    title: "Cost",
    mony: "$2,415",
    monyStatus: "+2.4",
    status: "down",
    desc: "Compared to last month",
  },
];
const newUsersRecently = [
  {
    id: 1,
    username: "Mohammad",
    skills: "Web Developer",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 2,
    username: "Ali",
    skills: "Mobile Developer",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 3,
    username: "Sara",
    skills: "UI/UX Designer",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 4,
    username: "Hossein",
    skills: "Data Analyst",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 5,
    username: "Zahra",
    skills: "Backend Developer",
    profile: "images/profile/Admin-Profile.png",
  },
];

export { chartData, featureData, newUsersRecently };
