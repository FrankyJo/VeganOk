class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        
        const html = `
                <nav class="navbar">
                    <a href="./index.html" class="navbar_logo mobile_element">VeganOk</a>

                    <div class="navbar_shopping" onclick="headerPage.handlerOpenShoppingPage();"><i class="fas fa-shopping-bag"></i>${count}</div>
                     
                    <div class="navbar_toggle" id="mobile_menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>

                    <div class="navbar_menu">
                        <a href="./index.html" class="navbar_link">Головна</a>
                        <a href="./about.html" class="navbar_link">Хто ми</a>
                        <a href="./store.html" class="navbar_link">Магазин</a>
                        <a href="./partners.html" class="navbar_link">Партнери</a>
                        <a href="./delivery.html" class="navbar_link">Доставка та оплата</a>
                        <a href="./contacts.html" class="navbar_link">Контакти</a>
                    </div>
     
                </nav>
            `;

            ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);