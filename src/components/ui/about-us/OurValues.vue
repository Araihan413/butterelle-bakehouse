<script setup>
import { Icon } from '@iconify/vue'

const commitments = [
  {
    icon: 'solar:star-bold',
    iconBg: 'bg-[#843C24]',
    title: 'Cita Rasa Terjaga',
    description:
      'Kami menjaga rasa dan mutu di setiap panggangan agar kue yang sampai ke tangan Anda selalu menghadirkan kehangatan rumah.',
  },
  {
    icon: 'solar:smile-circle-bold',
    iconBg: 'bg-[#7A622A]',
    title: 'Pelayanan Ramah & Hangat',
    description:
      'Setiap pesanan kami layani dengan ramah dan penuh perhatian, siap membantu Anda memilih sajian yang paling tepat untuk setiap momen.',
  },
  {
    icon: 'solar:gift-bold',
    iconBg: 'bg-[#6E3C36]',
    title: 'Kemasan Rapi & Siap Hantaran',
    description:
      'Dikemas dengan cermat dan rapi sehingga pas dinikmati sendiri di rumah maupun dijadikan bingkisan hangat bagi orang-orang terkasih.',
  },
]
</script>

<template>
  <section class="w-full py-12 md:py-16 lg:py-20">
    <!-- Header Janji Pelayanan -->
    <div class="text-center max-w-xl mx-auto mb-10 md:mb-14">
      <span
        class="font-montserrat font-semibold text-xs tracking-wider uppercase text-butterelle-primary block mb-2"
      >
        JANJI PELAYANAN
      </span>
      <h2
        class="font-playfair-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-butterelle-espresso leading-tight"
      >
        Nilai & Komitmen Kami
      </h2>
    </div>

    <!-- Grid 3 Kartu Komitmen -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
      <div
        v-for="(item, index) in commitments"
        :key="index"
        class="bg-butterelle-surface rounded-3xl p-7 sm:p-8 border border-butterelle-border-warm/80 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
      >
        <!-- Icon Kotak Rounded -->
        <div
          class="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
          :class="item.iconBg"
        >
          <Icon :icon="item.icon" class="w-6 h-6 text-white" />
        </div>

        <!-- Judul Komitmen -->
        <h3
          class="font-montserrat font-bold text-base sm:text-lg text-butterelle-espresso mt-5 mb-3 leading-snug"
        >
          {{ item.title }}
        </h3>

        <!-- Deskripsi Komitmen -->
        <p class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
