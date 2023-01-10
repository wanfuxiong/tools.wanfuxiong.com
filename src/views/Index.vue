<template>
    <div id="index" class="flex-children-center">
        <div class="flex-children-center" style="flex-wrap: wrap">
            <router-link to="/ocr">OCR</router-link>
            <router-link to="/screen-recording">录屏</router-link>
            <router-link to="/special-fonts">特殊字体</router-link>
        </div>
        <p>录屏功能仅在电脑生效</p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#index {
    height: 100vh;
    height: 100svh;
    flex-direction: column;

    a {
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 20px;
        background: #eee;
        border: none;
        line-height: 120px;
        text-align: center;
        color: #001f3f;
        margin: 10px;
        transition: var(--el-transition-all);

        &:hover {
            background: #8e8cd8;
        }
    }
}
</style>
