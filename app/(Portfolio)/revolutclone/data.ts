import { DataType } from "./component/Carousel";

export const navbar = [
  {
    title: "Personal",
    dicover: "Discover Revolut",
    submenu: [
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
        items: [
          "Standard",
          "Plus",
          "Premium",
          "Metal",
          "Ultra",
          "Compare Plans",
        ],
      },
    ],
  },
  {
    title: "Business",
    dicover: "Discover Revolut Business",
    submenu: [
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
  },
  {
    title: "Kids & Teens",
    dicover: "",
    submenu: [
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
  },
  {
    title: "Company",
    dicover: "Discover Our Company",
    submenu: [
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
  },
];

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

export const comodities: DataType = [
  {
    section: "Stocks",
    title: "Explore 2,500+ stocks",
    description:
      "From Apple to Zoom, invest in some of the biggest and most influential companies in the world, commission-free within your monthly allowance.¹\n\nOther fees may apply. Capital at risk.",
    detail: "",
    action: "Try it out",
    addedImg: "/portfolio/revolutclone/carousel/stock.mp4",
    addedImgVideo: true,
    bgsrc: "",
    video: false,
  },
  {
    section: "Comodities",
    title: "Discover Commodities",
    description:
      "Add more balance to your portfolio with gold, silver, platinum, and palladium. And invest as you spend with automatic round ups.²\n\nOther fees may apply. Capital at risk. Service is not regulated by the FCA.",
    detail: "",
    action: "Try it out",
    addedImg: "/portfolio/revolutclone/carousel/comodities.mp4",
    addedImgVideo: true,
    bgsrc: "",
    video: false,
  },
];

export const footerCard = [
  {
    title: "Standard",
    subtitle: "Free",
    description:
      "For the financial basics — everything you need for better money management in one place. Sending money abroad or sticking to a budget has never been easier.",
  },
  {
    title: "Plus",
    subtitle: "£3.99/month",
    description:
      "For the smart spender — access additional benefits like better limits for spending abroad and insurance for your purchases, on our affordable paid plan.",
  },
  {
    title: "Premium",
    subtitle: "£7.99/month",
    description:
      "For elevating every day — access exclusive subscriptions, better savings rates, and exchange unlimited amounts of money.",
  },
  {
    title: "Metal",
    subtitle: "£14.99/month",
    description:
      "For the global travellers and traders — relax with travel insurance, enjoy enhanced limits, and subscriptions worth £2,100 annually.",
  },
  {
    title: "Ultra",
    subtitle: "£45/month (introductory offer)",
    description:
      "For those seeking the best of Revolut — get exceptional benefits like unlimited airport lounge access, monthly global data, partner subscriptions, and cancellation cover.",
  },
];

export const footerNav = [
  {
    title: "Help",
    submenu: [
      "Contact Us",
      "Help Centre",
      "System Status",
      "Developers API",
      "Site Map",
    ],
  },
  {
    title: "Crypto",
    submenu: ["Crypto", "Revolut Ramp", "Revolut X"],
  },
  {
    title: "Security & Protection",
    submenu: [
      "How We Protect Your Money",
      "Report Lost Device",
      "Learn About Fraud & Scams",
      "Security Bugs",
      "Consumer Security Insight Report",
    ],
  },
  {
    title: "Investments",
    submenu: ["Stocks", "Stocks & Shares ISA", "Commodities"],
  },
  {
    title: "Plans",
    submenu: ["Standard", "Plus", "Premium", "Metal", "Ultra", "Compare Plans"],
  },

  {
    title: "Global Finances",
    submenu: [
      "Travel with Revolut",
      "International Transfers",
      "eSIM Data Plans",
      "Lounges",
      "Insurance",
      "Donations",
    ],
  },

  {
    title: "Accounts",
    submenu: [
      "Personal Account",
      "Joint Account",
      "Professional Account",
      "Savings Account",
      "For ages 16-17",
      "Parents and guardians",
    ],
  },

  {
    title: "Company",
    submenu: ["Sustainability", "Code of Conduct"],
  },

  {
    title: "Smart Spending",
    submenu: [
      "Cards",
      "Send & Receive",
      "Revolut Pay",
      "Money Management",
      "RevPoints",
      "Linked Accounts",
      "Shops",
    ],
  },
];

export const terms = [
  "Website Terms",
  "Legal Agreements",
  "Complaints",
  "Privacy",
  "UK Modern Slavery Policy",
  "Customer Vulnerability",
  "Data Privacy Statement for Candidates",
];

export const footerLink = [
  {
    title: "International Money Transfers",
    link: [
      "Send Money to India",
      "Send Money to Nigeria",
      "Send Money to Poland",
      "Send Money to Ghana",
      "Send Money to Dubai",
      "Send Money to the UK from India",
      "Send Money to Saudi Arabia",
      "Send Money to North Macedonia",
      "Send Money to Kazakhstan",
    ],
  },
  {
    title: "Currency Converter",
    link: [
      "Convert GBP to INR",
      "Convert USD to GBP",
      "Convert GBP to EUR",
      "Convert GBP to USD",
      "Convert EUR to GBP",
      "Convert GBP to PKR",
      "Convert GBP to TRY",
      "Convert GBP to HKD",
      "Convert KRW to GBP",
      "Convert AED to GBP",
      "Convert INR to GBP",
      "Convert GBP to CAD",
      "Compare Exchange Rates",
    ],
  },
  {
    title: "",
    link: [
      "Revolut USA",
      "Revolut Spain",
      "Revolut Australia",
      "Revolut Singapore",
      "Revolut Estonia",
    ],
  },
];
