<template>
	<div class="new-message">
		<form @submit.prevent="addMessage">
			<b-input-group class="mb-2 position-relative">
				<b-form-input class="new-message-input"
				              v-model="newMessage"
				              placeholder="Message"
											autocomplete="false">
				</b-form-input>
				<b-input-group-append >
					<b-icon icon="triangle-half"
					        class="send-msg-btn rounded-circle bg-success p-2"
					        variant="light"
					        rotate="90"
					        font-scale="2"
									@click="addMessage">
					</b-icon>
				</b-input-group-append>
			</b-input-group>
			<b-alert variant="white" class="text-danger" :show="!!feedback" >
				<b-icon icon="exclamation-triangle"></b-icon>
				{{feedback
				}}</b-alert>

		</form>
	</div>
</template>

<script>
	import db from '@/firebase/init'

  export default {
    name: "NewMessage",
    data(){
      return{
        newMessage: null,
        feedback: null
      }
    },
    props:['name'],
    methods:{
      addMessage(){
        if (this.newMessage){
					db.collection('messages').add({
						name: this.name,
						content: this.newMessage,
						timestamp: Date.now()
					})
						.then(()=>{
              this.newMessage = null
              this.feedback = null
            })
						.catch(e=>{
						  console.log('there\'s an error '+e)
						})
        } else{
          this.feedback = 'you must enter a message to send one'
        }
      }
	  }
  }
</script>

<style scoped>
	.send-msg-btn{
		position: absolute;
		right: 3px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 99;
		cursor: pointer;
	}
	.new-message-input{
		border-top-right-radius: 20px!important;
		border-bottom-right-radius: 20px!important;
	}
</style>