


  
  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card"); // card parent
        const textEl = card.querySelector(".copy-text p"); // p ট্যাগ থেকে text
        const number = textEl.innerText.trim();

        navigator.clipboard.writeText(number)
            .catch(err => console.log("Failed to copy", err));
    });
});







