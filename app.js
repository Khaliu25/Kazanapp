const VENUES = [
    {
        name: "Skuratov Coffee (на Баумана)",
        lat: 55.792425,
        lng: 49.111120,
        recommendation: "Бери Нитро-кофе или Колд Брю, если на улице жарко. Идеально для работы на ходу и наблюдения за пешеходной улицей на просторной террасе."
    },
    {
        name: "Коктейльный бар More",
        lat: 55.797650,
        lng: 49.111418,
        recommendation: "Проси бармена приготовить авторский напиток на основе твоих предпочтений. Обязательно попробуй позиции, переосмысляющие локальные казанские ингредиенты."
    },
    {
        name: "Секретный бар Mr. Willard",
        lat: 55.792711,
        lng: 49.126339,
        recommendation: "Попробуй классические коктейли в безупречном исполнении. Попасть сюда можно только по рекомендации или через знакомство с барменами заведения More."
    },
    {
        name: "Кофейня Pesky",
        lat: 55.791233,
        lng: 49.115792,
        recommendation: "Заказывай традиционный кофе на песке и веганские десерты. Садись на уютную скрытую веранду, выходящую во внутренний дворик Профсоюзной."
    },
    {
        name: "Музыкальный бар Соль",
        lat: 55.791233,
        lng: 49.115792,
        recommendation: "Приходи на поздний сытный завтрак днем или заглядывай вечером на отличные виниловые диджей-сеты, концерты локальных групп и танцы."
    },
    {
        name: "Рюмочная Волна",
        lat: 55.793304,
        lng: 49.112232,
        recommendation: "Пробуй фирменные домашние настойки собственного приготовления на травах, ягодах или специях под простую, но качественную закуску вроде сытной шавермы."
    },
    {
        name: "Татарская кофейня Аулак",
        lat: 55.798014,
        lng: 49.107285,
        recommendation: "Бери большой татарский завтрак на двоих, нежные оладушки из печи с каймаком и завершай трапезу десертом в форме золотого эчпочмака."
    },
    {
        name: "Городское бистро Артель",
        lat: 55.792038,
        lng: 49.135169,
        recommendation: "Заказывай блюда из локальных сезонных продуктов от шефа, например, авторский кыстыбый с тыквой и кониной во время неспешного утреннего визита."
    },
    {
        name: "Гастробар Марусовка",
        lat: 55.792189,
        lng: 49.132735,
        recommendation: "Пробуй утку в сливовой карамели или венские вафли на завтрак. Летом обязательно бронируй столик на живописной террасе в тени деревьев Лядского сада."
    },
    {
        name: "Кофейня Фильтр в ЦСК Смена",
        lat: 55.788338,
        lng: 49.103683,
        recommendation: "Бери классический фильтр-кофе после посещения независимого книжного магазина и выставок современного искусства в пространстве кирпичного лофта."
    },
    {
        name: "Кафе-кондитерская Smorodina (на Лобачевского)",
        lat: 55.796036,
        lng: 49.122197,
        recommendation: "Заказывай авторские десерты из собственной кондитерской и бери кофе с собой для прогулки по историческому парку Черное озеро."
    },
    {
        name: "Крафтовый бар Brew Barrel Taproom (на Островского)",
        lat: 55.788970,
        lng: 49.114131,
        recommendation: "Пробуй брискет и другие виды нежного мяса из американского смокера в сочетании со сложными сортами пива из собственной пивоварни."
    },
    {
        name: "Кофейно-барное пространство Flat",
        lat: 55.789881,
        lng: 49.114364,
        recommendation: "Приходи днем за отличным спешелти-кофе, а вечером возвращайся поиграть в бильярд под музыку казанских диджеев с бокалом локального пива."
    },
    {
        name: "Спешелти-кофейня Нефть (на Университетской)",
        lat: 55.787604,
        lng: 49.119736,
        recommendation: "Попробуй альтернативные способы заваривания на зерне собственной обжарки и обязательно прихвати пачку свежего моносорта домой."
    },
    {
        name: "Кафе Дом Чая",
        lat: 55.789558,
        lng: 49.116637,
        recommendation: "Обязательно закажи традиционный татарский чай, эчпочмак, элеш и легендарный сметанник на втором этаже этого культового советского заведения."
    },
    {
        name: "Skuratov Coffee (на Столбова)",
        lat: 55.786080,
        lng: 49.113484,
        recommendation: "Бери воздушный Эйр-латте или сезонный кофейный напиток. Пространство идеально подходит для продуктивной удаленной работы за ноутбуком."
    },
    {
        name: "Паназиатский ресторан ZUKA",
        lat: 55.786080,
        lng: 49.113484,
        recommendation: "Занимай место за общим столом возле открытой кухни, заказывай димсамы или утку по-пекински и оцени лаконичный дизайн интерьера."
    },
    {
        name: "Винный бар Истина",
        lat: 55.788900,
        lng: 49.114292,
        recommendation: "Приходи на изысканный бранч или вечернюю дегустацию. Доверься сомелье в выборе вина из обширной карты под легкие гастрономичные закуски."
    },
    {
        name: "Пекарня Begin Bakery (на Гоголя)",
        lat: 55.795850,
        lng: 49.130150,
        recommendation: "Попробуй свежие ремесленные круассаны и десерты с витрины в сопровождении чашки спешелти-кофе в обновленном светлом пространстве."
    },
    {
        name: "Гастропространство VIO",
        lat: 55.821400,
        lng: 49.118900,
        recommendation: "Заказывай блюда в стиле итамеши — интересного фьюжена итальянской и японской кухни. Оцени эстетичный интерьер с картинами местных художников."
    },
    {
        name: "Ресторан Гречанка",
        lat: 55.821450,
        lng: 49.118950,
        recommendation: "Бери греческие мезе со свежеиспеченными лепешками и оригинальные авторские гиросы в качестве основного блюда."
    },
    {
        name: "Морское бистро Sea Salt",
        lat: 55.821410,
        lng: 49.118920,
        recommendation: "Пробуй свежие морепродукты и рыбу. Концепция строится на чистом вкусе продукта с деликатным использованием морской соли."
    },
    {
        name: "Спешелти-кофейня The Drip",
        lat: 55.790500,
        lng: 49.115000,
        recommendation: "Попробуй позиции из специализированного матча-меню с выпечкой от Muka Bakery в окружении живых цветов из лавки при кофейне."
    },
    {
        name: "Лапшичная Хорошим Людям",
        lat: 55.789881,
        lng: 49.114364,
        recommendation: "Бери наваристый рамен с уткой и белыми грибами, а на десерт обязательно закажи нежные японские моти ручной работы."
    },
    {
        name: "Ресторан Fields Premier",
        lat: 55.824100,
        lng: 49.123500,
        recommendation: "Заказывай пасту собственного производства или румяного цыпленка из печи. На завтрак бери фирменные воздушные круассаны."
    },
    {
        name: "Рестобар Штофъ Петровский",
        lat: 55.789700,
        lng: 49.116200,
        recommendation: "Выбирай среди полутора сотен видов домашних настоек на травах и корнях. На закуску бери премиальные стейки из конины или татарскую выпечку."
    },
    {
        name: "Рюмочная Ликер's",
        lat: 55.788900,
        lng: 49.114292,
        recommendation: "Приходи за ламповой атмосферой классической советской рюмочной, домашними настойками и возможностью посмотреть спортивную трансляцию."
    },
    {
        name: "Ресторан татарской кухни Чирэм",
        lat: 55.798024,
        lng: 49.107276,
        recommendation: "Заказывай традиционный чай на травах в изящной посуде, татарский бишбармак и свежеиспеченные национальные пироги в утонченной обстановке."
    },
    {
        name: "Ресторан Branch Bistro",
        lat: 55.790500,
        lng: 49.110500,
        recommendation: "Пробуй эксклюзивные закуски, например, мини-эклеры с тартаром из конины, и завершай вечер карамельным фланом на крепленом вине."
    },
    {
        name: "Кафе правильного питания Злаки",
        lat: 55.784500,
        lng: 49.113200,
        recommendation: "Выбирай один из пятидесяти вариантов полезных завтраков. Попробуй необычное локальное блюдо — жаркое из верблюда."
    }
];

let currentTarget = null;
let userLocation = null;
let targetBearing = 0;

// Переменные для секретного клика
let titleClickCount = 0;

const actionBtn = document.getElementById('action-btn');
const cheatBtn = document.getElementById('cheat-btn');
const secretTitle = document.getElementById('secret-title');
const statusText = document.getElementById('status-text');
const questZone = document.getElementById('quest-zone');
const radarCard = document.getElementById('radar-card');
const unlockZone = document.getElementById('unlock-zone');
const metersSpan = document.getElementById('meters');
const compassArrow = document.getElementById('compass-arrow');
const appSubtitle = document.getElementById('app-subtitle');
const venueNamePop = document.getElementById('venue-name');
const venueRecPop = document.getElementById('venue-rec');

function getDistanceInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return Math.round(R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))));
}

function getBearing(lat1, lon1, lat2, lon2) {
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const lat1Rad = lat1 * Math.PI / 180;
    const lat2Rad = lat2 * Math.PI / 180;
    const y = Math.sin(dLon) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function unlockVenue() {
    radarCard.classList.add('hidden');
    actionBtn.classList.add('hidden');
    cheatBtn.className = "cheat-hidden"; // Прячем чит-кнопку при успехе
    
    venueNamePop.innerText = currentTarget.name;
    venueRecPop.innerText = currentTarget.recommendation;
    
    appSubtitle.innerText = "Сканирование завершено";
    unlockZone.classList.remove('hidden');
}

function initCompass() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(response => { if (response === 'granted') window.addEventListener('deviceorientation', handleOrientation, true); })
            .catch(console.error);
    } else {
        window.addEventListener('deviceorientationabsolute', handleOrientation, true);
        window.addEventListener('deviceorientation', handleOrientation, true);
    }
}

function handleOrientation(event) {
    let heading = event.webkitCompassHeading || event.alpha;
    if (event.absolute === false && event.alpha !== null) heading = 360 - event.alpha; 
    if (heading !== null && heading !== undefined) {
        const arrowAngle = targetBearing - heading;
        compassArrow.style.transform = `rotate(${arrowAngle}deg)`;
    }
}

// ЛОГИКА СЕКРЕТНОГО РЕЖИМА (ПАСХАЛКА)
secretTitle.addEventListener('click', () => {
    titleClickCount++;
    if (titleClickCount === 5) {
        // Если кликнули 5 раз, показываем чит-кнопку
        cheatBtn.className = "cheat-visible";
        statusText.innerText = "Режим разработчика активирован ⚡";
        titleClickCount = 0; // Сбрасываем счетчик
    }
});

actionBtn.addEventListener('click', () => {
    statusText.innerText = "Считываю частоты GPS...";
    initCompass();

    navigator.geolocation.getCurrentPosition((position) => {
        userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };

        if (!currentTarget) {
            const randomIndex = Math.floor(Math.random() * VENUES.length);
            currentTarget = VENUES[randomIndex];
            console.log("Цель:", currentTarget.name);
        }

        const distance = getDistanceInMeters(userLocation.lat, userLocation.lng, currentTarget.lat, currentTarget.lng);
        targetBearing = getBearing(userLocation.lat, userLocation.lng, currentTarget.lat, currentTarget.lng);
        compassArrow.style.transform = `rotate(${targetBearing}deg)`;
        metersSpan.innerText = distance;

        if (distance <= 20) {
            unlockVenue();
        } else {
            statusText.innerText = "Сигнал стабильный. Объект запеленгован.";
            questZone.classList.remove('hidden');
            actionBtn.innerText = "ОБНОВИТЬ ДАННЫЕ";
        }

    }, (error) => {
        statusText.innerText = "Ошибка спутника.";
        console.error(error);
    });
});

cheatBtn.addEventListener('click', () => {
    if (currentTarget) unlockVenue();
});