class Shopping {

    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        // const totalPrice = (input) => parseInt(input.value) * parseInt(price);

        CATALOG.forEach(({id, img, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="shopping_div">
                        <img class="shopping_img" src="${img}" />
                        <div class="shopping_name">${name}</div>
                        <div class="shopping_price">${parseInt(price).toLocaleString()} грн</div>
                        <div class="input_group">
                            <input type="number" value="1" class="input" id="input.${id}" min="1" max="100" />
                        </div>
                        
                    </div>
                `;
            
                // sumCatalog += parseInt(price) * parseInt(document.getElementById(`input.${id}`).value);

                sumCatalog += parseInt(price);
              
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
