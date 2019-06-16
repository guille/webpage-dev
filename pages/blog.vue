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

<style scoped>
article {
	/*Since we're using a short description and no subtitle,
	get rid of the extra space, This doesn't work with scoped, but without it
	it leaks into the other pages*/
	padding-top: 0;
}
</style>
