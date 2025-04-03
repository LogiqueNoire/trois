$(document).ready(() => {
    // Cargar header
    $("#header").load("header.html");
});

// Idioma
const languageSelector = document.getElementById('languageSelector');

        
if (languageSelector) {
    const nav1 = document.getElementById('nav1');
    const nav2 = document.getElementById('nav2');
    const nav3 = document.getElementById('nav3');
    const slidePhrase1 = document.getElementById('slidePhrase1');
    const slidePhrase2 = document.getElementById('slidePhrase2');
    const slidePhrase3 = document.getElementById('slidePhrase3');

    const loadContent = (language) => {
        fetch('/content.json')
            .then(response => response.json())
            .then(data => {
                if (nav1) nav1.textContent = data[language].nav1;
                if (nav2) nav2.textContent = data[language].nav2;
                if (nav3) nav3.textContent = data[language].nav3;
                if (slidePhrase1) slidePhrase1.textContent = data[language].slidePhrase1;
                if (slidePhrase2) slidePhrase2.textContent = data[language].slidePhrase2;
                if (slidePhrase3) slidePhrase3.textContent = data[language].slidePhrase3;
            })
            .catch(e => console.error(e));
    };

    languageSelector.addEventListener('change', () => {
        loadContent(languageSelector.value);
    });

    loadContent("es");
} else {
    console.error("languageSelector no encontrado en header.html");
}



