window.addEventListener( 'DOMContentLoaded', function () {
    const titleText = 'React.js';
    const subTitleText = 'a javascript library for building user interfaces';
    const block = document.querySelector( '.block' );
    // -----------------------------------------------
    const title = React.createElement( 'h1', { className: 'holder__title', role: 'title' }, titleText );
    const subTitle = React.createElement( 'h2', { className: 'holder__subtitle', role: 'title' }, subTitleText );
    const picture = React.createElement( 'img', {
        src: '../lib/images/logo-react.svg',
        className: 'holder__image',
        alt: 'React Logo',
        role: 'image'
    });
    const container = React.createElement( 'article', { className: 'holder' }, title, picture, subTitle );
    // -----------------------------------------------
    ReactDOM.render( container, block );
    // -----------------------------------------------
}, false);