function getPosition(str, m, i) {
   return str.split(m, i).join(m).length;
}

var href, page;

href = window.location.href;

if (href.indexOf("rigvedawiki") != -1) {
    page = href.substr(getPosition(href, "/", 5) + 1);
}
else if (href.indexOf("mirror.enha") != -1) {
    page = href.substr(getPosition(href, "/", 4) + 1);
}

window.location.href = "https://namu.wiki/w/" + page;
