function lastDate() {
    console.log(document.lastModified);
    document.querySelector('summary[title=lastDate]').insertAdjacentText('afterend', document.lastModified);
}