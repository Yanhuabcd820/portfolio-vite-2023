<script setup>
const target = ref();
const sticking = ref(false);
let options = {
  rootMargin: "100px",
  threshold: 0,
};
const observer = new IntersectionObserver(([entry]) => {
  sticking.value = !entry.isIntersecting;
}, options);

onMounted(() => {
  observer.observe(target.value);
});
const isOpen = ref(false);
const menuSwitch = () => {
  isOpen.value = !isOpen.value;
  console.log("isOpen.value", isOpen.value);
  // 手機版本下, 點選選單按鈕同步將nav關閉
  // var navLiInner = document.getElementsByClassName("nav-li-inner");

  // for (var z = 0; z < navLiInner.length; z++) {
  //   navLiInner[z].addEventListener("click", MenuCloseMobile);

  //   function MenuCloseMobile() {
  //     navInner.classList.remove("open");
  //     menu.classList.remove("menu-close");
  //     body.classList.remove("menuStock");
  //     menuBack.classList.remove("open");
  //   }
  // }
};
</script>

<template>
  <div id="nav" ref="target"></div>
  <div class="menuBack" :class="{ open: isOpen }"></div>
  <nav id="nav-wrap" class="nav sticky-menu" :class="{ sticking }">
    <div class="nav-inner" :class="{ open: isOpen }">
      <div id="menu" :class="{ menuClose: isOpen }" @click="menuSwitch">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <div class="menu-bg"></div>
      </div>
      <div class="logo-main">
        <router-link to="/">
          <img src="@/assets/images/logoB.svg" alt="" />
        </router-link>
      </div>
      <div class="navigation">
        <ul>
          <li class="nav-li">
            <router-link to="/" class="nav-li-inner">About</router-link>
          </li>
          /
          <li class="nav-li">
            <router-link to="/works" class="nav-li-inner">Works</router-link>
          </li>
          /
          <li class="nav-li">
            <a href="resume.html" class="nav-li-inner" target="_blank"
              >Resume</a
            >
          </li>
          /
          <li class="nav-li">
            <router-link to="/contact" class="nav-li-inner"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />

  <footer class="footer">
    <div class="footer-inner">
      <h1>與我聯繫</h1>
      <div class="footer-content-wrap">
        <div class="footer-content-wrap1">
          <div class="footer-content">
            <font-awesome-icon
              icon="phone-alt"
              class="font-awesome-icon"
            />0952423200
          </div>

          <div class="footer-content">
            <font-awesome-icon icon="fa-envelope" class="font-awesome-icon" /><a
              href="mailto:margaret0820@yahoo.com.tw"
              target="_blank"
              >margaret0820@yahoo.com.tw
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="footer-content">
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="font-awesome-icon"
            />
            <a href="https://www.linkedin.com/in/yanhua-huang" target="_blank"
              >www.linkedin.com/in/yanhua-huang
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
          <div class="footer-content">
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="font-awesome-icon"
            />
            <a
              href="https://instagram.com/haha.huang?igshid=YmMyMTA2M2Y="
              target="_blank"
              >yanhua1987
              <font-awesome-icon icon="fa-external-link-alt" class="link-out" />
            </a>
          </div>
        </div>
        <div class="footer-content-wrap2">
          Copyright © 2023 All rights reserved by Yanhua Huang
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.body.menuStock {
  overflow: hidden;
}
.menuBack.open {
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 55555;
}
nav,
.sticky-menu {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
}

.sticky,
.sticky-menu.sticking {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}
.sticky-menu.sticking .nav-li {
  padding: 15px 0px;
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.nav-inner > .logo-main {
  margin: 35px 0px 35px 5%;
  width: 160px;
}
@media screen and (min-width: 540px) {
  .nav-inner > .logo-main {
    margin: 12px 0px 12px 5%;
  }
}

.navigation {
  font-weight: 300;
  margin-right: 5%;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  width: 100%;
  display: none;
}

@media screen and (min-width: 540px) {
  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    width: auto;
    background-color: initial;
    top: 75.11px;
    margin-top: 0px;
  }
}
.open > .navigation {
  display: flex;
}
.nav-inner > .navigation > ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}

@media screen and (min-width: 540px) {
  .nav-inner > .navigation > ul {
    flex-direction: row;
    margin-top: 0px;
  }
}
.nav-inner > .navigation > ul > li {
  margin: 0px;
  font-size: 16px;
  color: #707070;
  transition: 0.5s;
  padding: 18px 0px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  position: relative;
}

@media screen and (min-width: 540px) {
  .nav-inner > .navigation > ul > li {
    margin: 0px 13px;
    padding: 30px 0px;
    text-align: center;
    width: auto;
  }
}
@media screen and (min-width: 1280px) {
  .nav-inner > .navigation > ul > li {
    margin: 0px 25px;
  }
}
.nav-inner > .navigation > ul > li > a {
  transition: 1s;
}
.nav-inner > .navigation > ul > li:hover > a,
.nav-inner > .navigation > ul > li.active > a {
  font-weight: 500;
}

#menu {
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-right: 10px;
  position: absolute;
  top: 7px;
  right: 2px;
  z-index: 555;
  display: block;
  background-color: var(--main-color);
}
@media screen and (min-width: 540px) {
  #menu {
    z-index: -555;
    display: none;
  }
}
#menu:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: -2000;
  width: 45px;
  height: 45px;
  border: 2px solid #fff;
}
#menu > span.bar {
  background-color: #fff;
  width: 27px;
  height: 3px;
  position: absolute;
  top: 28.5px;
  left: 16px;
  border-radius: 50px;
  transition: 0.5s;
}
#menu > span.bar1 {
  top: 19px;
}

#menu > span.bar3 {
  top: 39px;
}

#menu:hover > span.bar1 {
  top: 22px;
}

#menu:hover > span.bar3 {
  top: 36px;
}

#menu.menuClose > span.bar2 {
  display: none;
}

#menu.menuClose > span.bar1 {
  transform: rotate(45deg);
  top: 28px;
}

#menu.menuClose > span.bar3 {
  transform: rotate(-45deg);
  top: 28px;
}

.proclamation {
  width: 100%;
  height: 100%;
  background-color: #deeeee;
  position: fixed;
  z-index: 55555555555555;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.proclamation.nonBg {
  background-color: rgba(0, 0, 0, 0.6);
}
.proclamation.close {
  display: none;
}
.proclamation::before {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.proclamation-wrap {
  width: 98%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 30px;
}

.proclamation-wrap > .proclamation-content {
  max-width: 300px;
  width: 90%;
  min-height: 100px;
  margin: 0px auto;
  background-color: #fff;
  border: 6px solid #198686;
  box-sizing: border-box;
  position: relative;
  padding: 30px;
}

@media screen and (min-width: 640px) {
  .proclamation-wrap > .proclamation-content {
    max-width: initial;
    width: 500px;
    padding: 30px;
  }
}

.proclamation-wrap > .proclamation-content > p {
  font-size: 16px;
  line-height: 26px;
  color: #000;
  overflow-y: auto;
  word-wrap: break-word;
  word-break: break-all;
}

.proclamation-wrap > .proclamation-content > p > .info-content {
  display: flex;
  flex-wrap: wrap;
}
.info-content > span:nth-child(1) {
  width: 100%;
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
.info-content > span:nth-child(2) {
  width: 64px;
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
.info-content > span:nth-child(3) {
  width: calc(100% - 69px);
  margin-top: 7px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: top;
}

.proclamation-content.cancelWin {
  width: 290px;
  line-height: 32px;
}
.proclamation-content.cancelWin > p {
  /* display: flex; */
  /* 	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column; */
  word-wrap: break-word;
  word-break: break-all;
}
.proclamation-content.cancelWin > p > span {
  text-align: center;
  margin-bottom: 20px;
  /* outline: 1px solid #F00; */
}
.proclamation-close {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0px;
  right: -6px;
  padding-right: 10px;
  background-color: #198686;
  z-index: 99999999999999;
  cursor: pointer;
}
.proclamation-close {
  width: 40px;
  height: 40px;
  padding-right: 0px;
  top: -41px;
}

.proclamation-close:before {
  content: "";
  width: 28px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 14px;
  left: 0;
  transform: rotate(45deg);
}
.proclamation-close:before {
  top: 20px;
  left: 5px;
}

.proclamation-close:after {
  content: "";
  width: 28px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 14px;
  left: 0;
  transform: rotate(-45deg);
}
.proclamation-close:after {
  top: 20px;
  left: 5px;
}
.footer {
  background-color: var(--main-color);
  padding: 70px 0px;
}
.footer-inner {
  width: 95%;
  max-width: 1110px;
  margin: 0px auto;
}
.footer-inner > h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 30px;
}
.footer-content-wrap {
  display: flex;
  flex-wrap: wrap;
}
.footer-content-wrap1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.footer-content-wrap2 {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .footer-content-wrap2 {
    margin-top: 0;
  }
}
.footer-content {
  line-height: 30px;
  display: flex;
  align-items: center;
  flex-grow: 0;
}
.footer-content > .font-awesome-icon {
  margin-right: 15px;
  font-size: 20px;
}
.footer-content .link-out {
  font-size: 15px;
  margin-left: 6px;
}

.footer-inner-contact {
  width: 95%;
  max-width: 1110px;
  margin: 0px auto;
}
.footer-contact-content-wrap {
  font-size: 12px;
  display: flex;
  justify-content: center;
  /* align-self: flex-end; */
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .footer-contact-content-wrap {
    margin-top: 0;
  }
}
</style>
