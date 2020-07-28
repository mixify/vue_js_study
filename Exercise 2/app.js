new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        changeVal : function (event) {
            this.value = event.target.value
        },
        alertFunction : function () {
            alert("alert")
        }
    }
});