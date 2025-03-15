document.getElementById('loveButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const specialImage = document.getElementById('specialImage');
    
    surpriseMessage.classList.toggle('hidden');
    specialImage.classList.toggle('hidden');
});