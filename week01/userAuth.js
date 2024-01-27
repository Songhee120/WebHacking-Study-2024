// 페이지 로드 시 데이터 가져오기
var storedUserData = localStorage.getItem('userData');
var userData = storedUserData ? JSON.parse(storedUserData) : {};

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // 로그인 처리 로직
    if (userData[username] && userData[username].password === password) {
        // 로그인 성공 시 alert 창 표시
        alert("Login successful");
    } else {
        // 로그인 실패 시 alert 창 표시
        alert("Invalid username or password");
    }
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    // 이미 존재하는 사용자인지 확인
    if (userData[username]) {
        alert("Username already exists");
    } else {
        // 새로운 사용자를 저장
        userData[username] = { password: password };
        console.log("Signup successful");

        // 회원가입 성공 시 로그인 페이지로 리디렉션
        window.location.href = 'sign-in.html';

        // 회원가입 시 사용자 데이터를 로컬 스토리지에 저장
        localStorage.setItem('userData', JSON.stringify(userData));
    }
}

function showUserData() {
    console.log(userData.toString());
}