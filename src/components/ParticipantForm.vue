<template>
    <div class="participant-form">
        <form class="form" v-on:submit="submitForm">
            <span class="sub-title">Please enter the annual salaries for each participant.</span>
            <div class="input-group" v-for="(participant, index) in participants">
                <label :for="'numberOfParticipants' + index">Salary of participant {{index+1}}</label>
                <input type="number" class="input-text" :id="'numberOfParticipants' + index" v-model="participants[index].salary" required>
            </div>

            <router-link to="/" class="back-button">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </router-link>

            <input type="submit" value="next">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ParticipantForm',
        mounted() {
          for(let i = 0; i < this.numberOfParticipants; i++) {
              this.participants.push({
                  salary: ''
              })
          }
        },
        methods: {
            submitForm(event) {
                event.preventDefault()
                localStorage.setItem('participants', JSON.stringify(this.participants))
                this.$router.push('/meeting');
            }
        },
        data() {
            return {
                participants: [],
                numberOfParticipants: localStorage.getItem('numberOfParticipants')
            }
        },
    }
</script>

<style scoped lang="less">
    .participant-form {
    }
</style>
