import { Component } from '@angular/core';
import {MemoService} from "./app.service";


let MemoServiceFactory = () => {
  return new MemoService(["memo_01", "memo_02"]);
};

@Component({
  selector: 'my-app',
  template: `<h1>memo</h1>

<div>
    입력 :<input id="input" [(ngModel)]="inputValue">  <button (click)="addMemo()">저장</button>
</div>

<ul>
    <li *ngFor="let item of list"> {{item}}  <button (click)="removeMemo(item)">삭제</button></li>
</ul>

`,
  providers: [{ provide: MemoService, useFactory: MemoServiceFactory}]
})
export class AppComponent  {
  inputValue:string="";
  list:string[]=[];
  constructor(private memoService: MemoService){
    this.list = memoService.loadData();
  }

  addMemo(){
    this.memoService.addMemo(this.inputValue);
  }

  removeMemo(item:any){
    this.memoService.removeMemo(item);


  }



}
