var Interval = (function () {
    function Interval() {
        this.buy = 0;
        this.sell = 0;
    }
    return Interval;
}());
Interval["__class"] = "Interval";
var StockBuySell = (function () {
    function StockBuySell() {
    }
    StockBuySell.prototype.stockBuySell = function (price, n) {
        if (n === 1)
            return;
        var count = 0;
        var sol = ([]);
        var i = 0;
        while ((i < n - 1)) {
            while (((i < n - 1) && (price[i + 1] <= price[i])))
                i++;
            if (i === n - 1)
                break;
            var e = new Interval();
            e.buy = i++;
            while (((i < n) && (price[i] >= price[i - 1])))
                i++;
            e.sell = i - 1;
            /* add */ (sol.push(e) > 0);
            count++;
        }
        ;
        if (count === 0)
            console.info("There is no day when buying the stock will make profit");
        else
            for (var j = 0; j < count; j++)
                console.info("Buy on day: " + sol[j].buy + "\t " + "Sell on day : " + sol[j].sell);
        return;
    };
    StockBuySell.main = function (args) {
        var stock = new StockBuySell();
        var price = [100, 180, 260, 310, 40, 535, 695];
        var n = price.length;
        stock.stockBuySell(price, n);
    };
    return StockBuySell;
}());
StockBuySell["__class"] = "StockBuySell";
StockBuySell.main(null);

