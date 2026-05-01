// Configuration: update this list when emoji files change.
const MOVE_THRESHOLD_PX = 20;
const EMOJI_FILES = Array.from({ length: 10 }, (_, index) => `image ${index + 16}.png`);
const EMOJI_BASE_PATH = "./emoji/";
const FALLBACK_EMOJIS = ["🍷", "🍇", "⛰️", "🍖", "🎶", "🥖"];

const emojiImage = document.getElementById("emoji-image");
const emojiSlot = document.querySelector(".emoji-slot");
const fallback = document.getElementById("emoji-fallback");

let currentIndex = 0;
let fallbackIndex = 0;
let isSwitching = false;
let lastPointerX = null;
let lastPointerY = null;

function buildEmojiSrc(fileName) {
  return `${EMOJI_BASE_PATH}${encodeURIComponent(fileName)}`;
}

function setFallbackVisible(visible) {
  if (!emojiSlot || !emojiImage || !fallback) {
    return;
  }

  emojiSlot.classList.toggle("is-fallback", visible);
  fallback.setAttribute("aria-hidden", visible ? "false" : "true");
}

function rotateFallbackEmoji() {
  if (!fallback || FALLBACK_EMOJIS.length === 0) {
    return;
  }

  fallback.textContent = FALLBACK_EMOJIS[fallbackIndex];
  fallbackIndex = (fallbackIndex + 1) % FALLBACK_EMOJIS.length;
}

function loadEmojiSource(fileName) {
  return new Promise((resolve, reject) => {
    const tester = new Image();
    tester.onload = () => resolve(buildEmojiSrc(fileName));
    tester.onerror = reject;
    tester.src = buildEmojiSrc(fileName);
  });
}

async function showNextAvailableEmoji() {
  if (isSwitching) {
    return;
  }

  if (!emojiImage || EMOJI_FILES.length === 0) {
    setFallbackVisible(true);
    rotateFallbackEmoji();
    return;
  }

  isSwitching = true;
  let attempts = 0;
  const startIndex = currentIndex;
  let loadedSrc = "";
  let loadedFile = "";
  let loadedIndex = startIndex;

  while (attempts < EMOJI_FILES.length) {
    const index = (startIndex + attempts) % EMOJI_FILES.length;
    const fileName = EMOJI_FILES[index];
    attempts += 1;

    try {
      loadedSrc = await loadEmojiSource(fileName);
      loadedFile = fileName;
      loadedIndex = index;
      break;
    } catch {
      // Try the next file in sequence.
    }
  }

  if (!loadedSrc) {
    setFallbackVisible(true);
    rotateFallbackEmoji();
    isSwitching = false;
    return;
  }

  emojiImage.src = loadedSrc;
  emojiImage.alt = `Emoji image ${loadedFile}`;
  setFallbackVisible(false);
  currentIndex = (loadedIndex + 1) % EMOJI_FILES.length;
  isSwitching = false;
}

function handlePointerMove(event) {
  if (lastPointerX === null || lastPointerY === null) {
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    return;
  }

  const movedX = Math.abs(event.clientX - lastPointerX);
  const movedY = Math.abs(event.clientY - lastPointerY);
  if (movedX + movedY < MOVE_THRESHOLD_PX) {
    return;
  }

  lastPointerX = event.clientX;
  lastPointerY = event.clientY;
  showNextAvailableEmoji();
}

showNextAvailableEmoji();
window.addEventListener("pointermove", handlePointerMove, { passive: true });
