import './_components.js';
import {PageFlip} from 'page-flip';
const singleFlip = new PageFlip(document.getElementById('single-book'),
    {
        width: 400, // required parameter - base page width
        height: 600  // required parameter - base page height
    }
);

singleFlip.loadFromHTML(document.querySelectorAll('.single-page'));
