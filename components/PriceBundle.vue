<template>
	<div class="flex items-center mb-4">
		<span class="text-3xl font-bold text-white mr-2">$50</span>
		<span class="font-light text-gray-400">/ seat / month</span>
	</div>

	<p class="text-white mb-4">How many licenses do you need?</p>

	<div class="flex items-center justify-between">
		<input
			v-model="value"
			type="range"
			min="5"
			max="20"
			class="accent-green-400 h-1 w-full mb-2"
			@input="updateValue"
		/>
	</div>

	<div class="flex justify-between mb-4">
		<span class="text-white">5</span>
		<span class="text-white">20</span>
	</div>

	<div class="flex justify-between md:justify-start items-center text-white">
		<p
			class="flex justify-between items-center border bg-gray-950 border-gray-950 rounded-lg px-3 md:mr-4 py-1"
		>
			<NuxtImg
				src="svg/icons/SeatIcon.svg"
				alt="Seat Icon"
				height="18"
				width="18"
				class="mr-2 inline-block"
			/>
			<span id="seatCount" class="text-2xl font-bold mr-2">
				{{ value }}
			</span>
			seats
		</p>
		<p class="text-green-400">26% discount</p>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	initialValue: {
		type: Number,
		required: true,
		default: 12,
	},
});
const value = ref(props.initialValue);

const updateValue = (event: any) => {
	value.value = parseInt(event.target.value);
};
</script>
