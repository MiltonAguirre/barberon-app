export const user = {
    'id': 4,
    'is_seller': false,
    'username': 'Sofia',
    'urlProfile': 'https://www.dinossor.com/Sofia',
    'urlImage': 'https://picsum.photos/id/238/200/200',
    'rate': 3,
    'followers': 250,
    'sellers': 123,
    'about': 'We sell clothes for all sizes',
}
export const users = [
    {
        'id': 1,
        'username': 'Ronny',
        'reviews': [],
        'rate': 3,
        'urlImage': 'https://picsum.photos/id/237/200/200',
        'followers': 250,
        'about': 'We sell clothes for all sizes',
        'urlProfile': 'https://www.dinossor.com/Ronny',
        'is_seller': true
    },
    {
        'id': 2,
        'username': 'George',
        'reviews': [],
        'rate': 3,
        'urlImage': 'https://picsum.photos/id/147/200/200',
        'followers': 154,
        'about': 'We sell drinks',
        'urlProfile': 'https://www.dinossor.com/George',
        'is_seller': true
    },
    {
        'id': 3,
        'username': 'Jasmin',
        'urlImage': 'https://picsum.photos/id/158/200/200',
        'sellers': 188,
        'urlProfile': 'https://www.dinossor.com/Jasmin',
        'is_seller': false

    },
    {
        'id': 4,
        'username': 'Sofia',
        'urlImage': 'https://picsum.photos/id/238/200/200',
        'sellers': 123,
        'urlProfile': 'https://www.dinossor.com/Sofia',
        'is_seller': false
    },
];
export const listing = [
    {
        'id': 1,
        'user_id': 2,
        'onLive': true,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'time': new Date().setHours(10),
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'winnerCurrent': {
            'name': 'Rony',
            'urlImage': 'https://picsum.photos/id/237/200'
        },
        'urlImage': 'https://picsum.photos/id/3/600/400',
    },
    {
        'id': 2,
        'user_id': 2,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
    {
        'id': 1,
        'user_id': 2,
        'onLive': true,
        'fixed_price':true,
        'name': 'Iphone 15 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/30/600/400',
    },
    {
        'id': 3,
        'user_id': 4,
        'is_ask': true,
        'ask': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        'comments': [],
        'urlImage': 'https://picsum.photos/id/417/600/400',
        'views': 130,
        'ago': '1 hr'
    },
    {
        'id': 4,
        'user_id': 4,
        'is_ask': true,
        'ask': 'Let consectetur adipiscing elit?',
        'comments': [],
        'views': 163,
        'ago': '2 d'
    },
    {
        'id': 3,
        'user_id': 3,
        'is_ask': true,
        'ask': 'Lorem ipsum dolor sit amscing elit solt?',
        'comments': [],
        'urlImage': 'https://picsum.photos/id/45/600/400',
        'views': 10,
        'ago': '5 hr'
    },
    
];
export const notifications = [
    {
        username: 'Sanah',
        urlImage: 'https://picsum.photos/200/200',
        message: 'You win an auction',
        ago: '18:40',

    },
    {
        username: 'Preeti',
        urlImage: 'https://picsum.photos/id/155/200/200',
        message: 'Has dispatched yopur item',
        ago: '1 days'
    },
    {
        username: 'Loveleen',
        urlImage: 'https://picsum.photos/id/137/200/200',
        message: 'Start following you',
        ago: '2 days'
    },
    {
        username: 'Jassi',
        urlImage: 'https://picsum.photos/id/147/200/200',
        message: 'Invite your for a live Auction',
        ago: '1 month'
    },
];
export const cartItems = [
    {
        'id': 1,
        'user_id': 2,
        'onLive': false,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/3/600/400',
    },
    {
        'id': 2,
        'user_id': 2,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
];
export const purchases = [
    {
        'id': 2,
        'user_id': 2,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
];
export const recently = [
    {
        'id': 2,
        'user_id': 2,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
];
export const asks = [
    {
        'id': 3,
        'user_id': 4,
        'is_ask': true,
        'ask': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        'comments': [],
        'urlImage': 'https://picsum.photos/id/417/600/400',
        'views': 130,
        'ago': '1 hr'
    },
    {
        'id': 4,
        'user_id': 4,
        'is_ask': true,
        'ask': 'Let consectetur adipiscing elit?',
        'comments': [],
        'views': 163,
        'ago': '2 d'
    },
];
export const sold = [
    {
        'id': 6,
        'user_id': 1,
        'fixed_price': false,
        'onLive': false,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'state_shipping': 0,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/3/600/400'
    },
    {
        'id': 9,
        'user_id': 1,
        'is_active': false,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'state_shipping': 0,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
    {
        'id': 5,
        'user_id': 1,
        'price_fixed': false,
        'onLive': false,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'state_shipping': 1,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/34/600/400'
    },
    {
        'id': 9,
        'user_id': 1,
        'fixed_price': false,
        'onLive': false,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'state_shipping': 2,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/3/600/400'
    },
    {
        'id': 9,
        'user_id': 1,
        'is_active': false,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'state_shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
];
export const reviews = [
    {
        'id': 4,
        'belongs_to': {
            'user_id':5,
            'name': 'Jenny',
            'urlImage': 'https://picsum.photos/id/217/200'
        },
        'date': '2021-05-21',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec dolor condimentum, dictum mauris ut, bibendum elit. In elit ligula, dictum lobortis lacinia et, sagittis u suscipit diam. Sed vitae pharetra lacus.'
    },
    {
        'id': 3,
        'belongs_to': {
            'user_id':8,
            'name': 'Mario',
            'urlImage': 'https://picsum.photos/id/208/200'
        },
        'date': '2021-05-20',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec utate in. Sed ornare suscipit diam. Sed vitae pharetra lacus.'
    }
];
export const posts = [
    {
        'id': 5,
        'user_id': 1,
        'onLive': true,
        'fixed_price': false,
        'name': 'Laptop S340 Lenovo ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'time': new Date().setHours(10),
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'winnerCurrent': {
            'name': 'Rony',
            'urlImage': 'https://picsum.photos/id/237/200'
        },
        'urlImage': 'https://picsum.photos/id/3/600/400',
    },
    {
        'id': 6,
        'user_id': 1,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
    {
        'id': 9,
        'user_id': 1,
        'onLive': true,
        'fixed_price': true,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/3/600/400',
    },
];
export const comments = [
    {
        'id': 5,
        'belongs_to': {
            'name': 'Jassmin',
            'urlImage': 'https://picsum.photos/id/158/200/200'
        },

        'ago': '5h',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec dolor condimentum, dictum mauris ut, bibendum elit. In elit ligula, dictum lobortis lacinia et, sagittis ut massa. Proin suscipit enim nibh, vitae viverra arcu vulputate in. Sed ornare suscipit diam. Sed vitae pharetra lacus.',
        'replies': [
            {
                'belongs_to': {
                    'name': 'Harry',
                    'urlImage': 'https://picsum.photos/id/166/200/200'
                },
                'ago': '10 m',
                'content': "That's ok",
            },
            {
                'belongs_to': {
                    'name': 'Jeremy',
                    'urlImage': 'https://picsum.photos/id/144/200/200'
                },
                'ago': '11 m',
                'content': "That isn't ok",
            }
        ],
    },
    {
        'id': 10,
        'belongs_to': {
            'name': 'Kour',
            'urlImage': 'https://picsum.photos/id/118/200/200'
        },

        'ago': '48 m',
        'content': 'So True!',
        'replies': [],
    },
    {
        'id': 11,
        'belongs_to': {
            'name': 'Mann',
            'urlImage': 'https://picsum.photos/id/115/200/200'
        },

        'ago': '48 m',
        'content': 'So True!',
        'replies': [],
    },
    {
        'id': 12,
        'belongs_to': {
            'name': 'Mandeep',
            'urlImage': 'https://picsum.photos/id/171/200/200'
        },

        'ago': '5 h',
        'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'replies': [],
    }
];
export const items = [
    {
        'id': 1,
        'user_id': 2,
        'onLive': true,
        'name': 'Samsung Galaxy S12 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'time': new Date().setHours(10),
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'winnerCurrent': {
            'name': 'Rony',
            'urlImage': 'https://picsum.photos/id/237/200'
        },
        'urlImage': 'https://picsum.photos/id/3/600/400',
    },
    {
        'id': 2,
        'user_id': 2,
        'onLive': false,
        'name': 'Camera Nikkon',
        'price': 178,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 1,
        'spread': 17,
        'views': 854,
        'comments': [],
        'likes': '1.1k',
        'urlImage': 'https://picsum.photos/id/454/600/400'
    },
    {
        'id': 3,
        'user_id': 2,
        'onLive': true,
        'fixed_price':true,
        'name': 'Iphone 15 ',
        'price': 110,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'infoShip': 'From China - Estimate Delivery Thursday, 28 Dec.',
        'shipping': 3,
        'spread': 22,
        'views': 163,
        'comments': [],
        'likes': '1k',
        'urlImage': 'https://picsum.photos/id/30/600/400',
    },
];