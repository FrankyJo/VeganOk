class Shopping {

    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        
        
        let quantityInput = document.getElementsByClassName('cart_quantity_input')
        for (let i = 0; i < quantityInput.length; i++) {
            let input = quantityInput[i]
            input.addEventListener('change', quantityChanged)
        }

        function quantityChanged(event) {
            let input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1
            }
            updateCartTotal()
        }

        function updateCartTotal() {
            sumCatalog += parseInt(price) * parseInt(quantityInput.value);
        }
        
        
        CATALOG.forEach(({id, img, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="shopping_div">
                        <img class="shopping_img" src="${img}" />
                        <div class="shopping_name">${name}</div>
                        <div class="shopping_price">${parseInt(price).toLocaleString()} грн</div>
                        <div class="input_group">
                            <input type="number" value="1" class="cart_quantity_input" id="input" min="1" max="100" />
                        </div>
                        
                    </div>
                `;
           
              
            }
        });

        const html = `
            <div class="shopping_container">
                <div class="shopping_close" onclick="shoppingPage.handleClear();"><i class="fas fa-times"></i></div>
                <div class="shopping_title">Кошик замовлень</div>
                <div class="shopping_catalog_div">
                    <div>${htmlCatalog}</div>
                    <div class="shopping_sum_div">
                        <div class="shopping_sum_text">Сума до оплати</div>
                        <div class="shopping_sum_price">${parseInt(sumCatalog).toLocaleString()} грн</div>
                    </div>
                </div>

                <form action="telegram.php" class="form_body" method="POST">
                <div class="form_item">
                    <input type="text" class="form_input" name="user_name" placeholder="Напишіть ім'я">
                </div>
                <div class="form_item">
                    <input type="number" class="form_input" name="user_phone" placeholder="Напишіть телефон">
                </div>
                <div class="form_item">
                    <textarea name=" message" id="forMessage" class="form_input" placeholder="Напишіть, адресу, дату та  на яку годину потрібне замовлення"></textarea>
                </div>
                <div class="form_button_div">
                    <button type="submit" class="form_button">Отправить</button>
                </div>
                </form>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
