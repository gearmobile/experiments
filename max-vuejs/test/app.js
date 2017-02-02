var str_1 = 'silver';
var str_2 = 'division-3';

var league = [
    { name: 'platinum', value: 'platinum', price: 700 },
    { name: 'diamond', value: 'diamond', price: 500 },
    { name: 'gold', value: 'gold', price: 300 },
    { name: 'silver', value: 'silver', price: 100 }
];

var division = [
    { name: 'division-4', value: 'division-4', price: 700 },
    { name: 'division-3', value: 'division-3', price: 500 },
    { name: 'division-2', value: 'division-2', price: 300 },
    { name: 'division-1', value: 'division-1', price: 100 }
];

function searchValue( nameKey, nameArray ) {
    for ( var i = 0; i < nameArray.length; i++ ) {
        if ( nameArray[i].name === nameKey ) {
            return nameArray[i].price;
        }
    }
}

document.getElementById( 'output_1' ).innerHTML = searchValue( str_1, league );
document.getElementById( 'output_2' ).innerHTML = searchValue( str_2, division );