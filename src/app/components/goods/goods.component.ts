import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image') image: ElementRef

  constructor(private gs: GoodsService) { }

  ngOnInit() {
  }

  addNewGood(form: NgForm) {
    let name = (<Good>form.value).name,
      price = (<Good>form.value).price,
      image = (<HTMLInputElement>this.image.nativeElement).files[0];
    this.gs.addNewGood(name, price, image).then(msg => console.log(msg))
  }

}
