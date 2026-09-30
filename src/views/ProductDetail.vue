<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { products } from '@/data/products.js'
import { getWhatsAppUrl } from '@/data/contact.js'

const route = useRoute()

// Ambil produk berdasarkan ID dari parameter rute
const productId = computed(() => Number(route.params.id) || 1)
const product = computed(() => {
  return products.find((p) => p.id === productId.value) || products[0]
})

// State Galeri Foto Aktif
const activeImageIndex = ref(0)
const activeImage = computed(() => {
  if (product.value.gallery && product.value.gallery.length > 0) {
    return product.value.gallery[activeImageIndex.value] || product.value.image
  }
  return product.value.image
})

// State Varian yang Dipilih
const selectedVariantIndex = ref(0)
const currentVariant = computed(() => {
  if (product.value.variants && product.value.variants.length > 0) {
    return product.value.variants[selectedVariantIndex.value]
  }
  return null
})

// Harga dinamis berdasarkan varian
const displayPrice = computed(() => {
  if (currentVariant.value) {
    return currentVariant.value.priceFormatted
  }
  return product.value.price
})

// State Jumlah Pesanan & Catatan Baker
const quantity = ref(1)
const bakerNote = ref('')

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}

// Format URL WhatsApp dengan detail pesanan lengkap
const whatsappOrderUrl = computed(() => {
  const variantText = currentVariant.value ? `Varian: ${currentVariant.value.name}` : ''
  const noteText = bakerNote.value.trim() ? `\nCatatan: ${bakerNote.value.trim()}` : ''

  const message = `Halo Butterelle, saya mau pesan:
Produk: ${product.value.name}
${variantText}
Jumlah: ${quantity.value} pcs
Harga: ${displayPrice.value} per pcs${noteText}

Mohon info ketersediaan dan total pembayarannya. Terima kasih!`

  return getWhatsAppUrl(message)
})

// Format URL WhatsApp untuk konsultasi katering/acara
const whatsappConsultUrl = computed(() => {
  const message = `Halo Butterelle, saya ingin konsultasi pemesanan khusus / hampers untuk event kantor untuk produk "${product.value.name}".`
  return getWhatsAppUrl(message)
})
</script>

<template>
  <div class="w-full pb-16 md:pb-24">
    <!-- Grid 2 Kolom: Gambar Produk & Info Detail -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <!-- Kolom Kiri: Galeri Foto & Garansi (5 Kolom di Desktop) -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <!-- Main Image Frame -->
        <div
          class="relative w-full h-95 sm:h-115 lg:h-125 rounded-3xl overflow-hidden bg-butterelle-peach border border-butterelle-border-warm/70 shadow-sm"
        >
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover transition-all duration-300"
          />

          <!-- Badges di Pojok Kiri Atas -->
          <div class="absolute top-4 left-4 flex flex-col gap-2 z-10 items-start">
            <span
              v-if="product.badge"
              class="bg-butterelle-gold text-butterelle-espresso font-montserrat font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5"
            >
              <Icon icon="material-symbols:award-star" class="w-4 h-4 text-amber-700" />
              <span>{{ product.badge }}</span>
            </span>
          </div>

          <!-- Floating Badge di Pojok Kanan Bawah -->
          <div
            class="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md flex items-center gap-3 z-10"
          >
            <div
              class="w-8 h-8 rounded-full bg-butterelle-peach flex items-center justify-center text-butterelle-primary shrink-0"
            >
              <Icon icon="material-symbols:bakery-dining" class="w-5 h-5" />
            </div>
            <div class="flex flex-col">
              <span
                class="font-montserrat font-bold text-xs text-butterelle-espresso leading-tight"
              >
                Freshly Baked Daily
              </span>
              <span class="font-montserrat text-[11px] text-butterelle-muted leading-tight">
                Dipanggang Setelah Dipesan
              </span>
            </div>
          </div>
        </div>

        <!-- Thumbnail Gallery -->
        <div
          v-if="product.gallery && product.gallery.length > 1"
          class="grid grid-cols-4 gap-3 sm:gap-4"
        >
          <button
            v-for="(img, idx) in product.gallery"
            :key="idx"
            type="button"
            @click="activeImageIndex = idx"
            class="relative h-20 sm:h-24 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200"
            :class="
              activeImageIndex === idx
                ? 'border-2 border-butterelle-primary shadow-xs scale-102 ring-2 ring-butterelle-primary/20'
                : 'border border-butterelle-border-warm opacity-70 hover:opacity-100 hover:border-butterelle-terracotta'
            "
          >
            <img
              :src="img"
              :alt="`${product.name} ${idx + 1}`"
              class="w-full h-full object-cover"
            />
          </button>
        </div>

        <!-- Kotak Garansi Pengemasan Aman -->
        <!-- <div
          class="bg-butterelle-peach/80 rounded-2xl p-4 sm:p-4.5 flex items-start gap-3 border border-butterelle-border-warm/80 mt-1 shadow-2xs"
        >
          <Icon
            icon="solar:shield-check-bold"
            class="w-6 h-6 text-butterelle-primary shrink-0 mt-0.5"
          />
          <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted leading-relaxed">
            {{
              product.guaranteeText ||
              'Setiap kue dikemas dengan Thermal Protection & Box Anti-Benturan agar custard tetap mulus sempurna hingga ke tangan Anda.'
            }}
          </p>
        </div> -->
      </div>

      <!-- Kolom Kanan: Rincian Produk, Opsi Varian, & Aksi Pemesanan -->
      <div class="lg:col-span-6 flex flex-col">
        <!-- Kategori & Meta Tag -->
        <span
          class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
        >
          {{ product.categoryTag }}
        </span>

        <!-- Judul Produk -->
        <h1
          class="font-playfair-display font-semibold text-3xl sm:text-4xl text-butterelle-espresso mt-2 leading-tight"
        >
          {{ product.name }}
        </h1>

        <!-- Rating & Bukti Sosial
        <div class="flex items-center gap-2 mt-2.5 flex-wrap font-montserrat text-xs sm:text-sm">
          <div class="flex items-center text-amber-500">
            <Icon
              v-for="star in 5"
              :key="star"
              icon="material-symbols:star-rounded"
              class="w-4.5 h-4.5"
            />
          </div>
          <span class="font-bold text-butterelle-espresso">{{ product.rating || 4.9 }}</span>
          <span class="text-butterelle-muted">•</span>
          <span
            class="text-butterelle-muted underline cursor-pointer hover:text-butterelle-primary"
          >
            {{ product.reviewsCount || '184 Ulasan Pelanggan Terverifikasi' }}
          </span>
          <span class="text-butterelle-muted">•</span>
          <span class="text-butterelle-roasted font-medium">
            {{ product.soldCount || '450+ Kotak Terjual' }}
          </span>
        </div> -->

        <!-- Kartu Sorotan Harga -->
        <div
          class="bg-butterelle-peach/70 border border-butterelle-border-warm/80 rounded-2xl p-5 my-5 shadow-xs"
        >
          <div class="flex items-baseline gap-2 flex-wrap">
            <span class="font-playfair-display font-bold text-3xl text-butterelle-espresso">
              {{ displayPrice }}
            </span>
            <span
              v-if="currentVariant?.portion || product.portionInfo"
              class="font-montserrat text-xs text-butterelle-muted font-normal"
            >
              ({{ currentVariant?.portion || product.portionInfo }})
            </span>
          </div>

          <div
            v-if="product.packagingIncluded"
            class="flex items-start gap-2 mt-3 pt-3 border-t border-butterelle-border-warm/60 font-montserrat text-xs text-butterelle-roasted"
          >
            <Icon
              icon="solar:box-minimalistic-bold"
              class="w-4 h-4 text-butterelle-primary shrink-0 mt-0.5"
            />
            <span>{{ product.packagingIncluded }}</span>
          </div>
        </div>

        <!-- Deskripsi Panjang Cerita Produk -->
        <div class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted space-y-3">
          <p>
            {{ product.longDescription || product.description }}
          </p>
        </div>

        <!-- Callout Info: Sistem Bake by Order -->
        <div
          class="bg-butterelle-butter-light/90 border border-butterelle-gold/60 rounded-2xl p-4 my-5 flex items-start gap-3.5 shadow-2xs"
        >
          <Icon icon="solar:clock-circle-bold" class="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div class="flex flex-col">
            <h4 class="font-montserrat font-bold text-sm text-butterelle-espresso">
              {{ product.leadTimeTitle || 'Sistem Bake by Order (H-2)' }}
            </h4>
            <p class="font-montserrat text-xs/5 text-butterelle-roasted mt-1">
              {{
                product.leadTimeDesc ||
                'Pesanan dipanggang segar di pagi hari keberangkatan. Pesan sebelum jam 17.00 WIB untuk jadwal pengiriman terdekat.'
              }}
            </p>
          </div>
        </div>

        <!-- Pilihan Varian Ukuran -->
        <div v-if="product.variants && product.variants.length > 0" class="my-3">
          <div class="flex items-center justify-between mb-3">
            <span class="font-montserrat font-bold text-sm text-butterelle-espresso">
              Varian Ukuran:
            </span>
            <span class="font-montserrat text-xs text-butterelle-muted">
              {{ currentVariant?.name }}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              v-for="(variant, idx) in product.variants"
              :key="variant.id"
              type="button"
              @click="selectedVariantIndex = idx"
              class="relative p-3.5 sm:p-4 rounded-2xl text-left cursor-pointer transition-all duration-200 flex flex-col justify-between"
              :class="
                selectedVariantIndex === idx
                  ? 'border-2 border-butterelle-primary bg-butterelle-surface shadow-xs ring-2 ring-butterelle-primary/10'
                  : 'border border-butterelle-border-warm bg-butterelle-surface/60 hover:bg-butterelle-surface hover:border-butterelle-terracotta/50'
              "
            >
              <!-- Badge Populer jika ada -->
              <span
                v-if="variant.badge"
                class="absolute -top-2.5 right-3 bg-butterelle-primary text-butterelle-surface font-montserrat font-bold text-[10px] px-2 py-0.5 rounded-full"
              >
                {{ variant.badge }}
              </span>

              <div>
                <span class="font-montserrat font-bold text-sm text-butterelle-espresso block">
                  {{ variant.name }}
                </span>
                <span class="font-montserrat text-xs text-butterelle-muted block mt-0.5">
                  {{ variant.portion }}
                </span>
              </div>

              <span class="font-montserrat font-bold text-sm text-butterelle-primary mt-3 block">
                {{ variant.priceFormatted }}
              </span>
            </button>
          </div>
        </div>

        <!-- Jumlah Pesanan & Catatan untuk Baker -->
        <div
          class="bg-butterelle-peach/50 border border-butterelle-border-warm/70 rounded-2xl p-5 my-4 flex flex-col gap-4 shadow-2xs"
        >
          <!-- Stepper Jumlah Pesanan -->
          <div class="flex items-center justify-between">
            <span class="font-montserrat font-bold text-sm text-butterelle-espresso">
              Jumlah Pesanan:
            </span>
            <div
              class="bg-butterelle-surface rounded-full border border-butterelle-border-warm px-3 py-1 flex items-center gap-3 shadow-2xs"
            >
              <button
                type="button"
                @click="decreaseQuantity"
                class="w-6 h-6 flex items-center justify-center text-butterelle-espresso hover:text-butterelle-primary font-bold cursor-pointer disabled:opacity-30"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <span
                class="font-montserrat font-bold text-sm text-butterelle-espresso w-5 text-center"
              >
                {{ quantity }}
              </span>
              <button
                type="button"
                @click="increaseQuantity"
                class="w-6 h-6 flex items-center justify-center text-butterelle-espresso hover:text-butterelle-primary font-bold cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <!-- Input Catatan untuk Baker -->
          <div class="flex flex-col gap-1.5">
            <label
              for="baker-note"
              class="font-montserrat font-semibold text-xs text-butterelle-roasted"
            >
              Catatan Tambahan untuk Baker (Opsional):
            </label>
            <input
              id="baker-note"
              v-model="bakerNote"
              type="text"
              placeholder="Contoh: Minta tolong potong jadi 8 slice rapi, kirim sebelum jam 12 siang"
              class="w-full bg-butterelle-surface border border-butterelle-border-warm/80 rounded-xl px-4 py-2.5 text-xs text-butterelle-espresso placeholder:text-butterelle-muted/70 focus:outline-none focus:border-butterelle-primary transition-colors"
            />
          </div>
        </div>

        <!-- Tombol Aksi Utama & Sekunder -->
        <div class="flex flex-col gap-3 pt-2">
          <!-- Tombol WhatsApp Langsung -->
          <a
            :href="whatsappOrderUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-4 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-sm hover:bg-butterelle-primary/85 shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <Icon icon="bi:chat-left-text" class="w-4 h-4" />
            <span>Pesan Sekarang via WhatsApp Langsung</span>
            <Icon icon="akar-icons:arrow-right" class="w-4 h-4" />
          </a>

          <!-- Tombol Konsultasi Acara / Hampers -->
          <a
            :href="whatsappConsultUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3.5 rounded-full border border-butterelle-border-warm text-butterelle-espresso bg-butterelle-surface/80 hover:bg-butterelle-peach font-montserrat font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Icon
              icon="material-symbols:support-agent"
              class="w-4.5 h-4.5 text-butterelle-primary"
            />
            <span>Konsultasi Pemesanan Khusus / Hampers Event Kantor</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
