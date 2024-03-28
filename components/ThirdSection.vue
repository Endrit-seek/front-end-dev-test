<template>
	<section
		class="h-auto w-full bg-no-repeat bg-[url('/svg/Background3.svg'),_url('/svg/Background4.svg')] lg:bg-[position:50%_20px,_bottom_0px_center] md:bg-[position:top_12%_center,_top_23%_center] bg-[size:cover,_100%] md:bg-[size:contain,_contain]"
	>
		<div class="flex justify-center text-center pb-10">
			<div class="max-w-xl">
				<p class="text-5xl font-extrabold text-white leading-snug">
					Discounted
					<span
						class="bg-gradient-to-r from-cyan-400 via-60% to-cyan-400 to-80% text-transparent bg-clip-text"
					>
						Corporate
					</span>
					<span
						class="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
					>
						Training
					</span>
					Bundles
				</p>
			</div>
		</div>

		<div
			class="lg:container md:container mx-auto flex md:flex-col sm:flex-col sm:mx-6 md:items-center justify-center mt-20 pb-36 md:pb-14 md:px-20"
		>
			<div
				v-for="(bundle, index) in bundles"
				:key="index"
				class="h-full w-full md:mb-8 lg:max-w-md lg:w-96 md:max-w-4xl rounded-2xl opacity-90 overflow-hidden shadow-lg border-2 border-gray-600 bg-gray-800 text-white lg:mx-4 md:mx-4"
				:class="{ 'sm:my-4': bundle.extra }"
			>
				<div class="px-6 pt-8 pb-5">
					<div class="flex text-2xl font-bold mb-7">
						<NuxtImg
							:src="`svg/icons/${bundle.icon}.svg`"
							:alt="bundle.alt"
							height="24"
							width="24"
							class="mr-5"
						/>
						{{ bundle.name }}
					</div>

					<p class="text-green-400 mb-4">Includes 1 year access to:</p>

					<ul class="text-sm mb-6">
						<li
							v-for="(content, index) in bundle.content"
							:key="index"
							class="flex items-center mb-3 sm:flex-row"
							:class="{
								'justify-between': content.included,
								'opacity-30': !content.included,
							}"
						>
							<div
								class="flex items-center sm:flex-row"
								:class="{ 'font-bold': content.bold }"
							>
								<NuxtImg
									:src="`svg/icons/${
										content.included ? 'CheckMarkIcon' : 'ErrorIcon'
									}.svg`"
									alt="Check Mark Icon"
									height="18"
									width="18"
									class="mr-3"
								/>
								{{ content.name }}
							</div>
							<div v-if="content.included" class="flex justify-end items-end">
								<NuxtImg
									src="svg/icons/InfoIcon.svg"
									alt="Info Icon"
									height="18"
									width="18"
									class="flex justify-end"
								/>
							</div>
						</li>
					</ul>

					<div
						v-if="bundle.extra"
						class="flex bg-green-400 bg-opacity-40 overflow-hidden text-white rounded-lg mt-8 py-4 px-6"
					>
						<div class="flex items-center justify-center">
							<div class="flex items-center justify-center">
								<NuxtImg
									src="/svg/icons/VueIllustration.svg"
									alt="Vue Illustration Icon"
									width="48"
									height="48"
								/>
							</div>
						</div>

						<div class="flex flex-col justify-around ml-4">
							<h3 class="text-gray-400">Enough time to watch:</h3>

							<p class="text-xl font-bold text-white">The Vue 3 Masterclass</p>
						</div>
					</div>

					<div class="bg-gray-900 rounded-lg mt-8 py-4 px-6">
						<PriceBundle :initial-value="12" />
					</div>

					<div class="flex justify-center mt-8">
						<NuxtLink
							to="/"
							class="flex h-14 w-full lg:max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
						>
							<button
								class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-black"
							>
								Start Learning
							</button>
						</NuxtLink>
					</div>

					<div class="flex justify-center mt-3">
						<NuxtLink to="/" class="flex h-14 w-full max-w-sm p-0.5">
							<button
								class="flex-1 font-semibold text-l px-6 py-3 rounded-lg text-green-400"
							>
								Refer your manager
							</button>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const bundles = [
	{
		icon: "LeafIcon",
		alt: "Leaf Icon",
		name: "Basic",
		content: [
			{
				name: "All Video Courses",
				included: true,
				bold: false,
			},
			{
				name: "Vue.Js Master class",
				included: true,
				bold: false,
			},
			{
				name: "Developer assist Slack channel",
				included: true,
				bold: false,
			},
			{
				name: "Live Weekly QnA",
				included: false,
				bold: false,
			},
			{
				name: "1 x ws ticket per license",
				included: false,
				bold: false,
			},
		],
		extra: false,
	},
	{
		icon: "RocketLaunchIcon",
		alt: "Rocket Launch Icon",
		name: "Professional",
		content: [
			{
				name: "All Video Courses",
				included: true,
				bold: false,
			},
			{
				name: "Vue.Js Master class",
				included: true,
				bold: false,
			},
			{
				name: "Developer assist Slack channel",
				included: true,
				bold: false,
			},
			{
				name: "Live Weekly QnA",
				included: true,
				bold: true,
			},
			{
				name: "1 x ws ticket per license",
				included: true,
				bold: true,
			},
		],
		extra: true,
	},
	{
		icon: "BoltIcon",
		alt: "Bolt Icon",
		name: "Basic",
		content: [
			{
				name: "All Video Courses",
				included: true,
				bold: false,
			},
			{
				name: "Vue.Js Master class",
				included: true,
				bold: false,
			},
			{
				name: "Developer assist Slack channel",
				included: true,
				bold: false,
			},
			{
				name: "Live Weekly QnA",
				included: true,
				bold: false,
			},
			{
				name: "4 x ws ticket per license",
				included: true,
				bold: true,
			},
		],
		extra: false,
	},
];
</script>
