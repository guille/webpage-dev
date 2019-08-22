<template>
	<div id="landing">
		<section class="hero">
			<div class="hero-body">
				<div class="header-img">
					<img class="header-img-div" src="../assets/cloud.svg">
				</div>
				<div>
					<h3 class="subtitle is-inline">
						Hi, I am
					</h3>
					<h3 class="subtitle my-name is-inline">
						Guillermo Rodríguez,
					</h3>
					<h3 class="subtitle is-inline">
					a Software Engineer based in Barcelona, Spain.<br/><br/> Currently working at Volta Networks.
					</h3>
				</div>
			</div>
			<div id="contact">
				<a href="https://github.com/guille" target="_blank" rel="noopener">
					<font-awesome-icon class="fa-icon" :icon="['fab', 'github']" size="4x" />
				</a>
				<a href="https://www.linkedin.com/in/guille-rodriguez/" target="_blank" rel="noopener">
					<font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin']" size="4x" />
				</a>
				<a href="mailto:guillerg96@gmail.com" target="_blank" rel="noopener">
					<font-awesome-icon class="fa-icon" :icon="['far', 'envelope']" size="4x" />
				</a>
			</div>
		</section>
	</div>
</template>

<script>
export const attributes = {
	layout: 'page'
}

export default {
	name: 'app',
}
</script>

<style scoped>
#landing {
	font-family: OpenSans, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	position: absolute;
}
#contact {
    display: flex;
    justify-content: space-between;
	margin-bottom: 10px;
	color: var(--accentColor);
	padding-top: 2rem;
	padding-right: 10%;
	padding-left: 10%;
	text-align: center;
}
#contact .fa-icon:hover {
  opacity: 0.5;
  -webkit-transition: opacity .5s;
  -moz-transition: opacity .5s;
  transition: opacity .5s;
}
.is-inline {
	display: inline;
}
.my-name {
	color: var(--accentColor);
}
.header-img {
	width: 40%;
	display: block;
	margin: auto;
}
.header-img-div {
	border-radius: 50%;
	padding-bottom: 10%;
}
.hero {
	min-height: 100%;
	display: flex;
	flex-direction: column;
	max-width: 75%;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
}
.hero-body{
	margin-bottom: 5%;
}
footer {
	display: none;
}
</style>
