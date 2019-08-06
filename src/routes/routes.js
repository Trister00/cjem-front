import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";

import SgLettre from "@/pages/SgLettre";
import SgAccuse from "@/pages/SgAccuse";
import QaFicheProcessusIntegration from "@/pages/QaFicheProcessusIntegration";
import QaFicheProcessusTresorier from "@/pages/QaFicheProcessusTresorier";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import LettreApprobation from "@/pages/LettreApprobation";
import ListeQA from "@/pages/ListQA";
import ListIntegration from "@/pages/ListIntegration";
import QAFichePoste from "@/pages/QAFichePoste";

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
        name: "user",
        component: UserProfile
      },
      {
        path: "qa_fiche_poste",
        name: "QA Fiche Integration",
        component: QAFichePoste
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
        path: "lettre_approbation",
        name: "LettreApprobation",
        component: LettreApprobation
      },
      {
        path: "list_qa",
        name: "ListQA",
        component: ListeQA
      },
      {
        path: "list_integ",
        name: "ListIntegration",
        component: ListIntegration
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
];

export default routes;
