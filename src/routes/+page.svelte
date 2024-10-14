<script>
	export let data;
</script>

<a href="empty/">empty page</a>

<h1>Posts</h1>
<ul>
	{#each data.posts as post}
		<li>{post.title}</li>
	{/each}
</ul>
