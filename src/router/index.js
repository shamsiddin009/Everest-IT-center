import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseDetailView from '../views/CourseDetailView.vue';
import TeachersView from '../views/TeachersView.vue';
import NewsView from '../views/NewsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Bosh sahifa' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: 'Biz haqimizda' } },
  { path: '/courses', name: 'courses', component: CoursesView, meta: { title: 'Barcha Kurslar' } },
  { path: '/courses/:slug', name: 'course-detail', component: CourseDetailView, meta: { title: 'Kurs tafsilotlari' } },
  { path: '/teachers', name: 'teachers', component: TeachersView, meta: { title: 'O‘qituvchilar' } },
  { path: '/news', name: 'news', component: NewsView, meta: { title: 'Yangiliklar' } },
  { path: '/pricing', redirect: '/news' },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Bog‘lanish' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

router.afterEach((to) => {
  // Ensure body scroll is unlocked on every page transition
  if (typeof document !== 'undefined' && document.body) {
    document.body.style.overflow = '';
  }
  const pageTitle = to.meta.title ? `${to.meta.title} — Everest IT Center` : 'Everest IT Center';
  document.title = pageTitle;
});

export default router;
