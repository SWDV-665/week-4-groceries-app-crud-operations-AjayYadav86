import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {GroceryService} from '../grocery/GroceryService';

@Injectable({
  providedIn: 'root'
})
/* InputDialogService is manage the Alert Prompt Option*/

export class InputDialogServiceService {

  constructor(public toastController: ToastController,
    public alertController: AlertController,
    public dataService: GroceryService ) { }


  /*ShowPrompt Method will be triggered for Add Item and Edit Item alert */
  async showPrompt(item?,index?) {
    const prompt = await this.alertController.create({
      header : item ? 'Edit Item' : 'Add Item',
      message : item ? 'Please Edit Item...' : 'Please enter Item....',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name: null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder : 'Quantity',
          value: item ? item.quantity: null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm Ok');
            console.log(item.name);
            if(index !== undefined)
            {
              console.log('editing......')
              this.dataService.editItem(item,index)
            }
            else
            {
              this.dataService.addItem(item);
            }
            
          }
        }
      ]
    });
    await prompt.present();
  }

}
