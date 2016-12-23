
window.addEventListener( 'load', function () {
    // ---------------------------------------------------------------
    const block = document.querySelector( '.block' );
    // ---------------------------------------------------------------
    function Hero( props ) {
        let count = 0;
        function handleCount() {
            count += 1;
        }
        return (
            <article className="holder">
                <h1 className="holder__title" role="title">{props.title}</h1>
                <img src={props.imageUrl} alt="React Logo" role="image" className="holder__image" onClick={handleCount()} />
                <h2 className="holder__subtitle" role="title">{props.subtitle}</h2>
                <p className="holder__count">{count}</p>
            </article>
        );
    }
    // ---------------------------------------------------------------
    ReactDOM.render(
        <div>
            <Hero title="react.js"
                    subtitle="a javascript library for building user interfaces"
                    imageUrl="../lib/images/logo-react.svg"
            />
            <Hero title="vue.js"
                    subtitle="the progressive javascript framework"
                    imageUrl="../lib/images/logo-vue.png"
            />
        </div>,
    block );
    // ---------------------------------------------------------------
}, false );
