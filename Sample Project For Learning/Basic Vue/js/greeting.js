var app = new Vue({
    el:'#app',
    data:{
        greeting: 'Assalamualaikum',
        user : 'andi ganteng',
        city : 'Payakumbuh'
    },
    methods: {
        gantiGreeting(){
            this.greeting = this.greeting === 'Assalamualaikum' ? 'Apakabar' : 'Assalamualaikum';
        }

    },
})