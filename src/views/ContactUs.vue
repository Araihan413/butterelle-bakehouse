<script setup>
import ContactChannels from '@/components/ui/contact-us/ContactChannels.vue'
import ContactMapGuide from '@/components/ui/contact-us/ContactMapGuide.vue'
import CorporateInquiryForm from '@/components/ui/contact-us/CorporateInquiryForm.vue'
</script>

<template>
  <div class="flex flex-col w-full pb-16">
    <!-- Header Section Kontak & Lokasi (Direct in View) -->
    <header class="w-full pb-8 md:pb-12">
      <div class="max-w-4xl flex flex-col items-start">
        <h1
          class="font-playfair-display font-semibold text-3xl sm:text-4xl lg:text-[44px] text-butterelle-espresso leading-tight tracking-tight"
        >
          Hubungi & Kunjungi Butterelle Bakehouse
        </h1>

        <p
          class="font-montserrat text-sm sm:text-base text-butterelle-roasted mt-3.5 max-w-2xl leading-relaxed"
        >
          Kami selalu senang menyapa Anda. Silakan hubungi kami untuk pesanan harian, pertanyaan
          menu musiman, atau konsultasi kustom hampers korporat.
        </p>
      </div>
    </header>

    <!-- Konten Utama: 2 Kolom (Saluran Kontak & Peta/Panduan) -->
    <section class="w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <!-- Kolom Kiri: WhatsApp Cepat, Instagram, Jam Operasional, Alamat Flagship -->
        <div class="lg:col-span-6 w-full">
          <ContactChannels />
        </div>

        <!-- Kolom Kanan: Peta Interaktif, Panduan Kurir, Galeri Studio -->
        <div class="lg:col-span-6 w-full">
          <ContactMapGuide />
        </div>
      </div>
    </section>

    <!-- Formulir Pesan & Kerjasama (Konsultasi Khusus & Hampers) -->
    <CorporateInquiryForm />
  </div>
</template>

<style scoped></style>
