<template>
    <div>
        <el-upload
            class="file-upload"
            ref="uploadRef"
            :http-request="handleUpload"
            :show-file-list="false"
            drag
        >
            <img v-if="imageUrl" :src="imageUrl" />
            <template v-else>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
            </template>
        </el-upload>
        <el-scrollbar max-height="200px">
            <p class="copy-text" @click="copyText(imageUrl)">
                密文：{{ imageUrl }}
            </p>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadRequestOptions } from "element-plus";
import { copyText } from "@/utils/copy";

const uploadRef = ref();

const imageUrl = ref("");

const handleUpload = (options: UploadRequestOptions) => {
    const reader = new FileReader();
    reader.readAsDataURL(options.file);
    reader.onload = function () {
        imageUrl.value = reader.result as string;
    };
};
</script>

<style scoped lang="scss">
@use "./index";

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
