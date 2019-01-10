var forFirst = new Vue({
    el:'#app',
    data:{
        title : 'THE V-FOR DIRECTIVE',
        tenThousand: [ 1, 10, 100, 1000, 10000 ]
    }
})

var app2 = new Vue({
    el:'#app2',
    data: {
        title : 'THE KEY ATTRIBUTE',
        tenThousand: [ 
            {id: 1, value: 1},
            {id: 2, value: 10},
            {id: 3, value: 100},
            {id: 4, value: 1000},
            {id: 5, value: 10000}
         ]
    },
    methods: {
        obok(){
            this.tenThousand = _.shuffle(this.tenThousand)
        }
    },
})