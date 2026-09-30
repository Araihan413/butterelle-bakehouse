<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

// State accordion: default keduanya terbuka sesuai gambar
const openAccordions = ref([])

const toggleAccordion = (index) => {
  if (openAccordions.value.includes(index)) {
    openAccordions.value = openAccordions.value.filter((i) => i !== index)
  } else {
    openAccordions.value.push(index)
  }
}

const storageItems = [
  {
    title: 'Kualitas Bahan Pilihan',
    description:
      'Seluruh sajian dibuat dengan butter berkualitas dan bahan-bahan pilihan, tanpa bahan pengawet sintetis maupun pemanis buatan.',
  },
  {
    title: 'Ketahanan Kue Lontar & Kue Kering',
    description:
      'Kue Lontar tahan 1–2 hari di suhu ruang sejuk atau hingga 6–7 hari di dalam kulkas (nikmat disantap dingin). Untuk aneka Kue Kering toples bersegel dapat bertahan hingga 2–3 bulan di tempat sejuk tanpa bahan pengawet.',
  },
]
</script>

<template>
  <div class="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
    <!-- Box 1: Catatan Penting Pemesanan (Bake by Order) -->
    <div
      class="bg-butterelle-butter-light/85 border border-butterelle-gold/80 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between"
    >
      <div>
        <!-- Header dengan Ikon Jam Bulat -->
        <div class="flex items-start gap-3.5 mb-3">
          <div
            class="w-10 h-10 rounded-full bg-butterelle-gold/80 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs mt-0.5"
          >
            <Icon icon="solar:clock-circle-bold" class="w-5 h-5 text-amber-800" />
          </div>
          <h3
            class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso leading-snug"
          >
            Catatan Penting Pemesanan (Bake by Order)
          </h3>
        </div>

        <!-- Deskripsi -->
        <p
          class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted leading-relaxed pl-0 sm:pl-13.5"
        >
          Semua kue dibuat fresh setelah pesanan masuk demi menjaga kesegaran rasa mentega murni.
          Mohon order minimal H-1 untuk lontar, H-2 untuk kue kering dan hampers.
        </p>
      </div>

      <!-- Tautan Panduan Pesan -->
      <div class="pt-4 pl-0 sm:pl-13.5">
        <RouterLink
          to="/cara-pesan"
          class="inline-flex items-center gap-2 font-montserrat font-semibold text-xs sm:text-sm text-butterelle-terracotta hover:text-butterelle-primary transition-colors group"
        >
          <Icon
            icon="solar:document-text-bold"
            class="w-4 h-4 text-butterelle-terracotta group-hover:scale-105 transition-transform"
          />
          <span>Baca Panduan Pesan</span>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </RouterLink>
      </div>
    </div>

    <!-- Box 2: Bahan & Penyimpanan -->
    <div
      class="bg-butterelle-peach/75 border border-butterelle-border-warm/80 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col"
    >
      <!-- Header dengan Ikon Kue -->
      <div class="flex items-center gap-2.5 mb-5">
        <Icon icon="ph:cookie-bold" class="w-6 h-6 text-butterelle-primary shrink-0" />
        <h3 class="font-playfair-display font-semibold text-2xl text-butterelle-espresso">
          Bahan & Penyimpanan
        </h3>
      </div>

      <!-- List Accordion -->
      <div class="space-y-3.5">
        <div
          v-for="(item, idx) in storageItems"
          :key="idx"
          class="bg-butterelle-surface rounded-2xl border border-butterelle-border-warm/70 overflow-hidden shadow-2xs hover:shadow-xs transition-all"
        >
          <button
            type="button"
            @click="toggleAccordion(idx)"
            class="w-full p-4 sm:p-4.5 flex items-center justify-between gap-3 text-left cursor-pointer select-none focus:outline-none"
            :aria-expanded="openAccordions.includes(idx)"
          >
            <span class="font-montserrat font-bold text-xs sm:text-sm text-butterelle-espresso">
              {{ item.title }}
            </span>
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              class="w-5 h-5 text-butterelle-primary shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openAccordions.includes(idx) }"
            />
          </button>

          <!-- Accordion Content -->
          <div
            v-show="openAccordions.includes(idx)"
            class="px-4 sm:px-4.5 pb-4 font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted leading-relaxed border-t border-butterelle-border-warm/30 pt-2.5"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
