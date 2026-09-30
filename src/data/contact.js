// Data Kontak & Alamat Resmi Butterelle Bakehouse (Single Source of Truth)
export const contactInfo = {
  name: 'Butterelle Bakehouse',
  phone: '6282136253288',
  phoneDisplay: '+62 821-3625-3288',
  address:
    '677P+5CH, Puluhan, Argomulyo, Kec. Sedayu, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55752',
  addressShort: 'Puluhan, Argomulyo, Sedayu, Bantul, D.I. Yogyakarta 55752',
  district: 'Sedayu, Bantul',
  city: 'Yogyakarta',
  mapsUrl: 'https://maps.app.goo.gl/o5KXFR7iTGUk8mrG6',
  embedMapUrl:
    'https://maps.google.com/maps?q=677P%2B5CH,+Puluhan,+Argomulyo,+Kec.+Sedayu,+Kabupaten+Bantul,+Daerah+Istimewa+Yogyakarta+55752&t=&z=15&ie=UTF8&iwloc=&output=embed',
  instagram: '@butterelle.bakes',
  instagramUrl: 'https://instagram.com/butterelle.bakes',
  email: 'hello@butterelle.com',
  operatingHours: {
    weekdays: 'Senin - Jumat: 08.00 - 21.00',
    weekends: 'Sabtu - Minggu: 08.00 - 18.00',
    holiday: 'Hari Raya: Istirahat Dapur (Tutup)',
  },
}

// Helper untuk membuat URL WhatsApp otomatis
export const getWhatsAppUrl = (message = '') => {
  if (!message) {
    return `https://wa.me/${contactInfo.phone}`
  }
  return `https://wa.me/${contactInfo.phone}?text=${encodeURIComponent(message)}`
}
