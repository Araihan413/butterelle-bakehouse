<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'
</script>

<template>
  <section class="w-full pt-8 pb-4">
    <!-- Banner CTA Utama -->
    <div
      class="relative overflow-hidden rounded-3xl bg-[#7D4630] py-12 px-6 sm:py-16 sm:px-10 text-center shadow-lg border border-[#6b3824]"
    >
      <!-- Elemen Dekorasi Lingkaran Halus Latar Belakang -->
      <div
        class="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-black/10 pointer-events-none"
      ></div>
      <div
        class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <!-- Eyebrow -->
        <span
          class="font-montserrat font-bold text-xs tracking-wider uppercase text-[#E7C77E] block mb-2"
        >
          SIAP MENIKMATI KELEZATAN KAMI?
        </span>

        <!-- Headline -->
        <h2
          class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight"
        >
          Masih Memiliki Pertanyaan Seputar Pemesanan?
        </h2>

        <!-- Deskripsi -->
        <p class="font-montserrat text-xs sm:text-sm text-white/85 mt-3.5 max-w-xl leading-relaxed">
          Tim Butterelle dengan senang hati membantu memilih paket terbaik dan menjawab kebutuhan
          acara spesial Anda.
        </p>

        <!-- Tombol Aksi (Dual Buttons) -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4.5">
          <!-- Tombol 1: Chat Admin WhatsApp Sekarang -->
          <a
            :href="getWhatsAppUrl('Halo Butterelle, saya memiliki pertanyaan seputar pemesanan kue')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-white text-butterelle-espresso hover:bg-butterelle-canvas shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
          >
            <Icon
              icon="bi:chat-left-text"
              class="w-4.5 h-4.5 text-[#7D4630] group-hover:scale-105 transition-transform"
            />
            <div class="text-left font-montserrat font-bold text-xs sm:text-sm leading-snug">
              <span>Chat Admin WhatsApp</span>
              <span class="block">Sekarang</span>
            </div>
          </a>

          <!-- Tombol 2: Buka Katalog Menu -->
          <RouterLink
            to="/katalog-produk"
            class="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#96543C] text-white hover:bg-[#8A4C35] shadow-sm hover:shadow-md transition-all active:scale-[0.98] border border-white/15 group"
          >
            <Icon
              icon="ph:fork-knife-bold"
              class="w-4.5 h-4.5 text-white group-hover:scale-105 transition-transform"
            />
            <div class="text-left font-montserrat font-bold text-xs sm:text-sm leading-snug">
              <span>Buka Katalog</span>
              <span class="block">Menu</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
