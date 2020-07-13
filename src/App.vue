<template>
<div class="wrapper">
  <div class="wrapper-content">
    <!-- header -->
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <body>
      <router-view></router-view>
    </body>
  </div>
</div>
</template>

<script>
import modals from "@/pages/Modals"
import auth from "@/pages/Auth"

export default {
  components: {
    modals,
    auth
  },
  data () {
    return {
      links: [
        { title: "Modals", url: "/" },
        { title: "Authorization", url: "/auth" }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

