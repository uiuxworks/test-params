<script>
	import '../app.css';
	import '../styles/tailwind.css';
	import Carousel from '@beyonk/svelte-carousel'
	let carousel
</script>

<div>
	<div class="bg-sahha-900 overflow-hidden md:pb-14 pb-8">
		<div></div>
		<div class="relative ">
			<!-- <div class="heroContent_ellipse" /> -->
			<div
				class="max-w-5xl mx-auto lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-8 px-6"
			>
				<!-- hero img  -->
 				<div class="lg:col-start-2 col-start-1 col-span-1">
					<div class="flex justify-center md:pb-0 mt-10">
						<img class="hero-img " src="../svgs/hero.svg" alt="" />
					</div>
				</div>
				<!-- heading  -->
				<div class="col-span-1 md:pr-6 pr-0">
					<div class="md:pb-0 flex lg:justify-start justify-center lg:text-left text-center">
						<div class="hero-text">
							<div class="mt-6 sm:max-w-xl">
								<h1 class="md:text-4xl text-2xl font-bold text-white tracking-tight sm:text-4xl">
									Ditch the surveys
								</h1>
								<p class="lg:mt-2 mt-2 md:text-lg text-md text-gray-300">
									What if you could assess the mental health of 100% of your users without ever asking a question?
								</p>
							</div>
							<div class="max-w-md w-auto mx-auto pt-4">
								<a href="#cta" class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Start ditching surveys
								</a>
							  </div>
							
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-5xl mx-auto text-center lg:pt-20 pt-6">
				<Carousel 
					perPage={{ 1024: 3, 500: 1}}
					loop={true}
					controls={false}
					>

						<!-- 1  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8 ">
								<div class="px-4 space-y-3">
									<dd class="text-base text-gray-400">
										“Analyzing survey data is time consuming. If I could just call an API, my job would be a lot easier.”
									</dd>
									<div class="flex justify-center space-x-2 items-center">
										<div class="flex justify-center hidden">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="16" cy="16" r="16" fill="#272634"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
												<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
											</svg>	
										</div>
										<dt class="text-md leading-6 font-medium text-gray-200 mb-2">Anonymous engineer</dt>
									</div>
								</div>
								<div class="">
									<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
										</svg>
								</div>
									
							</div>
						</div>
						<!-- 2  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8">
								<div class="px-4 space-y-3">
									<dd class="text-base text-gray-400">
										“I wish I had an alternative to surveys. No one fills them out, but I need that data to run my business.”
									</dd>
									<div class="flex justify-center space-x-2 items-center">
										<div class="flex justify-center hidden">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="16" cy="16" r="16" fill="#272634"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
												<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
											</svg>	
										</div>
										<dt class="text-md leading-6 font-medium text-gray-200 mb-2">Anonymous executive</dt>
									</div>
								</div>
								<div class="">
									<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
										</svg>
								</div>
							</div>
						</div>
						<!-- 3  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8">
								<div class="px-4 space-y-3">
									<dd class="text-base text-gray-400">
										“At first I filled them [surveys] out, but now I don’t because nothing changes when I do.”
									</dd>
									<div class="flex justify-center space-x-2 items-center">
										<div class="flex justify-center hidden">
											<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="16" cy="16" r="16" fill="#272634"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
												<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
											</svg>	
										</div>	
										<dt class="text-md leading-6 font-medium text-gray-200 mb-2">Anonymous user</dt>
									</div>
								</div>
								<div class="">
									<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
										</svg>
								</div>
							</div>
						</div>

						<!-- 4  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8">
								<div class="px-4 space-y-3">
									<dd class="text-base text-gray-400">
										“How can I help my clients if they won’t fill out the health questionnaires I send them?”
									</dd>
									<dt class="text-md leading-6 font-medium text-gray-200 mb-2">Anonymous psychiatrist</dt>
									<div class="flex justify-center hidden">
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="16" cy="16" r="16" fill="#272634"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
											<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
										</svg>	
									</div>
								</div>
								<div class="">
									<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
										</svg>
								</div>	
						   </div>
						</div>
						<!-- 5  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8">
								<div class="px-4 space-y-3">
								<dd class="text-base text-gray-400">
									“Why do I bother with these surveys? By the time someone gets back to me, I’m feeling completely different.”
								</dd>
								<dt class="text-md leading-6 font-medium text-gray-200 mb-2">Anonymous patient</dt>
								<div class="flex justify-center hidden">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16" cy="16" r="16" fill="#272634"/>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
										<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
									</svg>	
									</div>	
								</div>
									<div class="">
										<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
											</svg>
									</div>
							</div>
						</div>
						<!-- 6  -->
						<div class="flex flex-col slide-content mb-4">
							<div class="flex-1 flex items-top relative py-8">
								<div class="px-4 space-y-3">
									<dd class="text-base text-gray-400">
										“I want to send better treatment options, but I’m blind to what’s going on in my patient’s life.”
									</dd>
									<dt class="text-md leading-6 font-medium text-gray-200">Anonymous nurse</dt>
									<div class="flex justify-center hidden">
										<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="16" cy="16" r="16" fill="#272634"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M10 21.25C10 19.1789 11.6789 17.5 13.75 17.5H18.25C20.3211 17.5 22 19.1789 22 21.25C22 22.4926 20.9926 23.5 19.75 23.5H12.25C11.0074 23.5 10 22.4926 10 21.25Z" fill="#5DE8E8"/>
											<path d="M16 8.5C13.9289 8.5 12.25 10.1789 12.25 12.25C12.25 14.3211 13.9289 16 16 16C18.0711 16 19.75 14.3211 19.75 12.25C19.75 10.1789 18.0711 8.5 16 8.5Z" fill="#5DE8E8"/>
										</svg>	
									</div>
								</div>
								<div class="">
									<svg width="14" height="89" viewBox="0 0 14 89" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.00021 89L2.00021 58L11.5 47L2 35L2 0" stroke="#262532" stroke-width="3"/>
										</svg>
								</div>
							</div>
						</div>
				</Carousel>

			</div>
			


		</div>

	</div>

	<!-- content  -->
	<div class="max-w-5xl mx-auto md:py-32 py-4">
		<div class="md:pb-24 pb-6 md:pt-0 pt-16">
			<h1 class="font-bold text-gray-700 tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center max-w-2xl">
				Sahha delivers behavioral health data via APIs
			</h1>
		</div>
		
	
		<div class="md:space-y-32 space-y-2">

			<!-- Sahha is invisible  -->
			<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
				<div class=" -mx-4 relative lg:mt-0 col-span-1">
					<div class="max-w-lg mx-auto flex justify-center">
					  <img src="../svgs/1.svg" alt="">
					</div>
				  </div>
				<div class="">
				<dl class="mt-4 space-y-10">
				  <div class="max-w-md mx-auto ">
					  <div class="flex items-center mb-6">
						<!-- md:justify-start justify-center  -->
						  <div class="flex-shrink-0"> 
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="32.0002" cy="32" rx="32" ry="32" transform="rotate(-90 32.0002 32)" fill="#DCF5EA"/>
								<line x1="19.4627" y1="38.0628" x2="45.9584" y2="28.8385" stroke="#DCF5EA" stroke-width="8" stroke-linecap="round"/>
								<path d="M46.4149 30.6257C44.4115 28.0316 38.9965 22.0007 32 22.0007C24.9144 22.0007 19.5472 28.0363 17.5701 30.6257C17.1987 31.1089 16.9983 31.7018 17.0002 32.3112C17.002 32.9206 17.2061 33.5122 17.5804 33.9932C19.5857 36.591 25.0025 42.6256 32 42.6256C38.9974 42.6256 44.4115 36.5947 46.413 34.0054C46.7892 33.5225 46.9937 32.928 46.994 32.3158C46.9943 31.7037 46.7906 31.109 46.4149 30.6257ZM32 37.9382C30.8875 37.9382 29.7999 37.6083 28.8749 36.9902C27.9499 36.3721 27.2289 35.4936 26.8032 34.4658C26.3774 33.4379 26.2661 32.3069 26.4831 31.2158C26.7001 30.1247 27.2359 29.1224 28.0225 28.3357C28.8092 27.5491 29.8115 27.0133 30.9026 26.7963C31.9937 26.5793 33.1247 26.6906 34.1526 27.1164C35.1804 27.5421 36.0589 28.2631 36.677 29.1881C37.2951 30.1131 37.625 31.2007 37.625 32.3132C37.625 33.805 37.0323 35.2357 35.9774 36.2906C34.9226 37.3455 33.4918 37.9382 32 37.9382Z" fill="#345B4A"/>
								<path d="M19.3068 41.3129L43.776 23.5399" stroke="#DCF5EA" stroke-width="5" stroke-linecap="round"/>
								<path d="M21.6671 40.0913L41.4158 24.7609" stroke="#345B4A" stroke-width="2.5" stroke-linecap="round"/>
							</svg>																
						</div>					
						  <div class="ml-6 text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm">Sahha is invisible</div>
					  </div>
	
						<ul role="list" class="space-y-6 text-gray-500 md:text-base text-lg">
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
								</div>
							  <p class="ml-4">
								Your user information is automatically collected while people live their lives 
							  </p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
								</div>
								<p class="ml-4">
								 This means they are never pestered with surveys or questionnaires
								</p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-green.svg" alt="">	
								</div>
								<p class="ml-4">
									And you can deliver personal, relevant interventions when they need them, with no delay
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
			<!-- Sahha is secure  -->
			<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
				<div class="-mx-4 relative lg:mt-0 col-span-1">
					<div class="max-w-lg mx-auto flex justify-center">
					  <img src="../svgs/2.svg" alt="">
					</div>
				  </div>
				<div class="">
				<dl class="mt-4 space-y-10">
				  <div class="max-w-md mx-auto">
					<div class="flex items-center mb-6">
						<!-- md:justify-start justify-center  -->
						  <div class="flex-shrink-0"> 
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="32" cy="32.0007" rx="32" ry="32" transform="rotate(-90 32 32.0007)" fill="#F5C5CE"/>
								<rect x="20" y="28.0007" width="24" height="18" rx="3" fill="#5D2B34"/>
								<path d="M32 35.0007L32 38.0007" stroke="#F5C5CE" stroke-width="3" stroke-linecap="round"/>
								<path d="M28 26.0007V21.5563C28 20.223 29.3095 18.0007 32 18.0007C34.6905 18.0007 36 20.223 36 21.5563V26.0007" stroke="#5D2B34" stroke-width="3"/>
								</svg>
																
						</div>					
						  <div class="ml-6 text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm">Sahha is secure</div>
					  </div>
						<ul role="list" class="space-y-6 text-gray-500 md:text-base text-lg">
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
								</div>
							  <p class="ml-4">
								Data is protected at rest and in transit to provide the utmost security for your users 
							  </p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
								</div>
								<p class="ml-4">
									User information is de-identified and stored in aggregate, making sure everyone’s privacy is protected
								</p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-red.svg" alt="">	
								</div>
								<p class="ml-4">
									We maintain regulatory and industry compliance in every geographical region in which we operate
								</p>
							</li>
							<li>
								  <a href="#cta" class="md:inline-block hidden inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Start collecting securely
								</a>
							</li>
						</ul>

	
				  </div>
				</dl>
			  </div>
			</div>
			<!-- Sahha is reliable  -->
			<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
				<div class="-mx-4 relative lg:mt-0 col-span-1">
					<div class="max-w-lg mx-auto flex justify-center">
					  <img src="../svgs/3.svg" alt="">
					</div>
				  </div>
				<div class="">
				<dl class="mt-4 space-y-10">
				  <div class="max-w-md mx-auto">
					<div class="flex items-center mb-6">
						<!-- md:justify-start justify-center  -->
						  <div class="flex-shrink-0"> 
							<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="32" cy="32" rx="32" ry="32" transform="rotate(-90 32 32)" fill="#F7F7C0"/>
								<path d="M44.225 19.821L32.225 17.052C32.0768 17.019 31.9232 17.019 31.775 17.052L19.775 19.821C19.5539 19.8721 19.3568 19.9968 19.2159 20.1747C19.0751 20.3526 18.999 20.5731 19 20.8V35C19 43.976 29.553 48.144 31.668 48.889C31.7747 48.9263 31.887 48.9452 32 48.945C32.1127 48.9454 32.2247 48.9264 32.331 48.889C34.447 48.147 45 43.993 45 35V20.8C45.0011 20.5731 44.9249 20.3526 44.7841 20.1747C44.6432 19.9968 44.4461 19.8721 44.225 19.821ZM30.057 38.471L24.586 33L26 31.586L29.943 35.529L37.892 26.257L39.41 27.557L30.057 38.471Z" fill="#CDCD21"/>
								</svg>
																																								
						</div>					
						  <div class="ml-6 text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm">Sahha is reliable</div>
					  </div>
						<ul role="list" class="space-y-6 text-gray-500 md:text-base text-lg">
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-yellow.svg" alt="">	
								</div>
							  <p class="ml-4">
								Surveys and questionnaires are dependent upon the mood of the user at that very instant
							  </p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-yellow.svg" alt="">	
								</div>
								<p class="ml-4">
									Data collected in the background provides an unbiased moment-by-moment snapshot for every user
								</p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-yellow.svg" alt="">										
								</div>
								<p class="ml-4">
									Third-party studies validate passive digital phenotyping over the use of surveys
								</p>
							</li>
							<li>
								<a href="#cta" class="md:inline-block hidden inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Start collecting reliably
								</a>
							</li>
						</ul>

	
				  </div>
				</dl>
			  </div>
			</div>

			<!-- Sahha is simple  -->
			<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center md:px-0 px-6">
				<div class="-mx-4 relative lg:mt-0 col-span-1">
					<div class="max-w-lg mx-auto flex justify-center">
						<img src="../svgs/4.svg" alt="">
					</div>
					</div>
				<div class="">
				<dl class="mt-4 space-y-10">
					<div class="max-w-md mx-auto ">
						<div class="flex items-center mb-6">
							<div class="flex-shrink-0"> 
								<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
									<ellipse cx="32" cy="32" rx="32" ry="32" transform="rotate(-90 32 32)" fill="#C1E9F9"/>
									<g clip-path="url(#clip0_351_563)">
									<path d="M39 23C39.2652 22.9999 39.5195 22.8945 39.707 22.707L44.707 17.707C44.8892 17.5184 44.99 17.2658 44.9877 17.0036C44.9854 16.7414 44.8802 16.4906 44.6948 16.3052C44.5094 16.1198 44.2586 16.0146 43.9964 16.0123C43.7342 16.01 43.4816 16.1108 43.293 16.293L38.293 21.293C38.1532 21.4328 38.058 21.611 38.0194 21.8049C37.9808 21.9989 38.0007 22.1999 38.0763 22.3826C38.152 22.5653 38.2801 22.7215 38.4445 22.8314C38.609 22.9413 38.8022 22.9999 39 23Z" fill="#473860"/>
									<path d="M44.5 29H27.174C26.9827 29 26.7955 28.9451 26.6345 28.8419C26.4734 28.7387 26.3454 28.5915 26.2655 28.4177C26.1856 28.2439 26.1572 28.0509 26.1837 27.8615C26.2102 27.6721 26.2905 27.4942 26.415 27.349L30.338 22.772C30.7903 22.2459 31.0271 21.5683 31.0009 20.8749C30.9747 20.1816 30.6875 19.5238 30.1968 19.0332C29.7062 18.5427 29.0483 18.2557 28.3549 18.2297C27.6616 18.2037 26.984 18.4406 26.458 18.893L19.4444 24.9048C17.8929 26.2346 17 28.1761 17 30.2195V40.2882C17 42.6102 18.5958 44.6253 20.8712 45.088C24.8469 45.8964 30.9917 47 34.91 47C35.335 46.9676 35.7357 46.7891 36.0442 46.4949C36.3526 46.2007 36.5498 45.8089 36.6023 45.3859C36.6548 44.9629 36.5594 44.5348 36.3322 44.1741C36.1051 43.8134 35.7602 43.5424 35.356 43.407C35.937 43.3257 36.4696 43.0389 36.8573 42.5986C37.245 42.1583 37.462 41.5936 37.469 41.007C37.4768 40.5431 37.3452 40.0874 37.0914 39.699C36.8375 39.3106 36.4731 39.0072 36.045 38.828C36.045 38.828 38.322 38.428 38.322 36.502C38.3644 35.9366 38.2045 35.3746 37.8707 34.9162C37.5369 34.4579 37.0511 34.1332 36.5 34H44.357C44.9939 34.0134 45.6136 33.7925 46.0984 33.3792C46.5832 32.9659 46.8994 32.389 46.987 31.758C47.0231 31.4098 46.9857 31.0579 46.8772 30.725C46.7687 30.3922 46.5914 30.0858 46.357 29.8258C46.1225 29.5658 45.8361 29.358 45.5162 29.2157C45.1963 29.0735 44.8501 29 44.5 29Z" fill="#473860"/>
									<path d="M34.757 21.97C34.8365 21.9897 34.9181 21.9997 35 22C35.2229 21.9997 35.4393 21.925 35.6149 21.7876C35.7904 21.6503 35.9151 21.4583 35.969 21.242L36.969 17.242C37.0066 17.1128 37.0178 16.9773 37.0018 16.8436C36.9858 16.71 36.9431 16.581 36.876 16.4643C36.809 16.3476 36.7191 16.2456 36.6117 16.1645C36.5043 16.0833 36.3817 16.0247 36.2511 15.9921C36.1205 15.9595 35.9847 15.9536 35.8518 15.9748C35.7188 15.9959 35.5916 16.0437 35.4775 16.1152C35.3635 16.1867 35.2651 16.2805 35.1882 16.3909C35.1113 16.5014 35.0575 16.6262 35.03 16.758L34.03 20.758C33.9659 21.0151 34.0064 21.2872 34.1427 21.5144C34.279 21.7417 34.5 21.9055 34.757 21.97Z" fill="#473860"/>
									<path d="M43.757 24.03L39.757 25.03C39.5203 25.0893 39.3135 25.2331 39.1755 25.4343C39.0375 25.6355 38.9778 25.8802 39.0076 26.1224C39.0375 26.3646 39.1549 26.5874 39.3377 26.7491C39.5204 26.9107 39.756 27 40 27C40.0822 26.9998 40.1642 26.9897 40.244 26.97L44.244 25.97C44.4996 25.904 44.7188 25.7396 44.8536 25.5127C44.9885 25.2858 45.0283 25.0148 44.9641 24.7587C44.9 24.5026 44.7372 24.2823 44.5112 24.1458C44.2853 24.0093 44.0145 23.9677 43.758 24.03H43.757Z" fill="#473860"/>
									</g>
									<defs>
									<clipPath id="clip0_351_563">
									<rect width="32" height="32" fill="white" transform="translate(16 16)"/>
									</clipPath>
									</defs>
									</svg>																		
							</div>
							<div class="ml-6 text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm">Sahha is simple</div>
						</div>
	
						<ul role="list" class="space-y-6 text-gray-500 md:text-base text-lg">
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex">
									<img class="w-4 h-4 " src="../svgs/check-blue.svg" alt="">	
								</div>
								<p class="ml-4">
									Your users enable settings on their phones
								</p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-blue.svg" alt="">	
								</div>
								<p class="ml-4">
									Our algorithms analyze their behavior patterns
								</p>
							</li>
							<li class="flex items-top h-auto relative">
								<div class="mt-1 flex-shrink-0">
									<img class="w-4 h-4 flex-grow" src="../svgs/check-blue.svg" alt="">	
								</div>
								<p class="ml-4">
									You call our APIs and deliver timely, individualized care
								</p>
							</li>
							<li>
								<a href="#cta" class="md:inline-block hidden inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-[#473860] bg-[#6BD5FF] hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Start collecting simply
								</a>
							</li>
						</ul>
	
					</div>
				</dl>
				</div>
			</div>

		</div>
	
	</div>


	<!-- product  -->
	<!-- md:text-4xl text-2xl font-bold text-white tracking-tight sm:text-4xl -->
	
	<div class="max-w-6xl mx-auto px-4 sm:px-6 md:pt-16 pt-16 md:pb-16 pb-10">
		<div class="text-center">
			<h1 class="font-bold text-gray-700 tracking-tight text-2xl md:text-4xl max-w-2xl mx-auto text-center">
				Sahha is BADaaS
			</h1>
			<dt class="text-2xl text-gray-700 font-semibold tracking-tight">Behavioral Analytics Data as a Service</dt>
		</div>
		<!-- design  -->
		<div class="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-y-6 lg:gap-x-8 text-center">
			<!-- 1  -->
			<div class="px-6 py-8 md:px-8">
				<div class="mb-4 flex justify-center">
					<img src="../svgs/product/connect.svg" alt="">
				</div>
				<dt class="text-md leading-6 font-medium  mb-2">1. Collect</dt>
				<dd class="text-base text-gray-500">
					Use our Collect APIs to integrate reliable behavioral analytics into your services.
				</dd>
			</div>
			<!-- 2  -->
			<div class="px-6 py-8 md:px-8">
				<div class="mb-4 flex justify-center">
					<img src="../svgs/product/analyze.svg" alt="">
				</div>
				<dt class="text-md leading-6 font-medium  mb-2">2. Analyze </dt>
				<dd class="text-base text-gray-500">
					Use our Analyze APIs to accurately determine mental health indicators.
				</dd>
			</div>
			<!-- 3  -->
			<div class="px-6 py-8 md:px-8">
				<div class="mb-4 flex justify-center">
					<img src="../svgs/product/discover.svg" alt="">
				</div>
				<dt class="text-md leading-6 font-medium  mb-2">3. Discover </dt>
				<dd class="text-base text-gray-500">
					Use our Discover APIs to reveal necessary insights and patterns within communities.
				</dd>
			</div>
		</div>
	</div>



</div>