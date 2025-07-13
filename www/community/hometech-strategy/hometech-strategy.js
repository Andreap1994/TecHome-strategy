class HomeTechStrategy {
  constructor(config) {
    this._config = config;
  }

  async generate(config) {
    const entities = Object.values(config.hass.states);
    const lights = entities.filter(e => e.entity_id.startsWith("light."));
    const covers = entities.filter(e => e.entity_id.startsWith("cover."));
    const climates = entities.filter(e => e.entity_id.startsWith("climate."));

    return {
      views: [
        {
          title: "Luci",
          path: "luci",
          type: "custom:vertical-layout",
          cards: lights.map(entity => ({
            type: "custom:mushroom-light-card",
            entity: entity.entity_id
          }))
        },
        {
          title: "Tapparelle",
          path: "tapparelle",
          type: "custom:vertical-layout",
          cards: covers.map(entity => ({
            type: "custom:mushroom-cover-card",
            entity: entity.entity_id
          }))
        },
        {
          title: "Clima",
          path: "clima",
          type: "custom:vertical-layout",
          cards: climates.map(entity => ({
            type: "custom:mushroom-climate-card",
            entity: entity.entity_id
          }))
        }
      ]
    };
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "hometech-strategy",
  name: "HomeTech Strategy",
  description: "Dashboard generativa dinamica con Mushroom Cards",
  preview: false,
  strategy: HomeTechStrategy,
});

