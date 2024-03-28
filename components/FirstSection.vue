<template>
	<section>
		<div class="md:container">
			<div>
				<div
					class="flex flex-col text-center lg:flex-row lg:justify-around lg:items-center lg:text-left"
				>
					<div class="max-w-lg md:mx-auto sm:max-w-md sm:mx-auto">
						<h2 class="text-6xl font-bold text-white pb-9">
							Complete
							<span class="text-green-400">Vue.js training</span> solution for
							companies
						</h2>

						<p class="font-light text-lg text-white pb-7 lg:max-w-md">
							Training solutions designed for companies, agencies and organisations
							with developers using or who are considering using the Vue.js framework
						</p>

						<div class="flex justify-left md:justify-center sm:justify-center">
							<NuxtLink
								to="/"
								class="flex justify-center h-14 w-36 max-w-sm rounded-lg bg-green-400 shadow-lg"
							>
								<button class="rounded-lg text-black">Talk to sales</button>
							</NuxtLink>
						</div>
					</div>

					<div class="md:flex md:justify-center mt-5 p-7">
						<NuxtImg
							src="/svg/Illustration1.svg"
							alt="Illustration"
							width="550"
							height="500"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
