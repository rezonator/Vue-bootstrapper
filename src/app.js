import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

/* Name is APP */
// Vue.component('app', {
//   template: `
//     <div id="app">
//       <nav class="nav has-shadows">
//         <h1>DUPA</h1>
//       </nav>
//     </div>
//   `
// })

/* Our mian applaiction just renders the element */
const app = new Vue({
  ...AppLayout
})

export { app }
