<script>
	export let title;
	export let content;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="relative rounded-lg bg-white px-6 py-5 flex items-center space-x-3">
	<div class="flex-1 min-w-0">
		<span class="absolute inset-0" aria-hidden="true" />
		<p class="text-sm font-medium text-gray-900 text-center margin-bottom">{title}</p>
		<p class="text-sm text-gray-500 text-center">{content}</p>
	</div>
</div>

<style>
	.margin-bottom {
		margin-bottom: 1rem;
	}
</style>
