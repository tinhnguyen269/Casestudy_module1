// const buttonStart = document.getElementById("next1");
// buttonStart.addEventListener("click", function () {
//     window.location.href = "level1.html";
// });

const words = [
    {image: "Level1.png", answer:"cầu trì" },
    {image: "Level2.png", answer:"chữ nho" },
    {image: "Level3.png", answer:"báo cáo" }

];

let wordIndex = 0;
let currentWord = words[wordIndex];

let imageContainer = document.getElementById("image-container");
let inputGuess = document.getElementById("guess-input");
let summitGuess = document.getElementById("submit-guess");
let displayResult = document.getElementById("result");
let pointAnswer = document.getElementById("point-answer") ;
let displayTime = document.getElementById("time-out");
let displayCount = document.getElementById("count-answer");
let defaultTime = 30;
let countAnswer = 3;
let point = 0;

// Hiển thị thời gian trả lời câu hỏi
timeAnswer(30);

// Hiển thị từ và hình ảnh đầu tiên khi trang được tải
showWordAndImage(currentWord);

// Lắng nghe sự kiện click vào nút Submit
summitGuess.addEventListener("click", function() {
    checkGuess();
});

// Hàm hiển thị từ và hình ảnh tương ứng
function showWordAndImage(word) {
    imageContainer.innerHTML = `<img src="${word.image}" alt="Image">`;
}

// Hàm kiểm tra đoán của người chơi
function checkGuess() {
    let guess = inputGuess.value.toLowerCase().trim();
    if (guess === currentWord.answer) {
        displayResult.innerHTML = "<h3>Bạn trả lời đúng rồi,đang chuyển sang từ tiếp theo...</h3>";
        setTimeout(nextWord, 2000); // Chuyển sang từ tiếp theo sau 2 giây
        displayCount.value ="";
        plusPoint();
        resetTime();
    } else {
        displayResult.innerHTML = "<h3>Trả lời sai rồi,thử lại đi</h3> ";
        countResponse(countAnswer);
    }
    // Xóa nội dung trong ô nhập
    inputGuess.value = "";
}

// Đếm số lần trả lời sai
function countResponse() {
    countAnswer--;
    if (countAnswer > 0) {
        displayCount.innerText =  "Số lần đoán: " + countAnswer ;
    } else {
        alert("Bạn thua rồi")
        window.location.href = "index.html";
    }
}

// Set thời gian trả lời
function timeAnswer(seconds) {
    let time = seconds;
    const timedownInterval = setInterval(function() {
        if (time > 0) {
            displayTime.innerText = "Thời gian:" + time;
            time--;
        } else {
            clearInterval(timedownInterval);
            alert("Bạn thua rồi");
            window.location.href = "index.html";
        }
    }, 1000); // Đếm mỗi giây
 }

//  Reset thời gian khi trả lời đúng
function resetTime() {
    clearInterval(timedownInterval); // Dừng đếm ngược hiện tại
    displayTime.innerText = "Thời gian: " + defaultTime; // Đặt lại thời gian hiển thị
    timeAnswer(defaultTime); // Bắt đầu đếm ngược mới
}

function plusPoint() {
    point += 100;
    pointAnswer.innerText = "Điểm:"+ point ;
}

// Hàm chuyển sang từ tiếp theo
function nextWord() {
    wordIndex++;
    if (wordIndex < words.length) {
        currentWord = words[wordIndex];
        showWordAndImage(currentWord);
        displayResult.innerText = "";

    } else {
        // Nếu đã đoán hết tất cả các từ, hiển thị thông báo kết thúc trò chơi
        displayResult.innerText = "Chúc mừng bạn đã chiến thắng";

    }
}