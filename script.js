// Danh sách các ký tự Katakana và câu trả lời tương ứng
const katakana = [
  { character: "サ", romaji: "sa" },
  { character: "シ", romaji: "shi" },
  { character: "ス", romaji: "su" },
  { character: "セ", romaji: "se" },
  { character: "ソ", romaji: "so" },
  { character: "タ", romaji: "ta" },
  { character: "ツ", romaji: "tsu" },
  { character: "テ", romaji: "te" },
  { character: "ヌ", romaji: "nu" },
  { character: "ウ", romaji: "u" },
  { character: "ワ", romaji: "wa" },
  { character: "ネ", romaji: "ne" },
  { character: "ホ", romaji: "ho" },
  { character: "オ", romaji: "o" },
  { character: "ヤ", romaji: "ya" },
  { character: "ユ", romaji: "yu" },
  { character: "ヨ", romaji: "yo" },
  { character: "ラ", romaji: "ra" },
  { character: "ル", romaji: "ru" },
  { character: "レ", romaji: "re" },
  { character: "ン", romaji: "n" },
  { character: "フ", romaji: "fu" }
];


let currentIndex = 0;
let isAnswering = true;

const katakanaCharacter = document.getElementById('katakana-character');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

// Hiển thị ký tự Katakana ngẫu nhiên
function showNewKatakana() {
  currentIndex = Math.floor(Math.random() * katakana.length);
  katakanaCharacter.textContent = katakana[currentIndex].character;
  feedback.textContent = '';
  answerInput.value = '';
  answerInput.focus();
  isAnswering = true;
}

// Kiểm tra đáp án
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = katakana[currentIndex].romaji;
  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Đúng rồi!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `Sai rồi! Đáp án đúng là: ${correctAnswer}`;
    feedback.style.color = 'red';
  }
  isAnswering = false;
}

// Lắng nghe sự kiện nhấn phím Enter
answerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (isAnswering) {
      checkAnswer();
    } else {
      showNewKatakana();
    }
  }
});

// Lắng nghe sự kiện click nút "Next"
nextBtn.addEventListener('click', showNewKatakana);

// Hiển thị ký tự đầu tiên khi tải trang
showNewKatakana();
