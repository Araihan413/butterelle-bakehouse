<script setup>
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'

const steps = [
  {
    number: '1',
    title: 'Pilih Kue Favorit Anda',
    description:
      'Eksplor menu kami, tentukan varian kue lontar atau pilihan kue kering yang ingin Anda nikmati.',
  },
  {
    number: '2',
    title: 'Konfirmasi via WhatsApp',
    description:
      'Klik tombol chat. Admin ramah kami siap mencatat pesanan, tanggal pengiriman, dan ucapan khusus.',
  },
  {
    number: '3',
    title: 'Bayar & Dikirim Fresh',
    description:
      'Selesaikan pembayaran via Transfer atau QRIS. Kue dipanggang segar dan dikirimkan sesuai jadwal.',
  },
]
</script>

<template>
  <section class="w-full py-16 md:py-24" id="cara-pesan-section">
    <div class="max-w-300 mx-auto">
      <!-- Section Header -->
      <div class="text-center max-w-xl mx-auto mb-12 md:mb-16">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
        >
          PROSES CEPAT
        </span>
        <h2
          class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso mt-2 leading-tight"
        >
          Cara Pesan Mudah Tanpa Ribet
        </h2>
        <p class="font-montserrat text-butterelle-roasted text-sm/6 mt-3">
          Hanya 3 langkah sederhana untuk menikmati kue favorit Anda langsung diantar ke pintu
          rumah.
        </p>
      </div>

      <!-- 3 Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="step in steps"
          :key="step.number"
          class="group bg-butterelle-peach rounded-2xl md:rounded-3xl p-8 border border-butterelle-border-warm/70 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Step Number Badge -->
          <div
            class="w-12 h-12 rounded-full bg-butterelle-primary text-butterelle-surface flex items-center justify-center font-montserrat font-bold text-lg mb-5 shadow-xs transition-transform duration-300 group-hover:scale-105"
          >
            {{ step.number }}
          </div>

          <!-- Step Title -->
          <h3
            class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso mb-2.5"
          >
            {{ step.title }}
          </h3>

          <!-- Step Description -->
          <p class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted">
            {{ step.description }}
          </p>
        </div>
      </div>

      <!-- Catering / Custom Order Action Banner -->
      <div
        class="mt-10 md:mt-12 bg-butterelle-peach border border-butterelle-border-warm/80 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
      >
        <div class="text-center md:text-left space-y-1">
          <h4 class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso">
            Punya Pertanyaan Khusus Seputar Pesanan Katering / Acara?
          </h4>
          <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted">
            Konsultasikan porsi dan rekomendasi kemasan langsung dengan baker kami.
          </p>
        </div>

        <a
          :href="getWhatsAppUrl('Halo Butterelle, saya mau tanya pesanan khusus untuk acara')"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-primary/85 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
        >
          <Icon icon="material-symbols:support-agent" class="w-5 h-5" />
          <span>Hubungi Kami</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
