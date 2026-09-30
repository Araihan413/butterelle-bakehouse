<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const openItems = ref([0]) // Item pertama terbuka secara default

const toggleFaq = (index) => {
  if (openItems.value.includes(index)) {
    openItems.value = openItems.value.filter((i) => i !== index)
  } else {
    openItems.value.push(index)
  }
}

const faqs = [
  {
    question: 'Apakah kue dibuat ready stock atau pre-order?',
    answer:
      'Semua produk kami dipanggang dengan sistem <strong>Bake by Order (Pre-Order)</strong> agar Anda selalu menerima sajian yang 100% segar, harum, dan baru keluar dari oven. Kami tidak menimbun stok matang untuk menjamin cita rasa artisanal terbaik.',
  },
  {
    question: 'Berapa lama kue lontar dan kue kering bertahan?',
    answer:
      '<strong>Kue Lontar & Pie</strong> tahan 1-2 hari di suhu ruang sejuk atau hingga 6-7 hari di dalam kulkas (nikmat disantap dingin). Untuk <strong>Kue Kering toples bersegel</strong> dapat bertahan 2-3 bulan di tempat sejuk tanpa bahan pengawet.',
  },
  {
    question: 'Apakah aman dikirim ke luar kota?',
    answer:
      'Sangat aman untuk produk <strong>Kue Kering</strong> karena dikemas menggunakan toples bersegel, lapisan bubble wrap tebal, dan kardus proteksi ekstra. Untuk <strong>Kue Lontar & cake basah</strong>, kami merekomendasikan kurir instan/sameday agar tekstur vla tetap sempurna.',
  },
  {
    question: 'Bagaimana jika ingin pesan untuk hampers perusahaan atau souvenir pernikahan?',
    answer:
      'Kami menyediakan layanan pesanan massal (bulk order) untuk hampers korporat, hampers hari raya, dan souvenir pernikahan dengan harga spesial serta kustomisasi kartu ucapan dan packaging. Disarankan memesan minimal <strong>H-7 hingga H-14</strong>.',
  },
  {
    question: 'Apakah bisa request kartu ucapan dan pita custom?',
    answer:
      'Bisa! Kami menyediakan complimentary greeting card (kartu ucapan) dan pita satin cantik untuk setiap paket bingkisan atau hampers. Cukup tuliskan pesan ucapan Anda saat mengisi format chat di WhatsApp.',
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-16" id="faq-pemesanan">
    <div class="max-w-3xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-12">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
        >
          TANYA JAWAB
        </span>
        <h2
          class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-butterelle-espresso leading-tight"
        >
          Pertanyaan Seputar Pemesanan
        </h2>
        <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted mt-3 max-w-xl mx-auto">
          Segala hal yang sering ditanyakan pelanggan sebelum melakukan pemesanan.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3.5 sm:space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-butterelle-surface rounded-2xl border border-butterelle-border-warm/80 overflow-hidden shadow-2xs hover:border-butterelle-terracotta/40 transition-colors"
        >
          <!-- Accordion Trigger Button -->
          <button
            type="button"
            @click="toggleFaq(index)"
            class="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none select-none"
            :aria-expanded="openItems.includes(index)"
          >
            <span
              class="font-montserrat font-semibold text-sm sm:text-[15px] text-butterelle-espresso leading-snug"
            >
              {{ faq.question }}
            </span>
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              class="w-5 h-5 text-butterelle-primary shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openItems.includes(index) }"
            />
          </button>

          <!-- Accordion Content -->
          <div
            v-show="openItems.includes(index)"
            class="px-5 sm:px-6 pb-5 pt-1 font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted border-t border-butterelle-border-warm/30"
            v-html="faq.answer"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
