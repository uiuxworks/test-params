<script>
	import CardWithImage from '../components/CardWithImage.svelte';
	import Card from '../components/Card.svelte';
	import { fade } from 'svelte/transition';
	import SvgMoon from '../components/SvgMoon.svelte';
	import Prism from "../components/PrismJS.svelte";
	// import Prism from 'svelte-prism'
	//Clicked states
	const NOT_CLICKED = 0;
	const CLICKED = 1;
	const LOADING = 2;

	let tryClicked = NOT_CLICKED;
	const trySnippetSrc = '/static/svgs/try-snippet.svg';

	let code_sample = `// analyse for mental health indicators
analyseBehaviors = async () => {
  let response = await fetch('https://api.sahha.ai/v1/analyse/ID', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  analysis = await response.json();
}`;

let code_sample2 = `// Api Output
{
	profileID: "fba8d5d6-69ce-4035-b6d6-29598f24fa41",
	createdAt: '2021-10-07T00:00:18.935Z', 
	range: 7, 
	prognosis: {
		condition: 'depression',
		auc: 0.81,
		severity: 21
	},
	behaviours: [
		{
			type: 'sleep',
			score: 0.92 
		},
		{
			type: 'entropy', 
			score: 0.21 
		},
		{
			type: 'home_stay',
			score: 0.76
		},
		{
			type: 'phone_usage',
			score: 0.35
		}
	]
}`;

	const exampleQuery = `// analyse for mental health indicators
analyseBehaviors = async () => {
  let response = await fetch('https://api.sahha.ai/v1/analyse/ID', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  analysis = await response.json();
}`;

	function btnTryClicked() {
		if (tryClicked == NOT_CLICKED) {
			showResponse();
		} else if (tryClicked == CLICKED) {
			showRequest();
		}
	}

	function showRequest() {
		tryClicked = NOT_CLICKED;
	}

	function showResponse() {
		tryClicked = LOADING;
		setTimeout(() => {
			tryClicked = CLICKED;
		}, 2000);
	}

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

<div class="bg-sahha-900">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-16">
		<!-- heading -->
		<div class="lg:pb-16 text-center">
			<h1
				class="text-2xl font-bold text-white tracking-tight sm:text-4xl text-center max-w-2xl mx-auto"
			>
            Our Product
			</h1>
			<p class="mt-2 text-base text-[#756B7D] py-4 max-w-2xl mx-auto text-center md:block hidden">
				Try how the API works.
			</p>
			<button
			type="button"
			class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#333242] hover:bg-gray-700 sm:w-auto"
			on:click={btnTryClicked}
		>
			Try it out
		</button>
		</div>

		<!-- <div class="flex justify-center pb-32 ">
				<Prism language="javascript" code="{code_sample}" header="Sameple javasscript"/>
		</div> -->
		<div class="pb-16 flex justify-center">
		{#if tryClicked == CLICKED}
		{#await preload(trySnippetSrc) then _}
			
				<Prism language="json" code="{code_sample2}" header="Sameple Json"/>
			

			<!-- <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mx-20 2xl:mx-80 my-8">
				<CardWithImage
					title="Simplified assessments"
					content="Now you can stop asking user's how they are, we can help you assess how they are."
				>
					<SvgMoon />
				</CardWithImage>
				<CardWithImage
					title="Simplified assessments"
					content="Now you can stop asking user's how they are, we can help you assess how they are."
				>
					<SvgMoon />
				</CardWithImage>
				<CardWithImage
					title="Simplified assessments"
					content="Now you can stop asking user's how they are, we can help you assess how they are."
				>
					<SvgMoon />
				</CardWithImage>
			</div> -->
		{/await}
	{:else if tryClicked == LOADING}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 250 }} class="lds-ripple">
			<div />
			<div />
		</div>
	{:else}
		<div out:fade={{ duration: 250 }} in:fade={{ delay: 250, duration: 250 }}>
			<Prism language="javascript" code="{code_sample}" header="Sameple javasscript"/>
		</div>
	{/if}

    </div>
</div>

<div class="max-w-5xl mx-auto md:py-32 py-4">
	<div class="md:pb-24 pb-6 md:pt-0 pt-16">
		<h1 class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl">
			Take Action
		</h1>
	</div>
	

	<div class="md:space-y-32 space-y-2">

		<!-- Dashboards  -->
		<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
			<div class=" -mx-4 relative lg:mt-0 col-span-1">
				<div class="max-w-lg mx-auto flex justify-center">
				  <img src="../svgs/product/dashboards.svg" alt="">
				</div>
			  </div>
			<div class="">
			<dl class="mt-4 space-y-10">
			  <div class="max-w-md mx-auto ">
				  <div class="flex items-center mb-6">					
					  <div class="text-2xl font-bold text-white tracking-tight sm:text-3xl max-w-sm">Dashboards</div>
				  </div>

					<ul role="list" class="space-y-6 text-gray-500 md:text-base text-lg">
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
							</div>
						  <p class="ml-4">
							Cohort based analytics
						  </p>
						</li>
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
							</div>
							<p class="ml-4">
							What behaviors are affecting your people most?
							</p>
						</li>
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
							</div>
							<p class="ml-4">
								If you’re helping people from afar, need data insights truly real time
							</p>
						</li>
						<li>
							<a href="#cta" class="md:inline-block hidden inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Start collecting invisibly
							</a>
						</li>
					</ul>

			  </div>
			</dl>
		  </div>
		</div>

		<!-- Mobile Apps  -->
		<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
			<div class=" -mx-4 relative lg:mt-0 col-span-1">
				<div class="max-w-lg mx-auto flex justify-center">
					<img src="../svgs/product/apps.svg" alt="">
				</div>
				</div>
			<div class="">
			<dl class="mt-4 space-y-10">
				<div class="max-w-md mx-auto ">
					<div class="flex items-center mb-6">					
						<div class="text-2xl font-bold text-white tracking-tight sm:text-3xl max-w-sm">Mobile Apps bv c v</div>
					</div>

					<ul role="list" class="space-y-3 text-gray-500 md:text-base text-lg">
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
							</div>
							<p class="ml-4">
								mood scores
							</p>
						</li>
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
							</div>
							<p class="ml-4">
								wellbeing
							</p>
						</li>
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
							</div>
							<p class="ml-4">
								delivering interventions
							</p>
						</li>
						<li class="flex items-top h-auto relative">
							<div class="mt-1 flex-shrink-0">
								<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
							</div>
							<p class="ml-4">
								No more prompts
							</p>
						</li>
						<!-- <li>
							<a href="#cta" class="md:inline-block hidden inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Start collecting invisibly
							</a>
						</li> -->
					</ul>

				</div>
			</dl>
			</div>
		</div>


	</div>

</div>



</div>

<style>
	.lds-ripple {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ripple div {
		position: absolute;
		border: 4px solid #333242;
		opacity: 1;
		border-radius: 50%;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}

	/* PrismJS 1.25.0
	https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */
	code[class*='language-'],
	pre[class*='language-'] {
		color: #f8f8f2;
		background: 0 0;
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 1em;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}
	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}
	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background: #272822;
	}
	:not(pre) > code[class*='language-'] {
		padding: 0.1em;
		border-radius: 0.3em;
		white-space: normal;
	}
	.token.cdata,
	.token.comment,
	.token.doctype,
	.token.prolog {
		color: #8292a2;
	}
	.token.punctuation {
		color: #f8f8f2;
	}
	.token.namespace {
		opacity: 0.7;
	}
	.token.constant,
	.token.deleted,
	.token.property,
	.token.symbol,
	.token.tag {
		color: #f92672;
	}
	.token.boolean,
	.token.number {
		color: #ae81ff;
	}
	.token.attr-name,
	.token.builtin,
	.token.char,
	.token.inserted,
	.token.selector,
	.token.string {
		color: #a6e22e;
	}
	.language-css .token.string,
	.style .token.string,
	.token.entity,
	.token.operator,
	.token.url,
	.token.variable {
		color: #f8f8f2;
	}
	.token.atrule,
	.token.attr-value,
	.token.class-name,
	.token.function {
		color: #e6db74;
	}
	.token.keyword {
		color: #66d9ef;
	}
	.token.important,
	.token.regex {
		color: #fd971f;
	}
	.token.bold,
	.token.important {
		font-weight: 700;
	}
	.token.italic {
		font-style: italic;
	}
	.token.entity {
		cursor: help;
	}

	@keyframes lds-ripple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
</style>
