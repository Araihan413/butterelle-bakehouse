<script setup>
import { Icon } from '@iconify/vue'
import figureImg from '@/assets/images/figure.webp'
import OrderStepsTimeline from '@/components/ui/how-to-order/OrderStepsTimeline.vue'
import OrderPolicies from '@/components/ui/how-to-order/OrderPolicies.vue'
import OrderFaq from '@/components/ui/how-to-order/OrderFaq.vue'
import OrderCta from '@/components/ui/how-to-order/OrderCta.vue'

const scrollToSteps = () => {
  const el = document.getElementById('langkah-pesan')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="flex flex-col w-full pb-16">
    <!-- Hero Section Cara Pesan -->
    <section class="w-full pb-12 md:pb-16 lg:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Kolom Teks (Kiri) -->
        <div class="lg:col-span-6 flex flex-col items-start">
          <h1
            class="font-playfair-display font-semibold text-3xl sm:text-4xl lg:text-[44px] text-butterelle-espresso leading-tight"
          >
            Cara Mudah Pesan Kue di Butterelle
          </h1>

          <p
            class="font-montserrat text-sm sm:text-base text-butterelle-roasted mt-4 max-w-lg leading-relaxed"
          >
            Hanya 5 langkah sederhana, kue hangat dan fresh siap diantar ke depan pintu rumah Anda
            dengan cita rasa artisanal yang memikat.
          </p>

          <!-- Dual Action Buttons -->
          <div class="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8">
            <!-- Tombol 1: Scroll ke Langkah Pesan -->
            <button
              type="button"
              @click="scrollToSteps"
              class="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-primary/85 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Lihat 5 Langkah Pesan</span>
              <Icon icon="material-symbols:arrow-downward-rounded" class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Kolom Visual (Kanan) -->
        <div class="lg:col-span-6 relative mt-4 lg:mt-0">
          <div class="relative mx-auto max-w-lg lg:max-w-none">
            <!-- Frame Foto Baker -->
            <div
              class="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(74,59,50,0.12)] bg-butterelle-peach border border-butterelle-border-warm/70"
            >
              <img
                :src="figureImg"
                alt="Baker Butterelle menyiapkan adonan kue fresh"
                class="w-full h-90 sm:h-105 object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>

            <!-- Floating Badge Card (Pojok Kiri Bawah) -->
            <div
              class="absolute -bottom-6 -left-4 sm:-left-6 bg-butterelle-surface/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_12px_28px_rgba(74,59,50,0.12)] border border-butterelle-border-warm/80 flex items-center gap-3.5 max-w-xs z-10"
            >
              <div
                class="w-11 h-11 rounded-full bg-butterelle-gold/80 flex items-center justify-center text-amber-800 shrink-0 shadow-2xs"
              >
                <Icon icon="solar:stopwatch-bold" class="w-6 h-6 text-amber-800" />
              </div>
              <div class="flex flex-col">
                <span
                  class="font-montserrat font-bold text-xs sm:text-sm text-butterelle-espresso leading-snug"
                >
                  Proses Pesan Singkat
                </span>
                <span class="font-montserrat text-xs text-butterelle-muted leading-tight mt-0.5">
                  Konfirmasi kilat &lt; 15 menit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alur Pemesanan (Desktop 5 Kolom & Mobile Vertical Timeline) -->
    <OrderStepsTimeline />

    <!-- Kebijakan Dapur & Informasi Penting Pemesanan -->
    <OrderPolicies />

    <!-- Tanya Jawab Seputar Pemesanan (FAQ) -->
    <OrderFaq />

    <!-- Banner Penutup Ajakan Pesan (CTA) -->
    <OrderCta />
  </div>
</template>

<style scoped></style>
