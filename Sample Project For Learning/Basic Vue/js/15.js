// // Vue.component( 'global-component', {
// //     template: `<p>Halo Dunia Akhirat</p>`
// // })

// // new Vue({
// //     template: `    
// //     <div>
// //         <global-component></global-component>
// //     </div>`
// // })

// // const localComponent = {
// //     template: `<p>Halo Warga Local</p> `
// // }

// // new Vue({
// //     template: `
// //     <div>
// //         <localComponent></localComponent>
// //     </div>`,
// //     component:{
// //         'localComponent': localComponent
// //     }
// // })
// let componentObject = {
//     template:'<p> {{message}} </p>',
//     data(){
//         return {
//             message: 'Hai Sayang',
//         }
//     }
// }


// new Vue({
//     el:'#app',
//     data:{
//         message:'El Papi'
//     }
// })


let counterOne = {
    template: `
    <button class="component-button" @click="counter++">
        Kamu klik saya {{counter}} kali
    </button>
    `,
    data(){
        return {
            counter: 0
        }
    }
}

let counterTwo = {
    template: `
    <button class="component-button" @click="counter++">
        Kamu klik saya {{counter}} kali
    </button>
    `,
    data(){
        return{
            counter: 0
        }
    }
}

let counterThree = {
    template:`
    <button class="component-button" @click="counter++">
        Kamuh klik aq {{counter}} kali
    </button>
    `,
    data(){
        return{
            counter: 0
        }
    }
}

new Vue({
    el:'#app',
    data:{
        message:'Halo dunia akhirat !'
    },
    components:{
        'componentone' : counterOne,
        'componenttwo' : counterTwo,
        'componentthree' : counterThree
    }
})