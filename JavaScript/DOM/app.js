function createUl () {
    let ul = document.createElement('UL');
    let li1 = document.createElement('LI');
    let textLi = document.createTextNode('Home')
    li1.appendChild(textLi1);

    let li2 = document.createElement('LI');
    let textLi2 = document.createTextNode('About')
    li2.appendChild(textLi2);

    let li3 = document.createElement('LI');
    let textLi3 = document.createTextNode('Contact')
    li3.appendChild(textLi3);
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
}