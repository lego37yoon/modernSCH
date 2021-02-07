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
let pureButton = document.createElement("link");
pureButton.rel = "stylesheet";
pureButton.type = "text/css";
pureButton.href = browser.extension.getURL("../css/buttons.css");
let pureButtonCore = document.createElement("link");
pureButtonCore.rel = "stylesheet";
pureButtonCore.type = "text/css";
pureButtonCore.href = browser.extension.getURL("../css/buttons-core.css");
//자체 CSS 들여오기
let modernschCSS = document.createElement("link");
modernschCSS.rel = "stylesheet";
modernschCSS.type = "text/css";
modernschCSS.href = browser.extension.getURL("../css/modernschCommon.css");
document.head.appendChild(pureCore);
document.head.appendChild(pureDropdown);
document.head.appendChild(pureButton);
document.head.appendChild(pureButtonCore);
document.head.appendChild(modernschCSS);
document.head.appendChild(fontawesomeKit);
//user.css 제거
document.querySelector("link[href*='/sch/_css/user.css']").remove();
//layout.css 제거
document.querySelector("link[href*='/sch/_css/layout.css']").remove();

/* 상단 헤더 */
//너비 설정 무력화
document.getElementsByClassName("lo_995")[0].style.width = "100%";
document.getElementsByClassName("jwxe_root")[0].removeAttribute("style");
try {
    document.getElementsByClassName("Top_Menu")[0].removeAttribute("style");
} catch {
    console.log("Already applied");
}
//로고 투명으로
document.getElementsByClassName("jwxe_html")[0].removeAttribute("style");
document.querySelector("img[src*='/sch/_res/img/logo.gif']").setAttribute('id', 'schMainLogo');
let mainLogo = document.getElementById("schMainLogo");
mainLogo.setAttribute('src', 'https://portal.sch.ac.kr/_res/p/img/logo.png');
mainLogo.parentNode.removeAttribute("class");
mainLogo.parentNode.removeAttribute("style");
mainLogo.parentNode.parentNode.style.display = "inline";

//로그인 버튼 변경
if (document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']") === null) {
    document.querySelector("a[href*='/_common/login/proc/log_out.jsp']").setAttribute('id', 'loginBtn');
} else {
    document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']").setAttribute('id', 'loginBtn');
}

let headerLogin = document.getElementById("loginBtn");
headerLogin.style.width = "";
if(document.querySelector("img[src*='/sch/_res/img/ttmenu_logout.gif']") === null) {
    headerLogin.innerHTML = "<i class='fas fa-sign-in-alt'></i>";
} else {
    headerLogin.innerHTML = "<i class='fas fa-sign-out-alt'></i>";
}
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
headerHome.innerHTML = "<i class='fas fa-home'></i>";
//영문 버튼 텍스트로
document.querySelector("a[href*='/english']").setAttribute('id', 'EnglishBtn');
let headerEnglish = document.getElementById('EnglishBtn');
headerEnglish.style.width = "";
headerEnglish.innerHTML = "<i class='fas fa-globe-americas'></i>";

//메인 메뉴 스타일 변경
document.getElementsByClassName("jwxe_menu_box0")[0].removeAttribute("style");
//메인메뉴 삭제
for (let menuNum = 1; menuNum < 7; menuNum++) {
    document.getElementsByClassName("jwxe_ul")[1].remove();
}
//메인 메뉴 이미지 제거
//대학소개
let univIntro = document.getElementById('jwxe_1298022569424');
univIntro.innerHTML = "대학소개";
univIntro.removeAttribute("class");
univIntro.style.width = "";
univIntro.style.top = "";
univIntro.style.height = "";
//입학안내
let univIpsi = document.getElementById('jwxe_1298022569947');
univIpsi.innerHTML = "입학안내";
univIpsi.removeAttribute("class");
univIpsi.style.width = "";
univIpsi.style.top = "";
univIpsi.style.height = "";
//대학 혹은 대학원
let univDeparts = document.getElementById('jwxe_1298022569714');
univDeparts.innerHTML = "대학/대학원";
univDeparts.removeAttribute("class");
univDeparts.style.width = "";
univDeparts.style.top = ""
univDeparts.style.height = "";
//대학 기관
let univLab = document.getElementById('jwxe_1298022569758');
univLab.innerHTML = "대학기관";
univLab.removeAttribute("class");
univLab.style.width = "";
univLab.style.top = "";
univLab.style.height = "";
//대학 생활
let univLife = document.getElementById('jwxe_1298022570062');
univLife.innerHTML = "대학생활";
univLife.removeAttribute("class");
univLife.style.width = "";
univLife.style.top = ""
univLife.style.height = "";
//순천향 세상
let univWorld = document.getElementById('jwxe_1298022569694');
univWorld.innerHTML = "순천향세상";
univWorld.removeAttribute("class");
univWorld.style.width = "";
univWorld.style.top = "";
univWorld.style.height = "";
//기타 메뉴
let univAllMenu = document.getElementById('jwxe_1305609065745');
univAllMenu.innerHTML = "메뉴 전체보기"
univAllMenu.style.fontSize = "11px";
univAllMenu.style.top = "0px";
univAllMenu.style.left = "";
univAllMenu.style.right = "calc(18vw + 105px)";
univAllMenu.style.width = "100px";
univAllMenu.style.color = "#00687F";
let univAllDepart = document.getElementById('jwxe_1305609293490');
univAllDepart.innerHTML = "학과 / 전공보기"
univAllDepart.style.fontSize = "11px";
univAllDepart.style.top = "15px";
univAllDepart.style.left = "";
univAllDepart.style.right = "calc(18vw + 105px)";
univAllDepart.style.width = "100px";
univAllDepart.style.color = "#00687F";
let univNetwork = document.getElementById('jwxe_1305609562261');
univNetwork.innerHTML = "바로가기"
univNetwork.style.fontSize = "11px";
univNetwork.style.top = "30px";
univNetwork.style.left = "";
univNetwork.style.right = "calc(18vw + 105px)"
univNetwork.style.width = "100px";
univNetwork.style.color = "#00687F";

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
    // 순천향인 버튼 제거, 속성 지정, 버튼 디자인
    let schPeopleBtn = document.getElementById("jwxe_1297997945786");
    schPeopleBtn.innerHTML = "순천향인";
    schPeopleBtn.style.width = "70px";
    schPeopleBtn.setAttribute('class','pure-button');
    //교직원 버튼 제거, 속성 지정, 버튼 디자인
    let schProfessorBtn = document.getElementById("jwxe_1297997969913");
    schProfessorBtn.innerHTML = "교직원";
    schProfessorBtn.style.width = "70px";
    schProfessorBtn.style.left = "70px";
    schProfessorBtn.setAttribute('class','pure-button');
    //방문인 버튼 제거, 속성 지정, 버튼 디자인
    let schVisitorBtn = document.getElementById("jwxe_1298002463910");
    schVisitorBtn.innerHTML = "방문인";
    schVisitorBtn.style.width = "70px";
    schVisitorBtn.style.left = "144px";
    schVisitorBtn.setAttribute('class', 'pure-button');
    //각종 공지 배경 제거
    let notices = document.getElementsByClassName("jwxe_div");
    notices[0].style.background = "";
    notices[1].style.background = "";
    notices[3].style.background = "";
    let noticeArticles = document.querySelectorAll("a[style*='z-index: 101;']");
    for (let i = 0; i < noticeArticles.length; i++) {
        noticeArticles[i].style.color = "black";
    }
    //공지 제목들 스타일 조정
    let schNotice = document.getElementById("jwxe_1298005370608");
    schNotice.innerHTML = "공지사항";
    schNotice.setAttribute('class', 'pure-button');
    schNotice.setAttribute('style', '');
    schNotice.parentNode.parentNode.parentNode.style.left = "250px";
    schNotice.parentNode.parentNode.parentNode.style.width = "400px";
    schNotice.parentNode.parentNode.parentNode.style.top = "10px";
    let schScheduleNotice = document.getElementById("jwxe_1298005426312");
    schScheduleNotice.innerHTML = "학사공지";
    schScheduleNotice.setAttribute('class', 'pure-button');
    schScheduleNotice.setAttribute('style', '');
    let schJobNotice = document.getElementById("jwxe_1298005460497");
    schJobNotice.innerHTML = "취업정보";
    schJobNotice.setAttribute('class', 'pure-button');
    schJobNotice.setAttribute('style', '');
    let schSupportNotice = document.getElementById("jwxe_1298005501500");
    schSupportNotice.innerHTML = "장학공지";
    schSupportNotice.setAttribute('class', 'pure-button');
    schSupportNotice.setAttribute('style', '');
    let schCorpNotice = document.getElementById("jwxe_1298005544582");
    schCorpNotice.innerHTML = "입찰공고";
    schCorpNotice.setAttribute('class', 'pure-button');
    schCorpNotice.setAttribute('style', '');
    let schEventNotice = document.getElementById("jwxe_1298005544584");
    schEventNotice.innerHTML = "행사안내";
    schEventNotice.setAttribute('class', 'pure-button');
    schEventNotice.setAttribute('style', '');
    schEventNotice.parentNode.parentNode.parentNode.style.left = "630px";
    schEventNotice.parentNode.parentNode.parentNode.style.top = "10px";
    schEventNotice.parentNode.parentNode.style.top = "5px";
    schEventNotice.parentNode.parentNode.style.left = "";
    schEventNotice.parentNode.childNodes[3].style.left = "";
    let schNewsNotice = document.getElementById("jwxe_1298005544588");
    schNewsNotice.innerHTML = "언론 속 순천향"
    schNewsNotice.setAttribute('class', 'pure-button');
    schNewsNotice.setAttribute('style', '');

    let schNoticeMore = document.getElementById("jwxe_1298007864143");
    schNoticeMore.style.left = "310px";
    schNoticeMore.style.top = "-45px";
    schNoticeMore.style.fontWeight = "bold"
    schNoticeMore.style.fontSize = "20pt";
    schNoticeMore.innerHTML = "+"
    schNoticeMore.style.color = "#00687F"
    schNoticeMore.style.textDecoration = "none";
    let schScheduleNoticeMore = document.getElementById("jwxe_1298007956826");
    schScheduleNoticeMore.style.left = "310px";
    schScheduleNoticeMore.style.top = "-45px";
    schScheduleNoticeMore.style.fontWeight = "bold"
    schScheduleNoticeMore.style.fontSize = "20pt";
    schScheduleNoticeMore.innerHTML = "+"
    schScheduleNoticeMore.style.color = "#00687F"
    schScheduleNoticeMore.style.textDecoration = "none";
    let schJobNoticeMore = document.getElementById("jwxe_1298007999987");
    schJobNoticeMore.style.left = "310px";
    schJobNoticeMore.style.top = "-45px";
    schJobNoticeMore.style.fontWeight = "bold"
    schJobNoticeMore.style.fontSize = "20pt";
    schJobNoticeMore.innerHTML = "+"
    schJobNoticeMore.style.color = "#00687F"
    schJobNoticeMore.style.textDecoration = "none";
    let schSupportNoticeMore = document.getElementById("jwxe_1298008038440");
    schSupportNoticeMore.style.left = "310px";
    schSupportNoticeMore.style.top = "-45px";
    schSupportNoticeMore.style.fontWeight = "bold"
    schSupportNoticeMore.style.fontSize = "20pt";
    schSupportNoticeMore.innerHTML = "+"
    schSupportNoticeMore.style.color = "#00687F"
    schSupportNoticeMore.style.textDecoration = "none";
    let schCorpNoticeMore = document.getElementById("jwxe_1298008077443");
    schCorpNoticeMore.style.left = "310px";
    schCorpNoticeMore.style.top = "-45px";
    schCorpNoticeMore.style.fontWeight = "bold"
    schCorpNoticeMore.style.fontSize = "20pt";
    schCorpNoticeMore.innerHTML = "+"
    schCorpNoticeMore.style.color = "#00687F"
    schCorpNoticeMore.style.textDecoration = "none";
    //공지 목록들 스타일 조정
    let noticeList = document.getElementsByClassName('jwxe_ul');
    for(let i = 8; i < 15; i++) {
        noticeList[i].style.top = "35px";
    }
    //공지 내용들 스타일 조정
    let noticeItems = document.getElementsByClassName('main_board');
    for(let i = 0; i < 25; i++) {
        noticeItems[i].parentNode.style.width = "350px";
        noticeItems[i].childNodes[0].childNodes[0].style.fontSize = "13px";
    }
    for(let i = 25; i < 35; i++) {
        noticeItems[i].parentNode.style.width = "400px";
        noticeItems[i].parentNode.style.left = "";
        noticeItems[i].childNodes[1].childNodes[0].style.fontSize = "13px";
        noticeItems[i].childNodes[2].style.left = "300px";
        noticeItems[i].childNodes[2].style.fontSize = "13px";
    }

    //순천향 큰배너 디자인 변경
    let bigBannerPlay = document.querySelector("a[onclick*='javascript:popupOn();']");
    bigBannerPlay.innerHTML = "▶";
    bigBannerPlay.style.color = "#00687F";
    bigBannerPlay.parentNode.style.top = "-5px";
    bigBannerPlay.parentNode.style.left = "100px";
    bigBannerPlay.style.fontSize = "12pt";
    bigBannerPlay.style.textDecoration = "none";
    let bigBannerStop = document.querySelector("a[onclick*='javascript:popupOff();']");
    bigBannerStop.innerHTML = "⏸";
    bigBannerStop.style.color = "#00687F";
    bigBannerStop.style.fontSize = "12pt";
    bigBannerStop.style.textDecoration = "none";
    document.getElementById('t1').style.background = "";
    document.getElementById('t2').style.background = "";
    document.getElementById('t3').style.background = "";
    document.getElementById('t4').style.background = "";
    document.getElementById('t5').style.background = "";
    let bigBannerFirst = document.getElementById('jwxe_1300156697356');
    bigBannerFirst.innerHTML = "1";
    bigBannerFirst.style.backgroundColor = "#00687F";
    bigBannerFirst.style.color = "white";
    bigBannerFirst.style.left = "140px";
    bigBannerFirst.style.width = "15px";
    bigBannerFirst.style.height = "15px";
    bigBannerFirst.style.lineHeight = "15px";
    bigBannerFirst.style.borderRadius = "5px";
    bigBannerFirst.style.top = "3px";
    bigBannerFirst.style.textAlign = "center";
    let bigBannerSecond = document.getElementById('jwxe_1298009735836');
    bigBannerSecond.innerHTML = "2";
    bigBannerSecond.style.backgroundColor = "#00687F";
    bigBannerSecond.style.color = "white";
    bigBannerSecond.style.left = "156px";
    bigBannerSecond.style.width = "15px";
    bigBannerSecond.style.height = "15px";
    bigBannerSecond.style.lineHeight = "15px";
    bigBannerSecond.style.borderRadius = "5px";
    bigBannerSecond.style.top = "3px";
    bigBannerSecond.style.textAlign = "center";
    let bigBannerThree = document.getElementById('jwxe_1298009655708');
    bigBannerThree.innerHTML = "3";
    bigBannerThree.style.backgroundColor = "#00687F";
    bigBannerThree.style.color = "white";
    bigBannerThree.style.left = "172px";
    bigBannerThree.style.width = "15px";
    bigBannerThree.style.height = "15px";
    bigBannerThree.style.lineHeight = "15px";
    bigBannerThree.style.borderRadius = "5px";
    bigBannerThree.style.top = "3px";
    bigBannerThree.style.textAlign = "center";
    let bigBannerFour = document.getElementById('jwxe_1298009694996');
    bigBannerFour.innerHTML = "4";
    bigBannerFour.style.backgroundColor = "#00687F";
    bigBannerFour.style.color = "white";
    bigBannerFour.style.left = "188px";
    bigBannerFour.style.width = "15px";
    bigBannerFour.style.height = "15px";
    bigBannerFour.style.lineHeight = "15px";
    bigBannerFour.style.borderRadius = "5px";
    bigBannerFour.style.top = "3px";
    bigBannerFour.style.textAlign = "center";
    let bigBannerFive = document.getElementById('jwxe_1298009694999');
    bigBannerFive.innerHTML = "5";
    bigBannerFive.style.backgroundColor = "#00687F";
    bigBannerFive.style.color = "white";
    bigBannerFive.style.left = "204px";
    bigBannerFive.style.width = "15px";
    bigBannerFive.style.height = "15px";
    bigBannerFive.style.lineHeight = "15px";
    bigBannerFive.style.borderRadius = "5px";
    bigBannerFive.style.top = "3px";
    bigBannerFive.style.textAlign = "center";

    //순천향 작은 배너 디자인 변경
    document.getElementById('banner_left').remove();
    document.getElementById('jwxe_1298597242421').remove();
    document.getElementById('jwxe_1298539566766').remove();
    document.getElementById('banner_stop').remove();
    document.getElementsByClassName('jwxe_banner2')[0].parentNode.style.left = "270px";
    document.getElementsByClassName('jwxe_banner2')[0].parentNode.style.top = "185px";
    document.getElementsByClassName('jwxe_banner2')[0].setAttribute('class', '');
    let schFund = document.getElementById('jwxe_1298010224899');
    schFund.childNodes[0].style.borderRadius = "5px";
    schFund.parentNode.parentNode.parentNode.style.left = "260px";
    let schLibrary = document.getElementById('jwxe_1298010274144');
    schLibrary.childNodes[0].style.borderRadius = "5px";
    let schMinwon = document.getElementById('jwxe_1298010125158');
    schMinwon.childNodes[0].style.borderRadius = "5px";
    let schWifi = document.getElementById('jwxe_1317188506698');
    schWifi.childNodes[0].style.borderRadius = "5px";
    let schCopy = document.getElementById('jwxe_1354238196226');
    schCopy.childNodes[0].style.borderRadius = "5px";
    //미들 배너 디자인 변경
    let schMiddleBannerOne = document.getElementById('jwxe_1298003064729');
    schMiddleBannerOne.parentNode.parentNode.style.left = "630px";
    schMiddleBannerOne.childNodes[0].style.borderRadius = "5px";
    let schMiddleBannerSecond = document.getElementById('jwxe_1298003107718');
    schMiddleBannerSecond.style.left = "109px";
    schMiddleBannerSecond.childNodes[0].style.borderRadius = "5px";
    let schMiddleBannerThree = document.getElementById('jwxe_1298003133531');
    schMiddleBannerThree.style.left = "215px";
    schMiddleBannerThree.childNodes[0].style.borderRadius = "5px";

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
    //QR코드 위치 조정
    let footerQR = document.getElementsByClassName("jwxe_include_item");
    footerQR[0].setAttribute('style', 'right: 1.5%; bottom: 20px');
} catch (error) {
    
}