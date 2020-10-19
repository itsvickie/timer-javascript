function timer() {
    const clock = document.querySelector('.clock');
    let secs = 0;
    let timer;
    let click = false;

    function createDateFromSeconds(secs) {
        const date = new Date(secs * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startClock() {
        clock.classList.remove('paused');

        timer = setInterval(() => {
            secs++;
            clock.innerHTML = createDateFromSeconds(secs);
        }, 1000);
    }

    function pauseClock() {
        clearInterval(timer);
        clock.classList.add('paused');
        click = false;
    }

    function restartClock() {
        clearInterval(timer);
        clock.classList.remove('paused');
        clock.innerHTML = '00:00:00';
        secs = 0;
        click = false;
    }

    document.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('start')) {
            if (click != true) {
                startClock();
                click = true;
            }
        }

        if (element.classList.contains('pause')) {
            pauseClock();
        }

        if (element.classList.contains('restart')) {
            restartClock();
        }
    });
}

timer();