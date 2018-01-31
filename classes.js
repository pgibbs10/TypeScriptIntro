// class Invoice {
// 	companyProfile : string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 	constructor(public name, public city, public state) {
// 		this.companyProfile = name + ", " + city + ", " + state;
// 	}
// }
// var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
// var yahooInvoice = new Invoice('Yahoo', 'Sunnyvale', 'CA');
// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);
var Report = /** @class */ (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ", " + this.total;
    };
    return Invoice;
}(Report));
var BillOfLading = /** @class */ (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printBol = function () {
        return this.name + ", " + this.city + ", " + this.state + ", ";
    };
    return BillOfLading;
}(Report));
var invoice = new Invoice('Google', 200);
var bol = new BillOfLading('Google', 'Mountain View', 'CA');
console.log(invoice.printInvoice());
console.log(bol.printBol());
//# sourceMappingURL=classes.js.map