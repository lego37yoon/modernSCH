/* 공통 */
//PureCSS 들여오기
var pureCore = document.createElement("link");
pureCore.rel = "stylesheet";
pureCore.type = "text/css";
pureCore.href = browser.extension.getURL("../css/menus-core.css");
var pureDropdown = document.createElement("link");
pureDropdown.rel = "stylesheet";
pureDropdown.type = "text/css";
pureDropdown.href = browser.extension.getURL("../css/menus-dropdown.css");
document.head.appendChild(pureCore);
document.head.appendChild(pureDropdown);

//995px 제한 해제
let layout995 = document.getElementsByClassName('lo_995');
while(layout995[0]) {
    layout995[0].removeAttribute("class");
}

/* 상단 헤더 */
//로고 투명으로
document.querySelector("img[src*='/sch/_res/img/logo.gif']").setAttribute('id', 'schMainLogo');
let mainLogo = document.getElementById("schMainLogo");
mainLogo.setAttribute('src', 'https://portal.sch.ac.kr/_res/p/img/logo.png');
mainLogo.parentNode.removeAttribute("class");
mainLogo.parentNode.removeAttribute("style");
mainLogo.parentNode.setAttribute('style', 'margin: 0px 20px 20px 20px;');
//상단 녹색 제거
if (document.getElementById("Main_Contents") != null) {
    document.getElementById("Main_Contents").style.backgroundColor = "white";
}
if (document.getElementById("Top_Main") != null) {
    document.getElementById("Top_Main").style.backgroundColor = "white";
} else {
    document.getElementById("Top").setAttribute('id', 'myTop');
    document.getElementById("myTop").setAttribute('style', 'width: 100%;height: 205px;');
}
//상단 컨텐츠 너비 제한 제거 & 나머지 녹색 제거
let schTopMenu = document.querySelector("div[class*='jwxe_root Top_Menu']");
schTopMenu.removeAttribute("style");
schTopMenu.style.backgroundColor = "white";
schTopMenu.parentNode.style.width = "";
//로그인 버튼 텍스트로
if (document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']") === null) {
    document.querySelector("a[href*='/_common/login/proc/log_out.jsp']").setAttribute('id', 'loginBtn');
} else {
    document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']").setAttribute('id', 'loginBtn');
}

let headerLogin = document.getElementById("loginBtn");
headerLogin.style.width = "";
if(document.querySelector("img[src*='/sch/_res/img/ttmenu_logout.gif']") === null) {
    headerLogin.innerHTML = "로그인 |";
} else {
    headerLogin.innerHTML = "로그아웃 |";
}
headerLogin.parentNode.setAttribute('style', 'position: relative;float: left;margin-left: 4px;');
headerLogin.parentNode.parentNode.style.width = "";
//상단 메뉴 | 제거
let container = document.querySelector("#login_list");
let loginBar = container.querySelectorAll("img[src*='https://homepage.sch.ac.kr/sch/_res/img/ttmenu_bar.gif']");
loginBar.forEach(function(userItem) {
    userItem.remove();
})
//홈 버튼 텍스트로
let headerHome = document.getElementById('jwxe_1300019677522');
headerHome.style.width = "";
headerHome.innerHTML = "홈 |";
headerHome.parentNode.setAttribute('style', 'position: relative;float: left;margin-left: 5px;');
//영문 버튼 텍스트로
document.querySelector("a[href*='/english']").setAttribute('id', 'EnglishBtn');
let headerEnglish = document.getElementById('EnglishBtn');
headerEnglish.style.width = "";
headerEnglish.innerHTML = "English";
headerEnglish.parentNode.setAttribute('style', 'position: relative;float: left;margin-left: 5px; margin-right: 5px;');


//메인 이미지 정렬 및 색상 채우기
let mainBannerNum = 0;
for (let i = 1; i < 7; i++) {
    const queryStr = "img[src*='/sch/_res/img/sub_visual_0" + i + ".gif']"
    if (document.querySelector(queryStr) != null) {
        let mainBannerImg = document.querySelector(queryStr);
        mainBannerImg.parentNode.parentNode.removeAttribute("width");
        mainBannerImg.style.float = "right";
        switch(i) {
            case 1:
                mainBannerImg.style.backgroundColor = "#284797";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            default:
                mainBannerImg.style.backgroundColor = "#294A9B";
                break;
        }
    }
}

/* 메인 컨텐츠*/
//하단 녹색 제거
document.getElementById("jwxe_main_content").style.backgroundColor = "white";
document.body.style.backgroundColor = "white";
try {
    // 순천향인 버튼 제거
    document.getElementById("jwxe_1297997945786").innerHTML = "순천향인"
    //교직원 버튼 제거
    document.getElementById("jwxe_1297997969913").innerHTML = "교직원"
    //방문인 버튼 제거
    document.getElementById("jwxe_1298002463910").innerHTML = "방문인"
    //각종 공지 배경 제거
    let notices = document.getElementsByClassName("jwxe_div");
    notices[0].style.background = "";
    notices[1].style.background = "";
    notices[3].style.background = "";
    let noticeArticles = document.querySelectorAll("a[style*='z-index: 101;']");
    for (let i = 0; i < noticeArticles.length; i++) {
        noticeArticles[i].style.color = "black";
    }
    //공지 제목들 이미지 제거
    
} catch (error) {
    
}


/* 하단 푸터 영역 */
//하단 푸터 영역 확장
document.querySelector("div[style*='width:995px; height:50px; ']").removeAttribute("style");
//하단 로고 여백 추가
document.querySelector("div[style*='left:0px;width:124px;height:34px;']").setAttribute('id', 'footerLogo'); //ID 생성
let footerLogo = document.getElementById("footerLogo");
footerLogo.removeAttribute("style");
footerLogo.removeAttribute("class");
footerLogo.setAttribute('style', 'margin: 10px 10px 10px 10px; float: left'); //margin 설정, 정렬
//하단 푸터 정렬
footerLogo.parentNode.removeAttribute("class");
footerLogo.parentNode.setAttribute('style', 'display: inline;');
//주소 대체 + 저작권 div와 통합
document.querySelector("div[style*='left:140px;width:362px;height:16px;']").setAttribute('id', 'footerAddress'); //ID 생성
let addressStyle = document.getElementById("footerAddress");
addressStyle.removeAttribute("style");
addressStyle.removeAttribute("class");
addressStyle.innerHTML = "<p>[31538] 충남 아산시 신창면 순천향로 22 TEL.041-530-1114 FAX.041-542-4615<br>COPYRIGHT BY 2020 SOONCHUNHYANG UNIVERSITY. ALL RIGHT RESERVED</p>"; //텍스트 삽입 + 통합
//저작권 div 삭제
if(document.querySelector("img[src='https://homepage.sch.ac.kr/sch/_res/img/copyright.gif']") != null) {
    document.querySelector("img[src='https://homepage.sch.ac.kr/sch/_res/img/copyright.gif']").setAttribute('id', 'footerCopyright');
} else {
    document.querySelector("img[src='/sch/_res/img/copyright.gif']").setAttribute('id', 'footerCopyright');
} //ID생성
let copyright = document.getElementById("footerCopyright");
copyright.remove();

try {
    //policy, infoLink, remoteService 정렬
    document.querySelector("div[style*='left:530px;top:3px;width:270px;height:30px;']").removeAttribute("style");
    document.querySelector("ul[class*='fmenu']").setAttribute('style', 'display: inline;');
    document.querySelector("ul[class*='fmenu']").parentNode.removeAttribute("class");
    //개인정보 취급방침 대체
    document.querySelector("a[href*='/sch/pop/pop_privacy_policy.jsp']").setAttribute('id', 'footerPolicy'); //ID 생성
    let policy = document.getElementById('footerPolicy');
    policy.innerHTML = "개인정보 취급방침"; //텍스트 삽입
    policy.removeAttribute("class");
    policy.removeAttribute("style");
    policy.setAttribute('style', 'margin-left: 10px; color: cornflowerblue;'); //색상 설정
    //대학 정보 공시 대체
    document.querySelector("a[href*='http://www.academyinfo.go.kr/pubinfo/pubinfo1600/doInit.do?schlId=0000142']").setAttribute('id', 'footerInfo'); //ID 생성
    let infoLink = document.getElementById("footerInfo");
    infoLink.innerHTML = "대학정보공시"
    //원격 지원 서비스 대체
    document.querySelector("a[href*='http://1.sch.ac.kr']").setAttribute('id', 'footerRemote'); //ID 생성
    let remoteService = document.getElementById("footerRemote");
    remoteService.innerHTML = "원격지원서비스"
    //바로가기 조정
    document.querySelector("div[style*='left:800px;width:190px;height:30px;']").setAttribute('id', 'footerGo'); //ID 생성
    let toGo = document.getElementById('footerGo');
    toGo.removeAttribute("class"); //기존 속성값 제거
    toGo.removeAttribute("style");
    toGo.setAttribute('style', 'margin-right: 10px; float: right;'); //오른쪽으로 정렬, 여백 10px   
} catch (error) {
    
}
try {
    let footerQR = document.getElementsByClassName("jwxe_include_item");
    footerQR[0].setAttribute('style', 'right: 66%; bottom: -0');
} catch (error) {
    
}