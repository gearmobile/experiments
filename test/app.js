
// https://toster.ru/q/447458
document.addEventListener( 'DOMContentLoaded', function () {
    const points = [
        {
            title: 'Одежда',
            left: 1,
            right: 22
        },
        {
            title: 'Вечерние',
            left: 12,
            right: 13
        },
        {
            title: 'Брюки',
            left: 4,
            right: 5
        },
        {
            title: 'Мужская',
            left: 2,
            right: 9
        },
        {
            title: 'Жакеты',
            left: 6,
            right: 7
        },
        {
            title: 'Костюмы',
            left: 3,
            right: 8
        },
        {
            title: 'Юбки',
            left: 17,
            right: 18
        },
        {
            title: 'Женская',
            left: 10,
            right: 21
        },
        {
            title: 'Платья',
            left: 11,
            right: 16
        },
        {
            title: 'Летние',
            left: 14,
            right: 15
        },
        {
            title: 'Блузы',
            left: 19,
            right: 20
        }
    ]
    const root = document.querySelector( '#root' )
    function genTree ( data, node ) {
        data = data.sort( (a, b) => {
            return a.left - b.left
        })
        let levels = []
        let level = 0
        let output = '<ul><li>' + data[0].title
        levels[0] = 0
        for ( let i = 0; i < data.length; i += 1 ) {
            while ( level > 0 && data[levels[level - 1]].right < data[i].left ) {
                level -= 1
                output += '</ul>'
            }
            if ( data[i].left === data[levels[level]].left + 1 ) { 
                output += '<ul>'
                level += 1
            }
            output += '<li>' + data[i].title
            levels[level] = i
        }
        while ( level -= 1 ) {
            output += '</ul>'
        }
        node.innerHTML = output
    }
    // -----------------------------
    genTree( points, root )

})
