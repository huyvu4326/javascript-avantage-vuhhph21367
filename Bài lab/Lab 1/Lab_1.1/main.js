const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Jan 10th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    
};

const [player1, player2] = game.players;
console.log(player1,player2);

const [gk, ...fieldPlayer] = player1;
console.log(gk, fieldPlayer);

const allPlayer = [...player1, ...player2];
console.log(allPlayer);

const finalPlayer = [...player1, 'Thiago', 'Continho', 'Periscic'];

const {
    odds: {team1, x: draw, team2}
} = game;
console.log(team1, draw, team2);

const printGoals = function(...players){
    console.log(players);
    console.log (`${players.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandoski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log ('Team 1 is more likely to win');
team1 > team2 && console.log ('Team 2 is more likely to win');