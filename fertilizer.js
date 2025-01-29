function filterFertilizers(type) {
    var sections = document.querySelectorAll('.fertilizer-section');
    sections.forEach(function(section) {
        if (section.classList.contains(type)) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

function showAll() {
    var sections = document.querySelectorAll('.fertilizer-section');
    sections.forEach(function(section) {
        section.style.display = 'flex';
    });
}