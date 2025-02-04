import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import Cover from "@/components/Cover.vue";
import ExperienceAndProjects from "@/components/ExperienceAndProjects.vue";
import ScrollAnimation from "@/directives/ScrollAnimation";
import CustomCard from "@/components/CustomCard.vue";
import RecommendationCard from "@/components/RecommendationCard.vue";
import AboutMe from "@/components/AboutMe.vue";
import CustomMenu from "@/components/CustomMenu.vue";
import Contact from "@/components/Contact.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.component("cover", Cover);
Vue.component("expereinceAndProjects", ExperienceAndProjects);
Vue.component("customCard", CustomCard);
Vue.component("recommendationCard", RecommendationCard);
Vue.component("aboutMe", AboutMe);
Vue.component("customMenu", CustomMenu);
Vue.component("contact", Contact);

Vue.directive("scrollAnimation", ScrollAnimation);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
