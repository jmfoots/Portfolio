function lastDate() {
    console.log(document.lastModified);
    document.querySelector('display > summary').insertAdjacentText('afterend', document.lastModified);
}