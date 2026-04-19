// База данных объектов с поддержкой галерей
const database = {
    categories: [
        { id: 'late', name: '🏢 Поздний период (70-00е)' },
        { id: 'mid', name: '🏗️ Средний период (40-60е)' },
        { id: 'early', name: '🏛️ Ранний период (10-30е)' },
        { id: 'underground', name: '🕳️ Подземелья' },
        { id: 'items', name: '📦 Галерея предметов' }
    ],
    articles: [
        // ПОЗДНИЙ ПЕРИОД
        {
            id: 'kcnti',
            title: 'Кемеровский Центр Научно-Технической Информации',
            category: 'late',
            image: 'cnti_main.jpg',
            address: 'Заводский район, ул. Сарыгина, 29',
            state: '80%',
            stateClass: 'state-80',
            shortDesc: 'Административное здание в стиле советского модернизма/конструктивизма.',
            fullDesc: `
                <h2>🏛️ Объект</h2>
                <p>Административное здание в стиле советского модернизма/конструктивизма. Классический представитель научной и административной архитектуры 1970--1980-х годов.</p>
                
                <h2>📜 История</h2>
                <p>Данные отсутствуют.</p>
                
                <h2>🔍 Особенности</h2>
                <p>Пятиэтажное панельное здание. Основной объём облицован мозаичной плиткой голубого цвета, первый и цокольный этажи выделены жёлтой плиткой.</p>
                
                <h2>🏚️ Современность</h2>
                <p>В настоящее время в здании расположены офисы, исполнительная инспекция ФСИН, а также установлены антенны сотовой связи.</p>
            `,
            gallery: [
                { src: 'cnti_facade.jpg', caption: 'Главный фасад здания' },
                { src: 'cnti_detail.jpg', caption: 'Детали мозаичной плитки' },
                { src: 'cnti_entrance.jpg', caption: 'Входная группа' }
            ],
            infobox: {
                'Статус': 'Действующее',
                'Годы постройки': '1970-1980',
                'Архитектурный стиль': 'Советский модернизм',
                'Этажность': '5 этажей',
                'Состояние': '80%'
            }
        },
        {
            id: 'orbita',
            title: 'Станция «Орбита»',
            category: 'late',
            image: 'orbita_main.jpg',
            address: 'Центральный район, Притомская набережная, 15',
            state: '90%',
            stateClass: 'state-90',
            shortDesc: 'Первая в СССР станция космической связи.',
            fullDesc: `
                <h2>🏛️ Объект</h2>
                <p>Станция космической связи (система для приема и ретрансляции сигнала через спутники серии «Молния»).</p>
                
                <h2>📜 История</h2>
                <p>Построена в городе Кемерово первой в СССР. Введена в эксплуатацию 22 сентября 1967 года. Инициатор строительства — главный инженер РТЦ А. Кожинский. Первый начальник станции — А. Григорьев.</p>
                
                <h2>🔍 Особенности</h2>
                <p>Станция принимала сигнал со спутника связи «Молния-1» и передавала его на радиотелецентр (РТЦ). Благодаря её работе в октябре 1967 года жители Кузбасса впервые смогли увидеть передачи Первой программы ЦТ СССР из Москвы. Обеспечивала возможность двусторонней телефонной, телеграфной и фототелеграфной связи.</p>
                
                <h2>🏚️ Современность</h2>
                <p>Является работающим объектом.</p>
            `,
            gallery: [
                { src: 'orbita_antenna.jpg', caption: 'Антенна станции' },
                { src: 'orbita_building.jpg', caption: 'Здание станции' }
            ],
            infobox: {
                'Статус': 'Работает',
                'Ввод в строй': '22 сентября 1967',
                'Первый начальник': 'А. Григорьев',
                'Тип': 'Станция космической связи',
                'Состояние': '90%'
            }
        },
        // РАННИЙ ПЕРИОД
        {
            id: 'dom_khz',
            title: 'Жилой дом КХЗ (коксохимического завода)',
            category: 'early',
            image: 'khz_main.jpg',
            address: 'Центральный район, Красноармейская, 128а',
            state: '60%',
            stateClass: 'state-60',
            shortDesc: 'Жилой дом в стиле постконструктивизма. 1938 г.',
            fullDesc: `
                <h2>🏛️ Объект</h2>
                <p>Жилой дом в стиле постконструктивизма.</p>
                
                <h2>📜 История</h2>
                <p>Построен в 1938 году для работников Коксохима. Архитектор проекта — И.И. Соколов-Добрев.</p>
                
                <h2>🔍 Особенности</h2>
                <p>Выполнен в стиле постконструктивизма с элементами сталинского ампира. Внутри — двух- и трёхкомнатные квартиры с раздельными санузлами и балконами. Перекрытия деревянные.</p>
                
                <h2>🏚️ Современность</h2>
                <p>Дом скрыт среди пятиэтажек и гаражей, выглядит необычно. Подъезды открыты, внутри — старые деревянные полы.</p>
            `,
            gallery: [
                { src: 'khz_facade.jpg', caption: 'Фасад здания' },
                { src: 'khz_balcony.jpg', caption: 'Балконы' },
                { src: 'khz_entrance.jpg', caption: 'Подъезд' }
            ],
            infobox: {
                'Архитектор': 'И.И. Соколов-Добрев',
                'Год постройки': '1938',
                'Стиль': 'Постконструктивизм',
                'Материал': 'Кирпич',
                'Состояние': '60%'
            }
        },
        // ПОДЗЕМЕЛЬЯ
        {
            id: 'bomb_shelter_prom',
            title: 'Бомбоубежище в промзоне',
            category: 'underground',
            image: 'bomb_shelter_prom_main.jpg',
            address: '[ДАННЫЕ УДАЛЕНЫ]',
            state: '60%',
            stateClass: 'state-60',
            shortDesc: 'Небольшое отдельно стоящее бомбоубежище среди промышленных цехов.',
            fullDesc: `
                <h2>🏛️ Объект</h2>
                <p>Небольшое отдельно стоящее бомбоубежище, расположенное среди промышленных цехов.</p>
                
                <h2>📜 История</h2>
                <p>Данные отсутствуют.</p>
                
                <h2>🔍 Особенности</h2>
                <p>Имеет 3-4 внутренних помещения и два выхода.</p>
                
                <h2>🏚️ Современность</h2>
                <p>Внутри присутствуют следы пожара. Сохранилась часть плитки в туалетных комнатах, отдельные детали противогазов, обломки вентиляционных систем. Пол покрыт слоем мусора.</p>
            `,
            gallery: [
                { src: 'shelter_entrance.jpg', caption: 'Вход в убежище' },
                { src: 'shelter_inside.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_tiles.jpg', caption: 'Сохранившаяся плитка' }
            ],
            infobox: {
                'Тип': 'Отдельно стоящее',
                'Входов': '2',
                'Помещений': '3-4',
                'Состояние': '60%'
            }
        },
        // ПРЕДМЕТЫ
        {
            id: 'ip46',
            title: 'Изолирующий противогаз ИП-46',
            category: 'items',
            image: 'ip46_main.jpg',
            address: 'Музейная коллекция',
            state: '1964 г.',
            stateClass: 'state-90',
            shortDesc: 'Регенеративный противогаз ВМФ СССР. Снят с вооружения в 1978 г.',
            fullDesc: `
                <h2>📜 История</h2>
                <p>Противогаз ИП-46 — это изолирующий (регенеративный) противогаз, предназначенный для защиты органов дыхания, глаз и кожи лица в атмосфере с недостатком кислорода или содержащей любые вредные примеси в высоких концентрациях. Противогаз ИП-46 был снят с вооружения ВМФ СССР в 1978 году.</p>
                
                <h2>🛠 Конструкция</h2>
                <p>В состав противогаза входят лицевая часть ШВСМ, регенеративный патрон с пусковым приспособлением, дыхательный мешок с клапаном избыточного давления, каркас и сумка. Его принцип действия основан на замкнутом цикле дыхания: выдыхаемый воздух очищается от углекислого газа и влаги в регенеративном патроне и обогащается кислородом.</p>
                
                <h2>⚠️ Важно</h2>
                <p>Регенеративный патрон содержит большое количество химически активного вещества (надпероксид калия).</p>
                
                <h2>📦 Модель в коллекции</h2>
                <p>Комплектация: ИП-46 (имеется зажим и загубник). Дата изготовления: 1964 год (клеймо на корпусе). Состояние: Маска имеет повреждения на левой стороне. Регенеративный патрон был промыт водой для удаления активного вещества.</p>
            `,
            gallery: [
                { src: 'ip46_full.jpg', caption: 'Общий вид' },
                { src: 'ip46_mask.jpg', caption: 'Маска ШВСМ' },
                { src: 'ip46_patron.jpg', caption: 'Регенеративный патрон' },
                { src: 'ip46_bag.jpg', caption: 'Дыхательный мешок' }
            ],
            infobox: {
                'Тип': 'Изолирующий',
                'Год выпуска': '1964',
                'Производитель': 'СССР',
                'Время защиты': '50-60 мин (нагрузка)',
                'Состояние': 'Коллекционное'
            }
        }
    ]
};

// ============ ФУНКЦИИ ОТРИСОВКИ ============

// Создание меню категорий
function renderCategoryMenu() {
    const menu = document.getElementById('categoryMenu');
    if (!menu) return;
    
    let html = '';
    database.categories.forEach(cat => {
        html += `<li><a href="#" onclick="showCategory('${cat.id}'); return false;">${cat.name}</a></li>`;
    });
    menu.innerHTML = html;
}

// Показать категорию
function showCategory(categoryId) {
    const category = database.categories.find(c => c.id === categoryId);
    const articles = database.articles.filter(a => a.category === categoryId);
    
    const mainContent = document.getElementById('mainContent');
    
    let articlesHtml = '';
    articles.forEach(art => {
        articlesHtml += `
            <div class="card" onclick="showArticle('${art.id}')">
                <div class="card-img" style="background-image: url('images/${art.image}');"></div>
                <div class="card-content">
                    <div class="card-title">${art.title}</div>
                    <div class="card-desc">${art.shortDesc}</div>
                    <div class="card-meta">
                        <span class="card-category">${category.name}</span>
                        <span>${art.state}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    mainContent.innerHTML = `
        <h1 class="page-title">${category ? category.name : 'Категория'}</h1>
        <p>Найдено объектов: ${articles.length}</p>
        <div class="cards-grid">
            ${articlesHtml || '<p>В этой категории пока нет объектов.</p>'}
        </div>
        <p style="margin-top: 20px;"><a href="#" onclick="showHomePage(); return false;">← Вернуться на главную</a></p>
    `;
    
    // Обновляем URL
    window.history.pushState({}, '', `?category=${categoryId}`);
}

// Показать главную страницу
function showHomePage() {
    const mainContent = document.getElementById('mainContent');
    
    // Получаем все статьи для сетки
    const featuredArticles = database.articles.slice(0, 6);
    let cardsHtml = '';
    featuredArticles.forEach(art => {
        const cat = database.categories.find(c => c.id === art.category);
        cardsHtml += `
            <div class="card" onclick="showArticle('${art.id}')">
                <div class="card-img" style="background-image: url('images/${art.image}');"></div>
                <div class="card-content">
                    <div class="card-title">${art.title}</div>
                    <div class="card-desc">${art.shortDesc}</div>
                    <div class="card-meta">
                        <span class="card-category">${cat ? cat.name : art.category}</span>
                        <span>${art.state}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    mainContent.innerHTML = `
        <article class="main-article">
            <h1 class="page-title">Добро пожаловать в энциклопедию Стеклоблок!</h1>
            
            <div class="greeting-card">
                <p>👋 Этот проект разработан для любителей советской архитектуры. Вы можете выбирать разные объекты, которые я самолично посетил и сфотографировал. 📸</p>
                <p>Проект развивается, присылайте свои материалы через кнопку «Обратная связь».</p>
            </div>

            <div class="youtube-section">
                <h2>🎬 Видеоархив проекта</h2>
                <div class="youtube-wrapper">
                    <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
                <p class="caption">🎥 Замените ID видео в коде (сейчас заглушка).</p>
            </div>

            <h2>🏛️ Последние добавленные объекты</h2>
            <div class="cards-grid">
                ${cardsHtml}
            </div>
            
            <p style="margin-top: 30px; text-align: center;">
                <a href="#" onclick="showCategory('late'); return false;" style="margin: 0 10px;">🏢 Поздний период</a> |
                <a href="#" onclick="showCategory('early'); return false;" style="margin: 0 10px;">🏛️ Ранний период</a> |
                <a href="#" onclick="showCategory('items'); return false;" style="margin: 0 10px;">📦 Предметы</a>
            </p>
        </article>
    `;
    
    window.history.pushState({}, '', 'index.html');
}

// Показать статью
function showArticle(articleId) {
    const article = database.articles.find(a => a.id === articleId);
    if (!article) return;
    
    const mainContent = document.getElementById('mainContent');
    const category = database.categories.find(c => c.id === article.category);
    
    // Генерируем галерею если есть
    let galleryHtml = '';
    if (article.gallery && article.gallery.length > 0) {
        let items = '';
        article.gallery.forEach(img => {
            items += `
                <div class="gallery-item">
                    <img src="images/${img.src}" alt="${img.caption}" loading="lazy">
                    <div class="gallery-caption">${img.caption}</div>
                </div>
            `;
        });
        galleryHtml = `
            <h2>📷 Фотогалерея</h2>
            <div class="article-gallery">
                ${items}
            </div>
        `;
    }
    
    // Генерируем строки инфобокса
    let infoboxRows = '';
    for (const [key, value] of Object.entries(article.infobox)) {
        infoboxRows += `
            <div class="infobox-row">
                <div class="infobox-label">${key}</div>
                <div class="infobox-value">${value}</div>
            </div>
        `;
    }
    
    mainContent.innerHTML = `
        <h1 class="page-title">${article.title}</h1>
        <div class="article-container">
            <div class="article-text">
                ${article.fullDesc}
                ${galleryHtml}
            </div>
            <div class="infobox">
                <div class="infobox-title">Информация об объекте</div>
                <div class="infobox-image" style="background-image: url('images/${article.image}');"></div>
                ${infoboxRows}
                <div class="infobox-row">
                    <div class="infobox-label">📍 Адрес</div>
                    <div class="infobox-value">${article.address}</div>
                </div>
                <div class="infobox-row">
                    <div class="infobox-label">🟩 Состояние</div>
                    <div class="infobox-value"><span class="state-badge ${article.stateClass}">${article.state}</span></div>
                </div>
                <div class="infobox-row">
                    <div class="infobox-label">📂 Категория</div>
                    <div class="infobox-value"><a href="#" onclick="showCategory('${article.category}'); return false;">${category ? category.name : article.category}</a></div>
                </div>
            </div>
        </div>
        <p style="margin-top: 20px;">
            <a href="#" onclick="window.history.back(); return false;">← Назад</a> | 
            <a href="#" onclick="showHomePage(); return false;">🏠 На главную</a>
        </p>
    `;
    
    window.history.pushState({}, '', `?article=${articleId}`);
}

// Случайная статья
function randomArticle() {
    const randomIndex = Math.floor(Math.random() * database.articles.length);
    showArticle(database.articles[randomIndex].id);
}

// Поиск
function performSearch(query) {
    if (!query || query.trim() === '') return;
    
    query = query.toLowerCase().trim();
    const results = database.articles.filter(a => 
        a.title.toLowerCase().includes(query) || 
        a.shortDesc.toLowerCase().includes(query) ||
        (a.fullDesc && a.fullDesc.toLowerCase().includes(query))
    );
    
    const mainContent = document.getElementById('mainContent');
    
    if (results.length === 0) {
        mainContent.innerHTML = `
            <h1 class="page-title">🔍 Результаты поиска: "${query}"</h1>
            <p>Ничего не найдено.</p>
            <p><a href="#" onclick="showHomePage(); return false;">← Вернуться на главную</a></p>
        `;
    } else if (results.length === 1) {
        showArticle(results[0].id);
    } else {
        let cardsHtml = '';
        results.forEach(art => {
            const cat = database.categories.find(c => c.id === art.category);
            cardsHtml += `
                <div class="card" onclick="showArticle('${art.id}')">
                    <div class="card-img" style="background-image: url('images/${art.image}');"></div>
                    <div class="card-content">
                        <div class="card-title">${art.title}</div>
                        <div class="card-desc">${art.shortDesc}</div>
                        <div class="card-meta">
                            <span class="card-category">${cat ? cat.name : art.category}</span>
                            <span>${art.state}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        mainContent.innerHTML = `
            <h1 class="page-title">🔍 Результаты поиска: "${query}"</h1>
            <p>Найдено объектов: ${results.length}</p>
            <div class="cards-grid">
                ${cardsHtml}
            </div>
            <p><a href="#" onclick="showHomePage(); return false;">← Вернуться на главную</a></p>
        `;
    }
}

// Обработка URL при загрузке
function handleRouting() {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('article');
    const categoryId = params.get('category');
    
    if (articleId) {
        showArticle(articleId);
    } else if (categoryId) {
        showCategory(categoryId);
    } else {
        showHomePage();
    }
}

// ============ ИНИЦИАЛИЗАЦИЯ ============
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryMenu();
    handleRouting();
    
    // Поиск
    const searchInput = document.getElementById('globalSearchInput');
    const searchBtn = document.getElementById('globalSearchBtn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => performSearch(searchInput.value));
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value);
        });
    }
});

// Делаем функции глобальными для onclick
window.showCategory = showCategory;
window.showHomePage = showHomePage;
window.showArticle = showArticle;
window.randomArticle = randomArticle;
window.performSearch = performSearch;
