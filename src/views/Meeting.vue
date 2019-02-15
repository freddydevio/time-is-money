<template>
    <div class="meeting">

        <MeetingTimer/>
        <router-link to="/">
            <span>Start again</span>
        </router-link>
    </div>
</template>

<script>
    import MeetingTimer from "../components/MeetingTimer";
    export default {
        name: 'Meeting',
        components: {
            MeetingTimer
        }
    }
</script>

<style lang="less">
    .meeting {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        flex-direction: column;
    }
</style>