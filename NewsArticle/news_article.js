var xhr = new XMLHttpRequest();
xhr.protocoal = "https";
var url = './news_article.json';

xhr.open('GET', url, true);
// console.log(xhr);
xhr.responseType = 'json';

let articles;
let articlesDiv = document.getElementById('articles');

xhr.onload = function () {
    articles = xhr.response.news_articles;
    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var headline = document.createElement('h3');
        headline.textContent = article.headline;

        var content = document.createElement('p');
        content.textContent = article.content;

        var summary = document.createElemen');
        summary.textContent = article.summary;

        var author = document.createElement('p');
        author.style.display = "inline";
        author.textContent = article.author + " | ";

        var date_published = document.createElement('p');
        date_published.style.display = "inline";
        date_published.textContent = article.date_published;

        articleDiv.appendChild(headline);
        articleDiv.appendChild(summary);
        articleDiv.appendChild(document.createElement("hr"));
        articleDiv.appendChild(author);
        articleDiv.appendChild(date_published);
        articleDiv.appendChild(document.createElement("hr"));
        articleDiv.appendChild(content);
        
        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();




