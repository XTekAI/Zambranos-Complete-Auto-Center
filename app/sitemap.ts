import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.zambranosauto.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // ── High-value service pages ─────────────────────────────────
    {
      url: `${BASE_URL}/tires`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Supporting pages ─────────────────────────────────────────
    {
      url: `${BASE_URL}/financing`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/schedule`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // ── Legal ────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
