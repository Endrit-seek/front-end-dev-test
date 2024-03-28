// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		[
			"@storyblok/nuxt",
			{
				accessToken: "6QMkyQyIkUK0AeBWrkZQcgtt",
				region: "eu",
			},
		],
	],
	googleFonts: {
		families: {
			Rubik: true,
			Inter: true,
		},
		download: true,
	},
});
