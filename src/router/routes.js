import login from "pages/login/login.vue";
const routes = [
  {
    path: "/",
    component: login
  },
  // this is use for the company
  {
    path: "/Company",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "viewCompany",
        component: () => import("pages/Company/viewCompany.vue")
      },
      {
        path: "/Company",
        component: () => import("layouts/SubLayout.vue"),
        children: [
          {
            path: "create",
            component: () => import("pages/Company/create.vue")
          },
          {
            path: "EditCompany",
            component: () => import("pages/Company/EditCompany.vue")
          }
        ]
      }
    ]
  },
  // this is use for the project
  {
    path: "/Project",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "viewProject",
        component: () => import("pages/Project/viewProject.vue")
      },
      {
        path: "/Project",
        component: () => import("layouts/SubLayout.vue"),
        children: [
          {
            path: "createProject",
            component: () => import("pages/Project/createProject.vue")
          },
          {
            path: "EditProject",
            component: () => import("pages/Project/EditProject.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/Environment",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "viewEnvironment",
        component: () => import("pages/Environment/viewEnvironment.vue")
      },
      {
        path: "/Environment",
        component: () => import("layouts/SubLayout.vue"),
        children: [
          {
            path: "createEnvironment",
            component: () => import("pages/Environment/createEnvironment.vue")
          },
          {
            path: "EditEnvironment",
            component: () => import("pages/Environment/EditEnvironment.vue")
          }
        ]
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
