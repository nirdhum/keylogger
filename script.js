const press = document.getElementById('press')

window.addEventListener('keydown', function (event) {
    press.innerHTML = `
    <h1>Keylogger</h1>
    <h2>Get code on pressing any key.</h2>
    <div class="pressedKey">
        ${event.key === ' ' ? 'Space' : event.key}
    </div>
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
         ${event.keyCode}
        <small>event.keycode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>`
})