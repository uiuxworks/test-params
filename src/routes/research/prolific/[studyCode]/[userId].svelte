<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let studyCode = '';
	let userId = '';
	let href = '';

	// navbar
	const classCurrent = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';
	const classNotCurrent =
		'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

	const classCurrentMobile =
		'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium';
	const classNotCurrentMobile =
		'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium';

	let expanded = false;

	onMount(() => {
		studyCode = $page.params.studyCode;
		userId = $page.params.userId;
		console.log(studyCode);
		console.log(userId);
		var dynamicValue = '';
		if (studyCode && userId) {
			console.log('woohoo');
			dynamicValue = '?studyCode=' + studyCode + '&userId=' + userId;
		}
		let escapedValue = escape(dynamicValue);
		href =
			'https://sahhahealth.page.link/?link=https://sahha.ai/research' +
			escapedValue +
			'&isi=1592241897&ibi=com.sahha.ios&apn=com.sahha.android';
	});
</script>

<!-- navbar    -->
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
					<a href="/" rel="external">
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

<div class="bg-sahha-900">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-16">
		<!-- heading -->
		<div class="lg:pb-8 pb-10">
			<h1
				class="text-2xl font-bold text-white text-lg font-medium tracking-tight sm:text-4xl text-center max-w-2xl mx-auto"
			>
				Sahha Research Project (Prolific)
				{studyCode} - Android Cohort Part 1
			</h1>
		</div>

		<div class="flex justify-center">
			<svg
				width="600"
				height="218"
				viewBox="0 0 600 218"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5H580C590.77 0.5 599.5 9.23045 599.5 20V217.5H0.5V20Z"
					fill="#292836"
					stroke="#333141"
				/>
			</svg>
		</div>
	</div>
</div>

<div class="space-y-10 md:py-24 py-16 px-6">
	<!-- intro text  -->
	<div class="max-w-2xl mx-auto">
		<div class="space-y-6 text-gray-500 md:text-base text-lg">
			<div>
				<h1 class="text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm mb-2">
					Purpose
				</h1>
				<p>
					An exploratory study in understanding which passively observed behaviors collected from a
					smartphone are correlated with depression and its severity.
				</p>
			</div>
			<div>
				<h1 class="text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm mb-2">
					Description
				</h1>
				<p>
					A clinical trial using a smartphone app to collect behavioral and survey data from users.
					The survey data will be used as a baseline to benchmark the behavioral data and track any
					changes or deviations over time and possible correlations between behaviors and the
					psychometric test.
				</p>
			</div>
			<div class="space-y-2">
				<dt>Please note: The app will track and collect this data regularly:</dt>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>Phone locks / unlocks (as boolean, with timestamp)</dd>
				</dl>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>Sleep (as Minutes slept)</dd>
				</dl>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>
						Device Activity (as minutes spent on top social apps including: Facebook, Messenger,
						Youtube, TikTok, Instagram, Snapchat)
					</dd>
				</dl>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>Pedometer (as step count)</dd>
				</dl>
			</div>
		</div>
	</div>
	<!-- Get Started  -->
	<div class="max-w-2xl mx-auto flex">
		<div class="mr-7 -ml-20 py-2 mt-1">
			<!-- <div class="bg-gray-200 h-12 w-12 rounded-full"></div> -->
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="23.9999" cy="23.9999" r="23.9999" fill="#D1F5E5" />
				<path
					opacity="0.35"
					d="M29.8113 31.4112L28.8529 28.5791L34.8246 22.6074C36.2701 21.1619 37.0826 19.2011 37.0815 17.1567L37.0826 14.3709C37.0826 12.6802 35.7118 11.3093 34.0211 11.3093L31.2341 11.3093C29.1886 11.3093 27.2289 12.1207 25.7834 13.5662L19.8118 19.5379L16.9796 18.5795C15.5714 18.1026 14.0198 18.3072 12.7822 19.131L10.8113 20.4465C9.33869 21.4286 9.13187 23.5115 10.3829 24.7626L23.6283 38.0079C24.8793 39.2589 26.9633 39.0532 27.9454 37.5807L29.2598 35.6086C30.0836 34.3711 30.2882 32.8194 29.8113 31.4112Z"
					fill="#46615C"
				/>
				<path
					d="M27.1769 21.2139C28.4252 22.4622 30.4492 22.4622 31.6975 21.2139C32.9458 19.9655 32.9458 17.9416 31.6975 16.6933C30.4492 15.445 28.4252 15.445 27.1769 16.6933C25.9286 17.9416 25.9286 19.9655 27.1769 21.2139Z"
					fill="#46615C"
				/>
				<path
					d="M13.6152 27.9948C12.5043 29.1057 11.9403 31.3061 11.6533 33.259C11.3515 35.3034 13.0874 37.0393 15.133 36.7387C17.0848 36.4505 19.2852 35.8866 20.3961 34.7756L13.6152 27.9948Z"
					fill="#46615C"
				/>
			</svg>
		</div>
		<div class="space-y-6 text-gray-500 md:text-base text-lg">
			<div>
				<h1 class="text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl max-w-sm pt-4">
					Get Started
				</h1>
			</div>
			<!-- 1. Read Research Information Sheet (if you haven’t)  -->
			<div>
				<h2 class="text-xl font-bold text-gray-700 tracking-tight sm:text-xl mb-2">
					1. Read Research Information Sheet (if you haven’t)
				</h2>
				<p>
					If you are participating, or plan to participate in this research project, please read and
					understand these terms.
				</p>
			</div>
			<div class="flex justify-between">
				<div>
					<a
						href="https://sahha.notion.site/Research-Information-Sheet-1006-a162011d249e42f7a08d8a8069b2b41c"
						class="flex items-center bg-green-100 hover:bg-green-200 py-2 px-4 rounded-lg"
					>
						<span class="mr-4">
							<svg
								width="18"
								height="23"
								viewBox="0 0 18 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.35"
									d="M0 19.125V3.375C0 1.51088 1.51088 0 3.375 0H11.25L18 6.75V19.125C18 20.9891 16.4891 22.5 14.625 22.5H3.375C1.51088 22.5 0 20.9891 0 19.125Z"
									fill="#46615C"
								/>
								<path
									d="M11.25 4.5V0L18 6.75H13.5C12.2569 6.75 11.25 5.74313 11.25 4.5Z"
									fill="#46615C"
								/>
								<path
									d="M12.375 12.375H5.625C5.00288 12.375 4.5 11.871 4.5 11.25C4.5 10.629 5.00288 10.125 5.625 10.125H12.375C12.9971 10.125 13.5 10.629 13.5 11.25C13.5 11.871 12.9971 12.375 12.375 12.375Z"
									fill="#46615C"
								/>
								<path
									d="M10.125 16.875H5.625C5.00288 16.875 4.5 16.371 4.5 15.75C4.5 15.129 5.00288 14.625 5.625 14.625H10.125C10.7471 14.625 11.25 15.129 11.25 15.75C11.25 16.371 10.7471 16.875 10.125 16.875Z"
									fill="#46615C"
								/>
							</svg>
						</span>
						<span class="flex-auto">
							Research Information Sheet - {studyCode}
						</span>
					</a>
				</div>
				<!-- <div>link</div> -->
			</div>
			<hr />
			<!-- 2. Download the Research App  -->
			<div>
				<h2 class="text-xl font-bold text-gray-700 tracking-tight sm:text-xl mb-2">
					2. Download the Research App
				</h2>
				<p>Download the Sahha Research App (click/tap below)</p>
			</div>
			<!-- cta button to appstore/playstore  -->
			<a
				{href}
				class="inline-flex md:w-auto w-full items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-[#fff] bg-[#1C1B26] hover:bg-[#191726] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				<span class="mr-3">
					<svg
						width="25"
						height="29"
						viewBox="0 0 25 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							opacity="0.35"
							d="M20.2738 28.5476H9.89289C7.74273 28.5476 6.00003 26.8049 6.00003 24.6547V3.89286C6.00003 1.7427 7.74273 0 9.89289 0H20.2738C22.424 0 24.1667 1.7427 24.1667 3.89286V24.6547C24.1667 26.8049 22.424 28.5476 20.2738 28.5476Z"
							fill="#94E2BF"
						/>
						<path
							d="M12 10.869C12 10.099 12.8097 9.7106 13.2871 10.2523L16.6768 14.1091C17.1077 14.5992 17.1077 15.4009 16.6768 15.8909L13.2871 19.7478C12.8097 20.2895 12 19.9011 12 19.1294L12 10.869Z"
							fill="#94E2BF"
						/>
						<path
							d="M13.3095 13L1.69052 13C0.757354 13 -1.3568e-07 13.896 -8.74228e-08 15C-3.91654e-08 16.104 0.757354 17 1.69052 17L13.3095 17C14.2426 17 15 16.104 15 15C15 13.896 14.2426 13 13.3095 13Z"
							fill="#94E2BF"
						/>
					</svg>
				</span>
				Download Sahha App
			</a>
			<!-- setup instructions  -->
			<div class="space-y-3 ">
				<dt>Set up instructions:</dt>
				<dl class="flex ml-3">
					<a
						href="https://sahha.notion.site/Tap-here-for-set-up-pictures-aee79168bbd14fcc80585b38afc7e0d8"
						class="flex items-center underline"
					>
						<dt class="mr-3">
							<svg
								width="24"
								height="19"
								viewBox="0 0 24 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.35"
									d="M20.4 19H3.6C1.6116 19 0 17.4052 0 15.4375V3.5625C0 1.59481 1.6116 0 3.6 0H20.4C22.3884 0 24 1.59481 24 3.5625V15.4375C24 17.4052 22.3884 19 20.4 19Z"
									fill="#46615C"
								/>
								<path
									d="M18 7C19.3807 7 20.5 5.99264 20.5 4.75C20.5 3.50736 19.3807 2.5 18 2.5C16.6193 2.5 15.5 3.50736 15.5 4.75C15.5 5.99264 16.6193 7 18 7Z"
									fill="#46615C"
								/>
								<path
									d="M2.5 14.3125C2.5 14.9632 3.032 15.5 3.6875 15.5H20.3125C20.968 15.5 21.5 14.9727 21.5 14.3125C21.5 12.6928 19.4955 10.75 18.5312 10.75C17.567 10.75 16.693 11.9375 14.375 11.9375C11.4751 11.9375 9.625 6 7.25 6C4.875 6 2.5 11.1799 2.5 14.3125Z"
									fill="#46615C"
								/>
							</svg>
						</dt>
						<dd>Click here for setup pictures</dd>
					</a>
				</dl>
				<!-- 1  -->
				<dl class="flex ml-3">
					<dt class="mr-3">1.</dt>
					<dd>Once installed, open the app</dd>
				</dl>
				<!-- 2  -->
				<dl class="flex ml-3">
					<dt class="mr-3">2.</dt>
					<dd>
						Tap “Join a study” and enter a code, <span
							class="py-1.5 text-sm bg-[#E8E1FE] font-medium text-[#473860] px-1.5 rounded-lg"
							>please enter: {studyCode}</span
						>
					</dd>
				</dl>
				<!-- 3  -->
				<dl class="flex ml-3">
					<dt class="mr-3">3.</dt>
					<dd>
						Create an account, please enter your <span
							class="py-1.5 text-sm bg-[#E8E1FE] font-medium text-[#473860] px-1.5 rounded-lg"
							>ProlificID as the username '{userId}'</span
						>
						and a password of your choice (please record both)
					</dd>
				</dl>
				<!-- 4  -->
				<dl class="flex ml-3">
					<dt class="mr-3">4.</dt>
					<dd>Enter Demographic information</dd>
				</dl>
				<!-- 5  -->
				<dl class="ml-3 space-y-2">
					<div class="flex">
						<dt class="mr-3">5.</dt>
						<dd>Enter emergency contact phone number (optional)</dd>
					</div>
					<!-- inner list item   -->
					<dl class="ml-8 flex max-w-xl">
						<dt class="mr-4">-</dt>
						In case you score highly on the PHQ9 survey later in the app - the app will prompt you to
						call this person
					</dl>
					<!-- inner list item   -->
					<dl class="ml-8 flex">
						<dt class="mr-4">-</dt>
						<span class="py-1.5 bg-[#E8E1FE] font-medium text-[#473860] px-1.5 rounded-lg text-sm"
							>WE WILL NOT CONTACT THIS PERSON ON YOUR BEHALF.</span
						>
					</dl>
				</dl>
				<!-- 6  -->
				<dl class="ml-3 space-y-2">
					<div class="flex ">
						<dt class="mr-3">6.</dt>
						<dd>Give permission to access Device & Physical Activity data</dd>
					</div>
					<div class="ml-8 flex">
						<dt class="mr-4">-</dt>
						<div class="py-1.5 bg-[#E8E1FE] font-medium text-[#473860] px-1.5 text-sm rounded-lg">
							IMPORTANT, PLEASE CONNECT BOTH
						</div>
					</div>
				</dl>
				<!-- 7  -->
				<dl class="ml-3">
					<div class="flex ">
						<dt class="mr-3">7.</dt>
						<dd>Fill out the first PHQ9</dd>
					</div>
					<div class="bg-green-200 text-green-700 ml-6 text-sm font-medium rounded-lg mt-2 p-4">
						All done! Please keep the app installed on your device for participation in the study.
					</div>
				</dl>
				<!-- extra  help-->
				<dl class="ml-3 pt-2">
					<div>If you have any issues during the setup please try one of these fixes:</div>
					<a
						href="https://www.notion.so/Android-Fixes-e9dcaca548794267938852c2c75b369a
					"
						class="text-sm text-emerald-700 underline"
						>https://www.notion.so/Android-Fixes-e9dcaca548794267938852c2c75b369a</a
					>
				</dl>

				<hr />
			</div>
			<!--end section 2 divider  -->

			<!-- 3. Complete Submission -->
			<div class="py-4">
				<h2 class="text-xl font-bold text-gray-700 tracking-tight sm:text-xl mb-2">
					3. Complete Submission
				</h2>
				<div>
					Please fill out this form:
					<a href="https://forms.gle/mydJc9btezdaMnHb8" class="text-sm text-emerald-700 underline"
						>https://forms.gle/mydJc9btezdaMnHb8</a
					>
				</div>
			</div>
			<hr />
			<!--end section 3 divider  -->
		</div>
	</div>

	<div class="max-w-2xl mx-auto flex">
		<div class="mr-7 -ml-20 py-2 -mt-4">
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="23.9999" cy="23.9999" r="23.9999" fill="#D1F5E5" />
				<path
					d="M14.1 19H16.9C18.0592 19 19 19.8788 19 20.9615V34.0385C19 35.1212 18.0592 36 16.9 36H14.1C12.9408 36 12 35.1212 12 34.0385V20.9615C12 19.8788 12.9408 19 14.1 19Z"
					fill="#46615C"
				/>
				<path
					d="M29.7267 36H21.5714C20.1507 36 19 34.8352 19 33.3972V20.5809C19 19.6165 19.3523 18.686 19.99 17.9689L23.1464 14.42L23.6337 11.4502C23.8535 10.1123 25.4273 9.54358 26.4507 10.4194C27.28 11.1287 28 12.1815 28 13.699C28 15.9973 26.7143 19.0816 26.7143 19.0816H33.1428C35.2733 19.0816 37 20.8294 37 22.9859V24.7194C37 25.292 36.8753 25.8581 36.6348 26.3761L33.2187 33.7525C32.5835 35.1242 31.2233 36 29.7267 36Z"
					fill="#BDC7C5"
				/>
			</svg>
		</div>
		<div class="space-y-6 text-gray-500 md:text-base text-lg">
			<!-- 4. All done! -->
			<div class="">
				<h2 class="text-xl font-bold text-gray-700 tracking-tight sm:text-xl mb-2">4. All done!</h2>
				<p>You will then be invited to join the next study in 7 days.</p>
			</div>
			<div class="space-y-2">
				<dt>You will receive a notification from the app to complete a new PHQ9 in 7 days</dt>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>
						If you do not receive a notification, open the app up in 7 days and press the button to
						complete the next PHQ9
					</dd>
				</dl>
				<dl class="flex ml-3">
					<dt class="mr-3">-</dt>
					<dd>
						Please keep the Sahha Research App installed on your device in order to participate in
						the study correctly.
					</dd>
				</dl>
			</div>
		</div>
	</div>
	<!-- <a {href}>Open this link on your mobile device to install the Sahha app </a> -->
</div>
