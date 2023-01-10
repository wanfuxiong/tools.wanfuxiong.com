<template>
    <div id="index" class="flex-children-center">
        <div
            id="box-wrapper"
            class="flex-children-center"
            style="flex-wrap: wrap"
        >
            <router-link to="/ocr"
                >OCR<RightTopTag>仅适用电脑</RightTopTag></router-link
            >
            <router-link to="/screen-recording"
                >录屏<RightTopTag>仅适用电脑</RightTopTag></router-link
            >
            <router-link to="/special-fonts">特殊字体</router-link>
        </div>
        <a
            href="https://www.wanfuxiong.com"
            target="_blank"
            style="position: fixed; bottom: 0; margin: 20px"
            >WANFUXIONG.COM</a
        >
    </div>
</template>

<script setup lang="ts">
import RightTopTag from "@/components/RightTopTag.vue";
</script>

<style scoped lang="scss">
#index {
    height: 100vh;
    height: 100svh;
    flex-direction: column;

    #box-wrapper {
        a {
            position: relative;
            display: inline-block;
            width: 120px;
            height: 120px;
            border-radius: 20px;
            background: var(--el-fill-color);
            border: none;
            line-height: 120px;
            text-align: center;
            color: #001f3f;
            margin: 10px;
            transition: var(--el-transition-all);

            &:hover {
                background: var(--el-fill-color-darker);
            }
        }
    }
}
</style>
