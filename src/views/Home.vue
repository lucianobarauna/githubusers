<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Respostas da API:</h1>
    <h2>Corruptos</h2>
    <p>{{dados}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      dados: ''
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios
        .get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement/?state=RJ')
        .then((resp) => {
          this.dados = resp
        })
    }
  }
}
</script>
