let step = 1;

function nextStep() {
    if (step === 1) {
        let displayName = document.getElementById('displayNameInput').value;
        if (displayName.trim() === '') {
            alert('Please enter a display name');
            return;
        }
    }
    step++;
    updateStepDisplay();
}

function skipStep() {
    step++;
    updateStepDisplay();
}

function updateStepDisplay() {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
    
    if (step === 2) {
        document.getElementById('step2').style.display = 'block';
    } else if (step === 3) {
        document.getElementById('step3').style.display = 'block';
    }
}

function submitProfile() {
    let bio = document.getElementById('bioInput').value;
    let photo = document.getElementById('photoInput').files[0];
    
    if (!photo) {
        alert('Please select a photo');
        return;
    }

    displayImagePreview(photo);

    
    window.location.href = 'dashboard.html';

    
    console.log('Bio:', bio);
    console.log('Photo:', photo);
}

function displayImagePreview(imageFile) {
    
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imagePreview').style.display = 'block';
        document.getElementById('uploadedImage').src = e.target.result;
    }
    reader.readAsDataURL(imageFile);
}

function updateCharCount() {
    let bioInput = document.getElementById('bioInput');
    let remainingChars = 300 - bioInput.value.length;
    let charCountMessage = remainingChars + " characters left";
    document.getElementById('charCount').innerText = charCountMessage;
    
    if (remainingChars < 0) {
        alert("You have exceeded the maximum character limit of 300");
        bioInput.value = bioInput.value.substring(0, 300); 
        remainingChars = 0;
        document.getElementById('charCount').innerText = "0 characters left";
    }
}

document.getElementById('bioInput').addEventListener('input', updateCharCount);
