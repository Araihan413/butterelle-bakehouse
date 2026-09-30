<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { products } from '@/data/products.js'
import ProductCard from '@/components/ui/catalog/ProductCard.vue'

// Produk populer pilihan: Lontar Original, Lontar Cokelat, Nastar, Kue Kacang
const popularProductIds = [5, 6, 8, 2]
const popularProducts = computed(() => {
  return popularProductIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)
})
</script>

<template>
  <section class="w-full py-12 md:py-20" id="katalog-section">
    <!-- Header Section -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
      <div class="max-w-xl">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
        >
          PALING DIMINATI
        </span>
        <h2
          class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso mt-1.5 leading-tight"
        >
          Menu Favorit Pilihan Pelanggan
        </h2>
        <p class="font-montserrat text-butterelle-roasted text-sm/6 mt-2">
          Dari kue lontar khas Papua yang creamy lembut hingga kelezatan kue kering beraroma butter.
        </p>
      </div>

      <RouterLink
        to="/katalog-produk"
        class="inline-flex items-center gap-1.5 font-montserrat font-semibold text-sm text-butterelle-primary hover:text-butterelle-terracotta group transition-colors self-start md:self-end"
      >
        <span>Lihat Menu Selengkapnya</span>
        <Icon
          icon="akar-icons:arrow-right"
          class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
        />
      </RouterLink>
    </div>

    <!-- Product Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in popularProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<style scoped></style>
