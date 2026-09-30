<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div
    class="inline-flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 p-3 sm:px-5 sm:py-2.5 bg-butterelle-surface/90 backdrop-blur-xs border border-butterelle-border-warm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-fit"
  >
    <!-- Item 1: 2+ Tahun Beroperasi -->
    <div class="flex items-center gap-3">
      <div
        class="w-11 h-11 rounded-xl bg-butterelle-peach border border-butterelle-border-warm flex items-center justify-center text-butterelle-primary shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <Icon icon="solar:calendar-mark-bold-duotone" class="w-6 h-6 text-butterelle-primary" />
      </div>
      <div class="flex flex-col">
        <div class="flex items-baseline">
          <span
            class="text-2xl sm:text-3xl font-playfair-display font-bold text-butterelle-espresso leading-none"
          >
            5
          </span>
          <span
            class="text-lg font-playfair-display font-semibold text-butterelle-terracotta ml-0.5"
          >
            +
          </span>
        </div>
        <p class="text-xs font-semibold text-butterelle-roasted mt-1 font-montserrat">
          Tahun Melayani
        </p>
        <span class="text-[11px] text-butterelle-muted font-montserrat leading-tight">
          Pesanan Sejak 2020
        </span>
      </div>
    </div>

    <!-- Divider Pemisah (Desktop & Tablet) -->
    <div class="hidden sm:block w-px h-11 bg-butterelle-border"></div>

    <!-- Item 2: 50+ Pelanggan Setia -->
    <div class="flex items-center gap-3">
      <div
        class="w-11 h-11 rounded-xl bg-butterelle-peach border border-butterelle-border-warm flex items-center justify-center text-butterelle-primary shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <Icon
          icon="solar:users-group-two-rounded-bold-duotone"
          class="w-6 h-6 text-butterelle-primary"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-baseline">
          <span
            class="text-2xl sm:text-3xl font-playfair-display font-bold text-butterelle-espresso leading-none"
          >
            80
          </span>
          <span
            class="text-lg font-playfair-display font-semibold text-butterelle-terracotta ml-0.5"
          >
            +
          </span>
        </div>
        <p class="text-xs font-semibold text-butterelle-roasted mt-1 font-montserrat">
          Pesanan Selesai
        </p>
        <div class="flex items-center gap-1.5 mt-0.5">
          <!-- Bintang rating mini -->
          <div class="flex text-amber-500">
            <Icon
              v-for="star in 5"
              :key="star"
              icon="material-symbols:star-rounded"
              class="w-3.5 h-3.5"
            />
          </div>
          <span class="text-[11px] text-butterelle-muted font-montserrat"> (Repeat Order) </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
