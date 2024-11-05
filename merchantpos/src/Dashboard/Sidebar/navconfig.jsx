import { Icon } from "@iconify/react";

export const navConfig = [
  {
    type: "route",
    title: "Dashboard",
    path: "/dashboard/store",
    icon: <Icon icon="fluent:arrow-trending-lines-24-filled" />,
  },
  {
    type: "route",
    title: "POS",
    path: "/dashboard/pos",
    icon: <Icon icon="eos-icons:admin-outlined" />,
  },
  {
    type: "route",
    title: "Invoice",
    path: "/dashboard/invoice",
    icon: <Icon icon="iconamoon:invoice-fill" />,
  },
  {
    type: "route",
    title: "Staff",
    path: "/dashboard/staff",
    icon: <Icon icon="fluent:people-team-add-20-filled" />,
  },
  {
    type: "collapse",
    title: "Test",
    icon: <Icon icon="fluent:people-team-add-20-filled" />,
    path: "/dashboard/user/Test1",
    subRoutes: [
      {
        type: "route",
        name: "Subroute Test1",
        key: "add-user",
        path: "/dashboard/user/test1",
      },
      {
        type: "route",
        name: "Subroute Test1",
        key: "all-users",
        path: "/dashboard/user/test1",
      },
    ],
  },
  {
    type: "collapse",
    title: "Test 2 ",
    icon: <Icon icon="fluent:people-team-add-20-filled" />,
    path: "/dashboard/user/Test2",
    subRoutes: [
      {
        type: "route",
        name: "Subroute Test2",
        key: "add-user",
        path: "/dashboard/user/test2",
      },
      {
        type: "route",
        name: "Subroute Test2",
        key: "all-users",
        path: "/dashboard/user/test3",
      },
    ],
  },
];
