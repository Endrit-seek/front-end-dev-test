<template>
	<footer class="h-auto lg:container md:container mt-52 md:mt-36 mb-24 mx-auto md:w-full">
		<div
			class="px-10 grid gap-4 grid-cols-5 grid-rows-1 md:grid-rows-1 md:grid-cols-1 md:w-full sm:flex sm:flex-col"
		>
			<div
				class="col-span-2 max-w-lg md:max-w-full md:text-center md:flex md:justify-center sm:text-center sm:justify-center md:flex-col"
			>
				<div class="flex items-center h-24 md:justify-center sm:justify-center">
					<NuxtImg
						src="svg/logo.svg"
						alt="Vue School Logo"
						width="64"
						height="64"
						class="mr-4"
					/>
					<div class="flex flex-col text-2xl md:text-start font-medium sm:text-start">
						<div class="-mb-1.5">Vue</div>
						<div>School.io</div>
					</div>
				</div>
				<div class="mt-6 md:max-w-xl md:mx-auto">
					Thanks to fine people like you, Vue School can proudly sponsor Evan and the
					future of Vue.js by being a Platinum Patreon
				</div>
				<div class="mt-10">
					<span class="text-gray-400 text-2xl">FOLLOW US IN SOCIAL MEDIA</span>
					<ul class="flex justify-start mt-8 md:flex md:justify-center md:align-center">
						<li class="mr-8 md:mx-4">
							<NuxtLink to="/">
								<NuxtImg
									src="/svg/logo/FacebookLogo.svg"
									alt="Vue School Logo"
									width="50"
									height="50"
								/>
							</NuxtLink>
						</li>
						<li class="mr-8 md:mx-4">
							<NuxtLink to="/">
								<NuxtImg
									src="/svg/logo/TwitterLogo.svg"
									alt="Vue School Logo"
									width="50"
									height="50"
								/>
							</NuxtLink>
						</li>
						<li class="mr-8 md:mx-4">
							<NuxtLink to="/">
								<NuxtImg
									src="/svg/logo/GitHubLogo.svg"
									alt="Vue School Logo"
									width="50"
									height="50"
								/>
							</NuxtLink>
						</li>
						<li class="mr-8 md:mx-4">
							<NuxtLink to="/">
								<NuxtImg
									src="/svg/logo/LinkedInLogo.svg"
									alt="Vue School Logo"
									width="50"
									height="50"
								/>
							</NuxtLink>
						</li>
						<li class="mr-8 md:mx-4">
							<NuxtLink to="/">
								<NuxtImg
									src="/svg/logo/YouTubeLogo.svg"
									alt="Vue School Logo"
									width="50"
									height="50"
								/>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>

			<div></div>

			<div class="col-span-2 lg:col-span-2 md:col-span-2 md:mt-8">
				<div
					class="hidden md:grid md:grid-cols-3 lg:hidden gap-6 sm:flex sm:flex-col sm:text-center"
				>
					<div class="md:col-start-1 md:col-end-2">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Products</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Courses</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Workshops</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Vue Masterclass</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Mastering Nuxt</NuxtLink></li>
						</ul>
					</div>

					<div class="md:col-start-2 md:col-end-3">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Corporate</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Corporate Training</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Developer Recruitment</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Course Development</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">On-site Workshops</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Consulting</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Affiliate Programs</NuxtLink></li>
						</ul>
					</div>

					<div class="md:col-start-3 md:col-end-4">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">
							Connect with Us
						</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">About Us</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Careers</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Contact Us</NuxtLink></li>
						</ul>
					</div>

					<div class="md:col-start-1 md:col-end-2">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Events</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Vue.js Nation</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Nuxt Nation</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Vue.js Forge</NuxtLink></li>
						</ul>
					</div>

					<div class="md:col-start-2 md:col-end-3">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Resources</h4>
						<ul class="mt-2">
							<li><NuxtLink to="/">Articles</NuxtLink></li>
						</ul>
					</div>

					<div class="md:col-start-3 md:col-end-4">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Pricing</h4>
						<ul class="mt-2">
							<li><NuxtLink to="/">Plans</NuxtLink></li>
						</ul>
					</div>
				</div>

				<div class="hidden lg:grid lg:grid-cols-2 gap-6">
					<div class="lg:col-start-1 lg:row-start-1">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Products</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Courses</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Workshops</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Vue Masterclass</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Mastering Nuxt</NuxtLink></li>
						</ul>
					</div>

					<div class="lg:col-start-2 lg:row-start-1">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Events</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Vue.js Nation</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Nuxt Nation</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Vue.js Forge</NuxtLink></li>
						</ul>
					</div>

					<div class="row-span-3">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Pricing</h4>
						<ul class="mb-8">
							<li><NuxtLink to="/">Plans</NuxtLink></li>
						</ul>
						<div>
							<h4 class="text-gray-400 text-lg font-semibold uppercase">
								Connect with Us
							</h4>
							<ul class="mt-2">
								<li class="mb-2"><NuxtLink to="/">About Us</NuxtLink></li>
								<li class="mb-2"><NuxtLink to="/">Careers</NuxtLink></li>
								<li class="mb-2"><NuxtLink to="/">Contact Us</NuxtLink></li>
							</ul>
						</div>
					</div>

					<div class="lg:col-start-2 lg:row-start-2">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Corporate</h4>
						<ul class="mt-2">
							<li class="mb-2"><NuxtLink to="/">Corporate Training</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Developer Recruitment</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Course Development</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">On-site Workshops</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Consulting</NuxtLink></li>
							<li class="mb-2"><NuxtLink to="/">Affiliate Programs</NuxtLink></li>
						</ul>
					</div>

					<div class="lg:col-start-2 lg:row-start-3">
						<h4 class="text-gray-400 text-lg font-semibold uppercase">Resources</h4>
						<ul class="mt-2">
							<li><NuxtLink to="/">Articles</NuxtLink></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
