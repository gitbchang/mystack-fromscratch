class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

// newer ES6 modules syntax, nodeJS doesnt natively support this so you know babel is working
export default Dog
// module.exports = Dog;
