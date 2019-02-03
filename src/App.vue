<template>
	<div id="app">
		<Navbar></Navbar>

		<!-- Header -->
		<section class="hero  is-fullheight is-fullheight-with-navbar">
			<div class="hero-body">
				<div class="container level">
					<div>
						<p class="subtitle is-inline is-3">
							Hi, I am
						</p>
						<p class="subtitle is-inline has-text-info is-3">
							Guillermo Rodríguez,
						</p>
						<p class="subtitle is-inline is-3">
						a Software Engineer based in Barcelona, Spain.<br/> Currently working at Volta Networks.
						</p>
						
					</div>
					<figure class="image is-one-third">
						<img src="./assets/cloud.svg">
					</figure>
				</div>
				</div>
				<div id="contact" class="has-text-centered is-inline-block">
					<a href="https://github.com/guille" class="has-text-link">
						<v-icon name="brands/github" scale="2" />
					</a>
					<a href="https://www.linkedin.com/in/guille-rodriguez/">
						<v-icon name="brands/linkedin" scale="2" />
					</a>
					<a href="mailto:guillerg96@gmail.com">
						<v-icon name="envelope" scale="2" />
					</a>
			</div>
		</section>

		<!-- Projects -->
		<section class="section">
			<div class="container">
				<h2 class="subtitle is-3" id="projects">Projects</h2>
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

		<!-- Experience -->
		<Experience></Experience>
		
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Project from './components/Project.vue'
import projects from './assets/projects.json'
import Experience from './components/Experience.vue'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/envelope'
import Icon from 'vue-awesome/components/Icon'

// import Sidebar from './components/Sidebar.vue'

export default {
	name: 'app',
	components: {
		Project,
		Navbar,
		Experience,
		'v-icon': Icon,
	},
	data() {
		return {
			projects: projects
		}
	}
}
</script>

<style>
@import '~bulma/css/bulma.css';
#app {
	font-family: OpenSans, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: #eaeaea;
	/*line-height: 1.5;*/
}

#contact {
	margin-bottom: 10px;
}

#contact .fa-icon:hover {
  opacity: 0.5;
  -webkit-transition: opacity .5s;
  -moz-transition: opacity .5s;
  transition: opacity .5s;
}
.fa-icon {
  margin: 0 10px;
}
</style>