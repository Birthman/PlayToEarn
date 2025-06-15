let currentChallenge = challenges[0];

window.onload = () => {
  document.getElementById("challenge-description").innerText = currentChallenge.description;
};

function runCode() {
  const code = document.getElementById("code-editor").value;
  const outputEl = document.getElementById("output");
  try {
    const result = eval(code);
    outputEl.textContent = result ?? "✅ Code ran successfully";
  } catch (e) {
    outputEl.textContent = "❌ Error: " + e.message;
  }
}

function submitChallenge() {
  const code = document.getElementById("code-editor").value;
  if (currentChallenge.test(code)) {
    document.getElementById("reward-section").style.display = "block";
    alert("🎉 Well done! Now claim your reward.");
  } else {
    alert("❌ Try again. Make sure your code prints exactly: Hello, World!");
  }
}

