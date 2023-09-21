import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
    }),

    // prerender 설정에서 'default' 항목을 제거
    prerender: {
      // 여기서 필요한 다른 옵션들을 추가할 수 있습니다.
    },
  },
};
