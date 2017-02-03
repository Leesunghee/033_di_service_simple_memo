"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hds on 2017. 2. 3..
 */
var core_1 = require('@angular/core');
var MemoService = (function () {
    function MemoService(list) {
        this.list = list;
    }
    MemoService.prototype.loadData = function () {
        return this.list;
    };
    MemoService.prototype.addMemo = function (inputValue) {
        this.list.push(inputValue);
    };
    MemoService.prototype.removeMemo = function (item) {
        var index = this.list.indexOf(item);
        if (index != -1) {
            console.log("index , ", index, item);
            console.log("slice ", this.list.splice(index, 1));
        }
    };
    MemoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Array])
    ], MemoService);
    return MemoService;
}());
exports.MemoService = MemoService;
//# sourceMappingURL=app.service.js.map