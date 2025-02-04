export const config = {
  pokemonTcg: {
    baseUrl: process.env.NEXT_PUBLIC_POKEMON_TCG_API_URL,
    apiKey: process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY,
  },
  cardTrack: {
    baseUrl: process.env.NEXT_PUBLIC_CARD_TRACK_API_URL,
  },
} as const;
