let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())

    },
    toString: function () {

        if (this.state === 0) {
            return 'heads'
        } else {
            return 'Tails'

        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = "https://cdn.shopify.com/s/files/1/1277/7365/products/skulls-scrolls-ant-obv_1800x1800.png?v=1568999340"
        } else {
            image.src = "https://images-na.ssl-images-amazon.com/images/I/91b7avTpNqL._AC_SL1500_.jpg"

        }
        return image;
    }
};
const body = document.querySelector('body')

function display20Flips() {
    for (index = 0; index < 20; index++) {
        coin.flip()
        let headsOrTails = document.createElement('div')
        body.append(headsOrTails)
        headsOrTails.append(coin.toString())

    }

} 

function display20Images() {
    for (index = 0; index < 20; index++) {
        coin.flip()
        let side = document.createElement('div')
        body.append(side)
        side.append(coin.toHTML())

    }

}
