document.addEventListener("DOMContentLoaded", () => {
    const clipboardList = document.getElementById("clipboardList");

    function updateClipboardDisplay() {
        clipboardList.innerHTML = "";
        const clipboardData = JSON.parse(localStorage.getItem("clipboard")) || [];
        clipboardData.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.onclick = () => navigator.clipboard.writeText(item);
            clipboardList.appendChild(li);
        });
    }

    document.addEventListener("copy", async () => {
        const text = await navigator.clipboard.readText();
        let clipboardData = JSON.parse(localStorage.getItem("clipboard")) || [];
        clipboardData.unshift(text);
        localStorage.setItem("clipboard", JSON.stringify(clipboardData));
        updateClipboardDisplay();
    });

    updateClipboardDisplay();
});

function clearClipboard() {
    localStorage.removeItem("clipboard");
    location.reload();
}
