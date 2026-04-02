
export const categories = {
    manty: {
        title: 'Манты',
        items: [
            {
                id: 1,
                title: 'Манты классические',
                composition: 'Говядина, лук, тесто, специи',
                price: 1200,
                image: '/src/assets/images/manty-classic.png',
            },
            {
                id: 2,
                title: 'Манты с тыквой',
                composition: 'Тыква, лук, масло, тесто',
                price: 1100,
                image: '/src/assets/images/manty-pumpkin.png',
            },
            {
                id: 3,
                title: 'Манты с тыквой',
                composition: 'Тыква, лук, масло, тесто',
                price: 1100,
                image: '/src/assets/images/manty-pumpkin.png',
            },
            {
                id: 4,
                title: 'Манты с тыквой',
                composition: 'Тыква, лук, масло, тесто',
                price: 1100,
                image: '/src/assets/images/manty-pumpkin.png',
            },
            {
                id: 5,
                title: 'Манты с тыквой',
                composition: 'Тыква, лук, масло, тесто',
                price: 1100,
                image: '/src/assets/images/manty-pumpkin.png',
            },
        ],
    },
    pelmeni: {
        title: 'Пельмени и вареники',
        items: [
            {
                id: 1,
                title: 'Пельмени с говядиной',
                composition: 'фарш, лук, 23 шт в кг',
                price: 1200,
                image: '/src/assets/images/pelmeni-classic.png',
            },
            {
                id: 2,
                title: 'Вареники с картофелем',
                composition: 'фарш, лук, тыква, 23 шт в кг',
                price: 1100,
                image: '/src/assets/images/vareniki.png',
            },
        ],
    },
    hinkali: {
        title: 'Хинкали',
        items: [], // позже добавим
    },
    pepper: {
        title: 'Перец фаршированный',
        items: [],
    },
    cutlets: {
        title: 'Котлеты',
        items: [],
    },
    dough: {
        title: 'Тесто',
        items: [],
    },
    samsa: {
        title: 'Самса, сосиски в тесте',
        items: [],
    },
    borek: {
        title: 'Борек',
        items: [],
    },
    pancakes: {
        title: 'Печенье/Блины',
        items: [],
    },
    pies: {
        title: 'Пироги',
        items: [],
    },
    pastry: {
        title: 'Готовая выпечка (штучно)',
        items: [],
    },
};

export const mantyItems = categories.manty.items;
export const pelmeniItems = categories.pelmeni.items;
