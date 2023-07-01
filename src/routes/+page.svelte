<script lang="ts">
	import { GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth';
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';
	import { auth } from '../firebase';
	import { user } from '../stores';
	import UsersignedIn from '../components/usersignedIn.svelte';
	import { Card, Button } from 'flowbite-svelte';
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

<body class="dark flex flex-col flex-nowrap bg-slate-900 p-5">
	<UsersignedIn />

	{#if currentUser === undefined}
		<Button on:click={googleSign} class="w-56">Sign in with google</Button>
	{/if}
	<div class="input-container pad">
		<form action="" method="post" class="flex flex-col">
			<label for="postForm">Title</label>
			<input type="text" name="title" id="title" placeholder="An awesome title..." />

			<label for="postForm">Write Something amazing!</label>
			<textarea name="postForm" id="postForm" cols="30" rows="3" placeholder="An awesome post..." />

			<input type="submit" value="Submit" class="submit" />
		</form>
	</div>
	<div
		class="-m-5 flex min-h-screen w-auto flex-wrap content-start justify-center gap-6 bg-slate-800"
	>
		{#each posts as post}
			<div class="p-5">
				<Card class="min-h-[200px] min-w-[340px]">
					<h5 class="mb-2 text-2xl font-bold tracking-tight">{post.title}</h5>
					<h2>{post.text}</h2>
					<h3>{post?.username ?? ''}</h3>
					<p class="date">{post.date}</p>
					<b>{post?.likes ?? ''}</b>
				</Card>
			</div>
		{/each}
	</div>
</body>

<style lang="postcss">
	* {
		color: theme(colors.gray.100);
	}
</style>
