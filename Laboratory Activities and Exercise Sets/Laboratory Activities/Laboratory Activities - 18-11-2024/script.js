document.getElementById("textInput").addEventListener("input", function () {
    const text = this.value.trim();
    
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+(?=\s|$)/).filter(Boolean);
    const sentenceCount = sentences.length;

    document.getElementById("wordcount").textContent = `Words: ${wordCount}`;
    document.getElementById("sentenceCount").textContent = `Sentences: ${sentenceCount}`;
});
