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
    this.fetchReimbursementList()
  },
  computed: {
    ...mapGetters('mapwinners', ['getReimbursementList'])
  },
  methods: {
    ...mapActions('mapwinners', ['fetchReimbursementList'])
  }
}
</script>
