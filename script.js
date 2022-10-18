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
    loginWindow.classList.add('lgn_window');
})
loginWindowCloseBtn.addEventListener('click', () => {
    loginWindow.classList.remove('lgn_window');
})

// login content appear end

// sign up content appear
let signUpBtn = document.querySelector('#sign_up');
let signUpWindow = document.querySelector('.signUp_window');
let signUpWindowCloseBtn = document.querySelector('.signUp_window_close_btn');

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    signUpWindow.classList.add('lgn_window');
})
signUpWindowCloseBtn.addEventListener('click', () => {
    signUpWindow.classList.remove('lgn_window');
})

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
