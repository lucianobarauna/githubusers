<template>
  <div class="home">
    <input v-model='gitId' type="text" @keyup.enter="enterApp">
    <p>ID: {{getIdGithubUser}}</p>
    <h1>Respostas da API:</h1>
    <pre>
      {{getGithubData}}
    </pre>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      gitId: ''
    }
  },
  components: {
  },
  computed: {
    ...mapGetters('githubusers', ['getIdGithubUser', 'getGithubData'])
  },
  methods: {
    ...mapActions('githubusers', ['enterIdGithub', 'fetchGithub']),
    enterApp () {
      this.enterIdGithub(this.gitId)
      let id = this.gitId
      this.fetchGithub().then((resp) => {
        if (resp.status === 200) {
          this.$router.push({ name: 'infouser', params: { id } })
        }
      })
    }
  }
}
</script>

<style lang="sass">
  .casa
    background-color:
</style>
