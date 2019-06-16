<template>
	<div id="app">
		<!-- Experience -->
		<Experience></Experience>

		<hr />

		<!-- Projects -->
		<section>
			<div class="container">
				<h1 class="subtitle is-3" id="projects">Projects</h1>
				<p>Most of the things I develop on my personal time are open-sourced. A non-exhaustive list of Github projects and old coursework projects is shown below.</p>
				<Project
					v-for="project in projects"
					:key="project.id"
					:display="project.display"
					:languages="project.languages"
					:description="project.description"
					:url="project.url"
				>
				</Project>
			</div>
		</section>

		<hr />
		<section>
			<div class="container">
				<h1>Languages</h1>
				<ul>
					<li>Spanish: Mothertongue</li>
					<li>English: Fluent (C1 CAE)</li>
					<li>German: Basic</li>
					<li>French: Basic</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import Project from '../components/Project.vue'
import projects from '../assets/projects.json'
import Experience from '../components/Experience.vue'

export const attributes = {
	layout: 'page'
}

export default {
	name: 'app',
	components: {
		Project,
		Experience,
	},
	data() {
		return {
			projects: projects
		}
	}
}
</script>

<style>
hr {
	border: 0;
	height: 1px;
	width: 100%;
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
#app {
	font-family: OpenSans, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	max-width: 75%;
	margin-right: auto;
	margin-left: auto;
}
.is-inline {
	display: inline;
}
</style>
