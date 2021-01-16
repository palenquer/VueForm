<template>
  <FormulateForm @submit="submitHandler" #default="{ isLoading }">
    <fieldset>
      <legend>VueForm</legend>
      <FormulateInput
        name="name"
        label="Name"
        type="text"
        validation="required"
      />
      <FormulateInput
        name="email"
        label="E-mail"
        type="email"
        validation="required|email"
        placeholder="test@example.com"
      />
      <FormulateInput
        label="New password"
        type="password"
        name="password"
        validation="required"
      />
      <FormulateInput
        label="Confirm password"
        type="password"
        name="password_confirm"
        validation="required|confirm"
        validation-name="Password confirmation"
      />
      <FormulateInput
        type="checkbox"
        label="I accept the terms of service?"
        name="terms"
        validation="accepted"
      />
      <FormulateInput
        type="submit"
        :disabled="isLoading"
        :label="isLoading ? 'Loading...' : 'Submit'"
      />
    </fieldset>
  </FormulateForm>
</template>

<script>
export default {
  methods: {
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
  border: 1px solid #ccc;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
legend {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 0rem 1rem;
  color: #41b883;
}

</style>
