window.addEventListener( 'load', function () {
    //
    var input = document.querySelector( '#shoppingInput' );
    var button = document.querySelector( '#shoppingButton' );
    var list = document.querySelector( '#shoppingMain' );
    //
    button.addEventListener( 'click', function () {
        var inputValue = input.value;
        if ( inputValue === '' ) {
            alert( 'Enter value!' );
            return false;
        } else {
            var newDiv = document.createElement( 'div' );
            var newLabel = document.createElement( 'label' );
            var newLabelValue = document.createTextNode( inputValue );
            var newInput = document.createElement( 'input' );
            //
            newDiv.setAttribute( 'class', 'form-check' );
            newLabel.setAttribute( 'class', 'form-check-label' );
            newInput.setAttribute( 'class', 'form-check-input' );
            newInput.setAttribute( 'type', 'checkbox' );
            newInput.setAttribute( 'value', '' );
            //
            newLabel.appendChild( newInput );
            newLabel.appendChild( newLabelValue );
            newDiv.appendChild( newLabel );
            list.appendChild( newDiv );
        }
    });
});