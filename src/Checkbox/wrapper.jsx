import React, { Component, PropTypes } from 'react';
import Checkbox from '../Checkbox';

export default class CheckBoxWrapper extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    selected: PropTypes.bool,
    value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    label: PropTypes.string,
  }
  static defaultProps = {
    onChange: null,
    selected: false,
    value: 1,
    label: '\u00A0',
  }
  constructor(props) {
    super(props);
    this.state = {
      selected: !!props.selected,
      onChange: props.onChange,
    };
  }
  render() {
    return (
      <Checkbox
        id={'checkbox'}
        label={this.props.label}
        checked={this.state.selected}
        onChange={(selected, ...args) => {
          this.setState({ selected });
          this.props.onChange(selected, ...args);
        }}
        value={this.props.value}
      />
    );
  }
}
