function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; // Corrected 'innerHtml' to 'innerHTML'
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);  
    */

    // Corrected code
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com', // Corrected 'herf' to 'href'
        target: '_blank',
    },
    children: 'Click me to visit to google' 
};
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
