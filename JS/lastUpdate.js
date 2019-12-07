function lastDate() {
    document.querySelector('summary[title=lastDate]').insertAdjacentText('beforeend', document.lastModified);
}