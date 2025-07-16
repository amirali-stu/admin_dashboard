import { AtmOutlined } from "@mui/icons-material";
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
const latestTransActionData = [
  {
    id: 1,
    username: "Mohammad",
    date: "2023-01-15",
    amount: 245,
    status: "Approved",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 2,
    username: "Ali",
    date: "2023-06-22",
    amount: 378,
    status: "Pending",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 3,
    username: "Sara",
    date: "2024-03-10",
    amount: 150,
    status: "Declined",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 4,
    username: "Hossein",
    date: "2024-09-05",
    amount: 890,
    status: "Approved",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 5,
    username: "Zahra",
    date: "2025-02-18",
    amount: 320,
    status: "Pending",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 6,
    username: "Reza",
    date: "2025-07-01",
    amount: 500,
    status: "Approved",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 7,
    username: "Fatima",
    date: "2025-07-10",
    amount: 675,
    status: "Declined",
    profile: "images/profile/Admin-Profile.png",
  },
  {
    id: 8,
    username: "Ehsan",
    date: "2025-07-16", // امروز
    amount: 200,
    status: "Pending",
    profile: "images/profile/Admin-Profile.png",
  },
];

export { chartData, featureData, newUsersRecently, latestTransActionData };
