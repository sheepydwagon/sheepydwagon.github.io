const root = document.querySelector(':root');

function changeTheme(index) {
    if (index == 1) {
        root.style.setProperty('--theme-primary', 'var(--theme-art-primary)'); 
        root.style.setProperty('--theme-dark', 'var(--theme-art-dark)'); 
    }
    else if (index == 2) {
        root.style.setProperty('--theme-primary', 'var(--theme-ocs-primary)'); 
        root.style.setProperty('--theme-dark', 'var(--theme-ocs-dark)'); 
    }
    else if (index == 3) {
        root.style.setProperty('--theme-primary', 'var(--theme-game-primary)'); 
        root.style.setProperty('--theme-dark', 'var(--theme-game-dark)'); 
    }
    else if (index == 4) {
        root.style.setProperty('--theme-primary', 'var(--theme-rev-primary)'); 
        root.style.setProperty('--theme-dark', 'var(--theme-rev-dark)'); 
    }
    else if (index == 5) {
        root.style.setProperty('--theme-primary', 'var(--theme-misc-primary)'); 
        root.style.setProperty('--theme-dark', 'var(--theme-misc-dark)'); 
    }
    else {
        root.style.setProperty('--theme-primary', 'var(--sheepy-teal)'); 
        root.style.setProperty('--theme-dark', 'var(--sheepy-teal-dark)'); 
    }
}