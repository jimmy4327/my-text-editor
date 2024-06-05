document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const wordCount = document.getElementById('wordCount');
    const downloadBtn = document.getElementById('downloadBtn');

    // Update word count
    editor.addEventListener('input', () => {
        const text = editor.value.trim();
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `Words: ${words.length}`;
    });

    // Download text as .txt file
    downloadBtn.addEventListener('click', () => {
        const text = editor.value;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'textfile.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
});
