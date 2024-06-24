document.addEventListener('DOMContentLoaded', () => {
  let countdownInterval;
  
  const calculateButton = document.getElementById('calculate');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  
  const daysElement = document.getElementById('countdown-days');
  const hoursElement = document.getElementById('countdown-hours');
  const minutesElement = document.getElementById('countdown-minutes');
  const secondsElement = document.getElementById('countdown-seconds');
  
  calculateButton.addEventListener('click', () => {
      const dateInput = document.getElementById('date').value;
      const timeInput = document.getElementById('time').value;
      
      if (dateInput && timeInput) {
          const endDate = new Date(`${dateInput}T${timeInput}`);
          if (endDate > new Date()) {
              startCountdown(endDate);
          } else {
              alert('Please enter a future date and time.');
          }
      } else {
          alert('Please enter both date and time.');
      }
  });
  
  stopButton.addEventListener('click', stopCountdown);
  resetButton.addEventListener('click', resetCountdown);
  
  function startCountdown(endDate) {
      stopCountdown();
      countdownInterval = setInterval(() => {
          const now = new Date().getTime();
          const distance = endDate - now;
          
          if (distance < 0) {
              clearInterval(countdownInterval);
              daysElement.textContent = '0';
              hoursElement.textContent = '0';
              minutesElement.textContent = '0';
              secondsElement.textContent = '0';
              alert('Countdown has ended!');
          } else {
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
              daysElement.textContent = days;
              hoursElement.textContent = hours;
              minutesElement.textContent = minutes;
              secondsElement.textContent = seconds;
          }
      }, 1000);
  }
  
  function stopCountdown() {
      clearInterval(countdownInterval);
  }
  
  function resetCountdown() {
      stopCountdown();
      daysElement.textContent = '0';
      hoursElement.textContent = '0';
      minutesElement.textContent = '0';
      secondsElement.textContent = '0';
      document.getElementById('date').value = '';
      document.getElementById('time').value = '';
  }
});
