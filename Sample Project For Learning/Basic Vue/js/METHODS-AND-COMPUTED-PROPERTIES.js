var app = new Vue({
    el: '#app',
    data:{
        message : 'dering dari mu'
    },
    methods: {
        reverseString(string){
            return string.split('').reverse().join('');
        },
    },
})