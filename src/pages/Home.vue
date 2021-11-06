<template>
  <div class="full-width center-content">
    <img src="static/img/logo.png" title="loading...">
    <WelcomeMessage name="World" />123
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/WelcomeMessage'

export default {
  components: {
    WelcomeMessage
  }
}
</script>
