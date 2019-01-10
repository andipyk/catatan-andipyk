Vue.component('app-konten',{
    props: ['konten1'],
    template: '<p>{{ konten1.konten }}</p>'
})


var app = new Vue({
    el:'#app',
    data:{
        blogs:[
            {id:0, judul: 'SIA untuk bla-bla', konten: 'surat cinta untuk SIA'},
            {id:1, judul: 'Caraku', konten: 'Biarkan aku mencintai dengan caraku'},
            {id:2, judul: 'Asik', konten: 'asik-asik jos mas eko'}
        ]
    }
})
