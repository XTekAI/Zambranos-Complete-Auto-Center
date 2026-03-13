/* ── Zambrano's Complete Auto Center — Centralized Constants ── */

export const BUSINESS = {
  name: "Zambrano's Complete Auto Center",
  phone: '(609) 396-8417',
  phoneTel: 'tel:6093968417',
  address: '1017 Hamilton Ave, Trenton, NJ 08629',
  rating: 4.4,
  reviewCount: 249,
  established: 1997,
  timezone: 'America/New_York',
} as const;

export const LINKS = {
  google:
    'https://www.google.com/maps/place/Zambranos+Complete+Auto+Center/@40.2186485,-74.7382175,17z/data=!3m1!4b1!4m6!3m5!1s0x89c159aa244419cb:0xeda66e2d8ae67a21!8m2!3d40.2186444!4d-74.7356426!16s%2Fg%2F1tdj5380?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D',
  facebook: 'https://www.facebook.com/zambranosauto',
  instagram: 'https://www.instagram.com/zambranos_auto/',
  twitter: 'https://x.com/zambranos_auto',
  financingCFNA:
    'https://www.cfna.com/bridgestonefirestone-credit-card?locationId=904813&referrer=www.zambranosauto.com',
  financingAFF: 'https://www.zambranosauto.com/About/Financing',
  appointment: '/schedule',
} as const;

export const HOURS = [
  { day: 'Monday – Friday', time: '8:30 AM – 6:00 PM' },
  { day: 'Saturday', time: '8:30 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const;
