export default  {
	methods: {
		clearForm (allItems) {
			this.name = ''
			this.email = ''
			this.password = ''
			this.repeatPassword = ''
			this.$v.$reset()
			this.$emit('close')
		}
	}
}

