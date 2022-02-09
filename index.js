if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-tp2/sw.js').then(function(reg) {
        // Enregistrement fonctionne
        console.log('Enregistrement du Service Worker');
    }).catch(function(error) {
        // Enregistrement échoue
        console.log('Échec.');
    });
};

// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent the mini-infobar from appearing on mobile
//     e.preventDefault();
//     // Stash the event so it can be triggered later
//     let deferredPrompt = e;
//     // Update UI notify the user they can install the PWA
//     showInstallPromotion();
//     // Optionally, send analytics event that PWA install promo was shown.
//     console.log('[beforeinstallprompt] event was fired.');

//     const installAppButton = document.getElementById('installAppButton')
//     installAppButton.addEventListener('click', function() {
//         deferredPrompt.prompt();
//     });
// });

// function showInstallPromotion() {
//     const toastLiveExample = document.getElementById('liveToast');
//     const toast = new bootstrap.Toast(toastLiveExample, {delay: 30000});
//     toast.show();
// }