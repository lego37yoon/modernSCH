/* 공통 */
//FontAwesome 들여오기
let fontawesomeKit = document.createElement("link");
fontawesomeKit.rel = "stylesheet";
fontawesomeKit.href = browser.extension.getURL("../css/all.min.css");
fontawesomeKit.crossOrigin = "anonymous";
//PureCSS 들여오기
let pureCore = document.createElement("link");
pureCore.rel = "stylesheet";
pureCore.type = "text/css";
pureCore.href = browser.extension.getURL("../css/menus-core.css");
let pureDropdown = document.createElement("link");
pureDropdown.rel = "stylesheet";
pureDropdown.type = "text/css";
pureDropdown.href = browser.extension.getURL("../css/menus-dropdown.css");
//Noto Sans CJK KR 들여오기
let notoKR = document.createElement("link");
notoKR.rel = "stylesheet";
notoKR.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap";
//자체 CSS 들여오기
let modernschCSS = document.createElement("link");
modernschCSS.rel = "stylesheet";
modernschCSS.type = "text/css";
modernschCSS.href = browser.extension.getURL("../css/modernschCommon.css");
//들여온 CSS 적용
document.head.appendChild(pureCore);
document.head.appendChild(pureDropdown);
document.head.appendChild(modernschCSS);
document.head.appendChild(fontawesomeKit);
document.head.appendChild(notoKR);
//user.css 제거
document.querySelector("link[href*='/sch/_css/user.css']").remove();
//layout.css 제거
document.querySelector("link[href*='/sch/_css/layout.css']").remove();
//cms.css 제거
document.querySelector("link[href*='/_common/cms.css']").remove();

//수동 style 모두 제거
let allElements = document.querySelectorAll("*");
for (let elements = 0; elements < allElements.length; elements++) {
    try {
        allElements[elements].removeAttribute("style");
    } catch {
    
    }
}

/* Grid 레이아웃으로 개조 */
document.getElementById("Footer").parentNode.setAttribute("class", "grid_layout");

//로고 투명으로
document.querySelector("img[src*='/sch/_res/img/logo.gif']").setAttribute('id', 'schMainLogo');
let mainLogo = document.getElementById("schMainLogo");
mainLogo.setAttribute('src', 'https://home.sch.ac.kr/_res/sch/img/logo.png');

//로그인 버튼 변경
if (document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']") === null) {
    document.querySelector("a[href*='/_common/login/proc/log_out.jsp']").setAttribute('id', 'loginBtn');
} else {
    document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']").setAttribute('id', 'loginBtn');
}

let headerLogin = document.getElementById("loginBtn");
if(document.querySelector("img[src*='/sch/_res/img/ttmenu_logout.gif']") === null) {
    headerLogin.innerHTML = "<i class='fas fa-sign-in-alt'></i>";
} else {
    headerLogin.innerHTML = "<i class='fas fa-sign-out-alt'></i>";
}
//상단 메뉴 | 제거
let container = document.querySelector("#login_list");
let loginBar = container.querySelectorAll("img[src*='https://homepage.sch.ac.kr/sch/_res/img/ttmenu_bar.gif']");
loginBar.forEach(function(userItem) {
    userItem.remove();
})
//홈 버튼 텍스트로
let headerHome = document.getElementById('jwxe_1300019677522');
headerHome.innerHTML = "<i class='fas fa-home'></i>";
//영문 버튼 텍스트로
document.querySelector("a[href*='/english']").setAttribute('id', 'EnglishBtn');
let headerEnglish = document.getElementById('EnglishBtn');
headerEnglish.innerHTML = "<i class='fas fa-globe-americas'></i>";

//메인 메뉴 스타일 변경
document.getElementsByClassName("jwxe_menu_box0")[0].removeAttribute("style");
//메인메뉴 삭제
for (let menuNum = 1; menuNum < 7; menuNum++) {
    document.getElementsByClassName("jwxe_ul")[1].remove();
}
//메인 이미지 제거
let mainVisual = document.getElementById("Main_Visual");
while (mainVisual.firstChild) {
    mainVisual.removeChild(mainVisual.firstChild);
}
mainVisual.innerHTML = "<p class='main_visual_text'><span class='sch_gradient'>Good To Great</span><br>뉴노멀 블렌디드 교육혁신대학</p>";

//대학소개
let univIntro = document.getElementById('jwxe_1298022569424');
univIntro.textContent = "대학소개";
univIntro.removeAttribute("class");
//입학안내
let univIpsi = document.getElementById('jwxe_1298022569947');
univIpsi.textContent = "입학안내";
univIpsi.removeAttribute("class");
//대학 혹은 대학원
let univDeparts = document.getElementById('jwxe_1298022569714');
univDeparts.textContent = "대학/대학원";
univDeparts.removeAttribute("class");
//대학 기관
let univLab = document.getElementById('jwxe_1298022569758');
univLab.textContent = "대학기관";
univLab.removeAttribute("class");
//대학 생활
let univLife = document.getElementById('jwxe_1298022570062');
univLife.textContent = "대학생활";
univLife.removeAttribute("class");
//순천향 세상
let univWorld = document.getElementById('jwxe_1298022569694');
univWorld.textContent = "순천향세상";
univWorld.removeAttribute("class");
//기타 메뉴
let univAllMenu = document.getElementById('jwxe_1305609065745');
univAllMenu.textContent = "메뉴 전체보기"
let univAllDepart = document.getElementById('jwxe_1305609293490');
univAllDepart.textContent = "학과 / 전공보기"
let univNetwork = document.getElementById('jwxe_1305609562261');
univNetwork.textContent = "바로가기"

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
try {
    // 순천향인 버튼 제거, 속성 지정, 버튼 디자인
    let schPeopleBtn = document.getElementById("jwxe_1297997945786");
    schPeopleBtn.textContent = "순천향인";
    //교직원 버튼 제거, 속성 지정, 버튼 디자인
    let schProfessorBtn = document.getElementById("jwxe_1297997969913");
    schProfessorBtn.textContent = "교직원";
    //방문인 버튼 제거, 속성 지정, 버튼 디자인
    let schVisitorBtn = document.getElementById("jwxe_1298002463910");
    schVisitorBtn.textContent = "방문인";
    //각종 공지 배경 제거
    let notices = document.getElementsByClassName("jwxe_div");
    let noticeArticles = document.querySelectorAll("a[style*='z-index: 101;']");

    //공지 제목들 스타일 조정
    let schNotice = document.getElementById("jwxe_1298005370608");
    schNotice.textContent = "공지사항";
    let schScheduleNotice = document.getElementById("jwxe_1298005426312");
    schScheduleNotice.textContent = "학사공지";
    let schJobNotice = document.getElementById("jwxe_1298005460497");
    schJobNotice.textContent = "취업정보";
    let schSupportNotice = document.getElementById("jwxe_1298005501500");
    schSupportNotice.textContent = "장학공지";
    let schCorpNotice = document.getElementById("jwxe_1298005544582");
    schCorpNotice.textContent = "입찰공고";
    let schEventNotice = document.getElementById("jwxe_1298005544584");
    schEventNotice.textContent = "행사안내";
    let schNewsNotice = document.getElementById("jwxe_1298005544588");
    schNewsNotice.textContent = "언론 속 순천향"

    let schNoticeMore = document.getElementById("jwxe_1298007864143");
    schNoticeMore.textContent = "+"
    let schScheduleNoticeMore = document.getElementById("jwxe_1298007956826");
    schScheduleNoticeMore.textContent = "+"
    let schJobNoticeMore = document.getElementById("jwxe_1298007999987");
    schJobNoticeMore.textContent = "+"
    let schSupportNoticeMore = document.getElementById("jwxe_1298008038440");
    schSupportNoticeMore.textContent = "+"
    let schCorpNoticeMore = document.getElementById("jwxe_1298008077443");
    schCorpNoticeMore.textContent = "+"

    //순천향 큰배너 디자인 변경
    let bigBannerPlay = document.querySelector("a[onclick*='javascript:popupOn();']");
    bigBannerPlay.textContent = "▶";
    let bigBannerStop = document.querySelector("a[onclick*='javascript:popupOff();']");
    bigBannerStop.textContent = "⏸";
    let bigBannerFirst = document.getElementById('jwxe_1300156697356');
    bigBannerFirst.textContent = "1";
    let bigBannerSecond = document.getElementById('jwxe_1298009735836');
    bigBannerSecond.textContent = "2";
    let bigBannerThree = document.getElementById('jwxe_1298009655708');
    bigBannerThree.textContent = "3";
    let bigBannerFour = document.getElementById('jwxe_1298009694996');
    bigBannerFour.textContent = "4";
    let bigBannerFive = document.getElementById('jwxe_1298009694999');
    bigBannerFive.textContent = "5";

    //순천향 작은 배너 디자인 변경
    document.getElementById('banner_left').remove();
    document.getElementById('jwxe_1298597242421').remove();
    document.getElementById('jwxe_1298539566766').remove();
    document.getElementById('banner_stop').remove();
    document.getElementsByClassName('jwxe_banner2')[0].setAttribute('class', '');
    let schFund = document.getElementById('jwxe_1298010224899');
    let schLibrary = document.getElementById('jwxe_1298010274144');
    let schMinwon = document.getElementById('jwxe_1298010125158');
    let schWifi = document.getElementById('jwxe_1317188506698');
    let schCopy = document.getElementById('jwxe_1354238196226');
    //미들 배너 디자인 변경
    let schMiddleBannerOne = document.getElementById('jwxe_1298003064729');
    let schMiddleBannerSecond = document.getElementById('jwxe_1298003107718');
    let schMiddleBannerThree = document.getElementById('jwxe_1298003133531');

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
addressStyle.innerHTML = "<p>[31538] 충남 아산시 신창면 순천향로 22 TEL.041-530-1114 FAX.041-542-4615<br>COPYRIGHT BY 2021 SOONCHUNHYANG UNIVERSITY. ALL RIGHT RESERVED</p>"; //텍스트 삽입 + 통합
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
    policy.textContent = "개인정보 취급방침"; //텍스트 삽입
    policy.removeAttribute("class");
    policy.removeAttribute("style");
    policy.setAttribute('style', 'margin-left: 10px; color: cornflowerblue;'); //색상 설정
    //대학 정보 공시 대체
    document.querySelector("a[href*='http://www.academyinfo.go.kr/pubinfo/pubinfo1600/doInit.do?schlId=0000142']").setAttribute('id', 'footerInfo'); //ID 생성
    let infoLink = document.getElementById("footerInfo");
    infoLink.textContent = "대학정보공시"
    //원격 지원 서비스 대체
    document.querySelector("a[href*='http://1.sch.ac.kr']").setAttribute('id', 'footerRemote'); //ID 생성
    let remoteService = document.getElementById("footerRemote");
    remoteService.textContent = "원격지원서비스"
    //바로가기 조정
    document.querySelector("div[style*='left:800px;width:190px;height:30px;']").setAttribute('id', 'footerGo'); //ID 생성
    let toGo = document.getElementById('footerGo');
    toGo.removeAttribute("class"); //기존 속성값 제거
    toGo.removeAttribute("style");
    toGo.setAttribute('style', 'margin-right: 10px; float: right;'); //오른쪽으로 정렬, 여백 10px   
} catch (error) {
    
}
try {
    //QR코드 위치 조정
    let footerQR = document.getElementsByClassName("jwxe_include_item");
    footerQR[0].setAttribute('style', 'right: 1.5%; bottom: 20px');
} catch (error) {
    
}