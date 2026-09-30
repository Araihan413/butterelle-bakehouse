<script setup>
import mainHeroImage from '@/assets/images/banner-produk.webp'
import { Icon } from '@iconify/vue'
import HeroStats from '@/components/ui/home/HeroStats.vue'
import TrustBar from '@/components/ui/home/TrustBar.vue'
import BestSeller from '@/components/ui/home/BestSeller.vue'
import WhyChooseUs from '@/components/ui/home/WhyChooseUs.vue'
import HowToOrderSection from '@/components/ui/home/HowToOrderSection.vue'
import TestimonialsSection from '@/components/ui/home/TestimonialsSection.vue'
import FaqSection from '@/components/ui/home/FaqSection.vue'
import FinalCtaSection from '@/components/ui/home/FinalCtaSection.vue'
import { RouterLink } from 'vue-router'
import { getWhatsAppUrl } from '@/data/contact.js'
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <section class="w-full pb-10 md:pb-16">
      <div class="grid md:grid-cols-2 grid-cols-1">
        <div class="flex flex-col gap-8">
          <h1 class="text-butterelle-espresso font-playfair-display font-semibold text-4xl">
            Kue Lontar & Kue Kering Rumahan Yang
            <span class="italic text-butterelle-terracotta font-normal">Fresh</span>
            Dari Panggangan
          </h1>
          <p
            class="text-butterelle-roasted font-montserrat text-sm/6 sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Dipanggang dari dapur kami di Yogyakarta hanya saat ada pesanan masuk. Tanpa stok
            menginap, memakai bahan pilihan untuk teman santai di rumah atau buah tangan kerabat.
          </p>

          <div class="flex gap-5 md:flex-row flex-col">
            <a
              :href="getWhatsAppUrl('Halo Butterelle, saya mau pesan kue')"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-butterelle-primary text-butterelle-surface px-6 py-3 text-center rounded-xl md:rounded-2xl hover:bg-butterelle-primary/70 cursor-pointer font-semibold text-sm flex justify-center items-center font-montserrat"
            >
              <Icon icon="bi:chat-left-text" class="inline-block mr-2 w-4 h-4" />Pesan Via WhatsApp
            </a>
            <RouterLink to="/katalog-produk">
              <button
                class="bg-butterelle-tint text-butterelle-primary px-6 py-3 text-center rounded-xl md:rounded-2xl hover:bg-butterelle-tint/70 group cursor-pointer font-semibold text-sm flex justify-center items-center font-montserrat"
              >
                Lihat Katalog Produk
                <Icon
                  icon="akar-icons:arrow-right"
                  class="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-all duration-300"
                />
              </button>
            </RouterLink>
          </div>

          <div class="mb-8">
            <HeroStats />
          </div>
        </div>
        <div class="flex items-start justify-center md:justify-end">
          <div class="relative">
            <div
              class="text-xs font-semibold bg-butterelle-gold px-2 py-1 rounded-2xl w-max absolute -right-5 top-8 shadow-xl shadow-black/20"
            >
              <Icon icon="iconamoon:certificate-badge" class="inline-block mr-1 w-4 h-4" />
              <span class="font-montserrat">100% Halal dan Alami</span>
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl shadow-black/20 aspect-5/4">
              <img
                :src="mainHeroImage"
                alt="Sajian kue lontar dan aneka kue kering Butterelle Bakehouse"
                fetchpriority="high"
                decoding="async"
                width="1280"
                height="1024"
                class="w-[90vw] md:w-[42vw] lg:w-[38vw] max-w-130 h-auto object-cover"
              />
            </div>

            <div
              class="bg-butterelle-surface px-4 py-3 rounded-xl w-max absolute -left-8 -bottom-5 flex items-center space-x-2 shadow-xl shadow-black/10"
            >
              <div class="p-2 rounded-full bg-butterelle-gold flex justify-center items-center">
                <Icon icon="material-symbols:bakery-dining-outline" class="inline-block w-4 h-4" />
              </div>
              <div class="font-montserrat">
                <p class="block font-semibold text-sm">Fresh Dari Oven</p>
                <p class="font-normal text-xs">Dipanggang Dadakan Sesuai Pesanan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Bar / Keunggulan Layanan -->
    <TrustBar />

    <!-- Best Seller / Menu Favorit Pilihan Pelanggan -->
    <BestSeller />

    <!-- Kenapa Memilih Butterelle Bakehouse -->
    <WhyChooseUs />

    <!-- Cara Pesan Mudah Tanpa Ribet -->
    <HowToOrderSection />

    <!-- Testimoni Pelanggan -->
    <TestimonialsSection />

    <!-- FAQ Accordion -->
    <FaqSection />

    <!-- Final CTA Banner -->
    <FinalCtaSection />
  </div>
</template>

<style scoped></style>
