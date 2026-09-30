<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { products } from '@/data/products.js'

const route = useRoute()

const isProductDetail = computed(() => route.name === 'product-detail')

const currentProduct = computed(() => {
  if (!isProductDetail.value) return null
  const id = Number(route.params.id)
  return products.find((p) => p.id === id) || null
})

const routeTitleMap = {
  '/katalog-produk': 'Katalog Produk',
  '/cara-pesan': 'Cara Pesan',
  '/tentang-kami': 'Tentang Kami',
  '/kontak-lokasi': 'Kontak & Lokasi',
}

const currentTitle = computed(() => {
  if (isProductDetail.value && currentProduct.value) {
    return currentProduct.value.name
  }
  return route.meta?.title || routeTitleMap[route.path] || route.name || ''
})

const isHome = computed(() => {
  return route.path === '/' || route.name === 'home'
})
</script>

<template>
  <nav
    v-if="!isHome && currentTitle"
    aria-label="Breadcrumb"
    class="flex items-center text-xs sm:text-sm font-montserrat text-butterelle-roasted mb-6 md:mb-10 flex-wrap gap-y-1"
  >
    <RouterLink
      to="/"
      class="hover:text-butterelle-primary transition-colors inline-flex items-center gap-1.5"
    >
      <Icon icon="solar:home-2-outline" class="w-3.5 h-3.5 text-butterelle-muted" />
      <span>Home</span>
    </RouterLink>
    <span class="mx-2 text-butterelle-muted/50">/</span>

    <!-- Breadcrumb Khusus Halaman Detail Produk -->
    <template v-if="isProductDetail">
      <RouterLink to="/katalog-produk" class="hover:text-butterelle-primary transition-colors">
        Katalog Produk
      </RouterLink>
      <span class="mx-2 text-butterelle-muted/50">/</span>
      <span class="text-butterelle-primary font-semibold">{{ currentTitle }}</span>
    </template>

    <!-- Breadcrumb Halaman Standar -->
    <template v-else>
      <span class="text-butterelle-primary font-semibold">{{ currentTitle }}</span>
    </template>
  </nav>
</template>

<style scoped></style>
