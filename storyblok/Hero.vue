<template>
	<section>
		<div class="md:container">
			<div>
				<div
					class="flex flex-col text-center lg:ml-24 lg:justify-evenly lg:flex-row lg:items-center lg:text-left"
				>
					<div class="max-w-lg md:mx-auto sm:max-w-md sm:mx-auto">
						<h2 class="text-6xl font-bold text-white pb-9">
							<span v-html="titleWithGradient"></span>
						</h2>

						<p class="font-light text-lg text-white pb-7 lg:max-w-md">
							{{ blok.paragraph }}
						</p>

						<div class="flex justify-left md:justify-center sm:justify-center">
							<NuxtLink
								to="/"
								class="flex justify-center h-14 w-36 max-w-sm rounded-lg bg-green-400 shadow-lg"
							>
								<button class="rounded-lg text-black">
									{{ blok.call_to_action }}
								</button>
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

<script setup>
const props = defineProps({ blok: Object });

const parseGradientWords = (gradientWords) => {
	const [start, end] = gradientWords.split("-").map(Number);
	return { start, end };
};

const applyGradientToWords = (title, { start, end }) => {
	const words = title.split(" ");
	return words
		.map((word, index) => {
			if (index >= start - 1 && index <= end - 1) {
				return `<span class="text-green-400">${word}</span>`;
			}
			return word;
		})
		.join(" ");
};

let gradientWords = parseGradientWords(props.blok.gradientWords || "1-1");
let titleWithGradient = applyGradientToWords(props.blok.title, gradientWords);

watch(
	() => props.blok.gradientWords,
	(newValue) => {
		gradientWords = parseGradientWords(newValue || "1-1");
		titleWithGradient = applyGradientToWords(props.blok.title, gradientWords);
	}
);

watch(
	() => props.blok.title,
	(newValue) => {
		titleWithGradient = applyGradientToWords(newValue, gradientWords);
	}
);
</script>
