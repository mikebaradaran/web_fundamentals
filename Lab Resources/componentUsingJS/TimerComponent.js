// Define the component
export function createTimerComponent() {
    const container = document.createElement('div');
    const timer = document.createElement('input');
    timer.type = 'range';
    timer.id = 'timer1';
    timer.value = 15;

    const timerDisplay = document.createElement('span');
    timerDisplay.textContent = "15:00";
    container.appendChild(timer);
    container.appendChild(timerDisplay);
    return container;
}

// export function setTimerValue(minutes) {
//     myTimer.value=minutes;
// }
