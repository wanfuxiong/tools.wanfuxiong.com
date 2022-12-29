import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/index.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/styles/global.scss";
import "nprogress/nprogress.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

// 统一注册Element Icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 禁用双指缩放
document.documentElement.addEventListener(
    "touchstart",
    function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    },
    { passive: false }
);
