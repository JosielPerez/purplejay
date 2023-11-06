type StockItem = {
    stock: {
        symbol:	string,
        open:	number,
        high: number,
        low:   number,
        price: number,
        volume:	number,
        change:	number,
<<<<<<< HEAD
        change_percent:	string,
        shares_owned: number
    },
=======
        change_percent:	string
    }
>>>>>>> main
}
type StockItemList = {
    stocks: {
        symbol:	string,
        open:	number,
        high: number,
        low:   number,
        price: number,
        volume:	number,
        change:	number,
        change_percent:	string
    }[]
}