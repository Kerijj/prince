// 1. ДАННЫЕ ВСЕЛЕННОЙ
const planetData = [
    { name: "Б-612", icon: "🌹", bg: "radial-gradient(circle, #4a1c1c, #000)", desc: "Твой дом. Крошечный астероид с тремя вулканами и одной гордой Розой.", chars: [{name: "Роза", about: "Прекрасная, но капризная. Она учит любви.", tasks: ["Полить", "Слушать жалобы"]}, {name: "Маленький Принц", about: "Путешественник с золотыми волосами.", tasks: ["Прочистить вулканы", "Вырвать баобабы"]}] },
    { name: "Король", icon: "👑", bg: "radial-gradient(circle, #2c1e4a, #000)", desc: "Планета 325. Здесь правит монарх.", chars: [{name: "Король", about: "Абсолютный монарх.", tasks: ["Отдать приказ", "Зевнуть"]}] },
    { name: "Тщеславие", icon: "🎩", bg: "radial-gradient(circle, #1a3a4a, #000)", desc: "Планета 326. Обитель самолюбования.", chars: [{name: "Честолюбец", about: "Слышит только похвалы.", tasks: ["Поклониться", "Снять шляпу"]}] },
    { name: "Пьяница", icon: "🍷", bg: "radial-gradient(circle, #2e2e2e, #000)", desc: "Планета 327. Мир печали.", chars: [{name: "Пьяница", about: "Пьет, чтобы забыть.", tasks: ["Вздохнуть", "Замолчать"]}] },
    { name: "Делец", icon: "💼", bg: "radial-gradient(circle, #1a2a1a, #000)", desc: "Планета 328. Здесь считают звезды.", chars: [{name: "Делец", about: "Серьезный человек.", tasks: ["Записать цифры", "Пересчитать миллионы"]}] },
    { name: "Фонарщик", icon: "🏮", bg: "radial-gradient(circle, #4a3c1e, #000)", desc: "Планета 329. День здесь длится минуту.", chars: [{name: "Фонарщик", about: "Верный уговору.", tasks: ["Зажечь фонарь", "Погасить фонарь"]}] },
    { name: "Географ", icon: "📖", bg: "radial-gradient(circle, #1e1e3d, #000)", desc: "Планета 330. Мир вечных истин.", chars: [{name: "Географ", about: "Никогда не выходит из кабинета.", tasks: ["Открыть фолиант", "Записать горы"]}] },
    { name: "Земля", icon: "🌍", bg: "linear-gradient(to bottom, #0a2a4a, #2ecc71)", desc: "Седьмая планета. Огромный мир.", chars: [{name: "Лётчик", about: "Друг, который помнит детство.", tasks: ["Починить мотор", "Найти колодец"]}] },
    { name: "Лис", icon: "🦊", bg: "radial-gradient(circle, #d35400, #2c3e50)", desc: "Особая планета Уз.", chars: [{name: "Лис", about: "Мудрый учитель.", tasks: ["Прийти в 4 часа", "Приручить"]}] }
];

const foxPhrases = ["Зорко одно лишь сердце.", "Ты в ответе за тех, кого приручил.", "У каждого свои звезды."];
const affirmations = ["Я в гармонии со Вселенной", "Моё сердце открыто чуду", "Тишина рождает свет"];

// 2. СОСТОЯНИЕ
let gameState = JSON.parse(localStorage.getItem('prince_save_final')) || { wisdom: 0, notes: [] };
let activePIdx = -1, activeCIdx = -1, taskIdx = 0, isMeditation = false, affirmationInterval;

// 3. ИНИЦИАЛИЗАЦИЯ
function init() {
    createStars();
    renderSolarSystem();
    updateCelestialBody();
    updateUI();
    setInterval(updateCelestialBody, 3600000); 
}

function renderSolarSystem() {
    const system = document.getElementById('solar-system');
    if (!system) return;
    system.innerHTML = '<div id="sun-moon-center" onclick="toggleMeditation()"><span id="celestial-body">☀️</span><audio id="meditation-audio" loop><source src="https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Arrival.mp3" type="audio/mpeg"></audio></div>';

    planetData.forEach((p, i) => {
        const orbitSize = 160 + (i * 65);
        const duration = 25 + (i * 10);
        
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = orbitSize + 'px'; orbit.style.height = orbitSize + 'px';
        system.appendChild(orbit);

        const rotator = document.createElement('div');
        rotator.className = 'rotator';
        rotator.style.width = orbitSize + 'px'; rotator.style.height = orbitSize + 'px';
        rotator.style.animationDuration = duration + 's';

        const planet = document.createElement('div');
        planet.className = 'orbiting-planet';
        planet.innerHTML = p.icon;
        planet.onclick = () => openPlanet(i);

        rotator.appendChild(planet);
        system.appendChild(rotator);
    });
    updateCelestialBody(); // Чтобы центр сразу стал солнцем/луной
}

// 4. ПЛАНЕТЫ И ЗАДАНИЯ
function openPlanet(idx) {
    activePIdx = idx;
    const p = planetData[idx];
    document.getElementById('universe-screen').classList.add('hidden');
    document.getElementById('planet-screen').classList.remove('hidden');
    document.getElementById('planet-screen').style.background = p.bg;
    document.getElementById('planet-name').innerText = p.name;
    document.getElementById('planet-desc').innerText = p.desc;

    const list = document.getElementById('characters-list');
    list.innerHTML = '';
    p.chars.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerHTML = `<p>${c.name}</p><div class="char-details"><p>${c.about}</p><button class="start-task-btn" onclick="startTasks(${i}); event.stopPropagation();">Помочь</button></div>`;
        card.onclick = () => {
            document.querySelectorAll('.char-card').forEach(el => el.classList.remove('active'));
            card.classList.add('active');
        };
        list.appendChild(card);
    });
    document.getElementById('task-area').classList.add('hidden');
    checkFXUnlocks();
}

function renderSolarSystem() {
    const system = document.getElementById('solar-system');
    if (!system) return;
    
    // Центр
    system.innerHTML = `
        <div id="sun-moon-center" onclick="toggleMeditation()">
            <span id="celestial-body">☀️</span>
            <audio id="meditation-audio" loop>
                <source src="https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Arrival.mp3" type="audio/mpeg">
            </audio>
        </div>`;

    planetData.forEach((p, i) => {
        const orbitSize = 140 + (i * 60); // Чуть уменьшил для адаптивности
        const duration = 20 + (i * 8);
        
        // Рисуем орбиту
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = orbitSize + 'px'; 
        orbit.style.height = orbitSize + 'px';
        system.appendChild(orbit);

        // Рисуем ротатор
        const rotator = document.createElement('div');
        rotator.className = 'rotator';
        rotator.style.width = orbitSize + 'px'; 
        rotator.style.height = orbitSize + 'px';
        rotator.style.animationDuration = duration + 's';

        // Рисуем планету
        const planet = document.createElement('div');
        planet.className = 'orbiting-planet';
        planet.innerHTML = p.icon;
        
        // Клик теперь точно сработает
        planet.addEventListener('click', (e) => {
            e.stopPropagation();
            openPlanet(i);
        });

        rotator.appendChild(planet);
        system.appendChild(rotator);
    });
}

function goToUniverse() {
    document.getElementById('planet-screen').classList.add('hidden');
    document.getElementById('universe-screen').classList.remove('hidden');
}

function startTasks(cIdx) {
    activeCIdx = cIdx;
    taskIdx = 0;
    document.getElementById('task-area').classList.remove('hidden');
    showTask();
}

function showTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    const text = document.getElementById('task-text');
    text.innerText = taskIdx < char.tasks.length ? `${char.name}: ${char.tasks[taskIdx]}` : "Мы стали друзьями!";
}

function completeTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    if (taskIdx < char.tasks.length) {
        gameState.wisdom++;
        taskIdx++;
        save();
        updateUI();
        showTask();
        checkFXUnlocks();
    }
}

// 5. ЭФФЕКТЫ И МЕДИТАЦИЯ
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.top = Math.random() * 100 + 'vh';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        container.appendChild(s);
    }
}

function launchStarfall() {
    const layer = document.getElementById('fx-layer');
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            s.innerHTML = '✦';
            s.style.left = Math.random() * 50 + 'vw';
            s.style.top = Math.random() * -20 + 'vh';
            s.style.animation = 'shoot 1.5s linear forwards';
            layer.appendChild(s);
            setTimeout(() => s.remove(), 1500);
        }, i * 300);
    }
}

function updateCelestialBody() {
    const hour = new Date().getHours();
    const body = document.getElementById('celestial-body');
    if (body) body.innerHTML = (hour >= 6 && hour < 19) ? '☀️' : '🌙';
}

function toggleMeditation() {
    const audio = document.getElementById('meditation-audio');
    isMeditation = !isMeditation;
    if (isMeditation) {
        audio.play();
        document.body.classList.add('meditation-active');
        startAffirmations();
    } else {
        audio.pause();
        document.body.classList.remove('meditation-active');
        stopAffirmations();
    }
}

function startAffirmations() {
    let textEl = document.getElementById('affirmation-text') || document.createElement('div');
    textEl.id = 'affirmation-text'; document.body.appendChild(textEl);
    const show = () => {
        textEl.style.opacity = 0;
        setTimeout(() => {
            textEl.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
            textEl.style.opacity = 1;
        }, 1000);
    };
    show();
    affirmationInterval = setInterval(show, 6000);
}

function stopAffirmations() {
    clearInterval(affirmationInterval);
    const el = document.getElementById('affirmation-text');
    if (el) el.remove();
}

// 6. СИСТЕМНЫЕ
function checkFXUnlocks() {
    const box = document.getElementById('resource-controls');
    if (box && gameState.wisdom >= 10) {
        box.innerHTML = '<button class="fx-unlock-btn" onclick="launchStarfall()">✨ Вызвать звездопад</button>';
    }
}

function updateUI() {
    document.getElementById('wisdom-score').innerText = gameState.wisdom;
    const list = document.getElementById('notes-list');
    if (list) list.innerHTML = gameState.notes.map((n, i) => `<div class="note-item">${n} <span onclick="deleteNote(${i})">✕</span></div>`).join('');
}

function save() { localStorage.setItem('prince_save_final', JSON.stringify(gameState)); }
function saveNote() {
    const val = document.getElementById('note-input').value;
    if (val) { gameState.notes.push(val); document.getElementById('note-input').value = ''; save(); updateUI(); }
}
function deleteNote(i) { gameState.notes.splice(i, 1); save(); updateUI(); }
function toggleDiary() { document.getElementById('diary-box').classList.toggle('hidden'); }

init();
