<template>
  <div class="start-meeting-form">
    <form class="form" v-on:submit="submitForm">
      <div class="input-group">
        <label for="numberOfParticipants">Number of participants</label>
        <input type="number" class="input-text" id="numberOfParticipants" v-model="numberOfParticipants" min="1" required>
        <span class="help-text">Type the number of participants in the meeting</span>
      </div>
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
}
</style>
