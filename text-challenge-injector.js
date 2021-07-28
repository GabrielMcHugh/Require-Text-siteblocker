var iFrame = document.createElement("iframe");
iFrame.src  = chrome.extension.getURL("challenge-window.html");

document.body.insertBefore (iFrame, document.body.firstChild);