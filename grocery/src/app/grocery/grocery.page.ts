import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {GroceryService} from '../api/grocery/GroceryService'
import {InputDialogServiceService} from '../api/grocery/input-dialog-service.service'

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {

  title="Grocery List"

  constructor(public toastController: ToastController,
              public alertController: AlertController,
              public dataService: GroceryService,
              public inputDialog: InputDialogServiceService) { }

  ngOnInit() {
  } 
  // Load All the Elements of Array from Grocery Service
  loadItems()
  {
    console.log(this.dataService.Items);
    return this.dataService.getItems();
  }

  // Remove Alert Function
  async removeItem(item, index ) {
   this.dataService.removeItem(index);
    console.log("Removing Items-",item,index);
    const toast = await this.toastController.create({
      message: 'Item - '+ item.name +' Quantity '+item.quantity+' removed',
      duration: 2000
    });
    toast.present();
  }

  // Add Alert Function

  addItem(){
    console.log("Adding Item");
    this.inputDialog.showPrompt();
  }
  
  // Edit Alert Function
  async editItem(item, index ) {
    console.log("Editing Item::"+item[index]);
    this.inputDialog.showPrompt(item,index);
    
  }

  }
