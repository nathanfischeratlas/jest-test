<template>
  <div class="about">
    <h1>{{ description }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',

  data() {
    return {
      description: ''
    }
  }
}
</script>
