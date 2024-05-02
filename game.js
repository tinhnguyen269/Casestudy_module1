const words = [
    {image: "images/picture1.png", answer:"cầu chì" },
    {image: "images/picture2.png", answer:"chữ nho" },
    {image: "images/picture3.png", answer:"nội gián" },
    {image: "images/picture4.png", answer:"cà mau" },
    {image: "images/picture5.png", answer:"tất yếu" },
    {image: "images/picture6.png", answer:"sóc trăng" },
    {image: "images/picture7.png", answer:"thái bình" }
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
let Point = 0;
let timedownInterval;


// Hiển thị từ và hình ảnh đầu tiên khi trang được tải
showWordAndImage(currentWord);

// Hiển thị thời gian trả lời câu hỏi
timeAnswer(defaultTime);

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
        plusPoint();
        setTimeout(nextWord, 2000); // Chuyển sang từ tiếp theo sau 2 giây
    } else {
        displayResult.innerHTML = "<h3>Trả lời sai rồi,thử lại đi</h3> ";
        countResponse(countAnswer);
    }
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
function timeAnswer(time) {
   timedownInterval = setInterval(function () {
        if (time > 0) {
            displayTime.innerText = "Thời gian:" + time;
            time--;
        }
        else {
            clearInterval(timedownInterval);
            alert("Bạn thua rồi");
            window.location.href = "index.html";
        }
    }, 1000); // Đếm mỗi giây
    return timedownInterval;
}

// reset thời gian khi chuyển câu
function resetTime() {
    clearInterval(timedownInterval); // Dừng đếm ngược hiện tại
    displayTime.innerText = "Thời gian: " + defaultTime; // Đặt lại thời gian hiển thị
    timeAnswer(defaultTime); // Bắt đầu đếm ngược mới
}

// Hàm cộng điểm khi trả lời đúng
function plusPoint() {
      Point += 100;
    pointAnswer.innerText = "Điểm:"+ Point ;
}

// Hàm chuyển sang từ tiếp theo
function nextWord() {
    wordIndex++;
    if (wordIndex < words.length) {
        currentWord = words[wordIndex];
        showWordAndImage(currentWord);
        displayResult.innerText = "";
        inputGuess.value = "";
        displayCount.innerText ="Số lần đoán: ";
        countAnswer = 3;
        resetTime();

    } else {
        // Nếu đã đoán hết tất cả các từ, hiển thị thông báo kết thúc trò chơi
         alert("Chúc mừng bạn đã chiến thắng") ;
         window.location.href="index.html";

    }
}