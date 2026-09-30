<script setup>
import { Icon } from '@iconify/vue'

const testimonials = [
  {
    rating: 5,
    quote:
      '"Kue lontarnya beneran enak banget dan ukurannya gede! Harganya sangat worth it dengan porsi sebanyak itu, manisnya pas dan kulit pienya renyah harum butter. Puas banget buat cemilan sekeluarga."',
    initials: 'RW',
    name: 'Ratna Wulandari',
    role: 'Ibu Rumah Tangga',
    avatarBg: 'bg-butterelle-peach border border-butterelle-border-warm text-butterelle-primary',
  },
  {
    rating: 5,
    quote:
      '"Awalnya ragu pesan kue lontar karena takut bau amis telur, tapi buatan Butterelle ini sama sekali nggak amis! Lembut lumer di mulut dan susunya berasa banget. Dimakan pas dingin makin juara."',
    initials: 'MA',
    name: 'Maya Anggraini',
    role: 'Ibu Rumah Tangga',
    avatarBg: 'bg-butterelle-butter-light border border-butterelle-border-warm text-[#715c20]',
  },
  {
    rating: 5,
    quote:
      '"Pesan kue lontar dan nastar untuk suguhan kumpul keluarga kemarin. Semuanya pada suka, kuenya lembut dan manisnya pas nggak bikin enek. Adminnya ramah dan kuenya tiba tepat waktu."',
    initials: 'DS',
    name: 'Dewi Sartika',
    role: 'Ibu Rumah Tangga',
    avatarBg: 'bg-[#ffdad8] border border-butterelle-border-warm text-[#7d504e]',
  },
]
</script>

<template>
  <section
    class="-mx-5 md:-mx-12 lg:-mx-18 bg-butterelle-peach border-y border-butterelle-border-warm/70 px-5 md:px-12 lg:px-18 py-16 md:py-24"
  >
    <div class="max-w-300 mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-4">
        <div>
          <span
            class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary"
          >
            KATA PELANGGAN
          </span>
          <h2
            class="font-playfair-display font-semibold text-3xl md:text-4xl text-butterelle-espresso mt-2 leading-tight"
          >
            Ulasan Hangat Penikmat Butterelle
          </h2>
        </div>

        <div
          class="flex items-center gap-2 text-butterelle-roasted font-montserrat text-xs sm:text-sm"
        >
          <Icon icon="material-symbols:thumb-up-rounded" class="w-5 h-5 text-amber-600 shrink-0" />
          <span>Kepuasan otentik terverifikasi dari para pelanggan setia</span>
        </div>
      </div>

      <!-- Testimonial Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="bg-butterelle-surface rounded-3xl p-7 md:p-8 border border-butterelle-border-warm/80 shadow-[0_4px_24px_rgba(74,59,50,0.04)] hover:shadow-[0_12px_32px_rgba(74,59,50,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Stars & Quote -->
          <div>
            <!-- Star Ratings -->
            <div class="flex items-center gap-1 text-amber-500 mb-4">
              <Icon
                v-for="star in item.rating"
                :key="star"
                icon="material-symbols:star-rounded"
                class="w-5 h-5"
              />
            </div>

            <!-- Quote Text -->
            <p class="font-montserrat italic text-xs sm:text-sm/6 text-butterelle-roasted">
              {{ item.quote }}
            </p>
          </div>

          <!-- Customer Identity -->
          <div
            class="mt-6 md:mt-8 flex items-center gap-3.5 pt-4 border-t border-butterelle-border/40"
          >
            <!-- Initial Avatar -->
            <div
              :class="item.avatarBg"
              class="w-11 h-11 rounded-full flex items-center justify-center font-montserrat font-bold text-sm shrink-0 shadow-2xs"
            >
              {{ item.initials }}
            </div>

            <!-- Name and Role -->
            <div>
              <h4
                class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso leading-snug"
              >
                {{ item.name }}
              </h4>
              <p class="font-montserrat text-xs text-butterelle-muted mt-0.5">
                {{ item.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
