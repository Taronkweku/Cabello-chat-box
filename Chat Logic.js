document.getElementById("chat-header").addEventListener("click", () => {
  const chatBody = document.getElementById("chat-body");
  chatBody.style.display = chatBody.style.display === "none" ? "block" : "none";
});

document.getElementById("send-button").addEventListener("click", async () => {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  // Display user message
  const messages = document.getElementById("messages");
  messages.innerHTML += `<div style="margin-bottom: 10px;">You: ${userInput}</div>`;

  // Call API
  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput }),
  });
  const data = await response.json();

  // Display bot response
  messages.innerHTML += `<div style="margin-bottom: 10px;">Bot: ${data.response}</div>`;
  document.getElementById("user-input").value = "";
});
