<script setup>
import { Icon } from '@iconify/vue'
import figureImg from '@/assets/images/aboutus-image.webp'
</script>

<template>
  <section class="w-full py-12 md:py-16 lg:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <!-- Kolom Visual (Kiri) -->
      <div class="lg:col-span-6 relative">
        <div class="relative mx-auto max-w-lg lg:max-w-none">
          <!-- Frame Foto Utama Baker / Dapur -->
          <div
            class="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(74,59,50,0.12)] border border-butterelle-border-warm/75 bg-butterelle-peach"
          >
            <img
              :src="figureImg"
              alt="Baker Butterelle menguleni adonan kue dengan penuh dedikasi"
              class="w-full h-100 sm:h-120 object-cover hover:scale-102 transition-transform duration-700"
            />
          </div>

          <!-- Floating Badge Resep Warisan (Pojok Kiri Atas) -->
          <div
            class="absolute -top-5 -left-3 sm:-left-6 bg-butterelle-surface/95 backdrop-blur-md px-4.5 py-3 rounded-2xl shadow-[0_12px_28px_rgba(74,59,50,0.14)] border border-butterelle-border-warm/80 flex items-center gap-3 z-20 max-w-xs"
          >
            <div
              class="w-10 h-10 rounded-xl bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0 shadow-2xs"
            >
              <Icon icon="solar:history-bold" class="w-5 h-5 text-butterelle-primary" />
            </div>
            <div class="flex flex-col">
              <span
                class="font-montserrat font-bold text-xs sm:text-sm text-butterelle-espresso leading-snug"
              >
                Menerima Pesanan
              </span>
              <span class="font-montserrat text-[11px] text-butterelle-muted leading-tight mt-0.5">
                Sejak Tahun 2020
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Kolom Narasi Cerita (Kanan) -->
      <div class="lg:col-span-6 flex flex-col items-start">
        <!-- Eyebrow Subtitle -->
        <div class="flex items-center gap-2.5 mb-2.5">
          <span class="w-7 h-0.5 bg-butterelle-primary inline-block"></span>
          <span
            class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
          >
            PERJALANAN KAMI
          </span>
        </div>

        <!-- Judul Cerita H2 -->
        <h2
          class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-[38px] text-butterelle-espresso leading-tight"
        >
          Bermula dari Dapur Rumah, Tumbuh Menjadi Butterelle Bakehouse
        </h2>

        <!-- Paragraf Cerita 1 -->
        <p
          class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted mt-5 leading-relaxed"
        >
          Perjalanan kami dimulai pada tahun 2020 dari dapur rumah sederhana. Pada awalnya, kami
          hanya melayani pesanan kue untuk orang-orang terdekat, keluarga, dan kenalan yang menyukai
          kelezatan kue buatan kami.
        </p>

        <!-- Paragraf Cerita 2 -->
        <p
          class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted mt-4 leading-relaxed"
        >
          Seiring berjalannya waktu dan tingginya antusiasme, pada tahun 2025 kami resmi melangkah
          dengan nama
          <strong class="font-semibold text-butterelle-espresso">Butterelle Bakehouse</strong>. Kami
          mulai membuka pemesanan untuk masyarakat luas dan memperkenalkannya melalui promosi
          Instagram — hadir dengan wajah baru, namun tetap dengan hati yang sama.
        </p>

        <!-- Paragraf Cerita 3 -->
        <p
          class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted mt-4 leading-relaxed"
        >
          Nama <strong class="font-semibold text-butterelle-espresso">Butterelle</strong> terlahir
          dari dua makna istimewa:
          <span class="italic font-medium text-butterelle-espresso">'Butter'</span>
          adalah bahan utama yang membawa rasa lembut dan kaya, serta
          <span class="italic font-medium text-butterelle-espresso">'Elle'</span> yang terinspirasi
          dari bahasa Prancis untuk perempuan — sosok yang hangat, lembut, dan menyenangkan. Seperti
          pelukan ibu, kami ingin setiap produk membawa kehangatan rumah.
        </p>

        <!-- Dual Keunggulan / Badges -->
        <div class="flex flex-wrap items-center gap-6 sm:gap-8 mt-7 pt-4">
          <!-- Badge 1: 100% Halal -->
          <div class="flex items-center gap-3">
            <div
              class="w-11 h-11 rounded-full bg-butterelle-gold/85 flex items-center justify-center text-amber-900 shrink-0 shadow-2xs"
            >
              <Icon icon="solar:verified-check-bold" class="w-5 h-5 text-amber-900" />
            </div>
            <div class="flex flex-col">
              <span class="font-montserrat font-bold text-xs sm:text-sm text-butterelle-espresso">
                100% Halal
              </span>
              <span class="font-montserrat text-[11px] sm:text-xs text-butterelle-muted">
                Bahan Pilihan Berkualitas
              </span>
            </div>
          </div>

          <!-- Badge 2: Bebas Pengawet -->
          <div class="flex items-center gap-3">
            <div
              class="w-11 h-11 rounded-full bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0 shadow-2xs"
            >
              <Icon icon="solar:shield-check-bold" class="w-5 h-5 text-butterelle-primary" />
            </div>
            <div class="flex flex-col">
              <span class="font-montserrat font-bold text-xs sm:text-sm text-butterelle-espresso">
                Bake by Order
              </span>
              <span class="font-montserrat text-[11px] sm:text-xs text-butterelle-muted">
                Freshly Baked Sesuai Pesanan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
