<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const getBadgeClass = (type) => {
  switch (type) {
    case 'gold':
      return 'bg-butterelle-gold text-butterelle-espresso'
    case 'rose':
      return 'bg-[#ffdad8] text-[#7d504e]'
    case 'peach':
      return 'bg-butterelle-peach border border-butterelle-border-warm text-butterelle-primary'
    case 'light':
    default:
      return 'bg-butterelle-surface text-butterelle-espresso shadow-xs'
  }
}
</script>

<template>
  <div
    class="group flex flex-col bg-butterelle-surface rounded-2xl overflow-hidden border border-butterelle-border/60 shadow-[0_4px_20px_rgba(74,59,50,0.06)] hover:shadow-[0_12px_28px_rgba(74,59,50,0.12)] hover:-translate-y-1 transition-all duration-300"
  >
    <!-- Product Image & Badges -->
    <div class="relative h-56 w-full overflow-hidden bg-butterelle-peach">
      <RouterLink :to="`/katalog-produk/${product.id}`" class="block w-full h-full">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </RouterLink>

      <!-- Pill Badge -->
      <span
        v-if="product.badge"
        :class="getBadgeClass(product.badgeType)"
        class="absolute top-3.5 left-3.5 font-montserrat font-bold text-xs px-3 py-1 rounded-full shadow-xs pointer-events-none"
      >
        {{ product.badge }}
      </span>

      <!-- Preview Button -> Navigates to Product Detail Page -->
      <RouterLink
        :to="`/katalog-produk/${product.id}`"
        class="w-8 h-8 rounded-full bg-butterelle-surface/90 hover:bg-butterelle-surface text-butterelle-espresso shadow-xs hover:shadow-md flex items-center justify-center absolute bottom-3 right-3 cursor-pointer transition-transform hover:scale-110 active:scale-95"
        title="Lihat Detail Produk"
      >
        <Icon icon="lucide:search" class="w-4 h-4 text-butterelle-espresso" />
      </RouterLink>
    </div>

    <!-- Product Content -->
    <div class="p-5 flex flex-col grow justify-between gap-4">
      <div>
        <!-- Category Tag -->
        <span
          class="font-montserrat text-[11px] tracking-wider uppercase font-semibold text-butterelle-muted block mb-1"
        >
          {{ product.categoryTag }}
        </span>

        <!-- Product Name (Link to Detail Page) -->
        <RouterLink :to="`/katalog-produk/${product.id}`">
          <h3
            class="font-montserrat font-bold text-base text-butterelle-espresso leading-snug group-hover:text-butterelle-primary transition-colors"
          >
            {{ product.name }}
          </h3>
        </RouterLink>

        <!-- Description -->
        <p class="font-montserrat text-xs/5 text-butterelle-roasted mt-1.5 line-clamp-2">
          {{ product.description }}
        </p>
      </div>

      <!-- Price & Order Button Row -->
      <div
        class="flex items-center justify-between gap-2 pt-3 border-t border-butterelle-border/40"
      >
        <div class="flex flex-col">
          <span class="font-montserrat text-[11px] text-butterelle-muted leading-tight">
            {{ product.priceLabel }}
          </span>
          <span class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso">
            {{ product.price }}
          </span>
        </div>

        <a
          :href="getWhatsAppUrl(product.waText)"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-xs hover:bg-butterelle-primary/85 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
        >
          <Icon
            :icon="
              product.btnAction === 'konsultasi'
                ? 'material-symbols:support-agent'
                : 'bi:chat-left-text'
            "
            class="w-3.5 h-3.5"
          />
          <span>{{ product.btnText }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
