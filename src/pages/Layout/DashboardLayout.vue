<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <div v-if="userInfo.role == 'qualite et audit'">
        <sidebar-link to="/qa_fiche_poste">
          <md-icon>person</md-icon>
          <p>QA Fiche de poste Integration</p>
        </sidebar-link>
        <sidebar-link to="/qa_fiche_processus_integration">
          <md-icon>person</md-icon>
          <p>QA Fiche de processus Integration</p>
        </sidebar-link>
        <sidebar-link to="/qa_fiche_processus_tresorier">
          <md-icon>person</md-icon>
          <p>QA Fiche de processus Tresorier</p>
        </sidebar-link>
      </div>

      <div v-if="userInfo.role == 'presidence et secretariat general' || userInfo.role == 'admin' ">
        <sidebar-link to="/table">
          <md-icon>content_paste</md-icon>
          <p>List SG</p>
        </sidebar-link>
      </div>
      <div v-if="userInfo.role == 'qualite et audit' || userInfo.role == 'admin'">
        <sidebar-link to="/list_qa">
          <md-icon>content_paste</md-icon>
          <p>List QA</p>
        </sidebar-link>
      </div>
      <div v-if="userInfo.role == 'integration et formation' || userInfo.role == 'admin'">
        <sidebar-link to="/list_integ">
          <md-icon>content_paste</md-icon>
          <p>List Integration</p>
        </sidebar-link>
      </div>
      <div v-if="userInfo.role == 'presidence et secretariat general'">
        <sidebar-link to="/sg_lettre">
          <md-icon>library_books</md-icon>
          <p>SG Lettre adhesion</p>
        </sidebar-link>
        <sidebar-link to="/sg_accuse">
          <md-icon>library_books</md-icon>
          <p>SG Accuse</p>
        </sidebar-link>
      </div>
      <div v-if="userInfo.role == 'integration et formation'">
        <sidebar-link to="/lettre_approbation">
          <md-icon>library_books</md-icon>
          <p>Lettre Approbation</p>
        </sidebar-link>
      </div>
      <div v-if="userInfo.role == 'admin'">
        <sidebar-link to="/register">
          <md-icon>library_books</md-icon>
          <p>Creation Compte</p>
        </sidebar-link>
      </div>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data() {
    return {
      userInfo: {
        active: Boolean,
        email: "",
        name: "",
        role: "",
        token: ""
      }
    };
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (this.userInfo == null) {
      this.$router.push("/login");
    }
    console.log(this.userInfo);
  }
};
</script>
