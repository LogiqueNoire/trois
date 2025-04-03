


$(document).ready(() => {

    //cargar header
     $("#header").load("/header.html")
     
    });
    
    /*    
     , () => {
        
    //idioma
    const nav1 = document.getElementById('nav1');
    const nav2 = document.getElementById('nav2');
    const nav3 = document.getElementById('nav3');
    const slidePhrase1 = document.getElementById('slidePhrase1');
    const slidePhrase2 = document.getElementById('slidePhrase2');
    const slidePhrase3 = document.getElementById('slidePhrase3');

    const languageSelector = document.getElementById('languageSelector');

    console.log(languageSelector);

    const loadContent = (language) => {
        fetch('/content.json')
            .then(response => response.json())
            .then(data => {
                nav1.textContent = data[language].nav1;
                nav2.textContent = data[language].nav2;
                nav3.textContent = data[language].nav3;
                slidePhrase1.textContent=data[language].slidePhrase1;
                slidePhrase2.textContent=data[language].slidePhrase2;
                slidePhrase3.textContent=data[language].slidePhrase3;
                
            })
        .catch(e => console.error(e));

    };

    languageSelector.addEventListener('change', () => {
        console.log(languageSelector);

        loadContent(languageSelector.value);
    });

    loadContent("es");
});

});



