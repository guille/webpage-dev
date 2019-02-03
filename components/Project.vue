<template>
  <div class="project">
    <div>
        <h3 class="subtitle is-5">{{ display }}</h3>
          <span class="tag is-medium" v-for="lang in languages" :key="lang.id">
            <em>{{ lang }}</em>
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
  border-left: 5px solid var(--accentColor);
  padding-left: 15px;

}

.tag {
  background-color: var(--accentColor);
  color: white;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  margin-bottom: 12px;
  margin-right: 12px;
  margin-top: -16px;
  padding-left: 12px;
  padding-right: 12px;
}

a {
  color: #e81c4f;
  text-decoration: underline dotted;
}
</style>
