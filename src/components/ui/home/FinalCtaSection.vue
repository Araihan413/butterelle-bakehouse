<script setup>
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'
</script>

<template>
  <section
    class="-mx-5 md:-mx-12 lg:-mx-18 bg-butterelle-peach border-y border-butterelle-border-warm/70 px-5 md:px-12 lg:px-18 py-16 md:py-20"
  >
    <div class="max-w-300 mx-auto text-center flex flex-col items-center">
      <!-- Icon Oven Circle -->
      <div
        class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-butterelle-primary text-butterelle-surface flex items-center justify-center mb-5 md:mb-6 shadow-md"
      >
        <Icon icon="material-symbols:bakery-dining" class="w-8 h-8" />
      </div>

      <!-- Heading -->
      <h2
        class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso leading-tight"
      >
        Siap Menikmati Kehangatan Kue Segar Hari Ini?
      </h2>

      <!-- Subtitle -->
      <p
        class="font-montserrat text-sm/6 md:text-base text-butterelle-roasted max-w-xl mx-auto mt-3"
      >
        Dipanggang dari dapur kami di Yogyakarta hanya saat ada pesanan masuk. Tanpa stok menginap,
        memakai bahan pilihan untuk teman santai di rumah atau buah tangan kerabat.
      </p>

      <!-- CTA Button -->
      <div class="mt-6 md:mt-8">
        <a
          :href="getWhatsAppUrl('Halo Butterelle, saya mau order kue sekarang')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2.5 px-8 py-3.5 md:py-4 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-sm hover:bg-butterelle-primary/85 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <Icon icon="bi:chat-left-text" class="w-4 h-4" />
          <span>Order via WhatsApp Sekarang</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
