export const OSBrain = {
  suggestRelatedRealms(input: string) {
    const map = {
      god: "pantheon",
      deity: "pantheon",
      world: "origin",
      universe: "universe",
      music: "music",
      voice: "radio",
      code: "code",
      model: "three",
      game: "game",
      myth: "mythic",
      product: "marketplace",
      business: "business",
    };

    const key = Object.keys(map).find((k) => input.toLowerCase().includes(k));
    return key ? map[key] : null;
  },
};
