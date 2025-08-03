function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    document.getElementById('particles').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

setInterval(createParticle, 300);

for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 300);
}

function showTeamPage(teamId) {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById(teamId + '-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToMain() {
    document.getElementById('main-page').style.display = 'block';
    document.querySelectorAll('.team-page').forEach(page => {
        page.classList.remove('active');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', function(e) {
    if (e.key === '1') setTheme('light');
    if (e.key === '2') setTheme('dark');
    if (e.key === '3') enterHackingMode();
});

function enterHackingMode() {
    const overlay = document.getElementById('hackOverlay');
    const progressBar = document.getElementById('hackProgress');
    const hackCode = document.getElementById('hackCode');
    const hackComplete = document.getElementById('hackComplete');
    
    overlay.classList.add('active');
    hackComplete.style.opacity = '0';
    
    const codeLines = [
        "> Initializing system...",
        "> Loading hacking modules...",
        "> Connecting to network...",
        "> Scanning vulnerabilities...",
        "> Bypassing firewalls...",
        "> Accessing secure channels...",
        "> Decrypting data streams...",
        "> Establishing backdoor...",
        "> Overriding security protocols...",
        "> Finalizing access..."
    ];
    
    let codeText = "";
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + '%';
        
        if (Math.random() > 0.3 && codeLines.length > 0) {
            const randomLine = Math.floor(Math.random() * codeLines.length);
            codeText += codeLines[randomLine] + "\n";
            hackCode.textContent = codeText;
            hackCode.scrollTop = hackCode.scrollHeight;
            codeLines.splice(randomLine, 1);
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            hackComplete.style.opacity = '1';
            setTimeout(() => {
                overlay.classList.remove('active');
                setTheme('hacking');
            }, 1500);
        }
    }, 100);
}

function improveReadability() {
    const description = document.querySelector('.description');
    if (description) {
        description.style.lineHeight = '1.7';
        description.style.fontSize = '1.1rem';
    }
    
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.style.lineHeight = '1.6';
    });
}

window.addEventListener('load', improveReadability);