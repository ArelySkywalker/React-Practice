class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
					to="Cher" 
					from="Sonny" 
					bangs={4}
					img="https://s.yimg.com/ny/api/res/1.2/73cnBClAnngm8CZE8blPpA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/etonline.tv/af05524c625c57b451190f5ad57efcbb"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));