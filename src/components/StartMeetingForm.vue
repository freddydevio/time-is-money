<template>
  <div class="start-meeting-form">
    <form v-on:submit="submitForm">
      <label for="numberOfParticipants">Number of participants</label>
      <input type="number" class="input-text" id="numberOfParticipants" v-model="numberOfParticipants" min="1" required>
      <span class="help-text">Type the number of participants in the meeting</span>
      <input type="submit" value="next">
    </form>
  </div>
</template>

<script>
export default {
  name: 'StartMeetingForm',
  methods: {
    submitForm(event) {
      event.preventDefault()

      localStorage.setItem('numberOfParticipants', this.numberOfParticipants)
      this.$router.push('/configuration');
    }
  },
  data() {
    return {
      numberOfParticipants: 1
    }
  }
}
</script>

<style scoped lang="less">
.start-meeting-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    width: 20rem;
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
    .sub-title {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
    .input-text {
      padding: .5rem 1rem;
      outline: none;
      margin-bottom: .5rem;
    }
    .help-text {
      font-size: .7rem;
    }
    input[type=submit] {
      margin-top: 2rem;
      outline: none;
      border: none;
      padding: 1rem;
    }
  }
}
</style>
