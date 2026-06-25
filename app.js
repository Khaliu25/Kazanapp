const VENUES = [
    { 
        name: "Ранняя Пташка", 
        lat: 55.791834, 
        lng: 49.114754,
        recommendation: "Закажи здесь их легендарный сырный тарт и фильтр-кофе! Атмосфера топ."
    },
    { 
        name: "Бар Истина", 
        lat: 55.790512, 
        lng: 49.117215,
        recommendation: "Идеальное место для эстетичного вечера. Попробуй локальные закуски и спроси бармена о скрытых позициях."
    },
    { 
        name: "Skuratov Coffee (на Баумана)", 
        lat: 55.792341, 
        lng: 49.111234,
        recommendation: "Бери Нитро-кофе или Колд Брю, если на улице жарко. Идеально для работы на ходу."
    }
];

let currentTarget = null;
let userLocation = null;
let targetBearing = 0;

// Элементы UI
const actionBtn = document.getElementById('action-btn');
const cheatBtn = document.getElementById('cheat-btn');
const statusText = document.getElementById('status-text');
const questZone = document.getElementById('quest-zone');
const radarCard = document.getElementById('radar-card');
const unlockZone = document.getElementById('unlock-zone');
const metersSpan = document.getElementById('meters');
const compassArrow = document.getElementById('compass-arrow');
const appSubtitle = document.getElementById('app-subtitle');

// Элементы экрана анлока
const venueNamePop = document.getElementById('venue-name');
const venueRecPop = document.getElementById('venue-rec');

function getDistanceInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c);
}

function getBearing(lat1, lon1, lat2, lon2) {
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const lat1Rad = lat1 * Math.PI / 180;
    const lat2Rad = lat2 * Math.PI / 180;
    const y = Math.sin(dLon) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
    let brng = Math.atan2(y, x) * 180 / Math.PI;
    return (brng + 360) % 360;
}

// Функция, которая вызывается, когда пользователь пришел на место
function unlockVenue() {
    radarCard.classList.add('hidden');    // Прячем радар
    actionBtn.classList.add('hidden');    // Прячем главную кнопку
    cheatBtn.classList.add('hidden');     // Прячем чит-кнопку
    
    // Заполняем карточку заведения данными
    venueNamePop.innerText = currentTarget.name;
    venueRecPop.innerText = currentTarget.recommendation;
    
    appSubtitle.innerText = "Цель достигнута! Прогулка завершена.";
    unlockZone.classList.remove('hidden'); // Показываем экран триумфа
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

// Главная кнопка
actionBtn.addEventListener('click', () => {
    statusText.innerText = "Обновляю данные радара...";
    initCompass();

    navigator.geolocation.getCurrentPosition((position) => {
        userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };

        if (!currentTarget) {
            const randomIndex = Math.floor(Math.random() * VENUES.length);
            currentTarget = VENUES[randomIndex];
            cheatBtn.classList.remove('hidden'); // Показываем чит-кнопку разработчика
        }

        const distance = getDistanceInMeters(userLocation.lat, userLocation.lng, currentTarget.lat, currentTarget.lng);
        targetBearing = getBearing(userLocation.lat, userLocation.lng, currentTarget.lat, currentTarget.lng);
        compassArrow.style.transform = `rotate(${targetBearing}deg)`;
        metersSpan.innerText = distance;

        // ПРОВЕРКА: Если подошли вплотную (меньше 20 метров) — анлок!
        if (distance <= 20) {
            unlockVenue();
        } else {
            statusText.innerText = "Радар активен. Цель где-то впереди.";
            questZone.classList.remove('hidden');
            actionBtn.innerText = "Обновить расстояние";
        }

    }, (error) => {
        statusText.innerText = "Ошибка GPS.";
        console.error(error);
    });
});

// Логика чит-кнопки (симуляция успеха)
cheatBtn.addEventListener('click', () => {
    if (currentTarget) {
        unlockVenue();
    }
});