import React from 'react'
import Table from './Table'

const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Ya Boi',
        job: 'King',
      }
];

function MyApp() {
    return (
      <div>
        <Table characterData={characters}/>
      </div>
    );
}

export default MyApp;
