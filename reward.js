function sendReward() {
  const address = document.getElementById("wallet-address").value.trim();
  if (!address.startsWith("r") || address.length < 25) {
    alert("Please enter a valid XRPL wallet address.");
    return;
  }

  // Placeholder for real token distribution
  alert(`🎁 Tokens will be sent to: ${address}\n(You can integrate XRPL SDK here)`);

  // Example (replace this with your real backend call or SDK logic)
  console.log("Send token to:", address);
}

