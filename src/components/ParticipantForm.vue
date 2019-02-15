<template>
    <div class="participant-form">
        <form v-on:submit="submitForm">
            <span class="sub-title">Please enter the annual salaries for each participant.</span>
            <div class="input-group" v-for="(participant, index) in participants">
                <label :for="'numberOfParticipants' + index">Salary of participant {{index+1}}</label>
                <input type="number" class="input-text" :id="'numberOfParticipants' + index" v-model="participants[index].salary" required>
            </div>

            <router-link to="/">
                <span class="back-button">back</span>
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
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        form {
            display: flex;
            flex-direction: column;
            width: 20rem;

            .input-group {
                display: flex;
                flex-direction: column;
            }
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
