const person = {
  firstName: "Poghos",
  lastName: "Poghosyan",
  sayHello: function (age, city, codeStyle) {
    return `Hello my name is ${this.firstName} ${this.lastName}, i'am ${age} and i'am from ${city} ----------- ${codeStyle}`;
  },
};
const person2 = {
  firstName: "Sahak",
  lastName: "Sahakyan",
};
const li = document.querySelectorAll("li");
li[0].textContent = person.sayHello(15, "Yerevan", "at once object"); //! miangamic object ov
li[1].textContent = person.sayHello.bind(person2, 15, "Yerevan", "bind")(); //! veradarcnuma funkcia vor [hnaravora pahel popoxakan i mej u kanchel erb petqa]  argumentnery sharunakakan storaketnerov
li[2].textContent = person.sayHello.call(person2, 15, "Yerevan", "call"); //! kanchuma funkcian trvac object ov argumentnery sharunakakan storaketnerov
li[3].textContent = person.sayHello.apply(person2, [15, "Yerevan", "apply"]); //! kanchuma funkcian mnacac argumentnery array ov

console.log(person.sayHello(15, "Yerevan", "at once object")); //! miangamic object ov
console.log(person.sayHello.bind(person2, 15, "Yerevan", "bind")()); //! veradarcnuma funkcia vor [hnaravora pahel popoxakan i mej u kanchel erb petqa]  argumentnery sharunakakan storaketnerov
console.log(person.sayHello.call(person2, 15, "Yerevan", "call")); //! kanchuma funkcian trvac object ov argumentnery sharunakakan storaketnerov
console.log(person.sayHello.apply(person2, [15, "Yerevan", "apply"])); //! kanchuma funkcian mnacac argumentnery array ov
