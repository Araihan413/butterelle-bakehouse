<script setup>
import logo from '@/assets/images/logo-bakehouse.webp'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { getWhatsAppUrl } from '@/data/contact.js'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-butterelle-surface/80 backdrop-blur shadow-md p-2 z-50">
    <div class="flex justify-between lg:justify-around items-center">
      <div>
        <RouterLink to="/" class="block">
          <img :src="logo" alt="Logo Bakehouse" class="h-14 w-auto" />
        </RouterLink>
      </div>

      <div class="lg:hidden cursor-pointer p-1" @click="isMenuOpen = !isMenuOpen">
        <Icon icon="iconamoon:menu-burger-horizontal-bold" class="w-6 h-6" />
      </div>

      <!-- navigasi destop -->
      <ul
        class="hidden lg:flex flex-row space-x-8 font-semibold font-montserrat text-sm text-butterelle-espresso"
      >
        <li>
          <RouterLink to="/" class="hover:text-gray-900">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/katalog-produk" class="hover:text-butterelle-terracotta"
            >Katalog Produk</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/cara-pesan" class="hover:text-butterelle-terracotta"
            >Cara Pesan</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/tentang-kami" class="hover:text-butterelle-terracotta"
            >Tentang Kami</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/kontak-lokasi" class="hover:text-butterelle-terracotta"
            >Kontak & Lokasi</RouterLink
          >
        </li>
      </ul>

      <!-- navigasi mobile & tablet -->
      <ul
        class="flex lg:hidden flex-col space-y-6 font-semibold text-butterelle-espresso font-montserrat text-sm absolute top-18 right-0 left-0 text-center overflow-hidden bg-butterelle-surface transition-[max-height,opacity] duration-400 ease-out shadow-lg"
        :class="isMenuOpen ? 'max-h-[85vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'"
      >
        <li @click="isMenuOpen = false">
          <RouterLink to="/" class="hover:text-butterelle-terracotta">Home</RouterLink>
        </li>
        <li @click="isMenuOpen = false">
          <RouterLink to="/katalog-produk" class="hover:text-butterelle-terracotta"
            >Katalog Produk</RouterLink
          >
        </li>
        <li @click="isMenuOpen = false">
          <RouterLink to="/cara-pesan" class="hover:text-butterelle-terracotta"
            >Cara Pesan</RouterLink
          >
        </li>
        <li @click="isMenuOpen = false">
          <RouterLink to="/tentang-kami" class="hover:text-butterelle-terracotta"
            >Tentang Kami</RouterLink
          >
        </li>
        <li @click="isMenuOpen = false">
          <RouterLink to="/kontak-lokasi" class="hover:text-butterelle-terracotta"
            >Kontak & Lokasi</RouterLink
          >
        </li>
        <li @click="isMenuOpen = false" class="pt-2 px-6">
          <a
            :href="getWhatsAppUrl('Halo Butterelle, saya ingin pesan kue')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 w-full bg-butterelle-primary text-butterelle-surface px-4 py-2.5 rounded-2xl hover:bg-butterelle-primary/85 font-semibold text-sm shadow-xs transition-colors"
          >
            <Icon icon="bi:chat-left-text" class="w-4 h-4" />
            <span>Pesan Via WhatsApp</span>
          </a>
        </li>
      </ul>

      <!-- Tombol WhatsApp Desktop -->
      <div class="hidden lg:block">
        <a
          :href="getWhatsAppUrl('Halo Butterelle, saya ingin pesan kue')"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-butterelle-primary text-butterelle-surface px-4 py-2 text-center rounded-2xl hover:bg-butterelle-primary/85 cursor-pointer font-semibold text-sm shadow-xs transition-colors"
        >
          <Icon icon="bi:chat-left-text" class="w-4 h-4" />
          <span>Pesan Via WhatsApp</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: var(--color-butterelle-terracotta);
}
</style>
