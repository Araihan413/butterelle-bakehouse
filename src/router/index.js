import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/katalog-produk',
    name: 'catalog',
    component: () => import('../views/Catalog.vue'),
    meta: { title: 'Katalog Produk' },
  },
  {
    path: '/katalog-produk/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetail.vue'),
    meta: { title: 'Detail Produk' },
  },
  {
    path: '/cara-pesan',
    name: 'HowToOrder',
    component: () => import('../views/HowToOrder.vue'),
    meta: { title: 'Cara Pesan' },
  },
  {
    path: '/tentang-kami',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue'),
    meta: { title: 'Tentang Kami' },
  },
  {
    path: '/kontak-lokasi',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue'),
    meta: { title: 'Kontak & Lokasi' },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const defaultTitle = 'Butterelle Bakehouse - Kehangatan Rumah Dalam Setiap Gigitan'
  if (to.meta?.title && to.name !== 'home') {
    document.title = `${to.meta.title} | Butterelle Bakehouse`
  } else {
    document.title = defaultTitle
  }
})

export default router
