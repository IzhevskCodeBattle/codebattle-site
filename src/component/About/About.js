export default {
    name: 'About',

    data: () => ({
        registrationLink: `{"event_id": 901674}`
    }),

    methods: {
        changeHash () {
            this.$router.push('#about')
        }
    }
}
