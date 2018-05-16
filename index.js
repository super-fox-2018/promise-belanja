const beli = require("./beli.js")

class Item{
    constructor(name){
        this.item = name
    }
}

class Bread extends Item{
    constructor(name){
        super(name)
        this.harga = 10000
        this.time =10
    }
}

class Meat extends Item{
    constructor(name){
        super(name)
        this.harga = 30000
        this.time =3000
    }
}

class Egg extends Item{
    constructor(name){
        super(name)
        this.harga = 5000
        this.time = 25
    }
}

class Fruit extends Item{
    constructor(name){
        super(name)
        this.harga = 25000
        this.time = 40
    }
}

class Oil extends Item{
    constructor(name){
        super(name)
        this.harga = 20000
        this.time = 30
    }
}

let money = 300000
let bread = new Bread('bread')
let meat = new Meat('meat')
let egg = new Egg('egg')
let fruit = new Fruit('fruit')
let oil = new Oil('oil')



beli(money,bread)
.then(data=>{
    return beli(data,bread)
})
.then(data=>{
    return beli (data,meat)
})
.then(data=>{
    return beli(data,egg)
})
.then(data=>{
    return beli(data,fruit)
})
.then(data=>{
    return beli(data,oil)
})
.catch(err=>{
    console.log(err)
})