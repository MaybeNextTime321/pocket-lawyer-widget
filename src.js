function pocket_lawyer_widget(data) {
    console.log('https://pocket-lawyer-app.bubbleapps.io/version-test/iframe/' + encodeURIComponent(data) '')
    let newElement = document.createElement('div');
    newElement.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"><style>body{font-family:Inter;font-size:22px}#chat-widget{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background-color:#007bff;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:small}#chat-container{display:none;position:fixed;bottom:90px;right:20px;width:300px;height:400px;border:1px solid #ccc;border-radius:8px;overflow:hidden;padding:15px}#iframe-container{width:100%;height:100%}#close-button{position:absolute;top:10px;right:10px;cursor:pointer}</style><body><div id="chat-widget" onclick="toggleChat()"><span>Pocket Lawyer</span></div><div id="chat-container"><div id="close-button" onclick="toggleChat()">x</div><div id="iframe-container"><iframe style="height:100%" src="https://pocket-lawyer-app.bubbleapps.io/version-test/iframe/' + encodeURIComponent(data) + '" frameborder="0"></iframe></div></div>';
    document.body.appendChild(newElement);
}
function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}