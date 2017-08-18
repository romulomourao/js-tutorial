this.test = "fora do objeto";
const person = {
  test: "dentro do objeto",
  es5: function() {
    console.log(this);
  },
  es6: () => {
    console.log(this);
  }
};

person.es5();
person.es6();
