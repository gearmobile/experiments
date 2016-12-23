
window.addEventListener( 'load', function () {
    // ---------------------------------------------------------------
    const block = document.querySelector( '.block' );
    // ---------------------------------------------------------------
    const container = <article className="holder">
        <h1 className="holder__title" role="title">react.js</h1>
        <img src="../lib/images/logo-react.svg" alt="React Logo" role="image" className="holder__image" />
        <h2 className="holder__subtitle">a javascript library for building user interfaces</h2>
    </article>;
    // ---------------------------------------------------------------
    ReactDOM.render( container, block );
    // ---------------------------------------------------------------
}, false );
