<script>
	import { page } from '$app/stores';

	const classCurrent = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';
	const classNotCurrent =
		'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

	const classCurrentMobile =
		'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium';
	const classNotCurrentMobile =
		'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium';

	let expanded = false;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-sahha-900">
	<div class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-20">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded={expanded}
					on:click={() => (expanded = !expanded)}
				>
					<span class="sr-only">Open main menu</span>

					<svg
						class={expanded ? 'h-6 w-6 hidden' : 'h-6 w-6 block'}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
						Icon when menu is open.
			
						Heroicon name: outline/x
			
						Menu open: "block", Menu closed: "hidden"
					-->
					<svg
						class={expanded ? 'h-6 w-6 block' : 'h-6 w-6 hidden'}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a
					href="/"
					rel="external">
					<img class="h-12 w-auto sm:h-10" src="../svgs/logo-dark.svg" alt="" />
					</a>
				</div>
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a
							href="/product"
							class={$page.url.pathname == '/product' ? classCurrent : classNotCurrent}
							aria-current={$page.url.pathname == '/product' ? 'page' : undefined}>Product</a
						> 
						<a
							href="/privacy"
							class={$page.url.pathname == '/privacy' ? classCurrent : classNotCurrent}
							aria-current={$page.url.pathname == '/privacy' ? 'page' : undefined}>Privacy</a
						>
						 <a
							href="/company"
							class={$page.url.pathname == '/company' ? classCurrent : classNotCurrent}
							aria-current={$page.url.pathname == '/company' ? 'page' : undefined}>Company</a
						>
							<!--
						<a
							href="/team"
							class={$page.url.pathname == '/team' ? classCurrent : classNotCurrent}
							aria-current={$page.url.pathname == '/team' ? 'page' : undefined}>Team</a
						> -->
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div id="mobile-menu" class={expanded ? 'block sm:hidden' : 'hidden sm:hidden'}>
		<div class="px-2 pt-2 pb-3 space-y-1">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/"
				class={$page.url.pathname == '/' ? classCurrentMobile : classNotCurrentMobile}
				aria-current={$page.url.pathname == '/' ? 'page' : undefined}
				rel="external">Home</a
			>

			<a
				href="/product"
				class={$page.url.pathname == '/product' ? classCurrentMobile : classNotCurrentMobile}
				aria-current={$page.url.pathname == '/product' ? 'page' : undefined}>Product</a
			> 
			<a
				href="/privacy"
				class={$page.url.pathname == '/privacy' ? classCurrentMobile : classNotCurrentMobile}
				aria-current={$page.url.pathname == '/privacy' ? 'page' : undefined}>Privacy</a
			>
			<a
				href="/company"
				class={$page.url.pathname == '/company' ? classCurrentMobile : classNotCurrentMobile}
				aria-current={$page.url.pathname == '/company' ? 'page' : undefined}>Company</a
			>
		</div>
	</div>
</nav>
