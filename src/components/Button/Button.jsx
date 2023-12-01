import { PureComponent } from 'react';
import { Btn } from './Button.styled';

export class Button extends PureComponent {
  render() {
    console.log('render');
    return (
      <Btn
        name={this.props.name}
        type="button"
        className="btn btn-primary"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Btn>
    );
  }
}
