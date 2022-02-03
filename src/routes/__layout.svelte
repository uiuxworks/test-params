<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import SignupForm from '../components/SignupForm.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import NavTest from '../components/NavTest.svelte';

</script>

<!-- src/routes/__layout.svelte -->

<Navbar />
<!-- <NavTest /> -->
<slot />

{#if $page.url.pathname === '/privacy-policy'}

 {:else if $page.url.pathname ===  '/terms'}
 
 {:else if $page.url.pathname ===  '/about'}
 
 
{:else}

<SignupForm />
{/if}

<Footer />
