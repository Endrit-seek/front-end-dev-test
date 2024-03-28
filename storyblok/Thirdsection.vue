<template>
	<section class="h-auto">
		<div
			class="lg:px-44 sm:px-10 md:container flex justify-between md:justify-center lg:mx-auto md:mx-auto mb-16"
		>
			<p class="text-5xl pt-14 font-bold text-white sm:text-center">Available Workshops</p>
			<p class="pt-14 font-bold text-white md:hidden sm:hidden">
				<NuxtLink
					to="/"
					class="flex h-14 w-full max-w-sm rounded-lg bg-green-400 p-0.5 shadow-lg"
				>
					<button class="px-6 py-3 rounded-lg text-black sm:mx-auto sm:text-center">
						See all the workshops
					</button>
				</NuxtLink>
			</p>
		</div>

		<div
			ref="scrollRef"
			class="parent touch-none flex snap-x snap-mandatory flex-nowrap overflow-x-auto no-scrollbar"
		>
			<div
				v-for="(workshop, index) in workshops"
				:key="index"
				class="pointer-events-none select-none flex-none max-w-2xl md:max-w-lg sm:max-w-sm rounded-xl shadow-lg overflow-hidden snap-center"
				:class="{ 'ml-44 md:ml-16': index === 0, 'ml-8': index > 0 }"
			>
				<div
					class="bg-opacity-10 bg-gradient-to-r from-violet-900/80 to-pink-700/75 px-8 py-4"
				>
					<div class="header-border"></div>
					<p class="flex items-center text-white">
						<NuxtImg
							src="svg/icons/CalendarIcon.svg"
							alt="Calendar Icon"
							height="18"
							width="18"
							class="mr-2"
						/>
						December 14th - 11:00 AM (GMT-3)
					</p>
				</div>
				<div class="card-content bg-opacity-30 bg-gray-700 p-8">
					<div class="flex tags mb-4">
						<span class="flex items-center font-light text-gray-400 py-1 rounded-full">
							<NuxtImg
								src="svg/icons/PlayIcon.svg"
								alt="Play Icon"
								height="18"
								width="18"
								class="mr-2 opacity-50"
							/>
							Live Training
						</span>
						<span
							class="flex items-center font-light text-gray-400 px-3 py-1 rounded-full"
						>
							<NuxtImg
								src="svg/icons/TimeIcon.svg"
								alt="Time Icon"
								height="18"
								width="18"
								class="mr-2 opacity-50"
							/>
							15 hours
						</span>
					</div>
					<h2 class="title text-2xl text-white font-bold mb-2">{{ workshop.title }}</h2>
					<p class="font-light text-gray-400 mb-4">
						{{ workshop.subtitle }}
					</p>

					<div class="font-light text-gray-400 flex items-center">
						<NuxtImg
							src="img/Avatar.png"
							alt="User Avatar"
							height="24"
							width="24"
							class="mr-2 rounded-full"
						/>
						Steve Popoola
					</div>
				</div>
			</div>
		</div>

		<div class="pt-14 font-bold text-white md:flex md:justify-center md:items-center lg:hidden">
			<NuxtLink
				to="/"
				class="flex justify-center h-14 w-full max-w-56 rounded-lg bg-green-400 p-0.5 shadow-lg sm:mx-auto"
			>
				<button class="px-6 rounded-lg text-black">See all the workshops</button>
			</NuxtLink>
		</div>
	</section>
</template>

<script lang="ts" setup>
const props = defineProps({ blok: Object });
const scrollRef = useSideScroll();

const workshops = [
	{
		title: "Live Training",
		subtitle:
			"A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
	},
	{
		title: "Vue 3 and Composition API",
		subtitle:
			"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
	},
	{
		title: "Vue 3 and Composition API",
		subtitle:
			"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
	},
];
</script>
