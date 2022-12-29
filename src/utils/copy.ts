import { ElMessage } from "element-plus";

export const copyText = (text: string) => {
    // navigator clipboard 需要https等安全上下文
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard 向剪贴板写文本
        navigator.clipboard.writeText(text).then(
            () => {
                ElMessage.success("复制成功");
            },
            () => {
                ElMessage.error("复制失败");
            }
        );
    } else {
        // const range = document.createRange();
        // range.selectNode(document.getElementsByTagName("code")[0]);
        // const selection = window.getSelection() as Selection;
        // if (selection.rangeCount > 0) selection.removeAllRanges();
        // selection.addRange(range);
        // document.execCommand("copy");
        ElMessage.error("复制失败");
    }
};
