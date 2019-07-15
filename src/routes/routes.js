import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import SgLettre from "@/pages/SgLettre";
import SgAccuse from "@/pages/SgAccuse";
import QaFicheProcessusIntegration from "@/pages/QaFicheProcessusIntegration";
import QaFicheProcessusTresorier from "@/pages/QaFicheProcessusTresorier";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "QA Fiche Integration",
        component: UserProfile
      },
      {
        path: "qa_fiche_processus_integration",
        name: "QaFicheProcessusIntegration",
        component: QaFicheProcessusIntegration
      },
      {
        path: "qa_fiche_processus_tresorier",
        name: "Qa Fiche Processus Tresorier",
        component: QaFicheProcessusTresorier
      },
      {
        path: "sg_lettre",
        name: "SgLettre",
        component: SgLettre
      },
      {
        path: "sg_accuse",
        name: "SgAccuse",
        component: SgAccuse
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
];

export default routes;
