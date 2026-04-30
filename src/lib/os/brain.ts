const map = {
  god: "god",
  deity: "deity",
  world: "world",
  universe: "universe",
  music: "music",
  voice: "voice",
  code: "code",
  model: "model",
  game: "game",
  myth: "myth",
  product: "product",
  business: "business",
} as const;

type MapKey = keyof typeof map;

export const brain = {
  classify(input: string): string | null {
    const key = (Object.keys(map) as MapKey[]).find((k) =>
      input.toLowerCase().includes(k)
    );

    return key ? map[key] : null;
  },
};
