<template>
    <div class="meeting">
        <MeetingTimer/>
        <router-link to="/" class="back-button">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
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
    }
</style>
