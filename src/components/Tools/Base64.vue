<template>
    <div>
        <el-input
            v-model="base64Input"
            placeholder="请输入base64明文"
            clearable
        />
        <p class="copy-text" @click="copyText(base64Output)">
            密文：{{ base64Output }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ElMessage } from "element-plus";
import { copyText } from "@/utils/copy";

const base64Input = ref("");

const base64Output = computed(() => {
    return window.btoa(base64Input.value);
});
</script>

<style scoped lang="scss">
@use "./index";
</style>
