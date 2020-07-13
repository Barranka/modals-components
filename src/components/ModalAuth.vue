<template>
  <modal title="Modal Authorization" @close="clearForm">
	  <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class=" { errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
          <input v-model="email" :class=" { error: $v.email.$error }" @change="$v.email.$touch()" />
        </div>
        <!-- password -->
        <div class="form-item" :class=" { errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required!</p>
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters!</p>
          <input v-model="password" :class=" { error: $v.password.$error }" @change="$v.password.$touch()" />
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Authorization</button>
		    <p class="linkText"><a class="link" @click="[$emit('changeForm'), clearForm()]">I need to registration!</a></p>
      </form>
    </div>

  </modal>
</template>

<script>
import resetModulesMixin from '@/mixins/resetModules.mixin.js'
import { required, minLength, email } from "vuelidate/lib/validators"
import modal from "@/components/UI/Modal.vue"

export default {
  components: { modal },
  mixins: [resetModulesMixin],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        //DONE!
        this.clearForm()
      }
    },
    // clearForm() {
    //   this.$v.$reset()
    //   this.email = ""
    //   this.password = ""
    //   this.$emit("close")
    // }
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #bd3232;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: #bd3232;
}
.linkText {
  margin-top: 20px;
}
</style>