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