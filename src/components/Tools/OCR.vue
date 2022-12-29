<template>
    <div>
        <el-upload
            class="file-upload"
            ref="uploadRef"
            :http-request="handleUpload"
            :show-file-list="false"
            drag
            v-loading="loading"
            element-loading-text="正在识别……"
        >
            <img v-if="imageUrl" :src="imageUrl" />
            <template v-else>
                <div
                    style="min-height: 300px; flex-direction: column"
                    class="flex-children-center"
                >
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        Drop file here or <em>click to upload</em>
                    </div>
                </div>
            </template>
        </el-upload>
        <p class="copy-text" @click="copyText(result)">
            识别结果：{{ result }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadRequestOptions } from "element-plus";
import { copyText } from "@/utils/copy";
import { createWorker, PSM, OEM } from "tesseract.js";

const uploadRef = ref();

const loading = ref(false);

const imageUrl = ref("");
const result = ref("");

const worker = createWorker({
    logger: (m) => console.log(m),
});

const handleUpload = (options: UploadRequestOptions) => {
    loading.value = true;
    const reader = new FileReader();
    reader.readAsDataURL(options.file);
    reader.onload = function () {
        imageUrl.value = reader.result as string;
        recognize(options.file);
    };
};

const recognize = async (file: File) => {
    worker.then(async (worker) => {
        await worker.loadLanguage("eng+chi_sim");
        await worker.initialize("eng+chi_sim");
        const {
            data: { text },
        } = await worker.recognize(file);
        console.log(text);
        result.value = text;
        loading.value = false;
    });
};
</script>

<style scoped lang="scss">
@use "./index";

.file-upload {
    width: 100%;

    img {
        max-width: 100%;
    }

    :deep(.el-upload) {
        .el-upload-dragger {
            border-radius: var(--el-border-radius-base);
        }
    }
}
</style>
