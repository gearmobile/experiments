

Vue.component( 'user-card', {
    template: '<section class="gallery-item"><div class="card" v-for="item in users"><img class="card__media" :src="item.icon" alt="Card Image"><h4 class="card__title">{{ item.name }}</h4><p class="card__meta">{{ item.meta }}</p></div></section>',
    data: function () {
        return {
            users: [
                {
                    name: 'john',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                },
                {
                    name: 'mary',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                },
                {
                    name: 'chris',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                },
                {
                    name: 'joseph',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                },
                {
                    name: 'aaron',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                },
                {
                    name: 'itzhak',
                    meta: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque blanditiis dolores eum laudantium libero perferendis reprehenderit saepe vero!',
                    icon: 'http://placehold.it/100x100'
                }
            ]
        }
    }
});

new Vue({
    el: '#container'
});