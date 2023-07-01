<script lang="ts">
	import type { User } from 'firebase/auth';
	import { user } from '../stores';
	let currentUser: User | undefined;
	user.subscribe((value) => {
		currentUser = value?.user;
	});
	$: {
	}
</script>

{#if currentUser !== undefined}
	<h1 class="pad">Welcome back {currentUser.displayName}!</h1>
{/if}

<style lang="scss">
</style>
