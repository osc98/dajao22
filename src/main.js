import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueAOS from '@dcasia/vue-aos'
import '@dcasia/vue-aos/dist/vue-aos.css'

createApp(App).use(router)
    .use(VueAOS)
    .mount('#app')

    Vue.directive('scroll', {
        inserted: function(el, binding) {
          let f = function(evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f);
            }
          }
          window.addEventListener('scroll', f);
        }
      });