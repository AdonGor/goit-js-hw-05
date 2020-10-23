 // Write code under this line
 const Storage = function(getitems){
    this.items = getitems; 
}

Storage.prototype.getItems = function(){
   return this.items;
}

Storage.prototype.addItem = function(item){
   this.items.push(item);
}

Storage.prototype.removeItem = function(item){
   const indexOfItem = this.items.indexOf(item); 
   this.items.splice(indexOfItem,1);
}

console.log(typeof Storage);
// 'function'

const goods = [
 'Нанитоиды',
 'Пролонгер',
 'Железные жупи',
 'Антигравитатор'
];

const storage = new Storage(goods);
console.log(storage.getItems());
/* [
 'Нанитоиды',
 'Пролонгер',
 'Железные жупи',
 'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
 'Нанитоиды',
 'Пролонгер',
 'Железные жупи',
 'Антигравитатор',
 'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
 'Нанитоиды',
 'Железные жупи',
 'Антигравитатор',
 'Дроид'
] */

