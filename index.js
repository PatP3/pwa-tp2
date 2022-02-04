if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        // Enregistrement fonctionne
        console.log('Enregistrement du Service Worker');
    }).catch(function(error) {
        // Enregistrement échoue
        console.log('Échec.');
    });
};

function sendMessageToServiceWorker() {
    navigator.serviceWorker.controller.postMessage("Hello World");
}