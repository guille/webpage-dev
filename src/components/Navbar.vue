<template>
    <!-- Navigation bar -->
  <nav class="navbar is-info is-fixed-top">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" data-target="navbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="#projects">
          <v-icon name="th-list" />
          <span>Projects</span>
        </a>
        <a class="navbar-item" href="#experience">
          <v-icon name="file-alt" />
          <span>Experience</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/th-list'
import 'vue-awesome/icons/file-alt'
import 'vue-awesome/icons/info'
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'Navbar',
  components: {
    'v-icon': Icon,
  },
}

// Toggle navbar in mobile when tapped
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurger = document.querySelector('.navbar-burger');

  if ($navbarBurger) {

    // Add a click event
    $navbarBurger.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = $navbarBurger.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $navbarBurger.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  }
});

</script>
