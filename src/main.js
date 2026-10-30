import { createApp, nextTick } from 'vue'
import './style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')

  // Initialize AOS with smooth, non-blocking modern settings
  AOS.init({
    duration: 700,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    once: true, // Animatsiya bir marta silliq o'ynaydi va scroll paytida qotmaydi
    offset: 50,
    delay: 0,
    mirror: false
  })
})

// Refresh AOS safely on every route navigation
router.afterEach(() => {
  nextTick(() => {
    setTimeout(() => {
      AOS.refreshHard()
    }, 100)
  })
})
