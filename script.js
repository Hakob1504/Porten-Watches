// header part
let menuOpenClose = document.querySelector('.menu_open_close');
let menu = document.querySelector('.menu');
let menuUl = document.querySelector('ul');
let shopIcon = document.querySelector('.shop_icon');
let searchIcon = document.querySelector('.search_icon');
let searchInput = document.querySelector('.search');
let closeSearch = document.querySelector('.close_search');

if (window.screen.width <= 700) {
    menu.className = 'menu_closed';
    menuOpenClose.style = `display: flex;`;
    menuUl.style = `flex-direction: column; align-items: center; gap: 0`;
    menuOpenClose.addEventListener('click', () => {
        menu.classList.toggle('menu_closed');
        searchInput.style = `display: none;`;
        shopIcon.style = `display: block;`;
        closeSearch.style = `display: none;`;

    })
}

searchIcon.addEventListener('click', () => {
    menuUl.style = `display: none;`;
    shopIcon.style = `display: none;`;
    searchInput.style = `display: flex;`;
    closeSearch.style = `display: inline;`;
})

closeSearch.addEventListener('click', () => {
    shopIcon.style = `display: block;`;
    searchInput.style = `display: none;`;
    searchInput.value = '';
    closeSearch.style = `display: none;`;
    menuUl.style = `display: flex;`;
    if (window.screen.width <= 700) {
        menuUl.style = `display: flex; flex-direction: column; align-items: center; gap: 20px;`;
    }
})
// header part end

// login content appear
let signInBtn = document.querySelector('#sign_in');
let loginWindow = document.querySelector('.login_window');
let loginWindowCloseBtn = document.querySelector('.login_window_close_btn');

signInBtn.addEventListener('click', (e) => {
    e.preventDefault()
    loginWindow.classList.add('login_opened');
})
loginWindowCloseBtn.addEventListener('click', () => {
    loginWindow.classList.remove('login_opened');
})

// login content appear end

// sign up content appear
let signUpBtn = document.querySelector('#sign_up');
let signUpWindow = document.querySelector('.signUp_window');
let signUpWindowCloseBtn = document.querySelector('.signUp_window_close_btn');

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    signUpWindow.classList.add('login_opened');
})
signUpWindowCloseBtn.addEventListener('click', () => {
    signUpWindow.classList.remove('login_opened');
})

window.addEventListener('click', (event) => {
    if(event.target == loginWindow) {
        loginWindow.classList.remove('login_opened')
    } else if(event.target == signUpWindow) {
        signUpWindow.classList.remove('login_opened')
    }
} )

// sign up content appear end
// collection 2018
let collection_2018_p = document.querySelector('.collection_2018_p');
let collection_2018_btn = document.querySelector('.collection_2018_h2');

if (window.screen.width <= 900) {
    collection_2018_p.className = 'open_close';
    collection_2018_btn.addEventListener('click', () => {
        if (collection_2018_p.className === 'open_close') {
            collection_2018_p.className = 'collection_2018_p'
        } else {
            collection_2018_p.className = 'open_close';
        }
    })
}
// shop icon, buy watches, filter
let main = document.querySelector('main');

shopIcon.addEventListener('click', () => {
    let lastChild = main.lastElementChild;
    while (lastChild) {
        main.removeChild(lastChild);
        lastChild = main.lastElementChild;
    }
    
    let watchShop = document.createElement('div');
    watchShop.className = 'watchshop';
    main.classList.add('shop_main');
    main.append(watchShop);

    let shopLine = document.createElement('div');
    shopLine.className = 'shop_line';
    main.prepend(shopLine);

    let filter_cart = document.createElement('div');
    filter_cart.className = 'filter_cart';
    main.prepend(filter_cart)

    let filterDiv = document.createElement('div');
    filterDiv.className = 'filter_div';
    filterDiv.innerHTML = `
    <div class="filter_btn_div">
        <button class="filter_btn"></button>
    </div>
    <div class="filter_content filter_row filter_closed">
        <div class="choose_sex">
            <div class="man_chbox">
                <input type="checkbox" name="man" id="man">
                <label for="man">
                    <p>Мужские</p>
                </label>
            </div>
            <div class="woman_chbox">
                <input type="checkbox" name="woman" id="woman">
                <label for="woman">
                    <p>Женские</p>
                </label>
            </div>
        </div>
        <div class="choose_price">
            <p class="price">Цена ₽</p>
            <div class="price_write_area">
                <div class="from">
                    <p>От</p>
                    <input type="number">
                </div>
                <div class="to">
                    <p>До</p>
                    <input type="number">
                </div>
            </div>
        </div>
        <div class="watch_brands">
            <p class="choose_brand_p">Выберите бренд</p>
            <div class="choose_brand">
            <div class="rolex_chbox chbox_div">
                <input type="checkbox" name="rolex" id="rolex">
                <label for="rolex">
                    <p>Rolex</p>
                </label>
            </div>
            <div class="rado_chbox chbox_div">
                <input type="checkbox" name="rado" id="rado">
                <label for="rado">
                    <p>Rado</p>
                </label>
            </div>
            <div class="hamilton_chbox chbox_div">
                <input type="checkbox" name="hamilton" id="hamilton">
                <label for="hamilton">
                    <p>Hamilton</p>
                </label>
            </div>
            <div class="tissot_chbox chbox_div">
                <input type="checkbox" name="tissot" id="tissot">
                <label for="tissot">
                    <p>Tissot</p>
                </label>
            </div>
            <div class="michael_cors_chbox chbox_div">
                <input type="checkbox" name="michael_cors" id="michael_cors">
                <label for="michael_cors">
                    <p>Michael Cors</p>
                </label>
            </div>
            <div class="casio_chbox chbox_div">
                <input type="checkbox" name="casio" id="casio">
                <label for="casio">
                    <p>Casio</p>
                </label>
            </div>
            </div>
        </div>
    </div>
    `;
//     let allCartDiv = document.createElement('div');
//     allCartDiv.className = 'all_cart_content';
//     allCartDiv.innerHTML = 
//     `
//     <div class="cart_icon">
//     <button class="cart_icon_btn"></button>
// </div>
//     <div class="cart_div">
//         <div class="cart_content">
//             <p class="cart_content_p">
//                 Корзина пуст. <br>
//                 Нажмите на сердечко, чтобы добавить продукт в корзину.
//             </p>
//         </div>
//     </div>
//     `

//     filter_cart.append(allCartDiv);
    filter_cart.prepend(filterDiv);
    
    let filterIcon = document.querySelector('.filter_btn');
    let filterContent = document.querySelector('.filter_content');

    filterIcon.addEventListener('click', () => {
        filterContent.classList.toggle('filter_content');
    })

    let filterRow = document.querySelector('.filter_row');
    filterIcon.addEventListener('click', () => {
        filterRow.classList.toggle('filter_closed');
    })

    for (let i = 1; i <= 15; i++) {
        let watchContent = document.createElement('div');
        watchContent.className = 'watch_content';
        watchContent.innerHTML =
            `
            <img src="./img/season_collection/62050 1.png" alt="">
            <div class="about_watch">
                <p class="watch_name">Louis XVI ATHOS</p>
                <p class="watch_price">165 000 руб.</p>
            </div>
            <div class="buy_div">
                <button class="plus">&plus;</button>
                <input class="buy_btn" type="submit" value="Купить">
                <button class="like"><img src="./img/watch_shop_part/heart.png"></button>
            </div`;
        watchShop.append(watchContent)
        main.style = `
        background: #b8b4b4;
        padding: 50px 30px;
        display:flex;
        justify-content: space-between;
        gap:50px;
        `;
    }
})

// shop icon, but watches end

// new comings
let newWatches = document.querySelector('.new_watches');
let moreBtn = document.querySelector('.more');

window.addEventListener('load', () => {
    for (let i = 1; i <= 8; i++) {
        let div = document.createElement('div');
        div.className = 'watch';
        div.innerHTML = `
    <a href=""><img src="./img/season_collection/62050 1.png" alt=""></a>
    <div class="about_watch">
        <p class="watch_name">Louis XVI ATHOS</p>
        <p class="watch_price">165 000 руб.</p>
    </div>`;
        newWatches.append(div);

        if (window.screen.width < 330) {
            moreBtn.style = `display: block;`;
            if (i > 4) {
                div.classList.add('hidden_watches')
            }
            moreBtn.addEventListener('click', () => {
                if (i > 4) {
                    div.classList.toggle('hidden_watches');
                    if (!div.classList.contains('hidden_watches')) {
                        moreBtn.innerHTML = 'Скрыть'
                    } else {
                        moreBtn.innerHTML = 'Ещё'
                    }
                }
            })
        }
    }
})
