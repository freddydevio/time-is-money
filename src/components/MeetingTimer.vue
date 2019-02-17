<template>
    <div class="meeting-timer">
        <span class="current-costs">{{currentCosts|formatCosts}}</span>
        <span class="current-time">{{currentTime|formatTime}}</span>
        <div class="actions">
            <span class="button" v-on:click="toggleWorking" v-if="!working">Start</span>
            <span class="button" v-on:click="toggleWorking" v-if="working">Stop</span>
            <span class="button" v-on:click="reset">Restart</span>
        </div>
    </div>
</template>

<!-- https://codesandbox.io/s/yvnxwn161j?from-embed -->
<script>
    let timer;

    export default {
        name: 'MeetingTimer',
        components: {
        },
        methods: {
          toggleWorking() {
              this.working = !this.working
              if(this.working) {
                  timer = setInterval(() => {
                      this.currentTime++;
                      this.calculateCosts()
                  }, 1000)
              } else {
                  clearInterval(timer)
              }
          },
            reset() {
                this.currentCosts = 0
                this.currentTime = 0
                this.working = false
                clearInterval(timer)
            },
            calculateCosts() {
                const secondsInYear = 7.5 * 5 * 52.1429 * 60 * 60
                let participants = JSON.parse(localStorage.getItem('participants')),
                    totalSalary = 0

                for(let i = 0; i < participants.length; i++) {
                    totalSalary += parseInt(participants[i].salary)
                }

                let date = new Date(null);
                date.setHours(0);
                date.setSeconds(this.currentTime);

                this.currentCosts = parseFloat((totalSalary / secondsInYear) * (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())).toFixed(2)
            }
        },
        filters: {
            formatCosts (value) {
                return value + ' €';
            },
            formatTime (value) {
                let date = new Date(null);
                date.setSeconds(value);
                return date.toISOString().substr(11, 8);
            }
        },
        data() {
            return {
                currentCosts: 0,
                currentTime: 0,
                working: false,
            }
        }
    }
</script>

<style lang="less" scoped>
    .meeting-timer {
        display: flex;
        flex-direction: column;
        width: 20rem;
        text-align: center;
        .actions {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .button {
            padding: 1rem;
            background: black;
            color: white;
            margin: 1rem;
            cursor: pointer;
        }
    }
</style>