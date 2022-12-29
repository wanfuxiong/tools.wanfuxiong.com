<template>
    <div>
        <el-input v-model="md5Input" placeholder="请输入md5明文" clearable />
        <p class="copy-text" @click="copyText(md5Output)">
            密文：{{ md5Output }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import md5 from "md5";
import { copyText } from "@/utils/copy";

const md5Input = ref("");

const md5Output = computed(() => {
    return md5(md5Input.value);
});
</script>

<style scoped lang="scss">
@use "./index";
</style>
