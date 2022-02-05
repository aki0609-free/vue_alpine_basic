const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      // fullname: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    //   name(value) {
    //     this.fullname = value === '' ? '' : value + ' ' + this.lastName;
    //   },
    //   lastName(value) {
    //     this.fullname = value === '' ? '' : this.name + ' ' + value;
    //   }
  },
  computed: {
    fullname() {
      return this.name === '' || this.lastName === '' ? '' : this.name + ' ' + this.lastName;
    },
  },
});

app.mount('#events');
