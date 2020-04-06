let tagNames = document.getElementsByTagName('*');
for (let tag of tagNames) {
    if (tag.getAttribute('id')){
        console.log(tag);

    }
}