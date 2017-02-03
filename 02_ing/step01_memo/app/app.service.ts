/**
 * Created by hds on 2017. 2. 3..
 */
import { Injectable } from '@angular/core';

@Injectable()
export class MemoService {

    private list: Array<string>;
    constructor(list: Array<string>) {
       this.list = list;
    }

    loadData(): Array<string> {
        return this.list;
    }

    addMemo(inputValue: string) {
        this.list.push(inputValue);
    }

    removeMemo(item: any) {
        let index = this.list.indexOf(item);

        if(index != -1){
            console.log("index , ", index, item);
            console.log("slice ",this.list.splice(index, 1));
        }
    }

}