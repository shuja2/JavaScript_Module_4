var xhr = new XMLHttpRequest();
xhr.protocoal = "https";
var url = './health_article.json';

xhr.open('GET', url, true);
console.log(xhr);
try {
    xhr.send();
    throw("no")
} catch (error) {
    console.log(xhr);
}
xhr.send();
xhr.responseType = 'json';


let articles;

xhr.onload = function () {
    articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    console.log(articles);
}



