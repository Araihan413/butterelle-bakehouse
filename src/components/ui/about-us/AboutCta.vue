<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'
</script>

<template>
  <section class="w-full pt-8 pb-4">
    <!-- Banner CTA Tentang Kami -->
    <div
      class="w-full rounded-3xl bg-linear-to-r from-[#FDE8DF] via-[#FDF0E9] to-[#FDE8D8] py-10 px-6 sm:py-14 sm:px-10 lg:px-14 border border-butterelle-border-warm/75 shadow-xs"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12"
      >
        <!-- Sisi Kiri: Teks Ajakan & Konsultasi -->
        <div class="max-w-2xl flex flex-col items-start">
          <span
            class="font-playfair-display italic text-sm sm:text-base text-butterelle-primary font-medium mb-1.5"
          >
            Mari Terhubung Lebih Dekat
          </span>
          <h2
            class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-[34px] text-butterelle-espresso leading-snug"
          >
            Punya Cerita atau Ingin Konsultasi Pesanan Khusus?
          </h2>
          <p
            class="font-montserrat text-xs sm:text-sm text-butterelle-roasted mt-3 leading-relaxed max-w-xl"
          >
            Untuk hantaran arisan, hampers korporasi, hingga momen syukuran keluarga, tim Butterelle
            siap mendengarkan dan menyiapkan yang terbaik untuk Anda.
          </p>
        </div>

        <!-- Sisi Kanan: Dual Action Buttons -->
        <div class="flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
          <!-- Tombol WhatsApp -->
          <a
            :href="getWhatsAppUrl('Halo Butterelle, saya ingin konsultasi pesanan khusus')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#7D402B] text-white font-montserrat font-semibold text-xs sm:text-sm hover:bg-[#6c3522] shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <Icon icon="bi:chat-left-text" class="w-4 h-4 text-white" />
            <span>Chat via WhatsApp</span>
          </a>

          <!-- Tombol Lihat Katalog Kue -->
          <RouterLink
            to="/katalog-produk"
            class="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-butterelle-espresso border border-butterelle-border-warm/80 font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-canvas shadow-xs hover:shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Lihat Katalog Kue</span>
            <Icon icon="akar-icons:arrow-right" class="w-3.5 h-3.5" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
