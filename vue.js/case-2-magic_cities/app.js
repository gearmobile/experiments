
const regions = [
    { name: 'region 0', value: 0 },
    { name: 'region 1', value: 1 },
    { name: 'region 2', value: 2 }
];

const groups = [
    [
        { name: 'не выбран', value: 0 },
        { name: 'Барнаул', value: 11 },
        { name: 'Бийск', value: 12 },
        { name: 'Заринск, Новоалтайск, Рубцовск', value: 13 },
        { name: 'прочие города и населенные пункты', value: 14 }
    ],
    [
        { name: 'не выбран', value: 0 },
        { name: 'Благовещенск', value: 21 },
        { name: 'Белогорск, Свободный', value: 22 },
        { name: 'прочие города и населенные пункты', value: 23 }
    ],
    [
        { name: 'не выбран', value: 0 },
        { name: 'Архангельск', value: 31 },
        { name: 'Северодвинск', value: 32 },
        { name: 'Котлас', value: 33 },
        { name: 'прочие города и населенные пункты', value: 34 }
    ]
];

const app = new Vue({
    data: {
        regions: regions,
        regionValue: 0,
        cities: groups
    },
    computed: {
        currGroup() {
            return this.cities[this.regionValue]
        }
    }
});

app.$mount('#app');

