<script setup>
import { ref, computed } from 'vue'
import { categories, products } from '@/data/products.js'
import ProductCard from '@/components/ui/catalog/ProductCard.vue'

// State Kategori Aktif
const activeCategory = ref('all')

// Filter produk berdasarkan kategori aktif
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return products
  }
  return products.filter((p) => p.category === activeCategory.value)
})
</script>

<template>
  <div class="w-full">
    <!-- Category Filter Tabs (Pills) -->
    <div class="flex items-center justify-center mb-10 md:mb-12">
      <div
        class="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-butterelle-peach/60 border border-butterelle-border-warm/70 rounded-full"
      >
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          class="px-4 sm:px-5 py-2 rounded-full font-montserrat text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none"
          :class="
            activeCategory === cat.id
              ? 'bg-butterelle-primary text-butterelle-surface shadow-xs scale-102'
              : 'text-butterelle-roasted hover:text-butterelle-espresso hover:bg-butterelle-peach'
          "
        >
          {{ cat.label }} ({{ cat.count }})
        </button>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped></style>
