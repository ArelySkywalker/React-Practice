class Hello extends React.Component {
	render () {
		var to = this.props.to;
		var from = this.props.from;
		return (
			<h1>Hi { to }, from { from }!</h1>
		);
	}
}