let soundToggleOn = document.getElementById('sound-toggle-on');
let soundToggleOff = document.getElementById('sound-toggle-off');
const mouseClick = new Audio('music/マウスクリック音.mp3');
const bgm = new Audio('music/ポジティブ　オープニング.mp3');

//野菜の音声
const cucumberSound = new Audio('music/きゅうり.mp3');
const pumpkinSound =new Audio('music/かぼちゃ.mp3');
const cabbageSound = new Audio('music/きゃべつ.mp3');
const goyaSound = new Audio('music/ごーやー.mp3');
const potatoSound = new Audio('music/じゃがいも.mp3');
const radishSound = new Audio('music/だいこん.mp3');
const onionSound = new Audio('music/たまねぎ.mp3');
const tomatoSound = new Audio('music/とまと.mp3');
const carrotSound = new Audio('music/にんじん.mp3');
const bellPepperSound = new Audio('music/ぴーまん.mp3');

soundToggleOn.addEventListener('click', () => {
    soundToggleOn.style.display = 'none';
    soundToggleOff.style.display = 'block';
    mouseClick.play();
    mouseClick.currentTime = 0;

    bgm.play();
    bgm.volume = 0.1;
    bgm.loop = true;
});

soundToggleOff.addEventListener('click', () => {
    soundToggleOff.style.display = 'none';
    soundToggleOn.style.display = 'block';
    mouseClick.play();
    mouseClick.currentTime = 0;

    bgm.pause();
});

/*野菜をタッチした時のモーダルの動き */

let showModalWrap = document.getElementById('modal-wrap');

//野菜のidを取得
let cucumber = document.getElementById('cucumber');
let pumpkin = document.getElementById('pumpkin');
let cabbage = document.getElementById('cabbage');
let goya = document.getElementById('goya');
let potato = document.getElementById('potato');
let radish = document.getElementById('radish');
let onion = document.getElementById('onion');
let tomato = document.getElementById('tomato');
let carrot = document.getElementById('carrot');
let bellPepper = document.getElementById('bell-pepper');

//きゅうり
cucumber.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'きゅうり';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/きゅうり.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);
    cucumberSound.play();
    cucumberSound.currentTime = 0;


    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//かぼちゃ
pumpkin.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'かぼちゃ';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/かぼちゃ3.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    pumpkinSound.play();
    pumpkinSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//きゃべつ
cabbage.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'きゃべつ';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/キャベツ.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);
    
    cabbageSound.play();
    cabbageSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//ごーや
goya.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'ゴーヤー';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/ゴーヤー.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    goyaSound.play();
    goyaSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//じゃがいも
potato.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'じゃがいも';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/じゃがいも.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    potatoSound.play();
    potatoSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//だいこん
radish.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'だいこん';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/だいこん.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    radishSound.play();
    radishSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//たまねぎ
onion.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'たまねぎ';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/たまねぎ.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    onionSound.play();
    onionSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//とまと
tomato.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'とまと';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/とまと.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    tomatoSound.play();
    tomatoSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//にんじん
carrot.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'にんじん';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/にんじん.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    carrotSound.play();
    carrotSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});

//ぴーまん
bellPepper.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';
    //pタグを生成
    let create_p = document.createElement('p');
    create_p.textContent = 'ぴーまん';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/ぴーまん.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');
    //pタグを追加
    showTouchedVegetable.appendChild(create_p);

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    bellPepperSound.play();
    bellPepperSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
        create_p.remove();
    }, 1800);
});









