import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor() { }
/* Defining the Data set*/
  Items=[
    {
      name: "Milk",
      quantity:"2"
    },
    {
      name:"Bread",
      quantity:"2"
    },
    {
      name:"Egg",
      quantity:"4"
    }
  ]
// To get the list of Items
  getItems()
  {
    return this.Items;
  }
// To Remove an Item from an Array
  removeItem(index)
  {
    console.log('Removing item from index::'+index);
    this.Items.splice(index,1);
  }

  // To Add an Item from an Array
  addItem(item)
  {
    console.log('Adding item::'+item);
    this.Items.push(item);
  }

  // To Edit an Item from an Array
  editItem(item,index)
  {
    console.log('Editing item::'+item);
    this.Items[index]=item;
  }
}
