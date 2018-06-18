import moment from 'moment'
export function getSessions() {
    return [
            {
                id: '1',
                game: 'Catan',
                author: 'Petar',
                place: 'Trite trola',
                time: moment().add(1, 'days').calendar(),
                description: 'best catan party ever',
            },{
                id: '2',
                game: 'Cards against humanity',
                author: 'Ivan',
                place: 'Trite trola',
                time: `${moment().add(1, 'days').add(2,'hours').calendar()}`,
                description: 'Let\'s play together'
            },{
                id: '3',
                game: 'Small World',
                autor: 'Mihail',
                place: 'Abordage',
                time: `${moment().add(1, 'days').add(4,'hours').calendar()}`,
                description: 'Looking for decent oponents to prepare for tournament next week.'
            }, {
                id: '4',
                game: 'Dixit',
                autor: 'Ivana',
                place: 'Abordage',
                time: `${moment().add(1, 'days').add(1,'hours').calendar()}`,
                description: 'Join us for a relaxing game of Dixit.'
            }
        ]
        
}

export function getTournaments() {
    return [
        {
            id: '1',
            game: 'Catan',
            author: 'Ivan Ivanov',
            place: 'Trite trola',
            rules: 'first to 10 points',
            prizes: '30 lv',
            time: `${moment().add(1, 'days').calendar()}`,
            description: 'Annual catan tournament 2018'
        }, {
            id: '2',
            game: 'Small World',
            author: 'Margarita',
            place: 'Abordage',
            rules: 'First rule of the the small world tournament is: \"Do not talk about Small World tournament.\"',
            prizes: '100 lv',
            time: `${moment().add(1, 'days').calendar()}`,
            description: 'Monthly Small World tournament 2018'
        }
    ]
}

export function getPromos() {
    return [
        {
            id: '1',
            author: 'Alex Maksimov',
            place: 'Trite trola',
            time: `${moment().add(1, 'days').add(2,'hours').calendar()}`,
            game: 'Battle Bunnies',
            description: 'Presentation of the game Battle Bunnies!. Everybody is welcomed!',
        }, {
            id: '2',
            author: 'Kristian Petrov',
            place: 'Aborgage',
            time: `${moment().add(1, 'days').calendar()}`,
            game: 'Belot Battle Royale',
            description: 'Presentation of the newest version of belot - the battle royale edition. Free beer!',
        }
    ]

}