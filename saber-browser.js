import Vue from 'vue';
// Vue.component('v-icon', Icon)
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub,
			faLinkedin,
			faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
