let buttonStart = document.getElementById("next1");
let count = 3;
timeAnswer(30);
buttonStart.addEventListener("click", function () {
    window.location.href = "level1.html";
})
// câu1
let answer = ["cầu trì","chữ nho"]


//Check câu trả lời
function checkResponse() {
   let response =  document.getElementById("response").value;
    let found = false;

    for (let i = 0; i < answer.length; i++) {
        if (response === answer[i]) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("XUẤT SẮC QUÁ");
        window.location.href = "level2.html";
        return true;
    } else {
        countResponse(); // Chỉ gọi hàm này nếu câu trả lời không khớp với bất kỳ câu trả lời nào
        return false; // Trả về false nếu câu trả lời không khớp với bất kỳ câu trả lời nào
    }
}

// Đếm số lần trả lời sai
function countResponse() {
    if (count > 1) {
        count--;
        document.getElementById("result").innerHTML = '<h3>SAI RỒI,ĐOÁN LẠI ĐI!</h3>' + '<br>' + "Bạn còn " + count + " lần đoán";
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
            document.getElementById("time").innerHTML = "Thời gian còn lại:" + time;
            time--;
        } else {
            clearInterval(timedownInterval);
            alert("Bạn thua rồi") ;
            window.location.href = "index.html";
        }
    }, 1000); // Đếm mỗi giây
}
function addPoint(point) {
    if (checkResponse() === true ){
        point += 100;
        document.getElementById("point").innerText=point + "điểm"
    }
}








