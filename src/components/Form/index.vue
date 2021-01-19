<template>
  <FormulateForm @submit="submitHandler" #default="{ isLoading }">
    <fieldset>
      <legend>VueForm</legend>
      <FormulateInput
        name="name"
        label="Name"
        type="text"
        validation="required"
        placeholder="your name..."
        v-model="nameField"
      />
      <FormulateInput
        name="email"
        label="E-mail"
        type="email"
        validation="required|email"
        placeholder="test@example.com"
        v-model="emailField"
      />
      <FormulateInput
        label="Password"
        type="password"
        name="password"
        validation="required"
        placeholder="*******"
        v-model="passwordField"
      />
      <FormulateInput
        label="Confirm password"
        type="password"
        name="password_confirm"
        validation="required|confirm"
        validation-name="Password confirmation"
        placeholder="*******"
        v-model="confirmPasswordField"
      />
      <FormulateInput
        type="checkbox"
        label="I accept the terms of service?"
        name="terms"
        validation="accepted"
        v-model="termsField"
      />
      <FormulateInput
        type="submit"
        @click="registerUser"
        :disabled="isLoading"
        :label="isLoading ? 'Loading...' : 'Submit'"
      />
    </fieldset>
  </FormulateForm>
</template>

<script>
export default {
  data() {
    return {
      nameField: "",
      emailField: "",
      passwordField: "",
      confirmPasswordField: "",
      termsField: false,
    };
  },
  methods: {
    registerUser: function() {
      console.log({
        name: this.nameField,
        email: this.emailField,
        password: this.passwordField,
        confirmPassword: this.confirmPasswordField,
        terms: this.termsField,
        id: Date.now(),
      });
    },
    async submitHandler(data) {
      await this.$axios.post("/my/api", data);
      alert(`Thank you, ${data.name}`);
    },
  },
};
</script>

<style scoped>
.formulate-form {
  padding: 2rem;
  height: 100%;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formulate-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
fieldset {
  border: 1px solid #42b883;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
legend {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 0rem 1rem;
  color: #42b883;
}
</style>
