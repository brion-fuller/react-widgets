/* eslint-disable no-undef */
import React from 'react';

import Checkbox from './index';

describe('<Checkbox />', () => {
  describe('render children', () => {
    let component;
    beforeEach(() => {
      component = shallow(<Checkbox id={'test'} />);
    });
    it('input element', () => {
      expect(component.find('input').length).to.equal(1);
    });
    it('checkbox span element', () => {
      expect(component.find('.checkbox').length).to.equal(1);
    });
    it('label span element', () => {
      expect(component.find('.label').length).to.equal(1);
    });
  });
  describe('onChange callback', () => {
    it('when input is changed with value prop and opposite checked value', () => {
      const changeSpy = spy();
      const component = mount(<Checkbox id={'test'} onChange={changeSpy} value={1} />);
      component.find('.input').simulate('change');
      expect(changeSpy).to.have.been.calledWith(true, 1);
    });
    it('noop if not passed in', () => {
      const component = mount(<Checkbox id={'test'} />);
      expect(component.props().onChange).to.equal(undefined);
    });
  });
  describe('`name` prop', () => {
    it('not set => input prop `name` equal id', () => {
      const component = shallow(<Checkbox id={'test'} />);
      expect(component.find('input').props().name).to.equal('test');
    });
    it('set => input prop `name` does not equal id', () => {
      const component = shallow(<Checkbox id={'test'} name={'name'} />);
      expect(component.find('input').props().name).to.equal('name');
    });
  });
  describe('`id` prop', () => {
    it('equals input prop `id`', () => {
      const component = shallow(<Checkbox id={'test'} />);
      expect(component.find('input').props().id).to.equal('test');
    });
    it('equals label container prop `for`', () => {
      const component = shallow(<Checkbox id={'test'} />);
      expect(component.find('.labelContainer').props().htmlFor).to.equal('test');
    });
  });
});
