import myVue from "./myVue.js";

window.myapp = new myVue({
  el: "#app",
  data: {
    number: 0,
    number2: 1
  },
  methods: {
    increment() {
      this.number++;
    },
    increment2() {
      this.number2++;
    }
  }
});