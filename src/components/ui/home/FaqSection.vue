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
    question: 'Berapa minimal pemesanan H-minus?',
    answer:
      'Untuk menjaga kesegaran maksimal, pemesanan Kue Lontar minimal <strong>H-1</strong> sebelum jam 15.00 WIB. Sedangkan untuk pesanan hampers khusus atau pesanan kue kering dalam jumlah besar disarankan minimal <strong>H-2 hingga H-4</strong>.',
  },
  {
    question: 'Apakah bisa kirim ke luar kota?',
    answer:
      'Untuk produk <strong>Kue Kering (Nastar, Kastengel, dll)</strong>, kami dapat mengirim ke seluruh Indonesia via ekspedisi khusus makanan dengan kemasan bubble wrap ekstra tebal. Namun untuk <strong>Kue Lontar</strong> yang bertekstur vla basah, saat ini pengiriman khusus via kurir instan/sameday area dalam kota agar tekstur tetap cantik sempurna.',
  },
  {
    question: 'Berapa lama daya tahan simpan kuenya?',
    answer:
      'Kue Lontar tahan hingga 2 hari di suhu ruang sejuk atau hingga 6-7 hari di dalam kulkas (nikmat disantap dingin!). Sementara kue kering toples bersegel tahan hingga 2-3 bulan karena menggunakan butter berkualitas dan proses pemanggangan hingga kadar air optimal tanpa pengawet tambahan.',
  },
  {
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer:
      'Kami menerima pembayaran transfer via Bank Mandiri, BCA, BRI, dan scan QRIS instan yang mendukung semua aplikasi perbankan serta e-wallet (GoPay, OVO, ShopeePay).',
  },
]
</script>

<template>
  <section class="w-full py-16 md:py-24" id="faq-section">
    <div class="max-w-210 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-14">
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
        >
          TANYA JAWAB
        </span>
        <h2
          class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso mt-2 leading-tight"
        >
          Pertanyaan yang Sering Diajukan
        </h2>
        <p class="font-montserrat text-butterelle-roasted text-sm/6 mt-3 max-w-xl mx-auto">
          Segala hal yang perlu Anda ketahui mengenai waktu pemesanan, pengiriman, dan daya tahan
          kue kami.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-butterelle-surface rounded-2xl border border-butterelle-border-warm/80 overflow-hidden shadow-xs hover:border-butterelle-terracotta/40 transition-colors"
        >
          <!-- Accordion Trigger Button -->
          <button
            type="button"
            @click="toggleFaq(index)"
            class="w-full px-6 sm:px-7 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none select-none"
            :aria-expanded="openItems.includes(index)"
          >
            <span
              class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso leading-snug"
            >
              {{ faq.question }}
            </span>
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              class="w-6 h-6 text-butterelle-primary shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openItems.includes(index) }"
            />
          </button>

          <!-- Accordion Content -->
          <div
            v-show="openItems.includes(index)"
            class="px-6 sm:px-7 pb-6 font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted border-t border-butterelle-border/30 pt-3"
            v-html="faq.answer"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
