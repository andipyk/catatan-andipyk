var app = new Vue({
    el: '#app',
    data: {
        message : 'Andi Handsome'
    }
})

var app2 = new Vue({
    el:'#app2',
    data:{
        message: 'Time Now Is :'+new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:'#if',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el:'#app4',
    data:{
        todos: [
            {teks : 'halo'},
            {teks : 'kawan lama'},
            {teks : 'dan kawan baru'}
        ]
    }
})

var app5 = new Vue({
    el:'#handlingInput',
    data: {
        message : 'Andi Ganteng Syekali'
    },
    methods: {
        balikKata: function(){
            this.message = this.message.split('').reverse().join('')
        }
    },
})

var app6 = new Vue({
    el:'#placeholder',
    data:{
        message: 'ini placeholder dynamic'
    }
})

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app7 = new Vue({
    el:'#component1'
})

Vue.component('component-item', {
    props: ['component'],
    template : '<li>{{ component.text }}</li>'
})

var app8 = new Vue ({
    el:'#componentProps',
    data : {
        petshop:[
            {id:0, text: 'malinkundang'},
            {id:1, text: 'anjing sakur kol'},
            {id:2, text: 'baby'}
        ]
    }
})

Vue.component('motor-item', {
    props: ['motor'],
    template: '<li>{{ motor.nama }}</li>'
})

var app9 = new Vue({
    el:'#cobaPropsLagi',
    data:{
        motors: [
            {id:0, nama: 'shogun'},
            {id:1, nama: 'sayur kol'},
            {id:2, nama: 'vega x'}
        ]
    }
})