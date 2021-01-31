import gallery from "./gallery.js"

const eleRef = document.querySelector('.js-gallery');

const gallRef = items => {
   const imgRef = items.map(item => {
        const list = document.createElement('li');
        list.classList.add('gallery__item');
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.setAttribute('href', item.original);
        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.setAttribute('src', item.preview);
        img.setAttribute('data-source', item.original);
        img.setAttribute('alt', item.description);

        list.appendChild(link);
        list.appendChild(img)
        
        return list;
    })
    
    eleRef.append(...imgRef); 
};
gallRef(gallery);


eleRef.addEventListener('click',clickImg);

function clickImg(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    console.log(event.target.dataset.source);

}