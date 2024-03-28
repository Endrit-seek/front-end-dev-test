<template>
	<nav class="flex justify-between items-center h-24 py-2 px-10 sm:px-5">
		<div class="flex justify-center items-center">
			<button class="lg:hidden md:mr-3 sm:mr-3" @click="toggleSidebar">
				<NuxtImg
					src="svg/icons/BurgerMenuIcon.svg"
					alt="Vue School Logo"
					width="32"
					height="32"
					class="mr-4"
				/>
			</button>
			<NuxtLink to="/" class="flex items-center">
				<NuxtImg
					src="svg/logo.svg"
					alt="Vue School Logo"
					width="50"
					height="50"
					class="mr-4"
				/>

				<div class="text-xl font-medium">
					<div class="-mb-1.5">Vue</div>
					<div>School.io</div>
				</div>
			</NuxtLink>
		</div>

		<div
			class="sidebar lg:hidden backdrop-blur-sm bg-black/50 text-white fixed top-0 left-0 h-full w-[30%] shadow-lg z-50 transition-transform duration-300 transform"
			:class="{ '-translate-x-full': !sidebarOpen }"
		>
			<div class="flex flex-col sidebar_links">
				<NuxtLink
					to="/courses"
					class="text-base hover:text-gray-300 flex items-center mr-3"
				>
					<span>Courses</span>
					<NuxtImg
						height="10"
						width="10"
						src="svg/icons/ArrowDown.svg"
						class="ml-2 fill-current text-gray-300"
					/>
				</NuxtLink>

				<NuxtLink to="/plans" class="text-base hover:text-gray-300 flex items-center mr-3">
					Plans
				</NuxtLink>

				<NuxtLink
					to="/business-service"
					class="text-base hover:text-gray-300 flex items-center mr-3"
				>
					<span>Business Service</span>
					<NuxtImg
						height="10"
						width="10"
						src="svg/icons/ArrowDown.svg"
						class="ml-2 fill-current text-gray-300"
					/>
				</NuxtLink>

				<NuxtLink
					to="/learning-paths"
					class="text-base hover:text-gray-300 flex items-center mr-3"
				>
					Learning Paths
				</NuxtLink>

				<NuxtLink to="/hiring" class="text-base hover:text-gray-300 flex items-center mr-3">
					Hiring
				</NuxtLink>

				<NuxtLink
					to="/articles"
					class="text-base hover:text-gray-300 flex items-center mr-3"
				>
					Articles
				</NuxtLink>

				<NuxtLink to="/events" class="text-base hover:text-gray-300 flex items-center mr-3">
					<span>Events</span>
					<NuxtImg
						height="10"
						width="10"
						src="svg/icons/ArrowDown.svg"
						class="ml-2 fill-current text-gray-300"
					/>
				</NuxtLink>

				<NuxtLink
					to="/get-certified"
					class="text-base hover:text-gray-300 flex items-center"
				>
					Get Certified
				</NuxtLink>
			</div>
			<button
				class="fixed top-[50%] right-[-25px] backdrop-blur-sm bg-black/90 rounded-2xl h-12 w-12 text-white flex justify-center items-center"
				:class="{ hidden: !sidebarOpen }"
				@click="toggleSidebar"
			>
				<NuxtImg src="svg/icons/CloseIcon.svg" alt="Close Icon" width="32" height="32" />
			</button>
		</div>

		<div class="flex nav-links lg:flex md:hidden sm:hidden">
			<NuxtLink to="/courses" class="text-base hover:text-gray-300 flex items-center mr-3">
				<span>Courses</span>
				<NuxtImg
					height="10"
					width="10"
					src="svg/icons/ArrowDown.svg"
					class="ml-2 fill-current text-gray-300"
				/>
			</NuxtLink>

			<NuxtLink to="/plans" class="text-base hover:text-gray-300 flex items-center mr-3">
				Plans
			</NuxtLink>

			<NuxtLink
				to="/business-service"
				class="text-base hover:text-gray-300 flex items-center mr-3"
			>
				<span>Business Service</span>
				<NuxtImg
					height="10"
					width="10"
					src="svg/icons/ArrowDown.svg"
					class="ml-2 fill-current text-gray-300"
				/>
			</NuxtLink>

			<NuxtLink
				to="/learning-paths"
				class="text-base hover:text-gray-300 flex items-center mr-3"
			>
				Learning Paths
			</NuxtLink>

			<NuxtLink to="/hiring" class="text-base hover:text-gray-300 flex items-center mr-3">
				Hiring
			</NuxtLink>

			<NuxtLink to="/articles" class="text-base hover:text-gray-300 flex items-center mr-3">
				Articles
			</NuxtLink>

			<NuxtLink to="/events" class="text-base hover:text-gray-300 flex items-center mr-3">
				<span>Events</span>
				<NuxtImg
					height="10"
					width="10"
					src="svg/icons/ArrowDown.svg"
					class="ml-2 fill-current text-gray-300"
				/>
			</NuxtLink>

			<NuxtLink to="/get-certified" class="text-base hover:text-gray-300 flex items-center">
				Get Certified
			</NuxtLink>
		</div>

		<div class="flex align-self-end items-center lg:flex lg:visible sm:hidden sm:invisible">
			<NuxtLink to="/login" class="text-base text-white py-2 px-4 mr-4"> Log in </NuxtLink>

			<NuxtLink
				to="/sign-up"
				class="flex max-w-sm rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 p-0.5 shadow-lg"
			>
				<button class="flex-1 text-l bg-gray-800 px-6 py-3 rounded-lg text-green-400">
					Sign up
				</button>
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup>
const sidebarOpen = ref(false);

const toggleSidebar = () => {
	sidebarOpen.value = !sidebarOpen.value;
};
</script>
<style scoped>
.sidebar_links a {
	margin: 15px 30px 0 0;
	border-bottom: 1px solid rgba(11, 216, 143, 0.4);
	padding: 10px 25px;
}
.sidebar_links a:hover {
	border-bottom: 1px solid rgba(11, 216, 143, 1);
}
</style>
