<script setup>
import adonanKue from '@/assets/images/adonan-kue.webp'
import ovenKue from '@/assets/images/oven-kue.webp'
import packingKue from '@/assets/images/packing-kue.webp'

const processSteps = [
  {
    step: '01. Persiapan & Penimbangan Adonan',
    title: 'Sentuhan Tangan Teliti',
    description:
      'Adonan disiapkan dengan takaran pas dan sentuhan teliti agar lapisan kue renyah namun tetap lembut lumer.',
    image: adonanKue,
    alt: 'Proses penyiapan adonan kue secara teliti',
  },
  {
    step: '02. Pemanggangan Bertahap',
    title: 'Matang Merata & Harum',
    description:
      'Dipanggang dengan suhu dan waktu terkontrol hingga matang sempurna dan menghasilkan aroma butter yang memikat.',
    image: ovenKue,
    alt: 'Pemanggangan kue matang merata',
  },
  {
    step: '03. Pengemasan Rapi & Cantik',
    title: 'Kemasan Rapi Siap Hantaran',
    description:
      'Dikemas aman dan cantik, siap dinikmati bersama keluarga maupun dijadikan hantaran hangat untuk orang tersayang.',
    image: packingKue,
    alt: 'Pengemasan hampers dan boks kue rapi',
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-16 lg:py-20">
    <!-- Header Section: Judul Kiri & Narasi Kanan -->
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-14"
    >
      <!-- Sisi Kiri -->
      <div class="max-w-xl">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
        >
          PROSES PENUH KETELITIAN
        </span>
        <h2
          class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-butterelle-espresso leading-tight"
        >
          Dibalik Layar Dapur Butterelle
        </h2>
      </div>

      <!-- Sisi Kanan -->
      <div class="max-w-md md:text-right">
        <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted leading-relaxed">
          Dari penimbangan takaran bahan hingga pengemasan yang rapi, setiap tahap kami kerjakan
          dengan cermat dan penuh kehangatan.
        </p>
      </div>
    </div>

    <!-- Grid 3 Kolom Langkah Proses -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
      <div v-for="(item, index) in processSteps" :key="index" class="group flex flex-col">
        <!-- Frame Gambar dengan Floating Badge -->
        <div
          class="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xs border border-butterelle-border-warm/75 bg-butterelle-peach"
        >
          <img
            :src="item.image"
            :alt="item.alt"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <!-- Floating Step Pill Badge -->
          <div
            class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs border border-butterelle-border-warm/80 font-montserrat font-semibold text-[11px] sm:text-xs text-butterelle-espresso z-10"
          >
            {{ item.step }}
          </div>
        </div>

        <!-- Teks Keterangan di Bawah Gambar -->
        <div class="mt-4 sm:mt-5 flex flex-col">
          <h3
            class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso mb-1.5 sm:mb-2 group-hover:text-butterelle-primary transition-colors"
          >
            {{ item.title }}
          </h3>
          <p class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
