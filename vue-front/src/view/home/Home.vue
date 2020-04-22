<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ subtitle }}</h2>

    <input type="text" v-model="subtitle">
    <button @click="resetSubtitle">Reset subtitle</button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data: function() {
    return {
      subtitle: 'Vue'
    }
  },
  methods: {
    resetSubtitle() {
      this.subtitle = 'vue'
    }
  }
}
</script>

<style>

</style>