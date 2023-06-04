<script lang="ts">
	import { GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth';
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';
	import { auth } from '../firebase';
	import { user } from '../stores';
	import UsersignedIn from '../components/usersignedIn.svelte';
	export let form;
	export let data;
	const provider = new GoogleAuthProvider();
	provider.addScope('profile');
	provider.addScope('email');
	let posts: any = [];
	let currentUser: User | undefined;
	user.subscribe((value) => {
		currentUser = value?.user;
	});
	$: {
		if (data !== null) {
			if (form === null) {
				posts = data?.posts ?? [];
			} else {
				posts = form?.posts ?? [];
			}
		}
	}
	function googleSign() {
		return signInWithPopup(auth, provider)
			.then((userCredential) => {
				user.set(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	}
</script>

<body>
	<UsersignedIn />
	<div class="title-container pad">
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</div>
	{#if currentUser === undefined}
		<button on:click={googleSign}>Sign in with google</button>
	{/if}
	<div class="input-container pad">
		<form action="" method="post">
			<label for="postForm">Title</label>
			<input type="text" name="title" id="title" placeholder="An awesome title..." />

			<label for="postForm">Write Something amazing!</label>
			<textarea name="postForm" id="postForm" cols="30" rows="3" placeholder="An awesome post..." />

			<input type="submit" value="Submit" class="submit" />
		</form>
	</div>
	{#each posts as post}
		<div class="postCard pad">
			<h1>{post.title}</h1>
			<h2>{post.text}</h2>
			<h3>{post?.username ?? ''}</h3>

			<p class="date">{post.date}</p>
			<b>{post?.likes ?? ''}</b>
		</div>
	{/each}
</body>

<style lang="scss">
	@import '../styles/styles.scss';
</style>
