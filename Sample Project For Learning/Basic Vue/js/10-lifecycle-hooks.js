new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        company: {
            name: '',
            catchPhrase: '',
        }
    },
    created() {
        axios.get(
            'https://jsonplaceholder.typicode.com/users'
        ).then((response)=>{
            const data = response.data
            const randomUser = response.data[
                Math.floor(Math.random()*data.length)
            ]

            this.name = randomUser.name
            this.email = randomUser.email
            this.company.name = randomUser.company.name
            this.company.catchPhrase = randomUser.company.catchPhrase
        })
    },
})