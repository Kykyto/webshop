class Cart {
    constructor() {
        this.list_cart = {};
    }

    get_list_cart() {
        return this.list_cart;
    }

    addInCart(id) {
        if (this.list_cart.hasOwnProperty(id)) {
            this.addExistedElem(id);
        } else {
            this.addNew(id);
        }
    }

    removeFromCart(id) {
        if (this.list_cart.hasOwnProperty(id)) {
            if (this.list_cart[id] === 1) {
                delete this.list_cart[id];
            } else {
                this.subExistedElem(id);
            }
        }
    }

    addNew(id) {
        this.list_cart[id] = 1;
    }

    addExistedElem(id) {
        this.list_cart[id] += 1;
    }

    subExistedElem(id) {
        this.list_cart[id] -= 1;
    }

    get_nbr_product() {
        let total = 0;
        for (const el in this.list_cart) {
            total += this.list_cart[el];
        }
        return total;
    }

    get_total_price(list_product) {
        let total = 0;
        for (const el in this.list_cart) {
            const productId = parseInt(el, 10);
            const quantity = this.list_cart[el];

            const product = list_product.find(p => p.productId === productId);

            if (product) {
                total += product.price * quantity;
            }
        }
        return total;
    }
}

export { Cart };
