this.test = "fora do objeto";

const person = {
  test: "dentro do objeto",
  es5: function(){
    console.log(this.test);
  },
  es6: () => {
    console.log(this.test);
  }

};

person.es5();
person.es6();
