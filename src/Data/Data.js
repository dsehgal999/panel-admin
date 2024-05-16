// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Banners",
  },
  {
    icon: UilUsersAlt,
    heading: "Contests",
  },
  {
    icon: UilPackage,
    heading: 'Contest Strategies'
  },
  {
    icon: UilChart,
    heading: 'Matches'
  },
  {
    icon: UilChart,
    heading: 'Players'
  },
  {
    icon: UilChart,
    heading: 'Points'
  },
  {
    icon: UilChart,
    heading: 'KYC'
  },
  {
    icon: UilChart,
    heading: 'Withdraw Requests'
  },
  {
    icon: UilChart,
    heading: 'Notifications'
  },
  {
    icon: UilChart,
    heading: 'Users'
  },
  {
    icon: UilChart,
    heading: 'Opinions'
  },
  {
    icon: UilChart,
    heading: 'Settings'
  },

];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Customers",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    
    png: UilUsersAlt,         /*UilUsersAlt*/
    series: [
      {
        name: "Total Customers",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Withdraw Requests",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Withdraw Requests",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Pending KYC",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    
    png: UilClipboardAlt,
    series: [
      {
        name: "Pending KYC",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Total Contests",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    
    png: UilUsersAlt,         /*UilUsersAlt*/
    series: [
      {
        name: "Total Contests",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Banners",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Total Banners",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Upcoming Matches",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    
    png: UilClipboardAlt,
    series: [
      {
        name: "Upcoming Matches",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
