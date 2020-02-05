

class Person {
  constructor(name){
    this.name = name
  }
}

var p = new Person("Kevin")

class Locker {
  constructor(combination, contents, owner){
    this.combination = combination;
    this.contents = contents;
    this.locked = true;
    this.owner = owner;
  }

  unlock(combination){
    if (combination == this.combination){
      this.locked = false
    }
    return !this.locked
  }

  viewContents(){
    if(!this.locked){
      return this.contents
    } else {
      return undefined
    }
  }

  store(items){
    if(!this.locked){
      this.contents = [...this.contents, ...items]
      return this.contents
    } else {
      return undefined
    }
  }
}

const locker = new Locker('1234', ['apple', 'shoe'], p)
console.log(locker)






























