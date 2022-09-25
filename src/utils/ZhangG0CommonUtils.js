
export
/**
 * 将文字内容复制到剪切板(兼容版)
 * @param text 需要复制到剪切板的文字
 * @return {boolean}{Boolean}-代表复制成功与失败
 */
function copyText(text){
    text.trim();
    if ("" !== text){
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard 向剪贴板写文本
            navigator.clipboard.writeText(text).then();
        } else {
            // 创建text area
            let textArea = document.createElement('textarea');
            textArea.value = text;
            // 使text area不在viewport，同时设置不可见
            textArea.style.position = 'absolute';
            textArea.style.opacity = '0';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            // 执行复制命令并移除文本框
            document.execCommand('copy');
            textArea.remove();
        }
        return true
    }
    console.log("复制失败，值为空")
    return false;
}
