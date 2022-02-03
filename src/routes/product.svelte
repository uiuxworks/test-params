<script>
	import CardWithImage from '../components/CardWithImage.svelte';
	import Card from '../components/Card.svelte';
	import { fade } from 'svelte/transition';
	import SvgMoon from '../components/SvgMoon.svelte';
	import Prism from '../components/PrismJS.svelte';
	import PrismCombo from '../components/PrismCombo.svelte';
	import Company from './company.svelte';
	import checklist from '../../static/svgs/check-purple.svg';
	// import Prism from 'svelte-prism'
	//Clicked states
	let code_sample = `{
    "screen_time": [
        {
            "isLocked": true,
            "createdAt": "2022-01-19T21:50:27.558Z"
        },
        {
            "isLocked": true,
            "createdAt": "2022-01-19T21:50:27.558Z"
        }
    ],
    "sleep": [
        {
            "minutesSlept": 253,
            "startDateTime": "2022-01-19T21:50:27.564Z",
            "endDateTime": "2022-01-19T21:50:27.564Z",
            "createdAt": "2022-01-19T21:50:27.564Z"
        }
    ]
}`;

let code_sample2 = `analyseBehaviors = async () => 
	{
		let response = await fetch('
		https://api.sahha.ai/v1/analyse/ID', {
		method: 'GET',
		headers: {'Content-Type': 'application/json'
		}
		});
		analysis = await response.json();
	}
}`;

	let code_combo1 = `profileID: "fba8d5d6-69ce-4035-  b6d6-29598f24fa41" ,
createdAt:    '2021-10-07T00:00:18.935Z' , 
range:    7, 
prognosis:   
{
	condition:   'depression',
	auc:   0.81 ,
	severity:   21
},
	behaviours: [
		{
			type: 'sleep' , score: 0.92 
		} ,
		{
			type: 'entropy' , score: 0.21 
		} ,
		{
			type: 'home_stay' ,score: 0.76
		} ,
		{
			type: 'phone_usage' ,score: 0.35
		}
	]`;
  
	// let code_combo2 = `behaviours:   `;
	let actions = [
		'build positive habits',
		'achieve personal goals',
		'foster trust',
		'strengthen relationships',
		'improve communication',
		'prevent future episodes',
		'increase productivity',
		'empower self-care',
	];
</script>

<div class="bg-sahha-900">
	<!-- header  -->
	<div class="relative ">
		<!-- <div class="heroContent_ellipse" /> -->
		<div
			class="max-w-5xl mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-7 px-6"
		>
			<!-- hero img  -->
			<div class="lg:col-start-2 col-start-1 col-span-1">
				<div class="flex justify-center md:pb-0">
					<img src="../svgs/product/hero.svg" alt="">
				</div>
			</div>
			<!-- heading  -->
			<div class="col-span-1 md:pr-6 pr-0">
				<div class="md:pb-0 flex lg:justify-start justify-center lg:text-left text-center">
					<div class="hero-text">
						<div class="mt-6 sm:max-w-xl">
							<h1 class="md:text-4xl text-2xl font-bold text-white tracking-tight sm:text-4xl">
								How It Works
							</h1>
							<p class="lg:mt-2 mt-2 md:text-lg text-md text-gray-300">
								Now you have the power to help any user at any moment, because you know whom to
								reach and when to do it.
							</p>
						</div>
						<div class="max-w-md w-auto mx-auto pt-4">
							<a
								href="#cta"
								class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Try it out
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- content  -->
	<div class="max-w-5xl mx-auto md:py-16 py-4">
		<!-- install  -->
		<div class="md:pb-24 pb-6 md:pt-0 pt-16">
			<h1 class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl mb-10">Install</h1>
			<div class="px-8">
				<div class="flex flex-wrap gap-10">
					<div class="md:flex-1 flex-auto">
						<!-- placeholder for img  -->
						<div class="flex justify-center mb-6">
							<div class="bg-sahha-800 rounded-2xl overflow-clip h-96 w-full"></div>
						</div>
							
						<!-- copy for img  -->
						<div class="flex items-start ml-4">
							<!-- <div class="bg-gray-700 rounded-full h-10 w-10 mr-4 flex-none"></div> -->
							<div class="mr-4 flex-none">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="12" cy="12" r="12" fill="#333141"/>
									<rect x="12" y="7" width="7.07108" height="7.07108" rx="1.5" transform="rotate(45 12 7)" fill="#94E2BF"/>
								</svg>
							</div>
								
							<div class="text-lg font-medium text-[#DFD7E5]">
								Choose the appropriate SDK for 
								the correct mobile platform. Also available directly through REST API.
							</div>
						</div>
					</div>
					<div class="md:flex-1 flex-auto">
						<!-- placeholder for img  -->
						<div class="flex justify-center mb-6">
							<div class="bg-sahha-800 rounded-2xl overflow-clip h-96 w-full"></div>
						</div>
							
						<!-- copy for img  -->
						<div class="flex items-start ml-4">
							<div class="mr-4 flex-none">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="12" cy="12" r="12" fill="#333141"/>
									<rect x="12" y="7" width="7.07108" height="7.07108" rx="1.5" transform="rotate(45 12 7)" fill="#94E2BF"/>
								</svg>
							</div>
							<div class="text-lg font-medium text-[#DFD7E5]">
								Toggle the behaviors you need to assess each user’s wellbeing, gaining consent for each one along the way
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>	
		<!-- Send  -->
		<div class="md:pb-24 pb-6 md:pt-0 pt-16">
			<h1
				class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl mb-10"
			>
			Send
			</h1>
			<div class="px-8">
				<div class="bg-sahha-800 rounded-2xl overflow-clip">
					<div class="flex items-center pt-16 flex-wrap md:px-0 px-8">
						<div class="flex-1 lg:pl-16 pl-0 max-w-sm mb-20">
							<div class="pb-6">
								<div class="bg-gray-700 h-20 w-20 rounded-full"> </div>
							</div>
							<dd class="text-2xl font-medium text-gray-100 md:text-left text-center">
								<span class="underline decoration-blue-200 decoration-3 text-blue-300">Collect</span>
								the raw data you’ve selected for the users you want to analyze and 
								<span class="underline decoration-blue-200 decoration-3 text-blue-300">send it</span> quickly and easily
							</dd>
						</div>
						<div class="flex-1">
							<div class="xl:justify-end justify-center flex relative">
								<!-- <div
									class="justify-self-center w-64 bg-gray-200/20 absolute left-2 h-0.5 rounded-full mt-32 z-0"
								/> -->
								<div class="relative">
									<div
										class="bg-[#333141] rounded-tl-xl md:rounded-tr-none rounded-tr-xl lg:w-[520px] w-auto"
									>
										<div class="px-4 pt-4">
											<div class="flex justify-between items-center">
												<div class="w-16 flex space-x-2">
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
												</div>
												<div class="bg-gray-700 px-2 py-1 rounded-md">
													<div class="text-center text-sm text-white font-medium">JSON</div>
												</div>
												<div class="w-16" />
											</div>
										</div>
										<div class="rounded-lg overflow-x-auto md:w-auto sm:w-96 w-64">
											<Prism language="javascript" code={code_sample} />
										</div>
									</div>
									<!-- <div class="flex h-8 w-8 absolute inset-y-0 left-0 mt-32 ">
										<span
											class="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-400 opacity-75"
										/>
										<span class="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-400" />
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Analyze  -->
		<div class="md:pb-24 pb-6 md:pt-0 pt-16">
			<h1 class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl mb-10">
			Analyze 
			</h1>
			<div class="px-8">
				<div class="bg-sahha-800 rounded-2xl overflow-clip">
					<!-- section 1  -->
						<div class="flex items-center flex-wrap md:px-0 px-8 pt-16">
							<div class="flex-1 lg:pl-20 pl-0 max-w-sm ">
								<div class="pb-4">
									<div class="bg-gray-700 h-20 w-20 rounded-full"> </div>
								</div>
								<dd class="text-2xl font-medium text-gray-100 md:text-left text-center">
									<span class="underline decoration-blue-200 decoration-3 text-blue-300">Receive</span>
									reliable, clinically-validated data with no compromise to user experience or privacy
								</dd>
							</div>
							<div class="flex-1">
								<div class="justify-center flex relative">
									<!-- <div
										class="justify-self-center w-64 bg-gray-200/20 absolute left-2 h-0.5 rounded-full mt-32 z-0"
									/> -->
									<div class="relative">
										<div
											class="bg-[#333141] rounded-xl w-[520px]"
										>
											<div class="px-4 pt-4">
												<div class="flex justify-between items-center">
													<div class="w-16 flex space-x-2">
														<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
														<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
														<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
													</div>
													<div class="bg-gray-700 px-2 py-1 rounded-md">
														<div class="text-center text-sm text-white font-medium">Javascript</div>
													</div>
													<div class="w-16" />
												</div>
											</div>
											<div class="rounded-lg overflow-x-auto md:w-auto sm:w-96 w-64">
												<Prism language="javascript" code={code_sample2} />
											</div>
										</div>
										<!-- <div class="flex h-8 w-8 absolute inset-y-0 left-0 mt-32 ">
											<span
												class="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-400 opacity-75"
											/>
											<span class="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-400" />
										</div> -->
									</div>
								</div>
							</div>
						</div>
					<div class="border-b border-gray-700/75 mx-8 my-10"></div>
					<!-- scetion 2  -->
					<div class="flex items-center flex-wrap md:px-0 px-8">
						<div class="flex-1 lg:pl-20 pl-0 max-w-sm mb-20">
							<div class="pb-6">
								<div class="bg-gray-700 h-20 w-20 rounded-full"> </div>
							</div>
							<dd class="text-2xl font-medium text-gray-100 md:text-left text-center">
								Identify concerning behaviors to more efficiently and 
								effectively trigger the best intervention
							</dd>
						</div>
						<div class="flex-1">
							<div class="justify-center flex relative">
								<div class="relative">
									<div class="bg-[#333141] rounded-t-xl w-[520px]">
										<div class="px-4 pt-4">
											<div class="flex justify-between items-center">
												<div class="w-16 flex space-x-2">
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
													<span class="bg-blue-200 h-2.5 w-2.5 block rounded-full" />
												</div>
												<div class="bg-gray-700 px-2 py-1 rounded-md">
													<div class="text-center text-sm text-white font-medium">JSON</div>
												</div>
												<div class="w-16" />
											</div>
										</div>
										<div class="rounded-lg overflow-x-auto md:w-auto sm:w-96 w-64">
											<Prism language="javascript" code={code_combo1} />
										</div>
									</div>
									<!-- <div class="flex h-8 w-8 absolute inset-y-0 left-0 mt-32 ">
										<span
											class="animate-ping absolute h-8 w-8 -top-4 -left-4 rounded-full bg-gray-400 opacity-75"
										/>
										<span class="relative rounded-full h-8 w-8 -top-4 -left-4 bg-gray-400" />
									</div> -->
								</div>
							</div>
						</div>
				
					</div>
				</div>
			</div>
		</div>

		<!-- Act  -->
		<div class="md:pb-24 pb-6 md:pt-0 pt-16">
			<h1 class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl mb-10">Act</h1>
			<div class="px-8 max-w-5xl mx-auto">
				<div class="flex flex-wrap gap-x-10 relative">
					<div class="md:flex-1 flex-auto relative z-20">
						<!-- card 1 (wwhat do you do)  -->
						<div class="flex justify-center mb-6">
							<div class="bg-sahha-800 rounded-2xl overflow-clip md:h-[550px] w-full px-10">
								<div class="py-8 text-2xl font-medium text-gray-100 md:text-left text-center s-RdnSz9bI3jav">
									What you do:
								</div>
								<div class="grid gap-5 md:grid-cols-3 grid-cols-2 grid-rows-3 pb-10">
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Message</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Phone</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Email</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Chat</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Teletherapy</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5]">Prescription</div>
									</div>
									<div>
										<div class="flex justify-center mb-2">
											<div class="bg-gray-700 rounded-full h-20 w-20"></div>
										</div>
										<div class="text-center text-sm font-semibold text-[#C9C6D5] max-w-xs leading-4">In-person therapy</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="md:flex-1 flex-auto relative z-20 ">
						<!-- placeholder for img  -->
						<div class="flex justify-center mb-6">
							<div class="bg-sahha-800 rounded-2xl overflow-clip md:h-[550px] w-full px-10">
								<div class="py-8 text-2xl font-medium text-gray-100 md:text-left text-center s-RdnSz9bI3jav">
									What you do:
								</div>
								<div class="space-y-3 pb-10">
									{#each actions as action}
									<div class="flex items-start">
										<div class="mr-4 flex-none">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="12" cy="12" r="12" fill="#333141"/>
												<rect x="12" y="7" width="7.07108" height="7.07108" rx="1.5" transform="rotate(45 12 7)" fill="#94E2BF"/>
											</svg>												
										</div>
										<div class="text-lg font-medium text-[#DFD7E5]">
											{action}
										</div>
									</div>
									{/each}
								</div>

							</div>
						</div>
					</div>
					
					<!-- center arrow img  -->
					<div class="absolute flex justify-center items-center md:mt-0 mt-10 h-full w-full">
							<div class="invisible lg:visible">
							<svg class="relative z-30" width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M63.6622 42L50.8526 42C43.4441 42 37.3182 36.2283 36.8774 28.8329L35.9544 13.3456C35.6081 7.53491 30.7948 3 24.9739 3L3 3" stroke="#446657" stroke-width="5" stroke-linecap="round"/>
								<path d="M76.5658 39.9074C77.6194 40.7078 77.6194 42.2922 76.5658 43.0926L67.6221 49.8869C66.3052 50.8873 64.4122 49.9481 64.4122 48.2943L64.4122 34.7057C64.4122 33.0519 66.3052 32.1127 67.6221 33.1131L76.5658 39.9074Z" fill="#94E2BF"/>
							</svg>
						</div>
					</div>

				</div>	
			</div>
		</div>

		<!-- use cases  -->
		<div class="md:pb-4 pb-6 md:pt-0 pt-16">
			<h1 class="font-bold text-white tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl md:mb-10 mb-0">
				Use cases
			</h1>
		</div>
		<div class="max-w-6xl mx-auto px-8 md:space-y-10 space-y-8 pb-16">
				<!--Dashboards-->
				<div class="bg-sahha-800 rounded-2xl overflow-clip">
					<div class="flex flex-wrap items-center md:pt-16 pt-6 ">
						<div class="md:w-1/2 w-full lg:pl-24 lg:px-0 px-8 max-w-md mx-auto mb-8 space-y-4">
							<div class="">
								<img alt="laptop" src="../svgs/Laptop.svg" />
							</div>
							<d1
								class="text-2xl font-bold text-white tracking-tight sm:text-3xl max-w-sm block"
								>Dashboards</d1
							>
							<dd class="text-base text-gray-400 ">
								Stay on top of every user’s individual journey with at-a-glance views tailored for
								what they care about
							</dd>
							<div class="">
								<div class="grid gap-x-2 gap-y-2 md:grid-cols-2 grid-cols-1 max-w-xs text-md">
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Monitoring</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Messages</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5] ">Scheduling</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Prescribing</dd></div>
									</div>
								</div>
							</div>
						</div>
						<div class="md:w-1/2 w-full md:flex-1">
							<div class="md:justify-end justify-center flex relative">
								<div class="relative">
									<!-- <div class="bg-[#333141] rounded-tl-xl  rounded-tr-xl lg:w-80 h-60 w-auto">
										<div class="overflow-x md:w-auto w-80 mx-auto" />
									</div> -->
									<img src="../svgs/product/dashboards.svg" alt="" />
	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--Mobile-->
				<div class="bg-sahha-800 rounded-2xl overflow-clip">
					<div class="flex flex-wrap items-center md:pt-16 pt-6 ">
						<div class="md:w-1/2 w-full lg:pl-24 lg:px-0 px-8 max-w-md mx-auto mb-8 space-y-4">
							<div class="">
								<img alt="laptop" src="../svgs/mobile-icon.svg" />
							</div>
							<d1
								class="text-2xl font-bold text-white tracking-tight sm:text-3xl max-w-sm block"
								>Mobile Apps</d1
							>
							<dd class="text-base text-gray-400 ">
								Engage with any user on any platform whenever, wherever is convenient for them and their lifestyle							
							</dd>
							<div class="">
								<div class="grid gap-x-2 gap-y-2 md:grid-cols-2 grid-cols-1 max-w-xs text-md">
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Mood Scores</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Goals</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5] ">Journals</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Live Chat</dd></div>
									</div>
								</div>
							</div>
						</div>
						<div class="md:w-1/2 w-full md:flex-1">
							<div class="md:justify-end justify-center flex relative">
								<div class="relative">
									<!-- <div class="bg-[#333141] rounded-tl-xl  rounded-tr-xl lg:w-80 h-60 w-auto">
										<div class="overflow-x md:w-auto w-80 mx-auto" />
									</div> -->
									<img src="../svgs/product/apps.svg" alt="" />
	
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- telehealth  -->
				<div class="bg-sahha-800 rounded-2xl overflow-clip">
					<div class="flex flex-wrap items-center md:pt-16 pt-6 ">
						<div class="md:w-1/2 w-full lg:pl-24 lg:px-0 px-8 max-w-md mx-auto mb-8 space-y-4">
							<div class="">
								<img alt="laptop" src="../svgs/health.svg" />
							</div>
							<d1
								class="text-2xl font-bold text-white tracking-tight sm:text-3xl max-w-sm block"
								>Telehealth</d1
							>
							<dd class="text-base text-gray-400 ">
								Connect person-to-person regardless of distance to solve pressing issues that only a human touch can resolve
							</dd>
							<div class="">
								<div class="grid gap-x-2 gap-y-2 md:grid-cols-2 grid-cols-1 max-w-xs text-md">
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Insights</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Real-time</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5] ">Prognosis</dd></div>
									</div>
									<div class="flex items-center">
										<img src={checklist} alt="checklist" />
										<div class="ml-2"><dd class="text-[#C9C6D5]">Prevention</dd></div>
									</div>
								</div>
							</div>
						</div>
						<div class="md:w-1/2 w-full md:flex-1">
							<div class="md:justify-end justify-center flex relative">
								<div class="relative">
									<!-- <div class="bg-[#333141] rounded-tl-xl  rounded-tr-xl lg:w-80 h-60 w-auto">
										<div class="overflow-x md:w-auto w-80 mx-auto" />
									</div> -->
									<img src="../svgs/product/telehealth.svg" alt="" />
		
								</div>
							</div>
						</div>
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
