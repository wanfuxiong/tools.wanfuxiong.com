<template>
    <div>
        <el-input v-model="inputValue" clearable />
        <div>
            <el-button @click="imageSrc = inputValue" style="margin-top: 12px"
                >确定</el-button
            >
        </div>
        <el-image
            v-if="imageSrc"
            :src="imageSrc"
            :preview-src-list="[imageSrc]"
            style="margin-top: 12px"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("");
const imageSrc = ref("");
</script>

<style scoped lang="scss">
.file-upload {
    width: 200px;

    img {
        width: 100%;
    }

    :deep(.el-upload-dragger) {
        border-radius: var(--el-border-radius-base);
    }
}
</style>
