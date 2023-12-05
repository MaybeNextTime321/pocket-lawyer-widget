function toggleChat() {
  var chatContainer = document.getElementById("chat-container");
  chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}