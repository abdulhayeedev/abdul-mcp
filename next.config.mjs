const cache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];

export default {
  async headers() {
    return [
      { source: "/hero.mp4", headers: cache },
      { source: "/hero.webm", headers: cache },
      { source: "/hero-poster.jpg", headers: cache },
    ];
  },
};
