this.name = "Nobody's name";

const person = {
  name: "Person Name",
  getName() {
    console.log(this.name);
  },
  contact: {
    name: "Contact Name",
    getName() {
      console.log(this.name);
    }
  }
};

const personES6 = {
  name: "Person Name",
  getName: () => {
    console.log(this.name);
  },
  contact: {
    name: "Contact Name",
    getName: () => {
      console.log(this.name);
    }
  }
};

person.getName();
person.contact.getName();

personES6.getName();
personES6.contact.getName();
