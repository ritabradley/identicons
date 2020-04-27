new Vue({
    el: '#app',
    data: {
        textInput: '',
    },
    methods: {
        onInputChange(e) {
            this.textInput = e.target.value;
        },
    },
    computed: {
        identicon() {
            return jdenticon.toSvg(this.textInput, 200);
        },
    },
});