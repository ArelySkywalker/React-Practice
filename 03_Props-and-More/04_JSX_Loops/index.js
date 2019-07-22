class App extends React.Component {
	render() {
		return (
			<div>
				<Friend 
					name="Arely"
					hobbies={ [ 'Coding', 'Drawing', 'Brewery Tours' ] }
				/>
				<Friend 
					name="Frida"
					hobbies={ [ 'Drawing', 'Painting' ] }
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));