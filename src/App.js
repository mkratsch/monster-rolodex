import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: '',
			monsters: [
				{ id: 'asd', name: 'Frankenstein' },
				{ id: 'jkv', name: 'Dracula' },
				{ id: 'uie', name: 'Zombie' },
			],
		};
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		this.setState({ monsters: users });
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	render() {
		const { monsters, searchTerm } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={this.handleChange}
				/>

				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}
}
export default App;
