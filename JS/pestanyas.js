document.addEventListener('DOMContentLoaded', function() {

    var firstTabLink = document.querySelector('ul.tabs li a:first-child');
    firstTabLink.classList.add('active');

    var articles = document.querySelectorAll('.secciones article');
    articles.forEach(function(article) {
        article.style.display = 'none';
    });

    var firstArticle = document.querySelector('.secciones article:first-child');
    firstArticle.style.display = 'block';

    var tabLinks = document.querySelectorAll('ul.tabs li a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            tabLinks.forEach(function(tabLink) {
                tabLink.classList.remove('active');
            });

            this.classList.add('active');

            articles.forEach(function(article) {
                article.style.display = 'none';
            });

            var activeTab = document.querySelector(this.getAttribute('href'));

            if (activeTab) {
                activeTab.style.display = 'block';
            }

            event.preventDefault();
        });
    });
});
