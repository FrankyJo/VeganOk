class Products {
    constructor() {
        this.classNameActive = 'products_element_btn_active';
        this.labelAdd = 'Додати в корзину';
        this.labelRemove = 'Видалити з корзини';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        } 

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, img, name, weight, description, price}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }
            
            htmlCatalog += `
                <li class="products_element">
                    <div><img class="products_element_img" src="${img}" /></div>
                    <span class="products_element_name">${name}</span>
                    <span class="products_element_weight">${weight}</span>
                    <span class="products_element_description">${description}</span>
                    <span class="products_element_price">${parseInt(price).toLocaleString()} грн</span>
                    <button class="products_element_btn${activeClass}" onClick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
                </li>
            `;
        });

        const html = `
            <ul class="products_container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();