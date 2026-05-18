import { createTimerComponent } from './TimerComponent.js';

// Render the timer 
document.addEventListener('DOMContentLoaded', () => {
    const component = createTimerComponent();
    document.getElementById('timerDiv').appendChild(component);
});
