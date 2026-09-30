<script setup>
import { Icon } from '@iconify/vue'
import OurStory from '@/components/ui/about-us/OurStory.vue'
import IngredientPhilosophy from '@/components/ui/about-us/IngredientPhilosophy.vue'
import KitchenBehindTheScenes from '@/components/ui/about-us/KitchenBehindTheScenes.vue'
import FounderQuote from '@/components/ui/about-us/FounderQuote.vue'
import OurValues from '@/components/ui/about-us/OurValues.vue'
import AboutCta from '@/components/ui/about-us/AboutCta.vue'
</script>

<template>
  <div class="flex flex-col w-full pb-16">
    <!-- Header Section Tentang Kami (Direct in View) -->
    <section class="w-full pt-4 pb-10 md:pb-16 text-center">
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <!-- Pill Badge Cerita di Balik Oven Kami -->
        <div
          class="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-butterelle-peach border border-butterelle-border-warm/70 mb-5 shadow-2xs"
        >
          <Icon icon="material-symbols:bakery-dining" class="w-4 h-4 text-butterelle-primary" />
          <span
            class="font-playfair-display italic text-xs sm:text-sm text-butterelle-primary font-medium"
          >
            Cerita di Balik Oven Kami
          </span>
        </div>

        <!-- Judul Utama H1 -->
        <h1
          class="font-playfair-display font-semibold text-3xl sm:text-4xl lg:text-[44px] text-butterelle-espresso leading-tight tracking-tight"
        >
          Cerita di Balik Butterelle Bakehouse
        </h1>

        <!-- Deskripsi Narasi Cerita -->
        <p
          class="font-montserrat text-sm sm:text-base text-butterelle-roasted mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Kehangatan rumah dalam setiap gigitan. Karena setiap adonan punya cerita – dan cerita kami
          adalah tentang pulang.
        </p>

        <!-- Divider Ornament Elegan -->
        <div class="flex items-center justify-center gap-3.5 mt-7 sm:mt-8">
          <div class="w-12 sm:w-16 h-px bg-butterelle-border-warm"></div>
          <Icon icon="solar:leaf-bold" class="w-4 h-4 text-butterelle-terracotta/75" />
          <div class="w-12 sm:w-16 h-px bg-butterelle-border-warm"></div>
        </div>
      </div>
    </section>

    <!-- Bagian Cerita Kami (Bermula dari Dapur Rumah) -->
    <OurStory />

    <!-- Integritas Dapur & Filosofi Bahan Terbaik -->
    <IngredientPhilosophy />

    <!-- Dibalik Layar Dapur Butterelle (Proses Penuh Ketelitian) -->
    <KitchenBehindTheScenes />

    <!-- Kutipan Pendiri & Tim Dapur -->
    <FounderQuote />

    <!-- Janji Pelayanan & Nilai Komitmen Kami -->
    <OurValues />

    <!-- Banner Penutup Konsultasi & Pesanan Khusus (CTA) -->
    <AboutCta />
  </div>
</template>

<style scoped></style>
