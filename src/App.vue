<script setup>
import { RouterView } from 'vue-router'
import NavbarTop from '@/components/common/NavbarTop.vue'
import FooterBottom from '@/components/common/FooterBottom.vue'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp.vue'
import BreadcrumbNav from '@/components/common/BreadcrumbNav.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-between bg-butterelle-canvas">
    <NavbarTop />
    <main class="w-full flex justify-center grow">
      <div class="mt-18 mx-5 md:mx-12 lg:mx-18 py-6 md:py-12 lg:py-16 max-w-[1920px] w-full">
        <BreadcrumbNav />
        <RouterView />
      </div>
    </main>
    <FooterBottom />
    <FloatingWhatsApp />
  </div>
</template>

<style scoped></style>
