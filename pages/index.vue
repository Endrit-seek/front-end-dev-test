<template>
	<div class="pt-10">
		<StoryblokComponent v-if="story" :blok="story.content" />
	</div>
</template>

<script lang="ts" setup>
const story = await useStoryblok("home", { version: "draft" });
</script>
