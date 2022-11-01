class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */

    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      if (e.key === this.currentSymbol.textContent) {
        this.success();
      } else {
        this.fail();
      } 
    });  
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }
    const timeEnd = Date.now();
    const delta = timeEnd - this.timeStart;

    if (delta <= this.time) {
      if (++this.winsElement.textContent === 10) {
        alert('Победа!');
        this.reset();
      }
      this.setNewWord();
    } else {
      this.fail();
    }
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.timer = this.container.querySelector('.timer');
    this.timer.textContent = word.length;
    this.time = word.length*1000;
    this.timeStart = Date.now();
        
    const timerID = setInterval(() => {
      this.timer.textContent = Number(this.timer.textContent) - 1;
      if (Number(this.timer.textContent) < 1) {
        clearInterval(timerID);
      }  
    },1000);

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

