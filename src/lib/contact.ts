// Contact info for Andressa Bederode Advocacia.
// Update here to change the WhatsApp number across the whole site.

export const WHATSAPP_RAW = "5553981185461"; // country (55) + DDD (53) + mobile
export const WHATSAPP_DISPLAY = "(53) 98118-5461";

export const ADDRESS_LINES = [
  "Av. Duque de Caxias, 1023",
  "Fragata, Pelotas - RS",
  "96030-003",
];
export const ADDRESS_SHORT = "Av. Duque de Caxias, 1023 — Fragata, Pelotas/RS";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Av. Duque de Caxias, 1023, Fragata, Pelotas - RS, 96030-003");

const DEFAULT_MESSAGE =
  "Olá, Dra. Andressa! Gostaria de tirar uma dúvida jurídica.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(
  DEFAULT_MESSAGE,
)}`;

export function whatsappUrl(message?: string) {
  const text = message ?? DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(text)}`;
}
