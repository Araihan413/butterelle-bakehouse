<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { contactInfo, getWhatsAppUrl } from '@/data/contact.js'

const form = ref({
  name: '',
  phone: '',
  category: '',
  notes: '',
})

const isSubmitted = ref(false)

const categories = [
  'Hampers Hari Raya (Idul Fitri / Natal / Imlek)',
  'Souvenir Pernikahan & Acara Spesial',
  'Corporate Gift & Souvenir Kantor',
  'Suplai Kafe / Resto / Hotel (B2B)',
  'Pesanan Jumlah Besar Lainnya',
]

const handleSubmit = () => {
  if (!form.value.name || !form.value.phone) {
    alert('Mohon isi Nama Lengkap dan Nomor WhatsApp Anda.')
    return
  }

  // Format pesan WhatsApp
  const message = `Halo ${contactInfo.name}, saya ingin konsultasi pesanan khusus/hampers:
- *Nama Lengkap:* ${form.value.name}
- *Nomor WA:* ${form.value.phone}
- *Jenis Kebutuhan:* ${form.value.category || 'Belum dipilih'}
- *Catatan / Ekspektasi:* ${form.value.notes || '-'}`

  const waUrl = getWhatsAppUrl(message)

  isSubmitted.value = true
  window.open(waUrl, '_blank')

  setTimeout(() => {
    isSubmitted.value = false
    form.value = {
      name: '',
      phone: '',
      category: '',
      notes: '',
    }
  }, 3000)
}
</script>

<template>
  <section class="w-full mt-10 md:mt-14" id="konsultasi-khusus">
    <!-- Card Utama Form & Konsultasi -->
    <div
      class="w-full rounded-3xl overflow-hidden border border-butterelle-border-warm/80 shadow-xs bg-butterelle-surface grid grid-cols-1 lg:grid-cols-12"
    >
      <!-- Kolom Kiri: Informasi Konsultasi Khusus (Background Peach Hangat) -->
      <div
        class="lg:col-span-5 bg-butterelle-tint p-7 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-butterelle-border-warm/75"
      >
        <div>
          <!-- Eyebrow -->
          <span
            class="font-montserrat font-bold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
          >
            KONSULTASI KHUSUS
          </span>

          <!-- Heading -->
          <h2
            class="font-playfair-display font-semibold text-2xl sm:text-3xl text-butterelle-espresso leading-snug"
          >
            Pemesanan Jumlah Besar &amp; Hampers
          </h2>

          <!-- Deskripsi -->
          <p
            class="font-montserrat text-xs sm:text-sm text-butterelle-roasted mt-4 leading-relaxed"
          >
            Mempersiapkan bingkisan Idul Fitri, perayaan akhir tahun, atau pasokan harian kafe Anda?
            Ceritakan detailnya dan tim kami akan menyusun opsi terbaik.
          </p>

          <!-- 3 Poin Keunggulan -->
          <div class="mt-8 space-y-4">
            <div class="flex items-center gap-3.5">
              <div
                class="w-9 h-9 rounded-full bg-white/70 border border-butterelle-border-warm/60 flex items-center justify-center text-butterelle-primary shrink-0 shadow-2xs"
              >
                <Icon icon="solar:gift-bold" class="w-4.5 h-4.5" />
              </div>
              <span
                class="font-montserrat font-medium text-xs sm:text-[13px] text-butterelle-espresso"
              >
                Kustom pita, hangtag &amp; kartu ucapan
              </span>
            </div>

            <div class="flex items-center gap-3.5">
              <div
                class="w-9 h-9 rounded-full bg-white/70 border border-butterelle-border-warm/60 flex items-center justify-center text-butterelle-primary shrink-0 shadow-2xs"
              >
                <Icon icon="solar:delivery-bold" class="w-4.5 h-4.5" />
              </div>
              <span
                class="font-montserrat font-medium text-xs sm:text-[13px] text-butterelle-espresso"
              >
                Pengiriman serentak ke banyak alamat
              </span>
            </div>

            <div class="flex items-center gap-3.5">
              <div
                class="w-9 h-9 rounded-full bg-white/70 border border-butterelle-border-warm/60 flex items-center justify-center text-butterelle-primary shrink-0 shadow-2xs"
              >
                <Icon icon="solar:document-text-bold" class="w-4.5 h-4.5" />
              </div>
              <span
                class="font-montserrat font-medium text-xs sm:text-[13px] text-butterelle-espresso"
              >
                Faktur pajak &amp; invoice resmi korporat
              </span>
            </div>
          </div>
        </div>

        <!-- Note Bawah Kolom Kiri -->
        <div class="mt-8 pt-6 border-t border-butterelle-border-warm/60">
          <p class="font-montserrat text-xs text-butterelle-roasted leading-relaxed">
            Butuh penawaran dalam 2 jam? Hubungi WhatsApp kami di
            <a
              :href="
                getWhatsAppUrl('Halo Butterelle, saya butuh penawaran cepat hampers/bulk order')
              "
              target="_blank"
              rel="noopener noreferrer"
              class="font-bold text-butterelle-espresso hover:text-butterelle-primary underline decoration-butterelle-primary/40 underline-offset-2 transition-colors inline-block"
            >
              {{ contactInfo.phoneDisplay }}
            </a>
          </p>
        </div>
      </div>

      <!-- Kolom Kanan: Formulir Pesan & Kerjasama (Background Putih) -->
      <div
        class="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between bg-butterelle-surface"
      >
        <div>
          <!-- Header Formulir -->
          <h3 class="font-montserrat font-bold text-lg sm:text-xl text-butterelle-espresso">
            Formulir Pesan &amp; Kerjasama
          </h3>
          <p class="font-montserrat text-xs text-butterelle-muted mt-1 mb-6">
            Isi detail kebutuhan Anda di bawah ini secara ringkas.
          </p>

          <!-- Form Fields -->
          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-5">
            <!-- Field: Nama Lengkap -->
            <div>
              <label
                class="block font-montserrat font-semibold text-xs text-butterelle-espresso mb-1.5"
              >
                Nama Lengkap <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Contoh: Raden Ayu Nadira"
                class="w-full px-4 py-3 rounded-xl bg-[#FDF3ED] border border-butterelle-border-warm/50 font-montserrat text-xs sm:text-sm text-butterelle-espresso placeholder:text-butterelle-muted/70 focus:outline-none focus:border-butterelle-primary/60 transition-colors"
              />
            </div>

            <!-- Field: Nomor WhatsApp Aktif -->
            <div>
              <label
                class="block font-montserrat font-semibold text-xs text-butterelle-espresso mb-1.5"
              >
                Nomor WhatsApp Aktif <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.phone"
                type="tel"
                required
                placeholder="0812xxxxxxxx"
                class="w-full px-4 py-3 rounded-xl bg-[#FDF3ED] border border-butterelle-border-warm/50 font-montserrat text-xs sm:text-sm text-butterelle-espresso placeholder:text-butterelle-muted/70 focus:outline-none focus:border-butterelle-primary/60 transition-colors"
              />
            </div>

            <!-- Field: Jenis Kebutuhan -->
            <div>
              <label
                class="block font-montserrat font-semibold text-xs text-butterelle-espresso mb-1.5"
              >
                Jenis Kebutuhan <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  v-model="form.category"
                  required
                  class="w-full px-4 py-3 pr-10 rounded-xl bg-[#FDF3ED] border border-butterelle-border-warm/50 font-montserrat text-xs sm:text-sm text-butterelle-espresso appearance-none focus:outline-none focus:border-butterelle-primary/60 transition-colors cursor-pointer"
                >
                  <option value="" disabled selected>Pilih kategori keperluan Anda...</option>
                  <option v-for="(cat, cIdx) in categories" :key="cIdx" :value="cat">
                    {{ cat }}
                  </option>
                </select>
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-butterelle-roasted"
                >
                  <Icon icon="material-symbols:keyboard-arrow-down-rounded" class="w-5 h-5" />
                </div>
              </div>
            </div>

            <!-- Field: Catatan Pesan / Ekspektasi Tanggal Pengiriman -->
            <div>
              <label
                class="block font-montserrat font-semibold text-xs text-butterelle-espresso mb-1.5"
              >
                Catatan Pesan / Ekspektasi Tanggal Pengiriman
              </label>
              <textarea
                v-model="form.notes"
                rows="4"
                placeholder="Ceritakan jumlah pax, preferensi varian pastry (croissant, sourdough, dsb), atau perkiraan tanggal acara..."
                class="w-full p-4 rounded-xl bg-[#FDF3ED] border border-butterelle-border-warm/50 font-montserrat text-xs sm:text-sm text-butterelle-espresso placeholder:text-butterelle-muted/70 focus:outline-none focus:border-butterelle-primary/60 transition-colors resize-none leading-relaxed"
              ></textarea>
            </div>

            <!-- Bottom Row: Disclaimer & Submit Button -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-end gap-4 pt-3">
              <button
                type="submit"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7D4630] text-white font-montserrat font-semibold text-xs sm:text-sm hover:bg-[#6a3824] shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer shrink-0"
              >
                <span>{{ isSubmitted ? 'Mengirim...' : 'Kirim Pesan Kerjasama' }}</span>
                <Icon icon="solar:plain-2-bold" class="w-4 h-4 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
