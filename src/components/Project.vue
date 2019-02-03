<template>
  <div class="project">
    <div>
        <h3 class="subtitle is-5">{{ display }}</h3>
          <span class="tag is-medium is-info" v-for="lang in languages" :key="lang.id">
            <i>{{ lang }}</i>
          </span>
      </div>
    <p>
      {{ description }}
    </p>
    <a :href="url" target="_blank" rel="noopener">Visit project</a>
    
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['display', 'languages', 'description', 'url']
}
</script>

<style scoped>
.project {
  margin-bottom: 50px;
}

.tag {
  margin-top: -1rem;
  margin-right: .75rem;
  margin-bottom: .75rem;
}

a {
  color: #e81c4f;
  text-decoration: underline dotted;
}
</style>
