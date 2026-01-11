const affirmations = ["Ты уникален", "Зорко одно лишь сердце", "Твой покой внутри тебя", "Ты в ответе за свою розу"];

// 1. ДАННЫЕ ВСЕЛЕННОЙ
const planetData = [
    { 
        name: "Б-612", icon: "🌹", bg: "radial-gradient(circle, #4a1c1c, #000)", 
        desc: "Твой дом. Крошечный астероид с тремя вулканами и одной гордой Розой.", 
        chars: [
            {name: "Роза", about: "Прекрасная, но капризная. Она учит ответственности и любви.", tasks: ["Полить", "Накрыть колпаком", "Слушать жалобы", "Восхититься"]},
            {name: "Маленький Принц", about: "Путешественник с золотыми волосами, ищущий истину.", tasks: ["Прочистить вулканы", "Вырвать баобабы", "Нарисовать барашка", "Проводить закат"]},
            {name: "Барашек", about: "Живет в ящике с дырочками и ест только то, что ему разрешат.", tasks: ["Поиграть", "Найти сочную траву", "Тихо поспать"]}
        ]
    },
    { 
        name: "Король", icon: "👑", bg: "radial-gradient(circle, #2c1e4a, #000)", 
        desc: "Планета 325. Здесь правит монарх, для которого весь мир — это подданные.", 
        chars: [
            {name: "Король", about: "Абсолютный монарх. Он приказывает солнцу вставать (но только в нужное время).", tasks: ["Отдать приказ", "Зевнуть по этикету", "Назначить министра"]},
            {name: "Крыса", about: "Единственный житель планеты, кроме короля. Постоянно шуршит.", tasks: ["Найти крошки", "Спрятаться в норку", "Послушать приговор"]}
        ]
    },
    { 
        name: "Тщеславие", icon: "🎩", bg: "radial-gradient(circle, #1a3a4a, #000)", 
        desc: "Планета 326. Обитель человека, который слышит только похвалы.", 
        chars: [
            {name: "Честолюбец", about: "Считает себя самым красивым и умным на своей пустой планете.", tasks: ["Снять шляпу", "Поклониться", "Услышать аплодисменты"]}
        ]
    },
    { 
        name: "Пьяница", icon: "🍷", bg: "radial-gradient(circle, #2e2e2e, #000)", 
        desc: "Планета 327. Мир, погруженный в замкнутый круг печали и забвения.", 
        chars: [
            {name: "Пьяница", about: "Пьет, чтобы забыть, что ему совестно пить.", tasks: ["Вздохнуть", "Посмотреть на пустые бутылки", "Замолчать"]}
        ]
    },
    { 
        name: "Делец", icon: "💼", bg: "radial-gradient(circle, #1a2a1a, #000)", 
        desc: "Планета 328. Здесь звезды превращаются в цифры в банковских книгах.", 
        chars: [
            {name: "Делец", about: "Серьезный человек. Он считает звезды уже пятьдесят четыре года.", tasks: ["Записать цифры", "Запереть сейф", "Пересчитать миллионы"]}
        ]
    },
    { 
        name: "Фонарщик", icon: "🏮", bg: "radial-gradient(circle, #4a3c1e, #000)", 
        desc: "Планета 329. Самая маленькая из всех. День здесь длится минуту.", 
        chars: [
            {name: "Фонарщик", about: "Единственный, кто думает не только о себе. Верный уговору.", tasks: ["Зажечь фонарь", "Погасить фонарь", "Вытереть пот со лба"]}
        ]
    },
    { 
        name: "Географ", icon: "📖", bg: "radial-gradient(circle, #1e1e3d, #000)", 
        desc: "Планета 330. Мир вечных истин, где не записывают эфемерные розы.", 
        chars: [
            {name: "Географ", about: "Ученый, который никогда не выходит из кабинета.", tasks: ["Открыть фолиант", "Опросить путешественника", "Записать горы"]}
        ]
    },
    { 
        name: "Земля", icon: "🌍", bg: "linear-gradient(to bottom, #0a2a4a, #2ecc71)", 
        desc: "Седьмая планета. Огромный мир, где живут тысячи королей и дельцов.", 
        chars: [
            {name: "Лётчик", about: "Взрослый, который помнит, как был ребенком. Твой друг.", tasks: ["Починить мотор", "Найти колодец", "Посмотреть на небо"]},
            {name: "Змея", about: "Хранительница загадок. Она помогает вернуться домой.", tasks: ["Прошипеть тайну", "Свернуться кольцом", "Ждать в песках"]},
            {name: "Стрелочник", about: "Сортирует людей, которые сами не знают, куда едут.", tasks: ["Переключить рычаг", "Проводить экспресс", "Зевнуть"]}
        ]
    },
    { 
        name: "Лис", icon: "🦊", bg: "radial-gradient(circle, #d35400, #2c3e50)", 
        desc: "Особая планета Уз. Здесь рождается настоящая дружба.", 
        chars: [
            {name: "Лис", about: "Мудрый учитель. Он знает, что приручить — значит создать узы.", tasks: ["Прийти в 4 часа", "Приручить", "Услышать секрет"]}
        ]
    }
];

// 2. ФРАЗЫ ЛИСА
const foxPhrases = [
    "Зорко одно лишь сердце. Самого главного глазами не увидишь.",
    "Ты навсегда в ответе за всех, кого приручил.",
    "Если ты придешь в четыре часа, я начну чувствовать себя счастливым уже в три.",
    "Слова только мешают понимать друг друга.",
    "У каждого человека свои звезды.",
    "Когда станет очень грустно, хорошо поглядеть, как заходит солнце..."
];




// 3. СОСТОЯНИЕ ИГРЫ
let gameState = JSON.parse(localStorage.getItem('prince_save_final')) || {
    wisdom: 0,
    notes: [],
    unlockedFX: []
};
if (typeof gameState.wisdom !== 'number') gameState.wisdom = 0;

let activePIdx = -1, activeCIdx = -1, taskIdx = 0;

// 4. ЛОГИКА ИНТЕРФЕЙСА
function init() {
    createStars();
    renderSolarSystem();
    setInterval(launchStarfall, 60000); 
    updateUI();
}

function renderSolarSystem() {
    const system = document.getElementById('solar-system');
    if (!system) return;
    system.querySelectorAll('.orbit, .rotator').forEach(el => el.remove());

    planetData.forEach((p, i) => {
        const orbitSize = 160 + (i * 65);
        const duration = 25 + (i * 10);
        
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = orbitSize + 'px';
        orbit.style.height = orbitSize + 'px';
        system.appendChild(orbit);

        const rotator = document.createElement('div');
        rotator.className = 'rotator';
        rotator.style.width = orbitSize + 'px';
        rotator.style.height = orbitSize + 'px';
        rotator.style.animationDuration = duration + 's';

        const planet = document.createElement('div');
        planet.className = 'orbiting-planet';
        planet.innerHTML = p.icon;
        
        const handleEntry = (e) => { e.preventDefault(); openPlanet(i); };
        planet.onclick = handleEntry;
        planet.ontouchstart = handleEntry;

        rotator.appendChild(planet);
        system.appendChild(rotator);
    });
}

function openPlanet(idx) {
    activePIdx = idx;
    const p = planetData[idx];

    // 1. Прячем ГЛАВНЫЙ экран и его элементы
    document.getElementById('universe-screen').classList.add('hidden');
    
    // 2. Показываем экран ПЛАНЕТЫ
    const screen = document.getElementById('planet-screen');
    screen.classList.remove('hidden');
    screen.style.background = p.bg; // Применяем фон планеты
    
    // Сбрасываем скролл в начало
    screen.scrollTo(0, 0);

    // Заполняем данные
    document.getElementById('planet-name').innerText = p.name;
    document.getElementById('planet-desc').innerText = p.desc;
    
    // Отрисовка персонажей (твоя текущая логика)
    renderCharacters(p.chars);
    
    checkFXUnlocks();
}

function goToUniverse() {
    // Возвращаем всё назад
    document.getElementById('planet-screen').classList.add('hidden');
    document.getElementById('universe-screen').classList.remove('hidden');
}


// Генерация звезд при запуске
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    container.innerHTML = ''; // Очистка

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}

function triggerMagic(type) {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;

    if (type === 'starfall') {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const s = document.createElement('div');
                s.className = 'shooting-star';
                s.innerHTML = '✦'; // Теперь это настоящая звёздочка
                
                // Начальная точка: где-то сверху или слева (для эффекта диагонали)
                const startTop = Math.random() * -20; // Вылет чуть выше экрана
                const startLeft = Math.random() * 40 - 20; // Вылет слева или из угла
                
                s.style.top = startTop + 'vh';
                s.style.left = startLeft + 'vw';
                
                // Длительность полета
                const duration = Math.random() * 1.5 + 1;
                s.style.animation = `shoot ${duration}s linear forwards`;
                
                layer.appendChild(s);
                
                // Чистим память
                setTimeout(() => s.remove(), duration * 1000);
            }, i * 300); // Интервал между звёздами
        }
    }
}
const affirmations = [
    "Я нахожусь в гармонии со всей Вселенной",
    "Моё сердце открыто для чудес",
    "В каждой звезде — частица моей мудрости",
    "Тишина внутри меня рождает свет",
    "Я доверяю пути, по которому иду"
];

let isMeditation = false;

// 1. Смена Солнца и Луны в зависимости от времени
function updateCelestialBody() {
    const hour = new Date().getHours();
    const body = document.getElementById('celestial-body');
    const sunMoonContainer = document.getElementById('sun-moon-center');
    
    // С 6 утра до 18 вечера — Солнце, иначе — Луна
    if (hour >= 6 && hour < 18) {
        body.innerHTML = '☀️';
        sunMoonContainer.style.filter = 'drop-shadow(0 0 30px #ffcc00)';
    } else {
        body.innerHTML = '🌙';
        sunMoonContainer.style.filter = 'drop-shadow(0 0 30px #c0c0c0)';
    }
}

// 2. Режим медитации
function toggleMeditation() {
    const audio = document.getElementById('meditation-audio');
    const universe = document.getElementById('universe-screen');
    isMeditation = !isMeditation;

    if (isMeditation) {
        audio.play();
        document.body.classList.add('meditation-active');
        showAffirmations();
    } else {
        audio.pause();
        document.body.classList.remove('meditation-active');
        stopAffirmations();
    }
}

// 3. Показ аффирмаций
let affirmationInterval;
function showAffirmations() {
    const textEl = document.createElement('div');
    textEl.id = 'affirmation-text';
    document.body.appendChild(textEl);

    const nextText = () => {
        textEl.style.opacity = 0;
        setTimeout(() => {
            textEl.innerHTML = affirmations[Math.floor(Math.random() * affirmations.length)];
            textEl.style.opacity = 1;
        }, 1000);
    };

    nextText();
    affirmationInterval = setInterval(nextText, 6000);
}

function stopAffirmations() {
    clearInterval(affirmationInterval);
    const el = document.getElementById('affirmation-text');
    if (el) el.remove();
}

// Запускаем проверку времени при загрузке
updateCelestialBody();
// Обновляем каждый час
setInterval(updateCelestialBody, 3600000);


// Вызови создание звезд в конце файла или в функции init
createStars();


function openPlanet(idx) {
    activePIdx = idx;
    const p = planetData[idx];
    const screen = document.getElementById('planet-screen');
    
    document.getElementById('universe-screen').classList.add('hidden');
    document.getElementById('diary-container').classList.add('hidden');
    document.getElementById('wisdom-counter').classList.add('hidden');
    
    screen.classList.remove('hidden');
    screen.scrollTo(0, 0); 
    screen.style.background = p.bg;
    
    document.getElementById('planet-name').innerText = p.name;
    document.getElementById('planet-desc').innerText = p.desc;
    
    const list = document.getElementById('characters-list');
    list.innerHTML = '';
    p.chars.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.onclick = () => {
            document.querySelectorAll('.char-card').forEach(el => el.classList.remove('active'));
            card.classList.add('active');
        };
        card.innerHTML = `
            <p class="char-name">${c.name}</p>
            <div class="char-details">
                <p class="char-about">${c.about}</p>
                <button class="start-task-btn" onclick="startTasks(${i}); event.stopPropagation();">Помочь</button>
            </div>
        `;
        list.appendChild(card);
    });

    document.getElementById('task-area').classList.add('hidden');
    checkFXUnlocks();
}

function goToUniverse() {
    document.getElementById('planet-screen').classList.add('hidden');
    document.getElementById('universe-screen').classList.remove('hidden');
    document.getElementById('diary-container').classList.remove('hidden');
    document.getElementById('wisdom-counter').classList.remove('hidden');
}

function startTasks(cIdx) {
    activeCIdx = cIdx;
    taskIdx = 0;
    document.getElementById('task-area').classList.remove('hidden');
    showTask();
}

function showTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    const taskText = document.getElementById('task-text');
    if (taskIdx < char.tasks.length) {
        taskText.innerText = `${char.name}: ${char.tasks[taskIdx]}`;
    } else {
        taskText.innerText = "Мы стали друзьями! Задание выполнено.";
    }
}

// Генерация звезд при запуске
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    container.innerHTML = ''; // Очистка

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}

// Улучшенный звездопад
function triggerMagic(type) {
    console.log("Запуск эффекта:", type); // Проверка в консоли
    const layer = document.getElementById('fx-layer');
    
    if (type === 'starfall') {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const s = document.createElement('div');
                s.className = 'shooting-star';
                // Случайная позиция по горизонтали
                s.style.left = (Math.random() * 120) + 'vw'; 
                s.style.top = "-100px";
                // Принудительно запускаем анимацию через стиль
                s.style.animation = 'shoot 1s linear forwards';
                layer.appendChild(s);
                
                // Удаляем элемент после завершения
                setTimeout(() => s.remove(), 1100);
            }, i * 200);
        }
    }
}

// Вызови создание звезд в конце файла или в функции init
createStars();


function launchStarfall() {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;
    
    // Поднимаем слой эффектов на самый верх
    layer.style.zIndex = "10000"; 
    
    // ... остальной код создания звезд ...
}

function completeTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    if (taskIdx < char.tasks.length) {
        gameState.wisdom++;
        taskIdx++;
        
        const foxText = document.getElementById('fox-phrase');
        if (foxText) {
            foxText.innerText = foxPhrases[Math.floor(Math.random() * foxPhrases.length)];
        }
        
        save();
        updateUI();
        showTask();
        checkFXUnlocks();
    }
}

function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        container.appendChild(star);
    }
}

function launchStarfall() {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = '-50px';
            layer.appendChild(s);
            setTimeout(() => s.remove(), 1200);
        }, i * 300);
    }
}

function checkFXUnlocks() {
    const btnBox = document.getElementById('resource-controls');
    if (!btnBox) return;
    btnBox.innerHTML = '';
    
    if (gameState.wisdom >= 10) {
        const btn = document.createElement('button');
        // Даем ей специальный класс для стиля
        btn.className = 'magic-button-float'; 
        btn.innerHTML = '✨ Вызвать звездопад';
        
        // Улучшенный обработчик клика
        const runMagic = (e) => {
            e.preventDefault();
            e.stopPropagation();
            launchStarfall();
            console.log("Магия запущена!");
        };

        btn.onclick = runMagic;
        btn.ontouchstart = runMagic; // Для мгновенного срабатывания на телефоне
        
        btnBox.appendChild(btn);
    }
}

function updateUI() {
    const score = document.getElementById('wisdom-score');
    if (score) score.innerText = gameState.wisdom;
    const list = document.getElementById('notes-list');
    if (list) {
        list.innerHTML = gameState.notes.map((n, i) => 
            `<div class="note-item">${n} <span onclick="deleteNote(${i})" style="color:red; cursor:pointer">✕</span></div>`
        ).join('');
    }
}

function save() { localStorage.setItem('prince_save_final', JSON.stringify(gameState)); }

function saveNote() {
    const input = document.getElementById('note-input');
    if (input.value.trim()) {
        gameState.notes.push(input.value);
        input.value = '';
        save();
        updateUI();
    }
}

function completeTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    if (taskIdx < char.tasks.length) {
        gameState.wisdom++;
        taskIdx++;
        
        // Эффект вспышки при получении мудрости
        const score = document.getElementById('wisdom-score');
        score.style.color = 'var(--gold)';
        score.style.textShadow = '0 0 15px var(--gold)';
        setTimeout(() => {
            score.style.color = 'white';
            score.style.textShadow = 'none';
        }, 500);

        save();
        updateUI();
        showTask();
        checkFXUnlocks();
    }
}

function deleteNote(i) {
    gameState.notes.splice(i, 1);
    save();
    updateUI();
}

function toggleDiary() {
    document.getElementById('diary-box').classList.toggle('hidden');
}

init();
