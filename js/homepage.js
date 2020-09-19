/* 공통 */
//Bootstrap 들여오기
var cssOne = '<link rel="stylesheet" type="text/css" href="';
var cssResourceOne = browser.extension.getURL("../css/bootstrap.min.css");
var cssTwo = '">'
var myCSS = cssOne.concat(cssResourceOne, cssTwo);
//document.head.innerHTML = myCSS;

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
document.getElementById("Main_Contents").style.backgroundColor = "white";
document.getElementById("Top_Main").style.backgroundColor = "white";
//상단 컨텐츠 너비 제한 제거 & 나머지 녹색 제거
document.querySelector("div[class*='jwxe_root Top_Menu']").removeAttribute("style");
//로그인 버튼 텍스트로
document.querySelector("a[href*='/_custom/sch/oAuth/login.jsp']").setAttribute('id', 'loginBtn');
let headerLogin = document.getElementById("loginBtn");
headerLogin.style.width = "";
headerLogin.innerHTML = "로그인";
headerLogin.parentNode.setAttribute('style', 'position: relative; float:left;')
headerLogin.parentNode.parentNode.style.width = "";


/* 메인 컨텐츠*/
//하단 녹색 제거
document.getElementById("jwxe_main_content").style.backgroundColor = "white";
document.body.style.backgroundColor = "white";
// 순천향인 버튼 제거
document.getElementById("jwxe_1297997945786").innerHTML = "순천향인"
//교직원 버튼 제거
document.getElementById("jwxe_1297997969913").innerHTML = "교직원"
//방문인 버튼 제거
document.getElementById("jwxe_1298002463910").innerHTML = "방문인"


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
document.querySelector("div[style*='left:140px; top:15px; height:20px; width:392px;']").setAttribute('id', 'footerCopyright'); //ID 생성
let copyright = document.getElementById("footerCopyright");
copyright.remove();
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