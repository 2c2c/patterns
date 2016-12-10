import React from 'react';

var title = 'this is hte title';

function inject(Component) {
  return class Injector extends React.Component {
    render() {
      return (<Component {...this.state} {...this.props} title={title}/>)
    }
  }
}

const Title = props => <h1>{props.title}</h1>

var EnhancedTitle = inject(Title);

const Header = () => <header>
  <EnhancedTitle/>
</header>

export default Header;
