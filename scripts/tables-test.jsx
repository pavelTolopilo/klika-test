import React from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
require('bootstrap');

// products will be presented by ReactBsTable
var products = [
    {
        id: 1,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 2,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 3,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 4,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 5,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 6,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 7,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 8,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 9,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 10,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 11,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 12,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 13,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 14,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 15,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 16,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 17,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 18,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 19,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 20,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 21,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 22,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 23,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 24,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 25,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 26,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 27,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 28,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 29,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 30,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 31,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 32,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 33,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 34,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 35,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 36,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 37,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 38,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 39,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 40,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 41,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 42,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 43,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 44,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 45,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 46,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 47,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 48,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 49,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 50,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 51,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 52,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 53,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 54,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 55,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 56,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 57,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 58,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 59,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 60,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },{
        id: 61,
        author: "Chuck Berry",
        song: "Johnny B. Goode",
        genre: "Rock-and-roll",
        year: 1958
    },{
        id: 62,
        author: "Jimi Hendrix",
        song: "Purple Haze",
        genre: "Hard rock",
        year: 1967
    },{
        id: 63,
        author: "Cream",
        song: "Crossroads",
        genre: "Blues",
        year: 1968
    },{
        id: 64,
        author: "The Kinks",
        song: "You Really Got Me",
        genre: "Hard rock",
        year: 1964
    },{
        id: 65,
        author: "The Rolling Stones",
        song: "Brown Sugar",
        genre: "Hard rock",
        year: 1971
    },{
        id: 66,
        author: "Van Halen",
        song: "Eruption",
        genre: "Instrumental rock",
        year: 1978
    },{
        id: 67,
        author: "The Beatles",
        song: "While My Guitar Gently Weeps",
        genre: "Rock",
        year: 1968
    },{
        id: 68,
        author: "Led Zeppelin",
        song: "Stairway to Heaven",
        genre: "Progressive rock",
        year: 1972
    },{
        id: 69,
        author: "The Allman Brothers Band",
        song: "Statesboro Blues",
        genre: "Piedmont blues",
        year: 1971
    },{
        id: 70,
        author: "Nirvana",
        song: "Smells Like Teen Spirit",
        genre: "Grunge",
        year: 1991
    },
];

ReactDOM.render(
    <BootstrapTable
        data={products}
        striped={true}
        hover={true}
        condensed={true}
        pagination={true}
        columnFilter={true}>
        <TableHeaderColumn dataField="id" hidden={true} isKey={true}>Id</TableHeaderColumn>
            <TableHeaderColumn dataField="author" dataAlign="left" dataSort={true}>Исполнитель</TableHeaderColumn>
        <TableHeaderColumn dataField="song" dataAlign="left" dataSort={true}>Песня</TableHeaderColumn>
        <TableHeaderColumn dataField="genre" dataAlign="left" dataSort={true}>Жанр</TableHeaderColumn>
        <TableHeaderColumn dataField="year" dataAlign="left" dataSort={true}>Год</TableHeaderColumn>
    </BootstrapTable>,
    document.getElementById('content')
);