<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'

const orderMessage =
  'Halo Butterelle, saya ingin pesan: [Nama Kue] - [Ukuran/Jumlah] untuk tanggal [DD/MM]. Dikirim ke [Alamat/Area].'

const steps = [
  {
    number: '01',
    numeric: 1,
    title: 'Pilih Kue Favorit',
    icon: 'solar:book-bookmark-bold',
    description:
      'Jelajahi menu di website atau Instagram @butterelle.bakes untuk menemukan kue lontar atau kue kering favoritmu.',
    actionType: 'link',
    actionText: 'Lihat Katalog',
    actionTo: '/katalog-produk',
  },
  {
    number: '02',
    numeric: 2,
    title: 'Chat Admin WA',
    icon: 'bi:chat-left-text',
    description:
      'Kirimkan format pesanan lengkap berisi nama, varian kue, tanggal dibutuhkan, dan alamat pengiriman ke WhatsApp kami.',
    actionType: 'whatsapp',
    actionText: 'Chat Sekarang',
    actionHref: getWhatsAppUrl(orderMessage),
  },
  {
    number: '03',
    numeric: 3,
    title: 'Konfirmasi & Bayar',
    icon: 'solar:wallet-money-bold',
    description:
      'Pembayaran mudah via Transfer Bank (BCA/Mandiri) atau QRIS. DP 50% untuk pesanan custom atau hampers perayaan besar.',
    actionType: 'badge',
    actionText: 'Verifikasi Otomatis',
    badgeIcon: 'solar:verified-check-bold',
  },
  {
    number: '04',
    numeric: 4,
    title: 'Proses Panggang',
    icon: 'material-symbols:bakery-dining',
    description:
      'Kue dipanggang segar secara artisanal (Bake by Order) sebelum jadwal pengambilan atau kurir berangkat.',
    actionType: 'badge',
    actionText: '100% Fresh from Oven',
    badgeIcon: 'solar:fire-bold',
  },
  {
    number: '05',
    numeric: 5,
    title: 'Kirim / Ambil',
    icon: 'streamline:transfer-motorcycle',
    description:
      'Kirim instan (GrabExpress/Gosend), ekspedisi packing terlindung, atau ambil langsung di dapur kami.',
    actionType: 'badge',
    actionText: 'Layanan Cepat & Aman',
    badgeIcon: 'solar:shield-check-bold',
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-20" id="langkah-pesan">
    <!-- Header Alur Pemesanan -->
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      <span
        class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
      >
        ALUR PEMESANAN
      </span>
      <h2
        class="font-playfair-display font-semibold text-3xl sm:text-4xl text-butterelle-espresso mt-2 leading-tight"
      >
        5 Langkah Menikmati Sajian Kami
      </h2>
      <p class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted mt-3 max-w-xl mx-auto">
        Dari pemilihan menu favorit hingga aroma harum tersaji di meja makan Anda.
      </p>
    </div>

    <!-- TAMPILAN DESKTOP & TABLET (Bisa wrap rapi jika ruang sempit) -->
    <div class="hidden md:flex md:flex-wrap justify-center gap-4">
      <div
        v-for="step in steps"
        :key="step.number"
        class="flex-1 min-w-52 max-w-xs xl:max-w-none bg-butterelle-surface rounded-2xl p-5 border border-butterelle-border-warm/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <!-- Header Card: Icon & Nomor Step -->
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-10 h-10 rounded-xl bg-butterelle-peach flex items-center justify-center text-butterelle-primary"
            >
              <Icon :icon="step.icon" class="w-5 h-5 text-butterelle-primary" />
            </div>
            <span class="font-playfair-display font-bold text-2xl text-butterelle-border-warm">
              {{ step.number }}
            </span>
          </div>

          <!-- Judul & Deskripsi Step -->
          <h3 class="font-montserrat font-bold text-sm lg:text-base text-butterelle-espresso mb-2">
            {{ step.title }}
          </h3>
          <p class="font-montserrat text-xs/5 text-butterelle-roasted">
            {{ step.description }}
          </p>
        </div>

        <!-- Bagian Footer Kartu Desktop -->
        <div class="pt-5 border-t border-butterelle-border-warm/40 mt-4">
          <!-- Opsi 1: Link Internal (Katalog) -->
          <RouterLink
            v-if="step.actionType === 'link'"
            :to="step.actionTo"
            class="inline-flex items-center gap-1 font-montserrat font-semibold text-xs text-butterelle-primary hover:text-butterelle-terracotta transition-colors"
          >
            <span>{{ step.actionText }}</span>
            <Icon icon="akar-icons:arrow-right" class="w-3.5 h-3.5" />
          </RouterLink>

          <!-- Opsi 2: Link WhatsApp Langsung -->
          <a
            v-else-if="step.actionType === 'whatsapp'"
            :href="step.actionHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs text-butterelle-primary hover:text-butterelle-terracotta transition-colors"
          >
            <Icon icon="bi:whatsapp" class="w-3.5 h-3.5 text-butterelle-primary" />
            <span>{{ step.actionText }}</span>
          </a>

          <!-- Opsi 3: Badge Status / Keterangan -->
          <span v-else class="font-montserrat text-xs text-butterelle-muted block">
            {{ step.actionText }}
          </span>
        </div>
      </div>
    </div>

    <!-- TAMPILAN MOBILE (Vertical Timeline dengan Garis Putus-putus) -->
    <div class="block md:hidden relative">
      <!-- Garis Vertikal Garis Putus-Putus Timeline -->
      <div
        class="absolute left-4.5 sm:left-5 top-5 bottom-8 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-[#C88A68]/60 z-0"
      ></div>

      <div class="space-y-6 relative z-10">
        <div v-for="step in steps" :key="step.number" class="flex items-start gap-3.5 sm:gap-4.5">
          <!-- Nomor Bulat Timeline -->
          <div
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-butterelle-primary text-white flex items-center justify-center font-montserrat font-bold text-sm shrink-0 shadow-xs ring-4 ring-butterelle-canvas z-10"
          >
            {{ step.numeric }}
          </div>

          <!-- Kartu Konten Mobile -->
          <div
            class="grow bg-butterelle-surface rounded-2xl p-4 sm:p-5 border border-butterelle-border-warm/80 shadow-xs"
          >
            <!-- Judul & Icon Sama Persis dengan Desktop -->
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso">
                {{ step.title }}
              </h3>
              <div
                class="w-8 h-8 rounded-lg bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0"
              >
                <Icon :icon="step.icon" class="w-4.5 h-4.5 text-butterelle-primary" />
              </div>
            </div>

            <!-- Paragraf Kalimat Sama Persis dengan Desktop -->
            <p class="font-montserrat text-xs/5 text-butterelle-roasted mb-3.5">
              {{ step.description }}
            </p>

            <!-- Aksi Tombol / Badge Mobile -->
            <div>
              <!-- Opsi 1: Link Internal Katalog -->
              <RouterLink
                v-if="step.actionType === 'link'"
                :to="step.actionTo"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-butterelle-peach text-butterelle-espresso font-montserrat font-semibold text-xs hover:bg-butterelle-border-warm transition-colors"
              >
                <span>{{ step.actionText }}</span>
                <Icon icon="akar-icons:arrow-right" class="w-3.5 h-3.5" />
              </RouterLink>

              <!-- Opsi 2: Tombol WhatsApp Langsung -->
              <a
                v-else-if="step.actionType === 'whatsapp'"
                :href="step.actionHref"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7D402B] text-white font-montserrat font-semibold text-xs hover:bg-[#6c3522] shadow-xs active:scale-[0.98] transition-all"
              >
                <Icon icon="bi:whatsapp" class="w-3.5 h-3.5 text-white" />
                <span>{{ step.actionText }}</span>
              </a>

              <!-- Opsi 3: Badge Status Mobile -->
              <div
                v-else
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-butterelle-peach/70 text-butterelle-espresso text-xs font-montserrat font-medium"
              >
                <Icon :icon="step.badgeIcon" class="w-3.5 h-3.5 text-butterelle-primary" />
                <span>{{ step.actionText }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
