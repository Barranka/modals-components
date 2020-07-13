<template>
  <div class="wrapper">
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
        </div>
        <!-- Modal Registr -->
        <button class="btn btnPrimary" @click="modalRegistr = !modalRegistr">Registration</button>
        <modalRegistr v-show="modalRegistr" @close="modalRegistr = false" @changeForm="[modalRegistr = false, modalAuth = true]"/>

        <!-- Modal Auth -->
        <button class="btn btnPrimary" @click="modalAuth = !modalAuth">Authorization</button>
        <modalAuth v-show="modalAuth" @close="modalAuth = false" @changeForm="[modalAuth = false, modalRegistr = true]"/>
      </section>
    </div>
  </div>
</template>

<script>
import modal from "@/components/UI/Modal.vue"
import modalAuth from "@/components/ModalAuth.vue"
import modalRegistr from "@/components/ModalRegistr.vue"

export default {
  components: {
    modal,
    modalAuth,
    modalRegistr
  },
  data () {
    return {
      modalRegistr: false,
      modalAuth: false,
      auth: {login:false, Registration: false}
    }
  },

}
</script>

<style lang="scss">
.container {
  flex: 0 0 auto;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
}
</style>