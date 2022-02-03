<script>
	export let title;
	export let content;
</script>

<!-- <div class="grid grid-rows-1">
	<div class="grid-cols-3">
		<slot />
	</div>
	<div class="grid-cols-9">
		<dt class="text-lg leading-6 font-medium text-gray-700 mb-2">
			{title}
		</dt>
		<dd class="text-base text-gray-500 overflow-hidden max-h-32 ">
			{content}
		</dd>
	</div>
</div> -->

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="relative rounded-lg bg-white px-6 py-5 flex items-center space-x-3">
	<div class="flex">
		<slot />
	</div>
	<div class="flex-1 min-w-0">
		<span class="absolute inset-0" aria-hidden="true" />
		<p class="text-sm font-medium text-gray-900 margin-bottom">{title}</p>
		<p class="text-sm text-gray-500">{content}</p>
	</div>
</div>

<style>
	.margin-bottom {
		margin-bottom: 1rem;
	}
</style>
