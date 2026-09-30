<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { getWhatsAppUrl } from '@/data/contact.js'

const waUrl = getWhatsAppUrl('Halo Butterelle, saya mau order langsung')

const buttonRef = ref(null)
const position = ref({ x: null, y: null })
const isDragging = ref(false)

let startPointer = { x: 0, y: 0 }
let initialPos = { x: 0, y: 0 }
let hasMoved = false

const clampPosition = (x, y) => {
  if (!buttonRef.value) return { x, y }
  const padding = 16
  const width = buttonRef.value.offsetWidth
  const height = buttonRef.value.offsetHeight
  const maxX = window.innerWidth - width - padding
  const maxY = window.innerHeight - height - padding

  return {
    x: Math.max(padding, Math.min(x, maxX)),
    y: Math.max(padding, Math.min(y, maxY)),
  }
}

const onPointerDown = (e) => {
  if (!buttonRef.value) return
  startPointer = { x: e.clientX, y: e.clientY }
  const rect = buttonRef.value.getBoundingClientRect()
  initialPos = { x: rect.left, y: rect.top }
  hasMoved = false
  isDragging.value = false

  try {
    buttonRef.value.setPointerCapture(e.pointerId)
  } catch {
    // Abaikan jika capture gagal
  }
}

const onPointerMove = (e) => {
  if (!buttonRef.value) return
  try {
    if (!buttonRef.value.hasPointerCapture(e.pointerId)) return
  } catch {
    return
  }

  const deltaX = e.clientX - startPointer.x
  const deltaY = e.clientY - startPointer.y

  // Threshold 6px untuk membedakan klik vs drag
  if (Math.hypot(deltaX, deltaY) > 6) {
    hasMoved = true
    isDragging.value = true
    const rawX = initialPos.x + deltaX
    const rawY = initialPos.y + deltaY
    position.value = clampPosition(rawX, rawY)
  }
}

const onPointerUp = (e) => {
  if (!buttonRef.value) return
  try {
    if (buttonRef.value.hasPointerCapture(e.pointerId)) {
      buttonRef.value.releasePointerCapture(e.pointerId)
    }
  } catch {
    // Abaikan
  }
  setTimeout(() => {
    isDragging.value = false
  }, 50)
}

const handleClick = (e) => {
  if (hasMoved) {
    // Jika tombol baru saja di-drag, jangan buka WhatsApp
    e.preventDefault()
    e.stopPropagation()
    hasMoved = false
    return
  }
  // Jika murni diklik, buka tautan WhatsApp resmi
  window.open(waUrl, '_blank', 'noopener,noreferrer')
}

const handleResize = () => {
  if (position.value.x !== null && position.value.y !== null) {
    position.value = clampPosition(position.value.x, position.value.y)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <button
    ref="buttonRef"
    type="button"
    draggable="false"
    @dragstart.prevent
    @click="handleClick"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    class="fixed z-50 select-none touch-none group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-butterelle-primary text-butterelle-surface font-montserrat font-semibold text-xs sm:text-sm shadow-[0_8px_24px_rgba(132,60,36,0.35)] hover:bg-butterelle-primary/85 hover:shadow-[0_12px_28px_rgba(132,60,36,0.45)] transition-shadow duration-200"
    :class="[
      position.x === null ? 'bottom-6 right-6' : '',
      isDragging ? 'cursor-grabbing scale-105 shadow-2xl' : 'cursor-grab active:scale-95',
    ]"
    :style="
      position.x !== null && position.y !== null
        ? {
            left: `${position.x}px`,
            top: `${position.y}px`,
            bottom: 'auto',
            right: 'auto',
          }
        : {}
    "
    aria-label="Pesan WhatsApp Langsung"
  >
    <div class="relative flex items-center justify-center pointer-events-none">
      <Icon icon="bi:chat-left-text" class="w-4 h-4" />
      <span
        class="absolute -top-1 -right-1 w-2 h-2 bg-butterelle-gold rounded-full animate-ping"
      ></span>
      <span class="absolute -top-1 -right-1 w-2 h-2 bg-butterelle-gold rounded-full"></span>
    </div>
    <span class="whitespace-nowrap pointer-events-none">Pesan WA</span>
  </button>
</template>

<style scoped></style>
