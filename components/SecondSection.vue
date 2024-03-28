<template>
	<section
		class="py-24 -mt-[100px] bg-no-repeat bg-cover bg-[url('/svg/Background1.svg'),_url('/svg/Background2.svg')] md:bg-[size:contain,_contain]"
	>
		<div class="mx-auto pt-20 lg:container md:px-6 sm:px-3">
			<div
				class="flex p-14 border-2 rounded-2xl shadow-lg border-gray-600 bg-gray-800 bg-opacity-90 sm:p-4 sm:flex-col sm:items-center"
			>
				<div class="flex justify-center w-1/3 md:justify-start">
					<div class="w-40 h-44 flex justify-center md:items-start">
						<NuxtImg
							src="/svg/logo.svg"
							alt="Vue School Logo"
							class="sm:w-20"
							width="135"
							height="152"
						/>
					</div>
				</div>

				<div class="flex flex-col justify-around w-2/3 sm:text-center">
					<h3 class="text-3xl font-bold text-white md:mb-4 sm:mb-4">
						About Vue School corporate training
					</h3>

					<p class="text-lg text-white sm:mb-8">
						School is the #1 training resource for Vue.js and has provided the most
						comprehensive Vue.js video library in the world to over 140,000 developers.
						Private individuals and small to enterprise companies have used our services
						to develop their skills since 2016.
					</p>
				</div>
			</div>

			<div class="flex justify-between pb-10 pt-16 md:hidden sm:hidden">
				<NuxtImg
					v-for="key in 6"
					:key="key"
					src="svg/GoogleLogo.svg"
					alt="Google Logo"
					class="h-12 mx-4"
				/>
			</div>

			<div
				class="flex justify-around lg:pb-20 lg:pt-40 md:pt-32 mb-8 md:flex-col sm:flex-col sm:pt-24 sm:text-center"
			>
				<div
					class="flex items-center justify-center lg:w-1/3 lg:ml-4 lg:flex-col sm:w-1/1 sm:flex-col"
				>
					<div class="lg:ml-4 md:text-center md:max-w-md md:w-100">
						<h3
							class="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text inline-block md:mb-3 sm:mb-3"
						>
							YOUR #1 SOURCE OF VUE.JS COURSES
						</h3>

						<p class="text-5xl font-extrabold text-white md:mb-2">
							Full Stack
							<span
								class="bg-gradient-to-r from-cyan-400 to-cyan-400 text-transparent bg-clip-text"
							>
								Vue <br />
							</span>
							<span
								class="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
							>
								Training
							</span>
							Solutions
						</p>
					</div>
				</div>

				<div
					class="grid grid-cols-3 gap-x-4 gap-10 sm:gap-5 md:flex md:justify-center md:gap-0 sm:gap-x-2 mt-5"
				>
					<div
						v-for="(statistic, index) in statistics"
						:key="index"
						class="text-center md:w-44"
						:class="{ 'pr-4': index === 0 }"
					>
						<p
							class="text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-5"
						>
							{{ statistic.value }}
						</p>

						<div class="flex items-center justify-center text-white text-sm">
							<NuxtImg
								:src="`svg/icons/${statistic.icon}.svg`"
								:alt="statistic.alt"
								height="18"
								width="18"
								class="mr-3"
							/>
							{{ statistic.text }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const statistics = [
	{
		value: "763",
		text: "Video lessons",
		icon: "PlayIcon",
		alt: "Play Icon",
	},
	{
		value: "40",
		text: "Courses",
		icon: "BookIcon",
		alt: "Book Icon",
	},
	{
		value: "64",
		text: "15 hours",
		icon: "TimeIcon",
		alt: "Time Icon",
	},
];
</script>
