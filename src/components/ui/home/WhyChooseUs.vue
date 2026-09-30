<script setup>
import { Icon } from '@iconify/vue'

const features = [
  {
    number: '1.',
    title: '1. Bahan Baku Premium',
    icon: 'material-symbols:nutrition-outline',
    description:
      'Menggunakan butter berkualitas, tepung berprotein presisi, dan telur segar terpilih. 100% bebas bahan pengawet sintesis maupun pemanis buatan.',
  },
  {
    number: '2.',
    title: '2. Standar Dapur Higienis',
    icon: 'material-symbols:sanitizer-outline',
    description:
      'Setiap loyang dipanggang di lingkungan dapur bersih bersanitasi teratur. Dikerjakan dengan resep yang terbukti memikat rasa.',
  },
  {
    number: '3.',
    title: '3. Packaging Higienis & Aman',
    icon: 'material-symbols:inventory-2-outline',
    description:
      'Setiap kue dipanggang fresh sesuai pesanan (bake by order) dan dikemas rapi dengan box/toples yang kokoh, menjamin pesanan tiba dalam bentuk dan tekstur prima.',
  },
]
</script>

<template>
  <section
    class="-mx-5 md:-mx-12 lg:-mx-18 bg-butterelle-peach border-y border-butterelle-border-warm/70 px-5 md:px-12 lg:px-18 py-16 md:py-24"
  >
    <div class="max-w-300 mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
        >
          KEUNGGULAN KAMI
        </span>
        <h2
          class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso mt-2 leading-tight"
        >
          Kenapa Memilih Butterelle Bakehouse?
        </h2>
        <p class="font-montserrat text-butterelle-roasted text-sm/6 mt-3 max-w-xl mx-auto">
          Kami memadukan bahan-bahan terbaik, dedikasi waktu, dan kehangatan rasa rumahan tanpa
          kompromi kualitas.
        </p>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-butterelle-surface rounded-3xl p-7 md:p-8 border border-butterelle-border-warm/80 shadow-[0_4px_24px_rgba(74,59,50,0.04)] hover:shadow-[0_12px_32px_rgba(74,59,50,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
        >
          <!-- Icon Container -->
          <div
            class="w-14 h-14 rounded-2xl bg-butterelle-peach border border-butterelle-border-warm/70 flex items-center justify-center text-butterelle-primary mb-6 transition-transform duration-300 group-hover:scale-105 shrink-0"
          >
            <Icon :icon="feature.icon" class="w-7 h-7 text-butterelle-primary" />
          </div>

          <!-- Feature Title -->
          <h3 class="font-montserrat font-bold text-lg text-butterelle-espresso mb-3 leading-snug">
            {{ feature.title }}
          </h3>

          <!-- Feature Description -->
          <p class="font-montserrat text-sm/6 text-butterelle-roasted">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
