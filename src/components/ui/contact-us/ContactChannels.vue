<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { contactInfo, getWhatsAppUrl } from '@/data/contact.js'

const addressCopied = ref(false)

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(contactInfo.address)
    addressCopied.value = true
    setTimeout(() => {
      addressCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Gagal menyalin alamat:', err)
  }
}
</script>

<template>
  <div class="flex flex-col gap-5 sm:gap-6 w-full">
    <!-- Card 1: WhatsApp Prioritas Cepat -->
    <div
      class="rounded-3xl bg-[#7D4630] p-6 sm:p-7 text-white shadow-md relative overflow-hidden border border-[#6b3824]"
    >
      <!-- Aksen Lingkaran Dekorasi -->
      <div
        class="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-black/10 pointer-events-none"
      ></div>

      <div class="relative z-10">
        <!-- Top Row: Badge & Icon -->
        <div class="flex items-center justify-between gap-3 mb-3">
          <span
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-butterelle-gold font-montserrat font-semibold text-[11px] sm:text-xs"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-butterelle-gold"></span>
            Prioritas WhatsApp Chat
          </span>
          <div
            class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/90"
          >
            <Icon icon="bi:chat-left-text" class="w-5 h-5" />
          </div>
        </div>

        <!-- Heading & Subtitle -->
        <h2
          class="font-playfair-display font-semibold text-2xl sm:text-[26px] text-white leading-tight"
        >
          Respon Sangat Cepat
        </h2>
        <p
          class="font-montserrat text-xs sm:text-[13px] text-white/85 mt-2 leading-relaxed max-w-sm"
        >
          Garansi balasan ramah &lt; 15 menit pada jam operasional kami.
        </p>

        <!-- Bottom Row: Telepon & Tombol Aksi -->
        <div
          class="flex flex-wrap items-end justify-between gap-4 mt-6 pt-5 border-t border-white/15"
        >
          <div>
            <span
              class="block font-montserrat font-semibold text-[10px] tracking-wider text-white/70 uppercase"
            >
              LAYANAN PELANGGAN
            </span>
            <span class="font-montserrat font-bold text-base sm:text-lg text-white">
              {{ contactInfo.phoneDisplay }}
            </span>
          </div>

          <a
            :href="getWhatsAppUrl('Halo Butterelle, saya ingin bertanya seputar pemesanan')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-butterelle-gold text-butterelle-espresso font-montserrat font-bold text-xs sm:text-sm hover:bg-[#edd07f] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <span>Mulai Chat Sekarang</span>
            <Icon icon="akar-icons:arrow-right" class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Card 2: Instagram Story & Feed -->
    <a
      :href="contactInfo.instagramUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-butterelle-surface rounded-2xl p-4 sm:p-5 border border-butterelle-border-warm/80 shadow-2xs hover:shadow-md hover:border-butterelle-terracotta/40 transition-all flex items-center justify-between gap-4 group"
    >
      <div class="flex items-center gap-3.5">
        <div
          class="w-11 h-11 rounded-xl bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0 group-hover:scale-105 transition-transform"
        >
          <Icon icon="ph:instagram-logo-bold" class="w-6 h-6 text-butterelle-primary" />
        </div>
        <div>
          <span class="block font-montserrat text-[11px] text-butterelle-muted leading-tight">
            Instagram Story & Feed
          </span>
          <span class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso">
            @butterelle.bakes
          </span>
        </div>
      </div>

      <span
        class="inline-flex items-center gap-1 font-montserrat font-semibold text-xs text-butterelle-primary group-hover:text-butterelle-terracotta transition-colors"
      >
        <span>Cek panggangan hari ini</span>
        <Icon icon="akar-icons:arrow-right" class="w-3 h-3" />
      </span>
    </a>

    <!-- Card 3: Jam Buka & Layanan -->
    <div
      class="bg-butterelle-surface rounded-2xl p-6 sm:p-7 border border-butterelle-border-warm/80 shadow-2xs flex flex-col"
    >
      <!-- Header Card -->
      <div class="flex items-center gap-2.5 mb-5 pb-4 border-b border-butterelle-border-warm/50">
        <Icon icon="solar:clock-circle-outline" class="w-5 h-5 text-butterelle-primary" />
        <h3 class="font-playfair-display font-semibold text-lg sm:text-xl text-butterelle-espresso">
          Jam Buka & Layanan
        </h3>
      </div>

      <!-- Jadwal Senin - Sabtu -->
      <div class="flex items-start justify-between gap-4 py-2">
        <div>
          <span
            class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso block"
          >
            Senin – Jumat
          </span>
        </div>
        <span
          class="font-montserrat font-semibold text-xs sm:text-sm text-butterelle-espresso shrink-0"
        >
          08.00 – 21.00 WIB
        </span>
      </div>

      <!-- Jadwal Minggu -->
      <div
        class="flex items-start justify-between gap-4 pt-3 mt-2 border-t border-butterelle-border-warm/40"
      >
        <div>
          <span
            class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso block"
          >
            Sabtu - Minggu
          </span>
        </div>
        <span
          class="font-montserrat font-semibold text-xs sm:text-sm text-butterelle-espresso shrink-0"
        >
          08.00 – 18.00 WIB
        </span>
      </div>
    </div>

    <!-- Card 4: Alamat Dapur & Studio Flagship -->
    <div
      class="bg-butterelle-surface rounded-2xl p-6 sm:p-7 border border-butterelle-border-warm/80 shadow-2xs flex flex-col"
    >
      <!-- Header Alamat -->
      <div class="flex items-start gap-3 mb-4">
        <div
          class="w-9 h-9 rounded-lg bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0 mt-0.5"
        >
          <Icon icon="solar:map-point-bold" class="w-5 h-5 text-butterelle-primary" />
        </div>
        <div>
          <span
            class="block font-montserrat font-bold text-[10px] sm:text-[11px] tracking-wider uppercase text-butterelle-primary"
          >
            ALAMAT DAPUR & STUDIO
          </span>
          <h3
            class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso mt-0.5"
          >
            Butterelle Bakehouse
          </h3>
        </div>
      </div>

      <!-- Alamat Lengkap -->
      <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted leading-relaxed mb-6">
        {{ contactInfo.address }}
      </p>

      <!-- Dual Buttons: Pesan WA Langsung & Salin Alamat -->
      <div class="flex flex-wrap items-center gap-3">
        <a
          :href="getWhatsAppUrl('Halo Butterelle, saya mau order langsung ke dapur')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#7D4630] text-white font-montserrat font-semibold text-xs sm:text-sm hover:bg-[#6c3a26] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
        >
          <Icon icon="solar:bag-heart-bold" class="w-4 h-4 text-white" />
          <span>Pesan via WhatsApp Langsung</span>
        </a>

        <button
          type="button"
          @click="copyAddress"
          class="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-butterelle-peach text-butterelle-espresso font-montserrat font-semibold text-xs sm:text-sm hover:bg-butterelle-border-warm shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] cursor-pointer"
        >
          <Icon
            :icon="addressCopied ? 'material-symbols:check-rounded' : 'solar:copy-bold'"
            class="w-4 h-4 text-butterelle-primary"
          />
          <span>{{ addressCopied ? 'Alamat Disalin!' : 'Salin Alamat' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
