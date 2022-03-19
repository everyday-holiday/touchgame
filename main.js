let soundToggleOn = document.getElementById('sound-toggle-on');
let soundToggleOff = document.getElementById('sound-toggle-off');
const mouseClick = new Audio('music/マウスクリック.wav');
const bgm = new Audio('music/bgm.wav');

// let getWindowHeight = window.innerHeight;

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
    mouseClick.volume = 0.05;
    mouseClick.play();
    mouseClick.currentTime = 0;
    
    bgm.volume = 0.005;
    bgm.play();
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
    // let getWindowHeight = window.innerHeight;
    // console.log(getWindowHeight + 'px');
    
    // showModalWrap.style.height = getWindowHeight + 'px';
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/きゅうり2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);
    cucumberSound.play();
    cucumberSound.currentTime = 0;


    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
    }, 1800);
});

//かぼちゃ
pumpkin.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';


    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/かぼちゃ2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    pumpkinSound.play();
    pumpkinSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
    }, 1800);
});

//きゃべつ
cabbage.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/きゃべつ2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);
    
    cabbageSound.play();
    cabbageSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        //追加した要素を削除しておく(リセット)
        createImg.remove();
    }, 1800);
});

//ごーや
goya.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/ごーやー2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    goyaSound.play();
    goyaSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//じゃがいも
potato.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/じゃがいも2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    potatoSound.play();
    potatoSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//だいこん
radish.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/だいこん2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    radishSound.play();
    radishSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//たまねぎ
onion.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/たまねぎ2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    onionSound.play();
    onionSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//とまと
tomato.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/とまと2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    tomatoSound.play();
    tomatoSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//にんじん
carrot.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/にんじん2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    carrotSound.play();
    carrotSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});

//ぴーまん
bellPepper.addEventListener('click', () => {
    showModalWrap.style.display = 'flex';

    //imgを生成
    let createImg = document.createElement('img');
    createImg.src = 'img/ぴーまん2.png';

    let showTouchedVegetable = document.getElementById('show-touched-vegetable');

    //imgを追加
    showTouchedVegetable.appendChild(createImg);

    bellPepperSound.play();
    bellPepperSound.currentTime = 0;

    setTimeout(() => {
        showModalWrap.style.display = 'none';
        createImg.remove();
    }, 1800);
});
