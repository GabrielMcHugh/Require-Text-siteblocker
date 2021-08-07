var iFrame = document.createElement("iframe");
iFrame.style.height = "100vh";
iFrame.style.width = "100vw";
iFrame.style.position = "fixed";
iFrame.style.zIndex = "1";
iFrame.src  = chrome.extension.getURL("challenge-window.html");

document.body.insertBefore (iFrame, document.body.firstChild);
