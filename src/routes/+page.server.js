export async function load({ fetch }) {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');

	return {
		posts: await response.json()
	};
}
