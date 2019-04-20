<template>
  <div class="chatroom mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <div class="card card-outline-primary">
            <div class="card-block">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="輸入對話內容" @keyup.enter="submitMessage" v-model="inputMessage" :disabled="!username.length">
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button" :disabled="!username.length" @click="submitMessage()">送出</button>
                </span>
              </div>
              <ul class="list-unstyled row">
                <li class="media mt-3 col-lg-9 col-md-9 col-sm-12 col-xs-12" v-for="(item, key) in messages" :class="{ 'text-success offset-3': item.username == username }">
                  <img class="d-flex mr-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username != username">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">{{ item.username }}</h5>
                    <p>{{ item.message }}</p>
                  </div>
                  <img class="d-flex ml-3" width="50" height="50" src="http://lorempixel.com/50/50/sports" alt="" v-if="item.username == username">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
          <div class="card">
            <div class="card-header">
              你的資料
            </div>
            <div class="card-block">
              <div class="form-group">
                <label for="username">姓名</label>
                <input type="text" class="form-control" v-model="inputUsername" id="username" placeholder="輸入姓名">
                <small class="form-text text-muted">請輸入個人姓名開始使用聊天室</small>
              </div>
              <button type="button" class="btn btn-primary" @click="updateUsername()">送出</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


    var chartroomRef = firebase.database().ref('/chartroom/' );

    // console.log(chartroom);
    // console.log('chartroom');

export default {
  name: 'hello',
  data() {
    return {
      inputUsername: '',
      inputMessage: '',
      username: '',
      timestamp:'',
      messages: [
      ]
    }
  },
  methods: {
    //更新master名字
    updateUsername () {
      let self = this;
      self.username = self.inputUsername;
    },
    //push到頁面
    submitMessage () {
      let self = this;
      // self.messages.push({
      //   username: self.inputUsername,
      //   message: self.inputMessage
      // });
      let timestamp = Math.floor(Date.now()/1000)
      chartroomRef.child(timestamp).set({
        timestamp:timestamp,
        username: self.inputUsername,
        message: self.inputMessage
      })
      self.inputMessage = ''
    }
  },
  mounted() {
      let self = this;
      let messages=[];
    chartroomRef.orderByChild('timestamp').on('value', function(snapshot) {
      snapshot.forEach(element => {
          messages.unshift(element.val())
      });
      self.messages = messages;
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
