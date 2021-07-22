let OBJECTS = [
    'chair',
    'table',
    'bed',
    'plasticBag',
    'thrashCan',
    'charger',
    'phone',
    'book',
    'curtain',
    'pillow',
    'bedsheet'
]
let ANIMALS = [
    'dinasuar',
    'dog',
    'giraffe',
    'lion',
    'tiger',
    'helicopter',
    'kutta',
    'billa',
    'bilauta',
    'sher',
    'suar'
]
function getRandomUserName(){
    var frontname = OBJECTS[Math.floor(Math.random()*10)]  
    var secondname = ANIMALS[Math.floor(Math.random()*10)]
    return frontname+secondname
}
module.exports = {
    getRandomUserName
}