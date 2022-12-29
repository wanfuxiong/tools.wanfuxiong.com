<template>
    <div>
        <el-button @click="handleStart" icon="VideoPlay" type="primary"
            >开始录屏</el-button
        >
        <el-button @click="handleStop" icon="VideoPause">结束录屏</el-button>
    </div>
</template>

<script setup lang="ts">
let mediaRecorder: MediaRecorder;

const handleStart = () => {
    navigator.mediaDevices
        .getDisplayMedia({
            video: true,
            audio: true,
        })
        .then((stream) => {
            mediaRecorder = new MediaRecorder(stream);
            const data: Blob[] = [];
            mediaRecorder.ondataavailable = (e) => {
                data.push(e.data);
            };
            mediaRecorder.onstop = () => {
                stream.getTracks().forEach((track) => {
                    track.stop();
                });
                const blob = new Blob(data, { type: "video/mp4" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = new Date().toLocaleString() + ".mp4";
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(link.href);
                link.remove();
            };

            mediaRecorder.start();
        });
};

const handleStop = () => {
    mediaRecorder.stop();
};
</script>

<style scoped lang="scss"></style>
