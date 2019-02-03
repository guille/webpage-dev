<template>
	<section class="section">
		<div class="container">
			<h2 class="subtitle is-3" id="experience">Experience</h2>
			<div class="columns is-multiline is-vcentered content">
					<div class="column is-one-fifth">
						<figure class="image">
							<img src="./../assets/volta.jpg" class="is-rounded">
						</figure>
					</div>
					<div class="column is-four-fifths">
						<strong>Volta Networks</strong>, Junior Software Engineer <small class="is-pulled-right">Sep 2018 - Current</small>
						<br>
						<ul>
							<li>Engineered and maintained major features of Volta's customer-facing gRPC API using Python.</li>
							<li>Developed internal-facing API to communicate services through ZeroMQ using Cap'n Proto serialization.</li>
						</ul>
					</div>
					<div class="column is-one-fifth">
						<figure class="image">
							<img src="./../assets/ovi.png" class="is-rounded">
						</figure>
					</div>
					<div class="column is-four-fifths">
						<strong>Universidad de Oviedo</strong>, Software Engineering BSc. <small class="is-pulled-right">2014 - 2018</small>
						<br>
						<ul>
							<li>Bilingual program: English and Spanish</li>
							<li>Grade: 8.0/10</li>
							<li>Bachelor Final Project: <i>Implementation of the Raft consensus algorithm with the .NET Core platform</i>
								<ul><li>Grade: 10/10</li></ul>
							</li>
						</ul>
					</div>
					<div class="column is-one-fifth">
						<figure class="image">
							<img src="./../assets/gam.png" class="is-rounded">
						</figure>
					</div>
					<div class="column is-four-fifths">
						<strong>GAM Rentals</strong>, Intern <small class="is-pulled-right">Jan 2018 - Mar 2018</small>
						<br>
						<ul>
							<li>Developed a Ruby on Rails web application that their drones division used to manage and keep track of their drones inventory, pilots and projects.</li>
						</ul>
					</div>
			</div>
		</div>

	</section>
</template>


<script>
export default {
	name: 'Experience'
}


</script>

<style scoped>

figure {
	/*border: 2px solid black;*/
}

</style>

