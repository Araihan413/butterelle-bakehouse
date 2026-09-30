<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="w-full py-8 md:py-12">
    <!-- Card Kutipan Pendiri & Tim Dapur -->
    <div
      class="w-full bg-butterelle-surface rounded-3xl py-12 px-6 sm:py-16 sm:px-12 md:px-16 text-center border border-butterelle-border-warm/80 shadow-2xs relative overflow-hidden"
    >
      <div class="max-w-3xl mx-auto flex flex-col items-center">
        <!-- Ikon Tanda Petik Elegan -->
        <div class="mb-4 text-butterelle-terracotta/75">
          <Icon icon="bxs:quote-alt-left" class="w-8 h-8 sm:w-9 sm:h-9" />
        </div>

        <!-- Kalimat Kutipan Miring Playfair Display -->
        <blockquote
          class="font-playfair-display italic font-medium text-lg sm:text-2xl md:text-[26px] text-butterelle-espresso leading-relaxed sm:leading-snug max-w-2xl"
        >
          “Seperti pelukan ibu, kami ingin setiap produk membawa kehangatan rumah. Karena setiap
          adonan punya cerita – dan cerita kami adalah tentang pulang.”
        </blockquote>

        <!-- Atribusi Penulis / Tim Dapur -->
        <cite
          class="not-italic font-montserrat font-semibold text-[11px] sm:text-xs tracking-wider uppercase text-butterelle-roasted mt-6 block"
        >
          — BUTTERELLE BAKEHOUSE
        </cite>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
