<template>
  <div>
    <h1>Informações</h1>
    <pre>
      {{getGithubData}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('githubusers', [
      'getGithubData'
    ])
  }
}
</script>

<style scoped>

</style>
