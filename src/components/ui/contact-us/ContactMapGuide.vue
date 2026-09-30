<script setup>
import { Icon } from '@iconify/vue'
import pangganganKueImg from '@/assets/images/panggangan-kue.webp'
import studioImg from '@/assets/images/lokasi.webp'
import { contactInfo } from '@/data/contact.js'
</script>

<template>
  <div class="flex flex-col w-full">
    <!-- Card Utama: Map & Panduan Kurir -->
    <div
      class="bg-butterelle-surface rounded-3xl border border-butterelle-border-warm/80 overflow-hidden shadow-2xs flex flex-col"
    >
      <!-- Frame Peta Interaktif -->
      <div class="relative w-full h-80 sm:h-96 md:h-105 bg-[#EAE6DF] overflow-hidden">
        <!-- Google Maps Embed Iframe -->
        <iframe
          :src="contactInfo.embedMapUrl"
          :title="`Lokasi ${contactInfo.name}`"
          class="w-full h-full border-0 filter saturate-90 contrast-105"
          loading="lazy"
          allowfullscreen
        ></iframe>

        <!-- Custom Floating Pin Pinpoint -->
        <div
          class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-butterelle-border-warm/80 pointer-events-none flex items-center gap-2.5 z-10"
        >
          <div
            class="w-7 h-7 rounded-full bg-butterelle-primary text-white flex items-center justify-center shrink-0 shadow-2xs"
          >
            <Icon icon="solar:shop-2-bold" class="w-4 h-4" />
          </div>
          <div class="flex flex-col">
            <span class="font-montserrat font-bold text-xs text-butterelle-espresso leading-tight">
              {{ contactInfo.name }}
            </span>
            <span class="font-montserrat text-[10px] text-butterelle-muted leading-tight mt-0.5">
              {{ contactInfo.district }}
            </span>
          </div>
        </div>

        <!-- Tombol Aksi: Dapatkan Arah di Google Maps -->
        <a
          :href="contactInfo.mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7D4630] text-white font-montserrat font-semibold text-xs sm:text-sm hover:bg-[#6a3925] shadow-md hover:shadow-lg transition-all active:scale-[0.98] z-10"
        >
          <Icon icon="solar:routing-2-bold" class="w-4 h-4 text-white" />
          <span>Dapatkan Arah di Google Maps</span>
        </a>
      </div>

      <!-- Panduan Kurir & Pengambilan Langsung -->
      <div
        class="bg-butterelle-surface p-5 sm:p-6 border-t border-butterelle-border-warm/70 flex items-start gap-4"
      >
        <div
          class="w-11 h-11 rounded-full bg-butterelle-gold/85 flex items-center justify-center text-amber-900 shrink-0 shadow-2xs mt-0.5"
        >
          <Icon icon="streamline:transfer-motorcycle" class="w-5 h-5 text-amber-900" />
        </div>
        <div class="flex flex-col">
          <h3
            class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso leading-snug"
          >
            Panduan Kurir &amp; Pengambilan Langsung
          </h3>
          <p class="font-montserrat text-xs/5 text-butterelle-roasted mt-1">
            Area untuk pengambilan instan GoSend / GrabExpress maupun self-pickup pelanggan. Tim
            kami siap menyerahkan pesanan langsung ke kendaraan Anda.
          </p>
        </div>
      </div>
    </div>

    <!-- Dual Galeri Preview (Studio Bakehouse & Panggangan Pagi Hari) -->
    <div class="grid grid-cols-2 gap-4 mt-5 sm:mt-6">
      <!-- Foto 1: Studio Bakehouse -->
      <div
        class="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xs border border-butterelle-border-warm/70 group"
      >
        <img
          :src="studioImg"
          alt="Suasana display pastry di studio Butterelle Bakehouse"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5"
        >
          <span
            class="font-montserrat font-semibold text-[11px] sm:text-xs text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md"
          >
            Studio Bakehouse
          </span>
        </div>
      </div>

      <!-- Foto 2: Panggangan Pagi Hari -->
      <div
        class="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xs border border-butterelle-border-warm/70 group"
      >
        <img
          :src="pangganganKueImg"
          alt="Baker menyiapkan adonan hangat panggangan pagi hari"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5"
        >
          <span
            class="font-montserrat font-semibold text-[11px] sm:text-xs text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md"
          >
            Panggangan Pagi Hari
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
