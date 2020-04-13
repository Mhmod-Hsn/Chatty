<template>
  <div class="index container mt-5">
    <b-alert variant="danger" :show="!!feedback" dismissible>{{feedback}}</b-alert>

    <b-card class="shadow rounded-0">
      <h1
        class="text-success text-center">
        Welcome
      </h1>

      <b-form @submit.prevent="enterChat">
        <b-form-group label="Your Name:" label-for="name">
          <b-form-input
            id="name"
            v-model="name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button
            class="btn-lg rounded-0"
            type="submit"
            variant="success">
            Enter Chat
          </b-button>
        </div>
      </b-form>

    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if (this.name){
        this.$router.push({name: 'Chat',params: {name:this.name}})
      } else {
        this.feedback='Enter Name to continue'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
