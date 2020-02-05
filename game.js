const fs = require('fs');
const expTable = [0, 100, 200, 400, 700, 1200, 1900, 2900, 4200, 6300]
const classList = ['warrior', 'priest', 'rogue', 'mage']

class Actor {
  constructor(name, charClass = 'warrior', stats = {}){
    this.uuid = Symbol()
    this.name = name
    this.level = 1
    this.experience = 0
    this.charClass = undefined
    this.stats = stats

    this.setClass(charClass)
    
  }

  setClass(newClass){
    if (classList.includes(newClass)){
      this.charClass = newClass
      return true
    } else {
      throw `Actor charClass of ${newClass} is not applicable. Please use: ${classList.join(", ")}.`
      return false
    }
  }

  awardExp(amount, triggerLevelUp = true){
    this.experience += amount
    if (this.canLevelUp() && triggerLevelUp){
      this.levelUp()
    }
  }

  canLevelUp(){
    let valid = this.experience >= expTable[this.level] ? true : false
    return valid
  }

  levelUp(){
    if (!this.canLevelUp){
      return false
    }

    while (this.canLevelUp()){
      this.level += 1
      // Apply stats for given level
      let mods = this.stats.levelUpMods
      Object.keys(mods).forEach((stat) => {
        this.stats[stat] += mods[stat]
      })      
    }

    return this.level
  }

}

function createActor(name, className, stats){
  return new Promise((resolve, reject) => {
    let actor = new Actor(name, className, stats)
    resolve(actor)  
  })
}


retrieveStats = new Promise((resolve, reject) => {
  fs.readFile("./test.json",'utf8', (err, data) => {
    if (err) throw err 
    resolve(JSON.parse(data))
    reject()
  })
})

retrieveStats.then((data) => { 
  let className = 'priest'
  createActor("Ronald", className, data[className])
  .then((actor) => {
    actor.awardExp(3000)
    console.log(actor)
  })
})


