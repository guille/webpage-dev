<template>
</template>

<script>
export const attributes = {
  layout: 'default',
  injectAllPosts: true,
  title: "Blog entries",
  // subtitle: 'll',
  description: 'Algorithms, data structures and other mythical creatures'
}

export default {}
</script>

<style>
article.content {
	/*Since we're using a short description and no subtitle,
	get rid of the extra space,*/
	padding-top: 0;
}
footer {
	display: none;
}
</style>
