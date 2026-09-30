<script setup>
import { Icon } from '@iconify/vue'

const policies = [
  {
    icon: 'solar:clock-circle-bold',
    title: 'Lead Time Produksi',
    items: [
      { label: 'Kue Kering & Hampers:', value: 'Min. H-2' },
      { label: 'Kue Lontar & Pie:', value: 'Min. H-1' },
      { label: 'Custom Cake:', value: 'Min. H-4' },
    ],
    note: null,
  },
  {
    icon: 'solar:shop-2-bold',
    title: 'Jam Operasional',
    items: [
      { label: 'Senin - Jumat:', value: '08.00 - 21.00 WIB' },
      { label: 'Sabtu - Minggu:', value: '08.00 - 18.00 WIB' },
    ],
    note: '*Pesan di luar jam kerja dibalas hari berikutnya',
  },
  {
    icon: 'solar:map-point-bold',
    title: 'Area Pengiriman',
    items: [
      { label: 'Instan / Sameday:', value: 'Radius s/d 15 km (Grab/Gojek).' },
      { label: 'Luar Kota:', value: 'Ekspedisi khusus aman berpelindung ganda.' },
    ],
    note: null,
  },
  {
    icon: 'solar:card-2-bold',
    title: 'Metode Pembayaran',
    items: [
      { label: 'Bank Transfer:', value: 'BCA, Mandiri' },
      { label: 'QRIS:', value: 'Mendukung semua e-Wallet & Mobile Banking' },
      { label: 'Ambil Sendiri:', value: 'Tunai / Non-tunai di bakehouse' },
    ],
    note: null,
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-16">
    <!-- Header Bagian Kebijakan Dapur -->
    <div class="mb-8 md:mb-12">
      <span
        class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
      >
        KEBIJAKAN DAPUR
      </span>
      <h2
        class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-butterelle-espresso leading-tight"
      >
        Informasi Penting Pemesanan
      </h2>
    </div>

    <!-- Grid 4 Kartu Kebijakan -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      <div
        v-for="(policy, index) in policies"
        :key="index"
        class="bg-butterelle-surface rounded-2xl p-6 border border-butterelle-border-warm/75 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
      >
        <!-- Icon Bulat Kuning Keemasan -->
        <div
          class="w-11 h-11 rounded-full bg-butterelle-gold/85 flex items-center justify-center text-amber-900 shrink-0 mb-5 shadow-2xs"
        >
          <Icon :icon="policy.icon" class="w-5 h-5 text-amber-900" />
        </div>

        <!-- Judul Kartu -->
        <h3 class="font-montserrat font-bold text-base text-butterelle-espresso mb-3.5">
          {{ policy.title }}
        </h3>

        <!-- Daftar Poin -->
        <ul class="space-y-2.5 text-xs sm:text-[13px] font-montserrat leading-relaxed grow">
          <li v-for="(item, iIndex) in policy.items" :key="iIndex" class="text-butterelle-roasted">
            <span class="font-bold text-butterelle-espresso">{{ item.label }}</span>
            {{ ' ' }}
            <span>{{ item.value }}</span>
          </li>
        </ul>

        <!-- Catatan Tambahan (jika ada) -->
        <p
          v-if="policy.note"
          class="font-montserrat italic text-[11px] text-butterelle-terracotta mt-3.5 pt-3 border-t border-butterelle-border-warm/40"
        >
          {{ policy.note }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
