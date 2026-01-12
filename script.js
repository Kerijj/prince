// 1. ДАННЫЕ
const planetData = [
    { name: "Б-612", icon: "🌹", bg: "radial-gradient(circle, #4a1c1c, #000)", 
     desc: "Эта планета величиной чуть больше дома. На ней есть три вулкана — два действующих и один потухший, а также роза, которая появилась однажды на рассвете. Маленький Принц каждое утро приводил свою планету в порядок: чистил вулканы и выпалывал ростки баобабов. Есть такое твердое правило, — говорил он. — Встал поутру, умылся, привел себя в порядок — и сразу же приведи в порядок свою планету", 
     chars: [

         {name: "Роза",
    about: "Она была так прекрасна, что у него перехватило дыхание. Она была не только капризна, но и обидчива. Но она дарила Маленькому Принцу свой аромат, она освещала его жизнь. Он не должен был бежать. За этими жалкими хитростями он должен был угадать нежность. Цветы так непоследовательны! Но он был слишком молод, он еще не умел любить.",
    tasks: [
        "Укрыть свою внутреннюю Розу стеклянным колпаком от сквозняков чужих мнений",
        "Простить себе свои шипы — они лишь способ защитить свою хрупкость",
        "Сказать себе три слова, которые заставляют сердце распускаться",
        "Полить свои мечты вниманием, чтобы они не засохли в суете",
        "Выслушать свои капризы и понять, какая за ними скрывается потребность",
        "Вырвать сорняки злых мыслей, пока они не пустили корни в душе",
        "Проветрить свою планету — отпустить обиды, что застоялись внутри",
        "Заметить красоту в зеркале, не ища в ней изъянов",
        "Признать: ты — единственный в мире цветок для того, кто тебя приручил",
        "Просто подышать её ароматом, не требуя ничего взамен",
        "Убрать ширму эгоизма, чтобы увидеть тех, кто о тебе заботится",
        "Пообещать себе не бояться гусениц, если хочешь познакомиться с бабочками",
        "Перестать жаловаться на 'тигров' — воображаемые угрозы будущего",
        "Найти в своем одиночестве не пустоту, а тишину для роста",
        "Позволить себе быть слабой и попросить о помощи, если это нужно",
        "Очистить свою почву от баобабов лени и безразличия",
        "Полюбить в себе не только лепестки, но и корни",
        "Создать ритуал заботы о себе, который нельзя нарушать",
        "Понять, что твоя красота — это свет, идущий изнутри",
        "Стать для кого-то целым миром, просто оставаясь собой"
        
    ]
},
    {name: "Маленький Принц",
    about: "Золотоволосый странник с астероида Б-612. Он никогда не отвечает на вопросы, которые ему задают, но и сам не отступается от своего вопроса, пока не получит ответа. Он проделал путь через семь планет, чтобы понять: то, что он искал на других мирах, всегда было у него дома — в одной единственной Розе. Он знает, что мы в ответе за тех, кого приручили, и что истина открывается только сердцу.",
    tasks: [
        "Нарисовать барашка для своих страхов, чтобы они перестали быть пугающими",
        "Посмотреть на закат 44 раза подряд, чтобы отпустить накопившуюся грусть",
        "Задать себе важный вопрос и не успокаиваться, пока не услышишь честный ответ",
        "Уйти на поиски колодца в пустыне повседневности — найти то, что дает силы",
        "Вспомнить о своем 'цветке' — о том человеке или деле, которое тебе дороже всего",
        "Перестать судить о людях по словам, и начать судить по их делам и сиянию глаз",
        "Почувствовать ответственность за свою маленькую внутреннюю планету",
        "Найти в шуме ветра музыку, а в песках — спрятанное сокровище",
        "Сбросить груз 'взрослой' серьезности и позволить себе просто удивиться",
        "Понять, что твоя Роза уникальна, потому что ты отдавал ей свое время",
        "Приручить одно мгновение тишины, сделав его своим другом",
        "Не давать цифрам и сухим фактам заменить красоту живого общения",
        "Увидеть в обычном ящике то, что скрыто внутри — свой потенциал",
        "Отправиться в путь к самому себе, не боясь долгой дороги",
        "Помнить, что звезды смеются для того, кто умеет на них смотреть",
        "Услышать голос своего внутреннего ребенка и последовать его совету",
        "Стать защитником для того, кто слабее и нуждается в твоем 'колпаке'",
        "Осознать, что вода может быть нужна и сердцу, а не только телу",
        "Принять печаль расставания как часть великого пути любви",
        "Вернуться к своим истокам, став мудрее на целую вселенную"
    ]
}
     
    ] 
    
},

    
    { name: "Король", icon: "👑", bg: "radial-gradient(circle, #2c1e4a, #000)", 
     desc: "Планета 325. Здесь правит монарх.", 
     chars: [{name: "Король", about: "Абсолютный монарх.", 
              tasks: ["Отдать приказ", "Зевнуть"]}] },
    
    { name: "Тщеславие", icon: "🎩", bg: "radial-gradient(circle, #1a3a4a, #000)", 
     desc: "Планета 326. Обитель самолюбования.", 
     chars: [{name: "Честолюбец", about: "Слышит только похвалы.", 
              tasks: ["Поклониться", "Снять шляпу"]}] },
    
    { name: "Пьяница", icon: "🍷", bg: "radial-gradient(circle, #2e2e2e, #000)", 
     desc: "Планета 327. Мир печали.", 
     chars: [{name: "Пьяница", about: "Пьет, чтобы забыть.", 
              tasks: ["Вздохнуть", "Замолчать"]}] },
    
    { name: "Делец", icon: "💼", bg: "radial-gradient(circle, #1a2a1a, #000)", 
     desc: "Планета 328. Здесь считают звезды.", 
     chars: [{name: "Делец", 
              about: "Серьезный человек.", 
              tasks: ["Записать цифры", "Пересчитать миллионы"]}] },
    
    { name: "Фонарщик", icon: "🏮", bg: "radial-gradient(circle, #4a3c1e, #000)", 
     desc: "Планета 329. День здесь длится минуту.", 
     chars: [{name: "Фонарщик", 
              about: "Верный уговору.", 
              tasks: ["Зажечь фонарь", "Погасить фонарь"]}] },
    
    { name: "Географ", icon: "📖", bg: "radial-gradient(circle, #1e1e3d, #000)", 
     desc: "Планета 330. Мир вечных истин.", 
     chars: [{name: "Географ", 
              about: "Никогда не выходит из кабинета.", 
              tasks: ["Открыть фолиант", "Записать горы"]}] },
    
    { name: "Земля", icon: "🌍", bg: "linear-gradient(to bottom, #0a2a4a, #2ecc71)", 
     desc: "Седьмая планета. Огромный мир.", 
     chars: [{name: "Лётчик", 
              about: "Друг, который помнит детство.", 
              tasks: ["Починить мотор", "Найти колодец"]}] },
    
    { name: "Лис", icon: "🦊", bg: "radial-gradient(circle, #d35400, #2c3e50)", 
     desc: "Особая планета Уз.", 
     chars: [{name: "Лис", 
              about: "Мудрый учитель.", 
              tasks: ["Прийти в 4 часа", "Приручить"]}] }
];

const affirmations = ["Я в гармонии со Вселенной", "Моё сердце открыто чуду", "Тишина рождает свет"];

// 2. СОСТОЯНИЕ
let gameState = JSON.parse(localStorage.getItem('prince_save_final')) || { wisdom: 0, notes: [] };
let activePIdx = -1, activeCIdx = -1, taskIdx = 0, isMeditation = false, affirmationInterval;

// 3. ИНИЦИАЛИЗАЦИЯ
function init() {
    createStars();
    renderSolarSystem();
    updateUI();
    setInterval(updateCelestialBody, 60000); // Проверка солнца/луны каждую минуту
}

function renderSolarSystem() {
    const system = document.getElementById('solar-system');
    if (!system) return;

    system.innerHTML = `
        <div id="sun-moon-center" onclick="toggleMeditation()">
            <span id="celestial-body">☀️</span>
            <audio id="meditation-audio" loop>
                <source src="https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Arrival.mp3" type="audio/mpeg">
            </audio>
        </div>`;

    planetData.forEach((p, i) => {
        const orbitSize = 150 + (i * 60);
        const duration = 20 + (i * 10);
        
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
        planet.onclick = (e) => { e.stopPropagation(); openPlanet(i); };

        rotator.appendChild(planet);
        system.appendChild(rotator);
    });
    updateCelestialBody();
}

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
        card.innerHTML = `
            <strong>${c.name}</strong>
            <p>${c.about}</p>
            <button class="start-task-btn" onclick="startTasks(${i})">Помочь</button>`;
        list.appendChild(card);
    });
    document.getElementById('task-area').classList.add('hidden');
    checkFXUnlocks();
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


// Функция отрисовки персонажей на планете
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
        // Добавляем класс анимации fade-in
        card.className = 'char-card fade-in'; 
        card.innerHTML = `
            <h3>${c.name}</h3>
            <p>${c.about}</p>
            <button class="action-btn" onclick="startTasks(${i})">Помочь</button>
        `;
        list.appendChild(card);
    });
    
    // Прячем зону задач при входе на новую планету
    document.getElementById('task-area').classList.add('hidden');
    checkFXUnlocks();
}

// ПРОВЕРЕНО: Функция возврата к звездам
function goToUniverse() {
    const planetScreen = document.getElementById('planet-screen');
    const universeScreen = document.getElementById('universe-screen');
    
    planetScreen.classList.add('hidden');
    universeScreen.classList.remove('hidden');
    
    // Сбрасываем индексы, чтобы всё было чисто
    activePIdx = -1;
    activeCIdx = -1;
}


function showTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    const text = document.getElementById('task-text');
    if (taskIdx < char.tasks.length) {
        text.innerText = `${char.name} просит: ${char.tasks[taskIdx]}`;
    } else {
        text.innerText = "Мы стали друзьями! Ты познал частичку мудрости.";
    }
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

function createStars() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 150; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.top = Math.random() * 100 + 'vh';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
        container.appendChild(s);
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
        audio.play().catch(e => console.log("Музыка ждет клика"));
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
    textEl.id = 'affirmation-text'; 
    document.body.appendChild(textEl);
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

function checkFXUnlocks() {
    const box = document.getElementById('resource-controls');
    if (box && gameState.wisdom >= 10) {
        box.innerHTML = '<button class="fx-unlock-btn" onclick="launchStarfall()">✨ Вызвать звездопад</button>';
    }
}

function launchStarfall() {
    const layer = document.getElementById('fx-layer');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            s.innerHTML = '✦';
            s.style.left = Math.random() * 80 + 'vw';
            s.style.top = '-20px';
            s.style.animation = 'shoot 1.5s linear forwards';
            layer.appendChild(s);
            setTimeout(() => s.remove(), 1500);
        }, i * 400);
    }
}

function updateUI() {
    const score = document.getElementById('wisdom-score');
    if (score) score.innerText = gameState.wisdom;
    const list = document.getElementById('notes-list');
    if (list) list.innerHTML = gameState.notes.map((n, i) => `<div class="note-item">${n} <button onclick="deleteNote(${i})">✕</button></div>`).join('');
}

function save() { localStorage.setItem('prince_save_final', JSON.stringify(gameState)); }

function saveNote() {
    const val = document.getElementById('note-input').value;
    if (val) {
        gameState.notes.push(val);
        document.getElementById('note-input').value = '';
        save(); updateUI();
    }
}

function deleteNote(i) {
    gameState.notes.splice(i, 1);
    save(); updateUI();
}

function toggleDiary() {
    document.getElementById('diary-box').classList.toggle('hidden');
}

window.onload = init;


// 5. ЭФФЕКТЫ И МЕДИТАЦИЯ
function launchStarfall() {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;

    // Создаем 15 звезд с разной задержкой
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            s.innerHTML = '✦'; // Символ звезды
            
            // Начальная позиция (случайно сверху или слева)
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = '-5vh';
            
            // Случайная скорость падения
            const duration = 1 + Math.random() * 1.5;
            s.style.animation = `shoot ${duration}s linear forwards`;
            
            layer.appendChild(s);
            
            // Удаляем элемент после завершения анимации
            setTimeout(() => s.remove(), duration * 1000);
        }, i * 300); // Звезды падают по очереди
    }
}

// Поправленная функция открытия планеты (для кнопок)
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
        card.className = 'char-card fade-in';
        card.innerHTML = `
            <h3>${c.name}</h3>
            <p>${c.about}</p>
            <button class="action-btn" onclick="startTasks(${i})">Помочь</button>
        `;
        list.appendChild(card);
    });
    
    // Скрываем зону задач при переходе
    document.getElementById('task-area').classList.add('hidden');
    
    // Сразу проверяем, доступна ли кнопка звездопада (если мудрость >= 10)
    checkFXUnlocks();
}

function showTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    const text = document.getElementById('task-text');
    const progressPercent = (taskIdx / char.tasks.length) * 100;

    if (taskIdx < char.tasks.length) {
        // Динамический цвет: чем ближе к концу, тем ярче сияние
        const glowIntensity = 5 + (taskIdx * 1); 
        
        text.innerHTML = `
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progressPercent}%; box-shadow: 0 0 ${glowIntensity}px var(--gold);"></div>
            </div>
            <div class="scale-up" style="padding: 10px;">
                <p style="opacity: 0.5; font-size: 0.8rem;">ЭТАП ПРИРУЧЕНИЯ: ${taskIdx + 1} / ${char.tasks.length}</p>
                <h2 style="color: var(--gold-bright); transition: 0.5s;">${char.tasks[taskIdx]}</h2>
            </div>
        `;
    } else {
        text.innerHTML = `
            <div class="progress-container"><div class="progress-bar" style="width: 100%"></div></div>
            <h2 class="fade-in" style="color: #fff; text-shadow: 0 0 20px var(--gold);">✨ Ваша связь стала вечной.</h2>
            <p style="color: var(--gold); font-style: italic;">«Ты навсегда в ответе за всех, кого приручил»</p>
        `;
    }
}

function completeTask() {
    const char = planetData[activePIdx].chars[activeCIdx];
    if (taskIdx < char.tasks.length) {
        gameState.wisdom++;
        taskIdx++;
        
        // Визуальный эффект на контейнере задач
        document.getElementById('task-area').classList.add('task-completed-flash');
        setTimeout(() => document.getElementById('task-area').classList.remove('task-completed-flash'), 500);

        // Если это было последнее задание (10-е)
        if (taskIdx === char.tasks.length) {
            launchStarfall(); // Праздничный звездопад!
        }

        save();
        updateUI();
        showTask();
    }
}


