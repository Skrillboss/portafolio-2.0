document.addEventListener('DOMContentLoaded', function() {
    // Agregar la clase 'active' al primer enlace de la lista de pestañas
    var firstTabLink = document.querySelector('ul.tabs li a:first-child');
    firstTabLink.classList.add('active');

    // Ocultar todos los artículos dentro de '.secciones'
    var articles = document.querySelectorAll('.secciones article');
    articles.forEach(function(article) {
        article.style.display = 'none';
    });

    // Mostrar el primer artículo dentro de '.secciones'
    var firstArticle = document.querySelector('.secciones article:first-child');
    firstArticle.style.display = 'block';

    // Agregar el evento 'click' a todos los enlaces de la lista de pestañas
    var tabLinks = document.querySelectorAll('ul.tabs li a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remover la clase 'active' de todos los enlaces de pestañas
            tabLinks.forEach(function(tabLink) {
                tabLink.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace que se hizo clic
            this.classList.add('active');

            // Ocultar todos los artículos dentro de '.secciones'
            articles.forEach(function(article) {
                article.style.display = 'none';
            });

            // Obtener el atributo 'href' del enlace que se hizo clic
            var activeTab = document.querySelector(this.getAttribute('href'));

            // Mostrar el artículo correspondiente al enlace que se hizo clic
            if (activeTab) {
                activeTab.style.display = 'block';
            }

            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();
        });
    });
});
