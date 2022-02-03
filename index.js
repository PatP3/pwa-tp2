if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
};

function sendMessageToServicWorker() {
    navigator.serviceWorker.controller.postMessage("Hello World");
}