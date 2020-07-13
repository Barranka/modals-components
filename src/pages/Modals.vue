<template>
  <div class="wrapper">
    <div class="wrapper-content wrapper-content--fixed">

    <!-- body -->
      <section>
        <div class="container">

          <!-- First modal -->
          <button class="btn btnPrimary" @click="controlModalWindow(true)">Show first modal</button>
          <modal title="First modal" v-show="modalFirst" @close="controlModalWindow(false)">
            <div slot="body">
              <p class="slot">Hello! It's my modal window and you can use in in your future applications. Have a nice day!</p>
              <button class="btn btnPrimary" @click="controlModalWindow(false)">Well Done!</button>
            </div>
          </modal>

          <!-- Second modal -->
          <button class="btn btnPrimary" @click=" modalSecond.show = !modalSecond.show ">Show modal with form</button>
          <modal
            title="Modal with form"
            v-show="modalSecond.show"
            @close="clearForm()">
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Name:</label>
                <input type="text" required v-model="modalSecond.name" />
                <label>Email:</label>
                <input type="email" required v-model="modalSecond.email" />
                <button class="btn btnPrimary">Submit</button>
              </form>
            </div>
          </modal>

          <!-- Modal with validate -->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with form + validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false"/>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modal from "@/components/UI/Modal.vue"
import modalValidate from "@/components/ModalValidate.vue"

export default {
  components: {
    modal,
    modalValidate
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    };
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.clearForm()
    },
    clearForm () {
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    },
    controlModalWindow (val) {
      this.modalFirst = val
  }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7
  }
}
.wrapper-content {
  min-width: 80vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.btn {
  margin: 10px;
}
.slot {
  margin-bottom: 20px;
}
</style>