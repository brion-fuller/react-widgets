import React, { PureComponent, PropTypes } from 'react';

import styles from './styles.css';

export default class CheckBox extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    label: '',
    value: undefined,
    name: undefined,
    checked: false,
    onChange: undefined,
  }
  getName() {
    return ((this.props.name === undefined) ? this.props.id : this.props.name);
  }
  render() {
    return (
      <div className={styles.container}>
        <input
          id={this.props.id}
          type="checkbox"
          name={this.getName()}
          className={styles.input}
          checked={this.props.checked}
          onChange={this.props.onChange ? () => this.props.onChange(!this.props.checked, this.props.value) : null}
        />
        <label htmlFor={this.props.id} className={styles.labelContainer}>
          <span className={styles.checkbox} />
          <span className={styles.label}>{this.props.label}</span>
        </label>
      </div>
    );
  }
}
