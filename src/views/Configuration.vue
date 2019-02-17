<template>
    <div class="configuration">
        <ParticipantForm/>
    </div>
</template>

<script>
    import ParticipantForm from "../components/ParticipantForm";
    export default {
        name: 'Configuration',
        components: {ParticipantForm},
        methods: {
            submitForm(event) {
                event.preventDefault()
            }
        },
        data() {
            return {
                participants: []
            }
        },
        props: ['numberOfParticipants']
    }
</script>

<style scoped lang="less">
    .configuration {
    }
</style>
