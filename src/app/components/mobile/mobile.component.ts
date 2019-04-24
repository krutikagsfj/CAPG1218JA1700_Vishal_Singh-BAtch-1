/**
 * Vishal Singh
 */

import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private ser:ProductService) { }
    mobData;

   delete(row)
  {
    let i=this.mobData.indexOf(row);
    this.mobData.splice(i,1);
  }

  /**
   * Sorting methods for all fiels
   */
  mobileSort;
  sortById()
  {
    this.mobileSort="mobId";
  }
  sortByName()
  {
    this.mobileSort="mobName";
  }
  sortByPrice()
  {
    this.mobileSort="mobPrice";
  }

  /**
   * Storing data in local variable mobData through subscribe
   */
  ngOnInit() {
      this.ser.getProducts()
      .subscribe(res=>
        {
          this.mobData=res;
        })
  }
}

