<script setup>
import { Icon } from '@iconify/vue'

const philosophies = [
  {
    icon: 'solar:star-circle-bold',
    iconBg: 'bg-[#FDE7A8] text-amber-900',
    title: 'Butter Berkualitas',
    description:
      'Butter menjadi bahan utama kami untuk menghadirkan aroma yang harum serta tekstur kue yang lembut dan kaya rasa.',
    tag: 'Bahan Utama Pilihan',
  },
  {
    icon: 'solar:leaf-bold',
    iconBg: 'bg-[#FCE2D5] text-[#843C24]',
    title: 'Tanpa Pengawet Sintetis',
    description:
      'Kue dibuat segar sesuai pesanan tanpa tambahan bahan pengawet sintetis maupun pemanis buatan.',
    tag: 'Alami & Aman',
  },
  {
    icon: 'solar:box-minimalistic-bold',
    iconBg: 'bg-[#FDE7A8] text-amber-900',
    title: 'Bahan Segar Terpilih',
    description:
      'Dipadukan dengan telur segar dan bahan-bahan pilihan tanpa perisa buatan untuk menghasilkan tekstur lembut dan rasa gurih alami.',
    tag: 'Bahan Alami Pilihan',
  },
  {
    icon: 'solar:shield-check-bold',
    iconBg: 'bg-[#FCE2D5] text-[#843C24]',
    title: 'Bersih & Halal',
    description:
      'Dikerjakan di dapur rumahan yang selalu terjaga kebersihannya serta menggunakan bahan-bahan yang 100% halal.',
    tag: 'Higienis & Halal',
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-16 lg:py-20">
    <!-- Header Filosofi Bahan Terbaik -->
    <div class="text-center max-w-2xl mx-auto mb-10 md:mb-14">
      <span
        class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
      >
        INTEGRITAS DAPUR
      </span>
      <h2
        class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-butterelle-espresso leading-tight"
      >
        Filosofi Bahan Terbaik Kami
      </h2>
      <p class="font-montserrat text-xs sm:text-sm text-butterelle-roasted mt-3.5 leading-relaxed">
        Empat prinsip yang kami pegang untuk menjaga cita rasa dan kehangatan kue rumahan tetap
        istimewa di setiap pesanan Anda.
      </p>
    </div>

    <!-- Grid 4 Pilar Bahan -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      <div
        v-for="(item, index) in philosophies"
        :key="index"
        class="bg-butterelle-surface rounded-2xl p-6 border border-butterelle-border-warm/80 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <!-- Icon Bulat / Kotak Rounded -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-5 shadow-2xs"
            :class="item.iconBg"
          >
            <Icon :icon="item.icon" class="w-6 h-6" />
          </div>

          <!-- Judul Kartu -->
          <h3
            class="font-montserrat font-bold text-base sm:text-[17px] text-butterelle-espresso mb-3 leading-snug"
          >
            {{ item.title }}
          </h3>

          <!-- Deskripsi -->
          <p class="font-montserrat text-xs/5 text-butterelle-roasted">
            {{ item.description }}
          </p>
        </div>

        <!-- Tag Bawah (Bottom Badge) -->
        <div class="mt-6 pt-4 border-t border-butterelle-border-warm/50 flex items-center gap-2">
          <Icon
            icon="solar:check-circle-outline"
            class="w-4 h-4 text-butterelle-roasted shrink-0"
          />
          <span class="font-montserrat font-medium text-xs text-butterelle-roasted">
            {{ item.tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
