var app = new Vue({
    el: '#app',
    data: {
      greeting: 'Hello World!',
      alertMessage: ''
    },
    methods: {
      changeGreeting() {
        this.greeting = this.greeting === 'Hello World!' ?
         'What is up!' :
         'Hello World!';
      },
      alertMessageGreeting() {
        this.alertMessage = 'You typed something!';
      },
      alertEnterGreeting() {
        this.alertMessage = 'You typed and pressed Enter!';
      },
    }
  });

  var binnding = new Vue({
      el: '#app2',
      data: {
          title : 'ATTRIBUTE BINDING WITH V-BIND',
          cityImage : 'https://bit.ly/2SKJPqJ'
      }

  })

  var vshow = new Vue({
    el: '#app3',
    data: {
      title : 'CONDITIONAL RENDERING WITH V-IF (OR V-SHOW)',
      name : 'Andi Syafrianda',
      city: 'Jakarta'
    },
    methods: {
      changeCity(){
        this.city = this.city === 'Jakarta' ? 'Payakumbuh' : 'Jakarta'
      }
    },

  })

  var vonbind = new Vue({
    el: '#app4',
    data: {
      title : 'SHORTHAND SYNTAX WITH V-ON AND V-BIND'
    }
  })