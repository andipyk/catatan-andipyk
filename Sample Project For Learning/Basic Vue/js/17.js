let renderComponent = {
    render(h) {
        return h(
            'div' , {
                'attrs' : {
                    class: 'render-card'
                },
            }, [
                h('header', {
                    'attrs' : {
                        class: 'card-header card-header-title',
                    },
                }, this.message)
            ]
        )
    },
    props: ['message']
}

new Vue({
    el: '#app',
    data: {
        message: 'Yang selalu mencari dan menelfonku'
    },
    components: {
        'render-component' : renderComponent
    }
})