setTimeout(function() {
    document.getElementById('nextButton').classList.remove('hidden');
}, 2000);

function showGender() {
    document.getElementById('gender').classList.remove('hidden');
    document.getElementById('nextButton').classList.add('hidden');
    document.getElementById('welcome').classList.add('hidden');
}

function showLocation(gender) {
    document.getElementById('location').classList.remove('hidden');
    document.getElementById('gender').classList.add('hidden');
}

function proceedToHobbies() {
    var locationDropdown = document.getElementById('locationDropdown');
    var selectedLocation = locationDropdown.value;
    if (selectedLocation === '') {
        alert("Please select a location before proceeding.");
    } else {
        document.getElementById('location').classList.add('hidden');
        document.getElementById('hobbies').classList.remove('hidden');
    }
}

function addHobby() {
    var hobbyInput = document.getElementById('hobbyInput');
    var hobbyList = document.getElementById('hobbyList');
    var hobby = hobbyInput.value.trim();
    var hobbyItems = hobbyList.getElementsByClassName('hobby-item');

    var isDuplicate = false;
    for (var i = 0; i < hobbyItems.length; i++) {
        if (hobbyItems[i].textContent.trim() === hobby) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate && hobby !== '') {
        if (hobbyItems.length < 7) {
            var hobbyItem = document.createElement('div');
            hobbyItem.textContent = hobby;
            hobbyItem.classList.add('hobby-item');
            var crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            crossIcon.setAttribute('class', 'cross');
            crossIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            crossIcon.setAttribute('width', '16');
            crossIcon.setAttribute('height', '16');
            crossIcon.setAttribute('viewBox', '0 0 24 24');
            crossIcon.innerHTML = '<path fill="currentColor" d="M12 10.586L7.414 6 6 7.414 10.586 12 6 16.586 7.414 18 12 13.414 16.586 18 18 16.586 13.414 12 18 7.414 16.586 6z"/>';
            crossIcon.addEventListener('click', function () {
                hobbyItem.remove();
            });
            hobbyItem.appendChild(crossIcon);
            hobbyList.appendChild(hobbyItem);
            hobbyInput.value = '';
        } else {
            showMaxLimitPopup();
        }
    } else if (isDuplicate) {
        hobbyInput.value = '';
    }
}

document.getElementById('locationDropdown').addEventListener('change', function() {
    var proceedButton = document.getElementById('proceedButton');
    if (this.value !== '') {
        proceedButton.style.display = 'block'; 
    } else {
        proceedButton.style.display = 'none'; 
    }
});

function showMaxLimitPopup() {
    var popup = document.getElementById('maxLimitPopup');
    popup.style.display = 'block';
}

function hideMaxLimitPopup() {
    var popup = document.getElementById('maxLimitPopup');
    popup.style.display = 'none';
}

document.getElementById('hobbyInput').addEventListener('input', function() {
    var hobbyInput = this.value.trim();
    if (hobbyInput === '') {
        hideMaxLimitPopup();
    }
});

function proceedToDashboard() {
    
    document.getElementById('hobbies').classList.add('hidden');
   
}