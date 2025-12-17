export const mainNav = [
  { title: "Dashboard", iconPath: "/layout-dashboard.svg", link: "#" }
];

export const secondaryNav = [
  {
    title: "SYSTEM OVERVIEW",
    items: [
      { title: "Observability Overview", iconPath: "/eye.svg", link: "#" },
      { title: "Live Log Monitor", iconPath: "/monitor.svg", link: "#", isLive: true }
    ]
  },
  {
    title: "MY SERVICES",
    items: [
      { title: "Summary", iconPath: "/select-all.svg", link: "#" },
      { title: "Proxy List", iconPath: "/clipboard-list.svg", link: "#" },
      { title: "User Settings", iconPath: "/users.svg", link: "#" },
      { title: "All Products", iconPath: "/basket.svg", link: "#", isActive: true }
    ]
  },
  {
    title: "DEVELOPER SECTION",
    items: [
      { title: "API Keys", iconPath: "/key.svg", link: "#" },
      { title: "API Requests", iconPath: "/code-changelog.svg", link: "#" }
    ]
  },
  {
    title: "AFFILIATE PROGRAMS",
    items: [
      { title: "Resellers Statistics", iconPath: "/coin.svg", link: "#" },
      { title: "Affiliate Program", iconPath: "/new-user.svg", link: "#" }
    ]
  }
];

export const footerNav = [
  { title: "Billing", iconPath: "/receipt.svg", link: "#", hasArrow: true },
  { title: "Help", iconPath: "/help-circle.svg", link: "#", hasArrow: true }
];
