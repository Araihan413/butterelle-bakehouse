<script setup>
import { Icon } from '@iconify/vue'

const trustItems = [
  {
    icon: 'ph:cookie-bold',
    title: '100% Homemade',
    subtitle: 'Resep otentik keluarga',
  },
  {
    icon: 'ph:seal-check-bold',
    title: 'Halal & Higienis',
    subtitle: 'Bahan pilihan bersertifikasi',
  },
  {
    icon: 'ph:fire-bold',
    title: 'Fresh Baked Daily',
    subtitle: 'Selalu baru dari panggangan',
  },
  {
    icon: 'ph:gift-bold',
    title: 'Bisa Custom Pesanan',
    subtitle: 'Hampers & kartu ucapan',
  },
]
</script>

<template>
  <section
    class="-mx-5 md:-mx-12 lg:-mx-18 bg-butterelle-peach border-y border-butterelle-border-warm/70 px-5 md:px-12 lg:px-18 py-8 md:py-10"
  >
    <div class="max-w-[1920px] mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div
          v-for="(item, index) in trustItems"
          :key="index"
          class="bg-butterelle-surface border border-butterelle-border-warm/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <!-- Ikon Bulat -->
          <div
            class="w-12 h-12 rounded-full bg-butterelle-peach border border-butterelle-border-warm flex items-center justify-center shrink-0 text-butterelle-primary transition-transform duration-300 group-hover:scale-105"
          >
            <Icon :icon="item.icon" class="w-6 h-6 text-butterelle-primary" />
          </div>

          <!-- Teks Informasi -->
          <div class="flex flex-col">
            <h3
              class="font-bold text-sm sm:text-base text-butterelle-espresso font-montserrat leading-snug"
            >
              {{ item.title }}
            </h3>
            <p class="text-xs text-butterelle-muted font-montserrat mt-0.5 leading-normal">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
