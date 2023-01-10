import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import nprogress from "nprogress";

const routes: Array<RouteRecordRaw> = [
    {
        name: "Index",
        path: "/",
        component: () => import("@/views/Index.vue"),
    },
    {
        name: "OCR",
        path: "/ocr",
        component: () => import("@/views/OCR.vue"),
    },
    {
        name: "ScreenRecording",
        path: "/screen-recording",
        component: () => import("@/views/ScreenRecording.vue"),
    },
    {
        name: "SpecialFonts",
        path: "/special-fonts",
        component: () => import("@/views/SpecialFonts.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    nprogress.inc();
    next();
});

router.afterEach(() => {
    nprogress.done();
});

export default router;
