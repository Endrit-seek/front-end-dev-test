// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			Rubik: true,
			Inter: true,
		},
		download: true,
	},
});
