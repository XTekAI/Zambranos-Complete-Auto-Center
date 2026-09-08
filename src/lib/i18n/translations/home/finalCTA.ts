/* ── FinalCTA Translations (EN / ES) ── */

const en = {
  heading: 'Ready to Get Back on the Road?',
  description: (businessName: string) =>
    `Trust ${businessName} for expert suspension, brake, and tire services. Fast turnaround, honest pricing, guaranteed results.`,
  scheduleService: 'Schedule Service',
  getDirections: 'Get Directions',
};

const es: typeof en = {
  heading: '¿Listo para Volver al Camino?',
  description: (businessName: string) =>
    `Confía en ${businessName} para servicios expertos de suspensión, frenos y llantas. Entrega rápida, precios honestos, resultados garantizados.`,
  scheduleService: 'Agendar Servicio',
  getDirections: 'Cómo Llegar',
};

export const finalCTATranslations = { en, es };
