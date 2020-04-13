<template>
	<div class="index container mt-5">
		<h3
			class="text-success text-center">
			welcome {{this.name}}, start chatting
		</h3>
		<b-card class="chat shadow rounded-0">
			<div class="messages" v-chat-scroll>

				<b-card class="message mb-1" :class="{self: msg.name===name}" v-for="msg
				 in
				messages" :key="msg.id">
					<b-media>
					<span class="name text-success font-weight-bold mr-1"
					:class="{'text-danger': msg.name===name}">{{msg
						.name}}</span>
						@
						<span class="time small lead">{{msg.timestamp}}</span>
						<p class="mb-0">{{msg.content}}</p>
					</b-media>
				</b-card>

			</div>

			<template v-slot:footer>
				<NewMessage :name="name" />
			</template>
		</b-card>
		<small class="text-center d-block">
			Developed by: Mahmoud Hassan
			<br>
			<a href="https://www.facebook.com/Mhmod.Hsn55">My Facebook</a>
		</small>
	</div>
</template>

<script>
  import db from '@/firebase/init'
  import NewMessage from '@/components/NewMessage'
	import moment from 'moment'

  export default {
    name: "Chat",
	  components:{
      NewMessage,
	  },
	  data(){
      return{
        messages: []
      }
	  },
	  props:['name'],
		created() {
      let ref = db.collection('messages').orderBy('timestamp')

			ref.onSnapshot(snapshot=>{
        snapshot.docChanges().forEach(change=>{
          if (change.type==='added'){
            let doc = change.doc
            this.messages.push({
	            id: doc.id,
	            name: doc.data().name,
	            content: doc.data().content,
	            timestamp: moment(doc.data().timestamp).calendar()
            })
          }
        })
			})
    }
  }
</script>

<style scoped>
	.index{
		/*height: calc(100% - 200px);*/
	}
	.messages{
		max-height: 400px;
		overflow-y: scroll;
		scrollbar-color: #888 #aaa;
		scrollbar-width: thin;
	}
	::-webkit-scrollbar{
		width: 3px;
	}
	::-webkit-scrollbar-track{
		background: #ddd;
	}
	::-webkit-scrollbar-thumb{
		background: #aaa;
	}
	.message .card-body{
		padding: 5px 10px;
		background: rgba(115, 255, 130, 0.2);
	}
	.message{
		max-width: calc(90% - 150px);
		width: fit-content;
		min-width: 200px;
		width: -moz-fit-content;
		clear: both;

		/* Required for text-overflow to do anything */
		overflow-x: hidden;
	}

	.message.self{
		background: rgba(255, 137, 137, 0.49);
		float: right;
		text-align: right;

	}
</style>