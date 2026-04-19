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
                { src: 'cnti_entrance.jpg', caption: 'Входная группа' }
            ],
            infobox: {
                'Статус': 'Действующее',
                'Годы постройки': '1970-1980',
                'Архитектура': 'Советский модернизм',
                'Этажность': '5 этажей',
                'Состояние': '80%'
            }
        },
        {
            id: 'orbita',
            title: 'Станция «Орбита»',
            category: 'mid',
            image: 'orbita_build.jpg',
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
                { src: 'orbita_antenna2.jpg', caption: 'Антенна станции' },
                { src: 'orbita_build.jpg', caption: 'Здание станции' },
                { src: 'orbita_building.jpg', caption: 'Проесс строительства' }
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
                { src: 'khz_main.jpg', caption: 'Фасад здания' },
                { src: 'khz_entrance_1.jpg', caption: 'Подъезд' },
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
                { src: 'bomb_shelter_prom_main.jpg', caption: 'Вход в убежище' },
                { src: 'shelter_inside.jpg', caption: 'Внутреннее помещение' }
            ],
            infobox: {
                'Тип': 'Отдельно стоящее',
                'Входов': '2',
                'Помещений': '3-4',
                'Состояние': '60%'
            }
        },
        {
            id: 'bomb_shelter_avtoz',
            title: 'Бомбоубежище в за Спецавтохозяйством',
            category: 'underground',
            image: 'shelter_avtoz_main.jpg',
            address: '[ДАННЫЕ УДАЛЕНЫ]',
            state: '50%',
            stateClass: 'state-60',
            shortDesc: 'Крупное бомбоубежище возле железной дороги',
            fullDesc: `
                <h2>🏛️ Объект</h2>
                <p>Большое отдельно стоящее бомбоубежище, расположенное между Ж/Д и гаражами. Имеет три входа и множество оголовков вентиляционных шахт.</p>
                
                <h2>📜 История</h2>
                <p>Построено примерно в 1960-1970 гг.</p>
                
                <h2>🔍 Особенности</h2>
                <p>Имеет больше помещение для укрываемых, несколько комнат с плиткой. В одной из комнат есть основание от дизельной электростанции.</p>
                
                <h2>🏚️ Современность</h2>
                <p>Бомбоубежище разграблено. Внутри слои сажи, мусор, обломки кирпича. Часть насыпи раскопано.</p>
            `,
            gallery: [
                { src: 'shelter_avtoz_main.jpg', caption: 'Вход в убежище' },
                { src: 'shelter_avtoz_inside.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_inside2.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_inside3.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_inside4.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_inside5.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_inside6.jpg', caption: 'Внутреннее помещение' },
                { src: 'shelter_avtoz_vent.jpg', caption: 'Вентиляция' },
                { src: 'shelter_avtoz_vent2.jpg', caption: 'Вентиляция' }
            ],
            infobox: {
                'Тип': 'Отдельно стоящее',
                'Входов': '3',
                'Помещений': '5-6',
                'Состояние': '50%'
            }
        },
        // ПРЕДМЕТЫ
        {
            id: 'ip46',
            title: 'Изолирующий противогаз, тип 46 (ИП-46)',
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
                <p>Комплектация: ИП-46 (имеется зажим и загубник). Дата изготовления: 1967 год (клеймо на корпусе). Состояние: Маска имеет повреждения на левой стороне. Регенеративный патрон был промыт водой для удаления активного вещества.</p>
            `,
            gallery: [
                { src: 'ip46_full.jpg', caption: 'Общий вид' },
                { src: 'ip46_mask.jpg', caption: 'Маска ШВСМ' },
                { src: 'ip46_patron.jpg', caption: 'Регенеративный патрон' },
                { src: 'ip46_bag.jpg', caption: 'Клеймо короба' }
            ],
            infobox: {
                'Тип': 'Изолирующий',
                'Год выпуска': '1964',
                'Создано': 'СССР',
                'Время защиты': '50-60 мин (нагрузка)',
                'Состояние': 'Коллекционное'
            }
        },
        {
            id: 'p5',
            title: 'Граждансикй противогаз, тип 5 (ГП-5)',
            category: 'items',
            image: 'gp5mask.jpg',
            address: 'Музейная коллекция',
            state: '1981 г.',
            stateClass: 'state-90',
            shortDesc: 'Самый массовый противогаз в мире.',
            fullDesc: `
                <h2>📜 История</h2>
                <p>Противогаз ГП-5 — это классический фильтрующий противогаз времён холодной войны, предназначенный для защиты органов дыхания, глаз и кожи лица для защиты от отравляющих веществ, радиоактивной пыли и бактериальных аэрозолей. Производился до 1990х годов. Всего было выпущено более 800 млн штук, т.к. на каждого гражданина СССР должно было хватать по три противогаза.</p>
                
                <h2>🛠 Конструкция</h2>
                <p>В состав противогаза входят лицевая часть ШМ-62 или ШМ-62у, сумка, незапотевающие плёнки (НП), инструкция, фильтрующе-поглощающая коробка (ФПК). ШМ-62у отличается от ШМ-62 толщиной резины. Маска выпускалась в пяти рамзерах: 0, 1, 2, 3, 4. Так же имеется вариант из чёрной резины - ШМП (шлем-маска специальная). Маска имеет очковый узел из двух линз в металических ободах. Клапанная коробка снабжена стандартной резьбой 40х4 мм, что позволяет использовать любой стандартный фильтр. От клапана вдоха воздух проходит по резиновым трубкам к очкам, что предотвращает их запотевание. Очки имеют крепление для НП.</p>
                
                <h2>⚠️ Важно</h2>
                <p>ФПК ГП-5 не защищает от аммиака и угарного газа(необходимо использовать ДПГ-3 или ДП-2 соотвественно).</p>
                
                <h2>📦 Модель в коллекции</h2>
                <p>Комплектация: 6 масок ШМ-62у разных размеров. Даты изготовления: 1978-1981 гг. Состояние: Хорошее.</p>
            `,
            gallery: [
                { src: 'gp5complect.jpg', caption: 'Комплект' },
                { src: 'gp5mask.jpg', caption: 'Маска ШМ-62у' },
                { src: 'gp5army.jpg', caption: 'Военный в ГП-5' },
                { src: 'gp5onman.jpg', caption: 'ГП-5 на человеке' },
                { src: 'gp5filter.jpg', caption: 'ФПК' },
                { src: 'gp5mask2.jpg', caption: 'Клейма на маске' },
                { src: 'gp5inside.jpg', caption: 'Маска изнутри' },
                { src: 'gp5kk.jpg', caption: 'Клапанная коробка' },
                { src: 'gp5stalker.jpg', caption: 'ГП-5' }
            ],
            infobox: {
                'Тип': 'Фильтрующий',
                'Год выпуска': '1981',
                'Создано': 'СССР',
                'Время защиты': 'зависит от фильтра',
                'Состояние': 'Коллекционное'
            }
        },
        {
            id: 'ShMS',
            title: 'Шлем-маска специальная (ШМС)',
            category: 'items',
            image: 'shms_full.jpg',
            address: 'Музейная коллекция',
            state: '1989 г.',
            stateClass: 'state-90',
            shortDesc: 'Специальная маска, разработанная для офицерского состава.',
            fullDesc: `
                <h2>📜 История</h2>
                <p>ШМС разработана в 1960-х годах. Использовалась офицерским составом, водителями. Выпускалась до самого распада СССР. Используется в комлпектах РШ-4 с фильтром ЕО-16. Создана как замена маске ШМ-41. Так же существует модификация ШМС-Р. Применяется в противогазе ПРВ-У для заправщиков ракет. Имеется модификация ЛП-2 для лётчиков. Отличие - питьевая система и новый клапан выдоха.</p>
                <p>ФГП-130В - классический промышленный фильтр. Применялся на химических производствах.</p>
                <p>Данный комплект обнаружен в бомбоубежище химического комбината.</p>
                
                <h2>🛠 Конструкция</h2>
                <p>Имеет специальную конструкцию очкового узла, это позволяет исользовать оптические приборы совместно с маской. Клапанная коробка досталась от предшестенника ШМ-41. Возможна устновка утпеляющих манжетов. В маску воздух поступает через клапан, по резиновым трубкам по бокам маски и обдувает глаза сверху. Резьба стандартная 40х4 мм ГОСТ.</p>
                <p>ФГП-130В представляет собой стальной бачок жёлтого цвета с белой полосой на боку. Жёлтый цвет обозначает защиту от кислых веществ и из паров. Белая полоса - противопыльная, противотуманная, противоаэрозольная защита. Фильтр закрывается пластиковой крышкой сверху и резиновой заглушкой снизу)<p>
                <p>В комплекте присутствует гофротруба резинотканевая. Это необходимо из-за большого веса ФПК, около 900 грамм. ФПК размещается в сумке типа "Е". Данная сумка характеризуется наличием кармана для ФПК.
                
                <h2>⚠️ Важно</h2>
                <p>Защищает от кислотных газов и паров (диоксида серы, хлора, сероводорода, синильной кислоты, оксидов азота, хлороводорода, фосгена), фосфорорганических и хлорорганических пестицидов, а так же от пыли.</p>
                
                <h2>📦 Модель в коллекции</h2>
                <p>Комплектация: Маска ШМС. Дата изготовления: 1989 год (клеймо на маске). Гофротруба, сумка типа "Е". ФПК ФГП-130В. Год производства 1991. Состояние: складское хранение.</p>
            `,
            gallery: [
                { src: 'shms_full.jpg', caption: 'Общий вид' },
                { src: 'shms_msk.jpg', caption: 'Маска ШМС' },
                { src: 'shms_fpk.jpg', caption: 'ФПК' },
                { src: 'shms_bag.jpg', caption: 'Клеймо короба' }
            ],
            infobox: {
                'Тип': 'Фильтрующий',
                'Год выпуска': '1989-1991',
                'Создано': 'СССР',
                'Время защиты': 'зависит от фильтра',
                'Состояние': 'Коллекционное'
            }
        }
    ]
};

// ============ ЛАЙТБОКС ============
let currentGallery = [];
let currentImageIndex = 0;

function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';
    
    lightbox.innerHTML = `
        <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
        <span class="lightbox-prev" onclick="prevImage()">❮</span>
        <span class="lightbox-next" onclick="nextImage()">❯</span>
        <div class="lightbox-content">
            <img id="lightbox-img" src="" alt="">
            <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', handleLightboxKeys);
}

function handleLightboxKeys(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

function openLightbox(images, startIndex = 0) {
    currentGallery = images;
    currentImageIndex = startIndex;
    
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.src = `images/${currentGallery[currentImageIndex].src}`;
    caption.textContent = currentGallery[currentImageIndex].caption;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateLightboxArrows();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    if (currentGallery.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    updateLightboxImage();
}

function prevImage() {
    if (currentGallery.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.src = `images/${currentGallery[currentImageIndex].src}`;
    caption.textContent = currentGallery[currentImageIndex].caption;
    updateLightboxArrows();
}

function updateLightboxArrows() {
    const prev = document.querySelector('.lightbox-prev');
    const next = document.querySelector('.lightbox-next');
    
    if (currentGallery.length <= 1) {
        prev.style.display = 'none';
        next.style.display = 'none';
    } else {
        prev.style.display = 'flex';
        next.style.display = 'flex';
    }
}

window.closeLightbox = closeLightbox;
window.prevImage = prevImage;
window.nextImage = nextImage;

// ============ ФУНКЦИИ ОТРИСОВКИ ============

function renderCategoryMenu() {
    const menu = document.getElementById('categoryMenu');
    if (!menu) return;
    
    let html = '';
    database.categories.forEach(cat => {
        html += `<li><a href="#" onclick="showCategory('${cat.id}'); return false;">${cat.name}</a></li>`;
    });
    menu.innerHTML = html;
}

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
    
    window.history.pushState({}, '', `?category=${categoryId}`);
    
    // На мобильных закрываем сайдбар после перехода
    if (window.innerWidth <= 800 && sidebarState && sidebarState.isOpen) {
        collapseSidebar();
    }
}

function showHomePage() {
    const mainContent = document.getElementById('mainContent');
    
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
            <h1 class="page-title">Добро пожаловать в энциклопедию!</h1>
            
            <div class="greeting-card">
                <p>👋 Этот проект разработан для любителей советской архитектуры. Вы можете выбирать разные объекты, которые я самолично посетил и сфотографировал. 📸</p>
                <p>Проект развивается, присылайте свои материалы через кнопку «Обратная связь».</p>
            </div>

            <h2>🏛️ Последние добавленные объекты</h2>
            <div class="cards-grid">
                ${cardsHtml}
            </div>
            <div class="youtube-section">
                <h2>🎬 Видеоархив проекта</h2>
                <div class="youtube-wrapper">
                    <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/mNf2xctWUBI" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <p style="margin-top: 30px; text-align: center;">
                <a href="#" onclick="showCategory('late'); return false;" style="margin: 0 10px;">🏢 Поздний период</a> |
                <a href="#" onclick="showCategory('early'); return false;" style="margin: 0 10px;">🏛️ Ранний период</a> |
                <a href="#" onclick="showCategory('items'); return false;" style="margin: 0 10px;">📦 Предметы</a>
            </p>
        </article>
    `;
    
    window.history.pushState({}, '', 'index.html');
    
    // На мобильных закрываем сайдбар после перехода
    if (window.innerWidth <= 800 && sidebarState && sidebarState.isOpen) {
        collapseSidebar();
    }
}

function showArticle(articleId) {
    const article = database.articles.find(a => a.id === articleId);
    if (!article) return;
    
    const mainContent = document.getElementById('mainContent');
    const category = database.categories.find(c => c.id === article.category);
    
    let galleryHtml = '';
    if (article.gallery && article.gallery.length > 0) {
        let items = '';
        article.gallery.forEach((img, index) => {
            items += `
                <div class="gallery-item" onclick="openLightbox(${JSON.stringify(article.gallery).replace(/"/g, '&quot;')}, ${index})">
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
                <div class="infobox-image">
                    <img src="images/${article.image}" alt="${article.title}" onclick="openLightbox([{src: '${article.image}', caption: '${article.title}'}], 0)">
                </div>
                <div class="infobox-content">
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
        </div>
        <p style="margin-top: 20px;">
            <a href="#" onclick="window.history.back(); return false;">← Назад</a> | 
            <a href="#" onclick="showHomePage(); return false;">🏠 На главную</a>
        </p>
    `;
    
    window.history.pushState({}, '', `?article=${articleId}`);
    
    // На мобильных закрываем сайдбар после перехода
    if (window.innerWidth <= 800 && sidebarState && sidebarState.isOpen) {
        collapseSidebar();
    }
}

function randomArticle() {
    const randomIndex = Math.floor(Math.random() * database.articles.length);
    showArticle(database.articles[randomIndex].id);
}

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
    
    // На мобильных закрываем сайдбар после перехода
    if (window.innerWidth <= 800 && sidebarState && sidebarState.isOpen) {
        collapseSidebar();
    }
}

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

// ============ БОКОВАЯ ПАНЕЛЬ ============
let sidebarState = {
    isOpen: false,
    isMobile: window.innerWidth <= 800
};

function initSidebar() {
    const sidebar = document.querySelector('.wiki-sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!sidebar || !toggleBtn) return;
    
    // Функция для проверки мобильного режима
    function checkMobileAndSetup() {
        sidebarState.isMobile = window.innerWidth <= 800;
        
        if (!sidebarState.isMobile) {
            // На десктопе панель всегда открыта, кнопка скрыта через CSS
            sidebar.classList.remove('collapsed');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('sidebar-open');
            sidebarState.isOpen = true;
            toggleBtn.style.display = 'none';
            return false; // не мобильный режим
        } else {
            // На мобильных показываем кнопку
            toggleBtn.style.display = 'flex';
            return true; // мобильный режим
        }
    }
    
    // Инициализация в зависимости от режима
    const isMobileNow = checkMobileAndSetup();
    
    if (isMobileNow) {
        // На мобильных по умолчанию панель закрыта
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'false') {
            expandSidebar();
        } else {
            collapseSidebar();
        }
    }
    
    // Обработчик кнопки
    toggleBtn.addEventListener('click', () => {
        if (!sidebarState.isMobile) return; // На десктопе игнорируем
        
        if (sidebarState.isOpen) {
            collapseSidebar();
        } else {
            expandSidebar();
        }
    });
    
    // Закрытие по оверлею
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (sidebarState.isMobile && sidebarState.isOpen) {
                collapseSidebar();
            }
        });
    }
    
    // Отслеживание изменения размера экрана
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const wasMobile = sidebarState.isMobile;
            const isMobileNow = checkMobileAndSetup();
            
            // При переключении с мобильного на десктоп
            if (wasMobile && !isMobileNow) {
                // Всё уже настроено в checkMobileAndSetup()
            }
            // При переключении с десктопа на мобильный
            else if (!wasMobile && isMobileNow) {
                const savedState = localStorage.getItem('sidebarCollapsed');
                if (savedState === 'false') {
                    expandSidebar();
                } else {
                    collapseSidebar();
                }
            }
        }, 100);
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebarState.isMobile && sidebarState.isOpen) {
            collapseSidebar();
        }
    });
}

function collapseSidebar() {
    const sidebar = document.querySelector('.wiki-sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!sidebar) return;
    
    sidebar.classList.add('collapsed');
    if (toggleBtn) {
        toggleBtn.classList.add('collapsed');
        const arrow = toggleBtn.querySelector('.arrow');
        if (arrow) arrow.textContent = '▶';
    }
    
    if (overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
    
    sidebarState.isOpen = false;
    localStorage.setItem('sidebarCollapsed', 'true');
}

function expandSidebar() {
    const sidebar = document.querySelector('.wiki-sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!sidebar) return;
    
    sidebar.classList.remove('collapsed');
    if (toggleBtn) {
        toggleBtn.classList.remove('collapsed');
        const arrow = toggleBtn.querySelector('.arrow');
        if (arrow) arrow.textContent = '◀';
    }
    
    if (overlay) {
        overlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }
    
    sidebarState.isOpen = true;
    localStorage.setItem('sidebarCollapsed', 'false');
}

// Глобальные функции для onclick
window.showCategory = showCategory;
window.showHomePage = showHomePage;
window.showArticle = showArticle;
window.randomArticle = randomArticle;
window.performSearch = performSearch;
window.openLightbox = openLightbox;

// ============ ИНИЦИАЛИЗАЦИЯ ============
document.addEventListener('DOMContentLoaded', () => {
    createLightbox();
    renderCategoryMenu();
    initSidebar();
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
    
    // Тема
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

// Перехват всех переходов через прямое патчингование функций
const originalShowCategory = showCategory;
const originalShowHomePage = showHomePage;
const originalShowArticle = showArticle;
const originalPerformSearch = performSearch;

function scrollToTop() {
    window.scrollTo(0, 0);
    const mainContent = document.getElementById('mainContent');
    if (mainContent) mainContent.scrollTop = 0;
}

window.showCategory = function(categoryId) {
    originalShowCategory(categoryId);
    scrollToTop();
};

window.showHomePage = function() {
    originalShowHomePage();
    scrollToTop();
};

window.showArticle = function(articleId) {
    originalShowArticle(articleId);
    scrollToTop();
};

window.performSearch = function(query) {
    originalPerformSearch(query);
    scrollToTop();
};

// Дополнительно для обработки popstate (кнопки назад/вперёд)
window.addEventListener('popstate', function() {
    handleRouting();
    scrollToTop();
});
