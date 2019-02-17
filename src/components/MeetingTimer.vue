<template>
    <div class="meeting-timer">
        <span class="current-costs">{{currentCosts|formatCosts}}</span>
        <span class="current-time">{{currentTime|formatTime}}</span>
        <div class="actions">
            <div class="button" v-on:click="toggleWorking" v-if="!working"><span class="label">Start</span></div>
            <div class="button" v-on:click="toggleWorking" v-if="working"><span class="label">Stop</span></div>
            <div class="button" v-on:click="reset"><span class="label">Restart</span></div>
        </div>
    </div>
</template>

<!-- https://codesandbox.io/s/yvnxwn161j?from-embed -->
<script>
    let timer;
    const secondsInYear = 7.5 * 5 * 52.1429 * 60 * 60

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
        .current-costs {
            font-size: 4rem;
        }
        .current-time {
            font-size: 1.2rem;
        }
        .button {
            background: black;
            color: white;
            margin: 1rem;
            height: 5rem;
            width: 5rem;
            border-radius: 50%;
            border: .1rem solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
</style>
