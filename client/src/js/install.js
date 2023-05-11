const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//beforeinstallprompt is an event that is fired when the browser is ready to prompt the user to install the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
    // we are going to show the button, then we are going to hide it by using the toggle method

});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    // we are prompting the user to install the PWA
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    // we are going to hide the button
});

// TODO: Add an handler for the `appinstalled` event
 window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    
 });
