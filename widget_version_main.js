function pocket_lawyer_widget(e,t){var i=window.location.hostname;if(-1!==document.cookie.indexOf("pocket_lawyer_validated="+i))createAndAppendWidget(e,t);else{var o=new XMLHttpRequest;o.open("GET","https://xn--80aaydcniaxfmm6ivb.xn--p1ai/version-test/api/1.1/wf/widget_validator?userid="+e+"&url="+encodeURIComponent(i),!0),o.onreadystatechange=function(){if(4==o.readyState){if(200==o.status){var a=JSON.parse(o.responseText);if("success"===a.status&&!0===a.response.validate){var n=new Date;n.setDate(n.getDate()+1),document.cookie="pocket_lawyer_validated="+i+"; expires="+n.toUTCString()+"; path=/",createAndAppendWidget(e,t)}else console.error("Access to the widget is denied: "+o.status)}else console.error("Access to the widget is denied: "+o.status)}},o.send()}}function createAndAppendWidget(e,t){let i=document.createElement("div");i.innerHTML='<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet"><style>body{font-family:Inter;font-size:22px}#chat-widget{z-index:1000;position:fixed;bottom:20px;right:20px;width:60px;height:60px;background-color:#007bff;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:small}#chat-container{z-index:1000;display:none;background-color: #fff;position:fixed;bottom:90px;right:20px;width:300px;height:400px;border:1px solid #ccc;border-radius:8px;overflow:hidden;padding:15px}#iframe-container{width:100%;height:100%}#close-button{position:absolute;top:10px;right:10px;cursor:pointer}</style><body><div id="chat-widget" onclick="toggleChat()"><span>Pocket Lawyer</span></div><div id="chat-container"><div id="close-button" onclick="toggleChat()">x</div><div id="iframe-container"><iframe style="height:100%" src="https://xn--80aaydcniaxfmm6ivb.xn--p1ai/version-test/iframe/'+encodeURIComponent(e)+"?topic="+encodeURIComponent(t)+'" frameborder="0"></iframe></div></div>',document.body.appendChild(i)}function toggleChat(){var e=document.getElementById("chat-container");e.style.display="none"===e.style.display||""===e.style.display?"block":"none"}
