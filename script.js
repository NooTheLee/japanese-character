// Danh sách các ký tự Katakana và câu trả lời tương ứng
const character = [
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
    { character: "フ", romaji: "fu" },
];

const newWords = [
    { character: "うまれます", romaji: "được sinh ra" },
    { character: "かぶります", romaji: "đội (nón, mũ)" },
    { character: "はきます", romaji: "mặc (quần, váy)" },
    { character: "おろします", romaji: "rút (tiền)" },
    { character: "まなびます", romaji: "học" },
    { character: "いります", romaji: "cần" },
    { character: "やくにたちます", romaji: "có ích" },
    // { character: "ごうごう", romaji: "trường cấp 3" },
    // { character: "スタッフ", romaji: "nhân viên" },
    // { character: "しゅじん・おっと", romaji: "chồng" },
    // { character: "ひきだし", romaji: "ngăn kéo" },
    // { character: "ばしょ", romaji: "nơi, địa điểm, chỗ" },
    // { character: "アプリ", romaji: "ứng dụng" },
    // { character: "おもちゃ", romaji: "đồ chơi" },
    // { character: "しょうひん", romaji: "sản phẩm" },
    // { character: "きねんび", romaji: "ngày kỉ niệm" },
    { character: "もくひょう", romaji: "mục tiêu" },
    { character: "むりょう", romaji: "miễn phí" },
    // { character: "セーター", romaji: "áo len" },
    // { character: "いつでも", romaji: "bất cứ khi nào" },
    // { character: "どこでも", romaji: "bất kỳ đâu" },
    // { character: "げんざい の しじょう", romaji: "thị trường hiện nay" },
    // { character: "にんきがあります", romaji: "được yêu thích" },
    { character: "しょうかいします", romaji: "giới thiệu" },
    { character: "しょうかい", romaji: "giới thiệu" },
];

const katakana = newWords;

let currentIndex = 0;
let isAnswering = true;

const katakanaCharacter = document.getElementById("katakana-character");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

// Hiển thị ký tự Katakana ngẫu nhiên
function showNewKatakana() {
    currentIndex = Math.floor(Math.random() * katakana.length);
    katakanaCharacter.textContent = katakana[currentIndex].character;
    feedback.textContent = "";
    answerInput.value = "";
    answerInput.focus();
    isAnswering = true;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = katakana[currentIndex].romaji.toLowerCase();

    if (userAnswer && correctAnswer.includes(userAnswer)) {
        feedback.textContent = `Đúng rồi! ${correctAnswer}`;
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Sai rồi! Đáp án đúng là: ${correctAnswer}`;
        feedback.style.color = "red";
    }
    isAnswering = false;
}

answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (isAnswering) {
            checkAnswer();
        } else {
            showNewKatakana();
        }
    }
});

nextBtn.addEventListener("click", showNewKatakana);
showNewKatakana();
