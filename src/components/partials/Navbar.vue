<template>

<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">DEMO</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/hello' }">入口頁面</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/static' }">樣板頁面</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/chatroom' }">聊天室</router-link>
        </li>
    </ul>

  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      data: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
