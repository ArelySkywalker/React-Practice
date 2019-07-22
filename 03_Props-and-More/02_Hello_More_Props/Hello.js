class Hello extends React.Component {
	render () {
		let to = this.props.to;
		let from = this.props.from;
		let bangs = "!".repeat(this.props.bangs);

		console.log(this.props);
		return (
			<div>
				<p>Hi { to }, from { from }{ bangs }</p>
				<img src={ this.props.img } />
			</div>
		);
	}
}