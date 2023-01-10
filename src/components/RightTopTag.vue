<template>
    <div
        style="
            position: absolute;
            width: 100px;
            height: 100px;
            text-align: center;
            top: 0;
            right: 0;
            color: white;
            overflow: hidden;
            z-index: 999;
            filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.4));
        "
    >
        <div style="width: 100%; height: 100%; position: relative">
            <p
                style="
                    position: absolute;
                    width: 300px;
                    height: 18px;
                    line-height: 18px;
                    transform: rotate(45deg);
                    top: 18px;
                    right: -123px;
                    font-size: 12px;
                    background-color: var(--theme-color-primary);
                "
            >
                <slot />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
