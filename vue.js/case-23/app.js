var jsInput = $( '#js-input' );
var jsOutput = $( '#js-output' );
// ----------------------------------------
var obj = {
  data: null,
  setData: function ( value ) {
    this.data = value;
    jsInput.val( value );
    jsOutput.html( value );
  }
};
// -----------------------------------------
obj.setData( 'Hello from jQuery' );

jsInput.on( 'focus', function () {
  $( this ).val( '' );
});

jsInput.on( 'blur', function () {
  $( this ).val( obj.data );
});

jsInput.on( 'keyup', function () {
  obj.setData( $( this ).val() );
});

// -----------------------------------
// -----------------------------------

var app = new Vue({
  el: '#container',
  data: {
    datum: 'Hello from Vue.js'
  }
});
