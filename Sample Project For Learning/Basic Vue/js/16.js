let singleLineTemplate = {
    template: `
    <div class="card">
        <header class="card-header card-header-title">
            {{message}}
        </header>
    </div>`,
    props: ['message']
}

let multiLineTemplate = {
    template:`
    <div class="card">
        <header class="card-header card-header-title">
            {{ balas }}
        </header>
    </div>
    `,
    props:['balas']
}

let xTemp = {
    template: '#x-template-component',
    props: ['message']
}

new Vue({
    el:'#template-strings',
    data:{
        message:'Semoga sukes ya bro!',
        balas : 'Assyiaapppp !!'
    },
    components: {
        'single-linetemplate' : singleLineTemplate,
        'multi-linetemplate' : multiLineTemplate,
        'x-temp' : xTemp,
    }
})