import React from 'react';

class ClMethod extends React.Component {
constructor(props) {
super(props);
this.state = {
count: 0,
color: 'red'
}
console.log("Constructor Method Called");
}

increment = () => {
this.setState({ count: this.state.count + 1 })
}

static getDerivedStateFromProps(props, state) {
console.log('getDerivedStateFromProps called');
if (props.favColor === state.color) {
return { color: state.color };
} else {
return { color: props.favColor };
}
}

componentDidMount() {
console.log('componentDidMount called');
}
shouldComponentUpdate(nextProps, nextState) {
console.log('shouldComponentUpdate called');    
return nextState.count %2==0;
}
componentDidUpdate(prevProps, prevState ,snapshot) {
console.log('componentDidUpdate called');
console.log(`Previous State: ${prevState.count}`);}


render() {
console.log("Render Method Called");
return (
<div>
<p>This is Class Component</p>
<p>Count: {this.state.count}</p>
<p>Favorite Color: {this.state.color}</p>
<button onClick={this.increment}>Increment</button>
</div>
)
}
}

export default ClMethod;