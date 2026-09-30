<script setup>
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="mt-12 md:mt-16 bg-butterelle-peach border border-butterelle-border-warm/80 rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-xs w-full"
  >
    <!-- Label -->
    <span
      class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block"
    >
      LAYANAN PERSONALISASI
    </span>

    <!-- Heading -->
    <h2
      class="font-playfair-display font-semibold text-3xl sm:text-4xl text-butterelle-espresso mt-2 leading-tight"
    >
      Tidak Menemukan yang Kamu Cari?
    </h2>

    <!-- Subtitle / Deskripsi -->
    <p
      class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted mt-3.5 max-w-xl mx-auto leading-relaxed"
    >
      Punya request khusus ukuran, kemasan kado personal, atau hampers perusahaan? Kami siap meracik
      dan membungkus kue impianmu dengan sentuhan istimewa.
    </p>

    <!-- Tombol Aksi (Dual Buttons) -->
    <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
      <!-- Tombol WhatsApp -->
      <a
        :href="getWhatsAppUrl('Halo Butterelle, saya punya request pesanan khusus')"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-primary/85 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
      >
        <Icon icon="bi:chat-left-text" class="w-4 h-4" />
        <span>Chat WhatsApp Kami</span>
      </a>

      <!-- Tombol Kembali ke Atas -->
      <button
        type="button"
        @click="scrollToTop"
        class="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-butterelle-surface text-butterelle-espresso border border-butterelle-border-warm/80 font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-peach/50 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] cursor-pointer"
      >
        <Icon
          icon="material-symbols:arrow-upward-rounded"
          class="w-4 h-4 text-butterelle-espresso"
        />
        <span>Kembali ke Atas</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
