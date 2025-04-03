$(document).ready(() => {
    // Cargar header
    $("#header").load("header.html", () => {


        // Idioma
        const languageSelector = document.getElementById('languageSelector');


        if (languageSelector) {
            const nav1 = document.getElementById('nav1');
            const nav2 = document.getElementById('nav2');
            const nav3 = document.getElementById('nav3');
            const slidePhrase1 = document.getElementById('slidePhrase1');
            const slidePhrase2 = document.getElementById('slidePhrase2');
            const slidePhrase3 = document.getElementById('slidePhrase3');

            //de la pagina de configuracion
            const welcome = document.getElementById('welcome');
            const editDisponibility = document.getElementById('editDisponibility');
            const editDisponibility = document.getElementById('editDisponibility');
            const editDisponibility = document.getElementById('editDisponibility');


            const loadContent = (language) => {
                fetch('./content.json')
                    .then(response => response.json())
                    .then(data => {
                        Object.keys(data[language]).forEach(id => {
                            const element = document.getElementById(id);
                            if (element) {
                                element.textContent = data[language][id];
                            }
                        });
                    })
                    .catch(e => console.error(e));
            };

            languageSelector.addEventListener('change', () => {
                loadContent(languageSelector.value);
            });

            loadContent("es");
        } else {
            console.error("languageSelector no encontrado");
        }
    });
});





