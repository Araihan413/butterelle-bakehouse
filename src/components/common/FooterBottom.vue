<script setup>
import logo from '@/assets/images/logo-bakehouse.webp'
import { Icon } from '@iconify/vue'
import { contactInfo, getWhatsAppUrl } from '@/data/contact.js'
</script>

<template>
  <footer
    class="w-full bg-butterelle-tint border-t border-butterelle-border-warm/80 text-butterelle-roasted mt-auto"
  >
    <div class="max-w-[1920px] mx-auto px-5 md:px-12 lg:px-18 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
        <!-- Kolom 1 & 2: Brand Info -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center">
            <img :src="logo" alt="Butterelle Bakehouse Logo" class="h-12 w-auto object-contain" />
          </div>
          <p class="font-montserrat text-xs sm:text-sm/6 text-butterelle-roasted max-w-sm">
            Menyajikan kue lontar khas Papua dan aneka kue kering rumahan yang dipanggang sesuai
            pesanan. Cocok untuk teman santai, oleh-oleh, atau sajian hari raya.
          </p>
        </div>

        <!-- Kolom 3: Jam Operasional -->
        <div class="space-y-3.5">
          <h4 class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso">
            Jam Operasional
          </h4>
          <ul class="space-y-2 font-montserrat text-xs sm:text-sm text-butterelle-roasted">
            <li>{{ contactInfo.operatingHours.weekdays }}</li>
            <li>{{ contactInfo.operatingHours.weekends }}</li>
            <li class="text-butterelle-terracotta font-medium">
              {{ contactInfo.operatingHours.holiday }}
            </li>
          </ul>
        </div>

        <!-- Kolom 4: Hubungi Kami -->
        <div class="space-y-3.5">
          <h4 class="font-montserrat font-bold text-sm sm:text-base text-butterelle-espresso">
            Hubungi Kami
          </h4>
          <ul class="space-y-2.5 font-montserrat text-xs sm:text-sm text-butterelle-roasted">
            <li>
              <a
                :href="getWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:text-butterelle-primary transition-colors"
              >
                <Icon icon="bi:chat-left-text" class="w-4 h-4 text-butterelle-primary shrink-0" />
                <span>WhatsApp: {{ contactInfo.phoneDisplay }}</span>
              </a>
            </li>
            <li>
              <a
                :href="contactInfo.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 hover:text-butterelle-primary transition-colors"
              >
                <Icon icon="bi:instagram" class="w-4 h-4 text-butterelle-primary shrink-0" />
                <span>Instagram: {{ contactInfo.instagram }}</span>
              </a>
            </li>
            <li>
              <a
                :href="contactInfo.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-start gap-2 hover:text-butterelle-primary transition-colors"
              >
                <Icon
                  icon="material-symbols:location-on-outline"
                  class="w-4.5 h-4.5 text-butterelle-primary shrink-0 mt-0.5"
                />
                <span class="leading-relaxed">{{ contactInfo.address }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Copyright & Legal -->
      <div
        class="mt-12 md:mt-16 pt-6 border-t border-butterelle-border-warm flex flex-col sm:flex-row items-center justify-between gap-4 font-montserrat text-xs text-butterelle-muted"
      >
        <p>© 2024 Butterelle Bakehouse. Seluruh hak cipta dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
