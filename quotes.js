// 디즈니 영화 명언 모음
let quotes = [
    `"A true friend looks at the tears hidden in forced smile."`,
    `"Today's special moments are tomorrow's memories."`,
    `"Success is not givin for free.\nYou have to be able to do anything for your goal."`,
    `"What is important is that we all stay together."`,
    `"I will decide how I feel, I will be happy today."`,
    `"If you keep on believing the dream that you wish will come true."`,
    `"It's up to you how far you'll go.\nIf you don't try, you'll never know."`,
    `"If you focus on what you left behind, you will never see what lies ahead."`,
    `"The flower that blooms in adversity is the most rare and beautiful of all."`,
    `"You control your destiny.\nYou don't need magic to do it."`,
    `"Sometimes the smallest things take up the most room in your heart."`,
    `"The flower that bloom after overcoming adversity are the most beautiful flower."`,
    `"Love is to prioritize someone’s desires over what you want."`,
    `"Because when I look at you, I can feel it.\nAnd I look at you and I’m home."`,
    `"The special moments of today are memories of tomorrow."`,
    `"Only I can determine my own mood.\nAnd today, perhaps, I will choose happiness."`,
    `"Years of dreams just can’t be wrong!"`,
    `"Some people are worth melting for. "`,
    `"To love someone, you have to love yourself first."`,
    `"I’m free to be whoever I want to be!"`,
    `"I’d rather die tomorrow than live a hundred years without knowing you."`,
    `"You still have enough time to make your dreams come true!"`,
    `"I have crossed the horizon to find you."`,
    `"Magic can happen only when you have an earnest desire."`,
    `"Every day, every minute, every second, you have a chance to change your life."`,
    `"Remember you’re the one who can fill the world with sunshine."`,
    `"Life is a journey to be experienced, not a problem to be solved."`
];

function view_quotes() {
    let rand = Math.floor(quotes.length * Math.random()); 
    let randText = quotes[rand];

    let quote = document.getElementById("quote"); 
    quote.textContent = randText;
}

view_quotes();