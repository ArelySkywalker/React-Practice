class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>I'm a cute cat!</h1>
				<img src="https://slm-assets3.secondlife.com/assets/20942914/view_large/31594306_lOGlRBcF_c.jpg?1530105681" />
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));