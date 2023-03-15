import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

import '@/assets/css/reset.css'
import '@/assets/css/common.css'

/* import awsome fonts */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhoneAlt,faEnvelope,faExternalLinkAlt,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faPhoneAlt,faEnvelope,faExternalLinkAlt,faArrowRight,faInstagram,faLinkedin,);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('scroll-parallax', ScrollParallax)
app.use(createPinia())
app.use(router)

app.mount('#app')

