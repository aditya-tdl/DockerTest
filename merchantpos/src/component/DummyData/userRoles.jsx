export const users = [
  {
    id: 1,
    roleName: "Admin",
    roleDescription: "This is an Admin with all permissions",
    permissions: {
      dashboard: true,
      invoice: true,
      pos: true,
      users: true,
    },
  },
  {
    id: 2,
    roleName: "Staff",
    roleDescription: "This role has limited access to manage daily tasks",
    permissions: {
      dashboard: true,
      invoice: true,
      pos: true,
      users: false,
    },
  },
  {
    id: 3,
    roleName: "User",
    roleDescription: "Basic user with access to dashboard only",
    permissions: {
      dashboard: true,
      invoice: false,
      pos: false,
      users: false,
    },
  },
  {
    id: 4,
    roleName: "Merchant",
    roleDescription: "Merchant role has access to POS and Invoice management",
    permissions: {
      dashboard: false,
      invoice: true,
      pos: true,
      users: false,
    },
  },
  {
    id: 5,
    roleName: "Super Admin",
    roleDescription: "Super Admin can manage everything",
    permissions: {
      dashboard: true,
      invoice: true,
      pos: true,
      users: true,
    },
  },
  {
    id: 6,
    roleName: "Manager",
    roleDescription: "Manager role can handle POS and Users management",
    permissions: {
      dashboard: true,
      invoice: false,
      pos: true,
      users: true,
    },
  },
  {
    id: 7,
    roleName: "Sales",
    roleDescription: "Sales role has access to POS and dashboard",
    permissions: {
      dashboard: true,
      invoice: false,
      pos: true,
      users: false,
    },
  },
  {
    id: 8,
    roleName: "Support",
    roleDescription:
      "Support staff has limited permissions to dashboard and users",
    permissions: {
      dashboard: true,
      invoice: false,
      pos: false,
      users: true,
    },
  },
  {
    id: 9,
    roleName: "Accountant",
    roleDescription: "Accountant role with access to invoices only",
    permissions: {
      dashboard: false,
      invoice: true,
      pos: false,
      users: false,
    },
  },
  {
    id: 10,
    roleName: "Customer",
    roleDescription: "Customer role with no access to internal features",
    permissions: {
      dashboard: false,
      invoice: false,
      pos: false,
      users: false,
    },
  },
];
