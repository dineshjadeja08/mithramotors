import siteConfig from '@/config/siteConfig';

/**
 * Build an official WhatsApp URL with prefilled message
 * Destination: https://wa.me/919626559167
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Confirmed Google Maps link
 * https://maps.app.goo.gl/u4iZmHZ9RKNheBvr9
 */
export function mapsUrl(branchKey?: string): string {
  return siteConfig.googleMapsUrl;
}

/**
 * Build primary or secondary tel: link
 */
export function telUrl(phone?: string): string {
  const p = phone ?? siteConfig.primaryPhone;
  const digits = p.replace(/\D/g, '');
  return `tel:+${digits}`;
}

/**
 * Format phone for display (e.g. 96265 59167)
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    const raw = digits.slice(2);
    return `${raw.slice(0, 5)} ${raw.slice(5)}`;
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

/**
 * Build enquiry WhatsApp prefilled message
 */
export function buildEnquiryWhatsApp(data: {
  name: string;
  mobile: string;
  type: string;
  message?: string;
  model?: string;
}): string {
  const lines = [
    `Hello Mithra Motors, I would like to make an enquiry.`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${data.mobile}`,
    `Enquiry Type: ${data.type}`,
    data.model ? `Model / Vehicle: ${data.model}` : '',
    data.message ? `Details: ${data.message}` : '',
    ``,
    `Showroom: Karapattu, Krishnagiri`,
  ].filter(Boolean);

  return whatsappUrl(lines.join('\n'));
}
