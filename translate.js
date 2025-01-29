function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi,ta,te,kn,ml,bn,gu,mr,pa,ur',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    // Restore selected language
    setTimeout(() => {
        let selectedLang = localStorage.getItem("selectedLanguage");
        if (selectedLang) {
            let googleTranslateDropdown = document.querySelector(".goog-te-combo");
            if (googleTranslateDropdown) {
                googleTranslateDropdown.value = selectedLang;
                googleTranslateDropdown.dispatchEvent(new Event('change'));
            }
        }
    }, 1000);
}

// Listen for language change and store selection
document.addEventListener("change", function (event) {
    if (event.target.classList.contains("goog-te-combo")) {
        localStorage.setItem("selectedLanguage", event.target.value);
    }
});
