import Skeleton from './components/Skeleton.vue'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('Skeleton', Skeleton)
  },
}
