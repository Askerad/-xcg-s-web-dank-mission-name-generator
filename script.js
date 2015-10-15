var firstName = [];
var secondName = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}


function getDankName(){
    

    firstName.push("Drunk")
    firstName.push("Perverted")
    firstName.push("Dank")
    firstName.push("Cucked")
    firstName.push("Weeping")
    firstName.push("Panicking")
    firstName.push("Dead")
    firstName.push("Sexy")
    firstName.push("Dicking")
    firstName.push("Taking")
    firstName.push("Ayy")
    firstName.push("Metal")
    firstName.push("Salty")
    firstName.push("Long")
    firstName.push("Inglorious")
    firstName.push("Righteous")
    firstName.push("Deadly")
    firstName.push("Fisting")
    firstName.push("Magnificient")
    //firstName.push("")
    
    secondName.push("Autist")
    secondName.push("Rookie")
    secondName.push("Tears")
    secondName.push("Stank")
    secondName.push("Hole")
    secondName.push("Meme")
    secondName.push("Bagel")
    secondName.push("Gear")
    secondName.push("Snek")
    secondName.push("Ayy")
    secondName.push("Lmao")
    secondName.push("Infidel")
    secondName.push("UFO")
    secondName.push("Lump")
    secondName.push("Bomb")
    secondName.push("Fist")
    secondName.push("Design")
    
    //secondName.push("")
    
    var i = getRandomInt(0,firstName.length)


    var j = getRandomInt(0,secondName.length)
    
    var html1 = '<p>' + firstName[i] + " " + secondName[j] + '</p>'
    document.getElementById('test1').innerHTML = html1;
    
}




