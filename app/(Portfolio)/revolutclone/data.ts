import { DataType } from "./component/Carousel";

export const navbar = {
  Personal: [
    {
      title: "Accounts",
      items: [
        "Personal Account",
        "Joint Account",
        "Professional Account",
        "Savings Account",
        "For ages 16-17",
        "Parents and guardians",
      ],
    },
    {
      title: "Smart Spending",
      items: [
        "Cards",
        "Send & Receive",
        "Revolut Pay",
        "Money Management",
        "RevPoints",
      ],
    },
    {
      title: "Security & Protection",
      items: [
        "How We Protect Your Money",
        "Report Lost Device",
        "Learn About Fraud & Scams",
        "Consumer Security Insight Report",
      ],
    },
    {
      title: "Investments",
      items: ["Stocks", "Stocks & Shares ISA", "Commodities"],
    },
    {
      title: "Crypto",
      items: ["Crypto", "Revolut Ramp", "Revolut X"],
    },
    {
      title: "Global Finances",
      items: [
        "Travel with Revolut",
        "International Transfers",
        "eSIM Data Plans",
      ],
    },
    {
      title: "Help",
      items: ["Contact Us", "Help Centre", "System Status"],
    },
    {
      title: "Plans",
      items: ["Standard", "Plus", "Premium", "Metal", "Ultra", "Compare Plans"],
    },
  ],
  Business: [
    {
      title: "Essentials",
      items: [
        "Multi-Currency Account",
        "Expense Management",
        "Corporate Cards",
        "Money Transfers",
        "Bills",
      ],
    },
    {
      title: "Treasury",
      items: [
        "Currency Exchange",
        "Savings",
        "Crypto",
        "FX Forwards",
        "Revolut X",
      ],
    },
    {
      title: "Accept Payments",
      items: [
        "Accept Payments",
        "Revolut Terminal",
        "Payment Links",
        "Revolut Reader",
        "Payment Gateway",
        "Revolut Pay",
        "Point of Sale",
        "Invoices",
        "Revolut Ramp",
      ],
    },
    {
      title: "Platform",
      items: ["Analytics", "Business APIs", "Integrations"],
    },
    {
      title: "Revolut People",
      items: ["Platform", "Performance", "Recruitment", "HR"],
    },
    {
      title: "Help & Resources",
      items: [
        "Customer Help",
        "Customer Stories",
        "Business Resources",
        "How we protect your money",
        "System Status",
        "Learn About Fraud & Scams",
        "What's New",
      ],
    },
    {
      title: "Plans",
      items: ["Business Account Pricing", "Payment Acceptance Pricing"],
    },
  ],
  "Kids & Teens": [
    {
      title: "For ages 6-15",
      items: [],
    },
    {
      title: "For ages 16-17",
      items: [],
    },
    {
      title: "Parents and guardians",
      items: [],
    },
    {
      title: "Help Center",
      items: [],
    },
  ],
  Company: [
    {
      title: "General",
      items: ["About Us", "Blog", "News & Media", "Revolut Reviews"],
    },
    {
      title: "Careers",
      items: [
        "Careers",
        "Working at Revolut",
        "Culture",
        "Talent Programmes",
        "Diversity & Inclusion",
        "Relocation with Revolut",
      ],
    },
    {
      title: "Shareholder Relations",
      items: ["Annual Report 2024", "Reports and results"],
    },
  ],
};

export const cards: DataType = [
  {
    section: "Physical cards",
    title: "ELEVATE YOUR SPEND",
    description:
      "Earn points on your purchase with one of your debit cards. Then redeem them for Airline Miles and more. RevPoints T&Cs apply.",
    detail: "Some cards available on paid plans only. Fees may apply.",
    action: "Start earning",
    bgsrc: "/portfolio/revolutclone/carousel/physical-card.mp4",
    video: true,
  },
  {
    section: "Virtual cards",
    title: "GO VIRTUAL",
    description:
      "Create and add virtual cards to Apple or Google Wallet to start paying right away.",
    detail: "",
    action: "Create a Card",
    bgsrc: "/portfolio/revolutclone/carousel/virtual-card.mp4",
    video: true,
  },
];

export const saving: DataType = [
  {
    section: "Adventure",
    title: "LIFE, MEET SAVINGS",
    description:
      "Grow your money with up to 4.5% AER/Gross (variable) interest rate on Savings, paid every day.",
    detail:
      "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.",
    action: "Explore Savings",
    bgsrc: "/portfolio/revolutclone/carousel/adventure.webp",
    video: false,
    addedImg: "/portfolio/revolutclone/carousel/frame-saving-adventure.webp",
  },
  {
    section: "Wedding",
    title: "LIFE, MEET SAVINGS",
    description:
      "Grow your money with up to 4.5% AER/Gross (variable) interest rate on Savings, paid every day.",
    detail:
      "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.",
    action: "Explore Savings",
    bgsrc: "/portfolio/revolutclone/carousel/wedding.webp",
    video: false,
    addedImg: "/portfolio/revolutclone/carousel/frame-saving-bigday.webp",
  },
  {
    section: "Moving",
    title: "LIFE, MEET SAVINGS",
    description:
      "Grow your money with up to 4.5% AER/Gross (variable) interest rate on Savings, paid every day.",
    detail:
      "AER stands for Annual Equivalent Rate and illustrates what the interest rate would be if interest was paid and compounded once each year. Gross is the interest rate without tax deducted. The interest rate is variable and subject to your selected plan. T&Cs apply.",
    action: "Explore Savings",
    bgsrc: "/portfolio/revolutclone/carousel/moving.webp",
    video: false,
    addedImg: "/portfolio/revolutclone/carousel/frame-saving-dreamhouse.webp",
  },
];
