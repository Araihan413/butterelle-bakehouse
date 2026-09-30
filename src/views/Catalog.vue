<script setup>
import { Icon } from '@iconify/vue'
import ProductGrid from '@/components/ui/catalog/ProductGrid.vue'
import CatalogInfo from '@/components/ui/catalog/CatalogInfo.vue'
import CatalogCta from '@/components/ui/catalog/CatalogCta.vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Header Halaman Katalog -->
    <header class="w-full pb-10 md:pb-14">
      <!-- Center Title, Subtitle & Badges -->
      <div class="text-center max-w-3xl mx-auto">
        <h1
          class="font-playfair-display font-semibold text-3xl sm:text-4xl lg:text-[44px] text-butterelle-espresso leading-tight"
        >
          Katalog Kue Butterelle
        </h1>

        <p
          class="font-montserrat text-sm sm:text-base text-butterelle-roasted mt-3.5 max-w-xl mx-auto leading-relaxed"
        >
          Pilih kue favoritmu, dibuat fresh setiap hari tanpa pengawet. Pesan langsung via WhatsApp
          dengan racikan mentega istimewa.
        </p>

        <!-- 3 Feature Badges -->
        <div
          class="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-6 sm:mt-8 text-butterelle-espresso font-montserrat font-semibold text-xs sm:text-sm"
        >
          <div class="flex items-center gap-2">
            <Icon
              icon="solar:verified-check-bold"
              class="w-4.5 h-4.5 text-butterelle-primary shrink-0"
            />
            <span>100% Halal & Alami</span>
          </div>

          <div class="flex items-center gap-2">
            <Icon
              icon="material-symbols:bakery-dining"
              class="w-5 h-5 text-butterelle-primary shrink-0"
            />
            <span>Bake by Order Fresh</span>
          </div>

          <div class="flex items-center gap-2">
            <Icon
              icon="solar:shield-check-bold"
              class="w-4.5 h-4.5 text-butterelle-primary shrink-0"
            />
            <span>Tanpa Bahan Kimia & Pengawet</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Grid Produk & Filter Kategori -->
    <main class="w-full pb-16">
      <ProductGrid />

      <!-- Catatan Pemesanan & Bahan Penyimpanan -->
      <CatalogInfo />

      <!-- Banner Layanan Personalisasi & Kembali ke Atas -->
      <CatalogCta />
    </main>
  </div>
</template>

<style scoped></style>
