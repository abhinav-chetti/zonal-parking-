// Login Page
function login() {
    var passcodeInput = document.getElementById('passcode-input');
    var passcode = passcodeInput.value;

    // Replace 'yourpasscode' with your desired passcode
    var correctPasscode = 'CMRIT';

    if (passcode === correctPasscode) {
        window.location.href = 'main.html'; // Redirect to the main page
    } else {
        alert('Incorrect passcode. Please try again.');
    }

    document.getElementById('passcode-input').value = ''; // Clear the input field
    return false; // Prevent form submission
}

// Main Page
// Main Page
function reserveSpot() {
    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var phoneInput = document.getElementById('phone-input');
    var carInput = document.getElementById('car-input');
    var spotInput = document.getElementById('spot-input');
    var timeInput = document.getElementById('time-input');

    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var carNumber = carInput.value;
    var spotNumber = parseInt(spotInput.value);
    var timePeriod = timeInput.value;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (phone === '') {
        alert('Please enter your phone number.');
        return;
    }

    if (carNumber === '') {
        alert('Please enter your car number.');
        return;
    }

    if (isNaN(spotNumber)) {
        alert('Invalid spot number. Please enter a valid number.');
        return;
    }

    if (timePeriod === '') {
        alert('Please enter the time period.');
        return;
    }

    var spots = document.getElementsByClassName('spot');
    if (spotNumber < 1 || spotNumber > spots.length) {
        alert('Invalid spot number. Please enter a number between 1 and ' + spots.length + '.');
        return;
    }

    var spot = spots[spotNumber - 1];
    if (spot.classList.contains('reserved')) {
        alert('This spot is already reserved. Please select another spot.');
        return;
    }

    spot.classList.remove('vacant');
    spot.classList.add('reserved');
    spot.innerText = name;
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    carInput.value = '';
    spotInput.value = '';
    timeInput.value = '';
    updateVacantSlots();
    alert('Spot ' + spotNumber + ' reserved successfully.\n\nReservation Details:\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nCar Number: ' + carNumber + '\nTime Period: ' + timePeriod);
}

function updateVacantSlots() {
    var spots = document.getElementsByClassName('spot');
    var vacantSlots = document.getElementById('vacant-slots');
    var count = 0;

    for (var i = 0; i < spots.length; i++) {
        if (spots[i].classList.contains('vacant')) {
            count++;
        }
    }

    vacantSlots.innerText = count;
}
