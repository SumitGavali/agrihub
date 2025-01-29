document.getElementById('searchBar').addEventListener('input', filterCrops);
document.getElementById('seasonFilter').addEventListener('change', filterCrops);
document.getElementById('durationFilter').addEventListener('change', filterCrops);

function filterCrops() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const seasonValue = document.getElementById('seasonFilter').value;
    const durationValue = document.getElementById('durationFilter').value;

    const cropCards = document.querySelectorAll('.crop-card');

    cropCards.forEach(card => {
        const cropName = card.querySelector('h3').textContent.toLowerCase();
        const cropSeason = card.getAttribute('data-season');
        const cropDuration = card.getAttribute('data-duration');

        if (
            (cropName.includes(searchValue) || searchValue === '') &&
            (seasonValue === 'all' || cropSeason === seasonValue) &&
            (durationValue === 'all' || cropDuration === durationValue)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}