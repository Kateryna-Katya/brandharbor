const typingElements = document.querySelectorAll(".typing-text");

const typeText = (element, delay = 45) => {
  return new Promise((resolve) => {
    const text = element.dataset.text || "";
    let index = 0;

    const intervalId = setInterval(() => {
      element.textContent += text[index];
      index += 1;

      if (index >= text.length) {
        clearInterval(intervalId);
        element.classList.add("is-finished");
        resolve();
      }
    }, delay);
  });
};

const startTerminalTyping = async () => {
  for (const element of typingElements) {
    await typeText(element);
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
};

startTerminalTyping();