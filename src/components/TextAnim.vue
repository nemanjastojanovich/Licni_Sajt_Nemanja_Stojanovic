<template>
  <section class="container">
    <h1 class="title">{{ whois[0] }}</h1>
  </section>
  <template></template>
</template>
<script>
export default {
  data() {
    return {
      whois: ['Frontend developer', 'Web Designer', 'Customer support manager']
    }
  },
  mounted() {
    window.setInterval(() => {
      this.pollPerson()
    }, 4000)
  },
  methods: {
    pollPerson() {
      const first = this.whois.shift()
      this.whois = this.whois.concat(first)
    }
  }
}
</script>
