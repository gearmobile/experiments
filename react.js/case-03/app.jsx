
window.addEventListener( 'load', function () {
    // ---------------------------------------------------------------
    const block = document.querySelector( '.block' );
    // ---------------------------------------------------------------
    function Hero() {
        return (
            <article className="holder">
                <h1 className="holder__title" role="title">react.js</h1>
                <img src="../lib/images/logo-react.svg" alt="React Logo" role="image" className="holder__image" />
                <h2 className="holder__subtitle" role="title">a javascript library for building user interfaces</h2>
            </article>
        );
    }
    // ---------------------------------------------------------------
    ReactDOM.render( <Hero />, block );
    // ---------------------------------------------------------------
}, false );
