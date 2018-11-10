<template>
  <div class="home">
    <h1>Respostas da API:</h1>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
  },
  mounted () {
    this.teste().then((resp) => console.log(resp))
  },
  computed: {
    ...mapGetters('githubusers', ['getReimbursementList'])
  },
  methods: {
    ...mapActions('githubusers', ['teste'])
  }
}
</script>
