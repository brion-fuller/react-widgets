/* eslint-disable no-underscore-dangle, import/no-extraneous-dependencies */
// import 'ignore-styles';
import React from 'react';
import chai, { expect } from 'chai';
import sinon, { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import { shallow, mount } from 'enzyme';

import { jsdom } from 'jsdom';
import 'mock-css-modules';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

chai.use(sinonChai);

global.React = React;
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
global.mount = mount;
global.spy = spy;
global.__DEV__ = true;
global.__CLIENT__ = true;
global.__SERVER__ = false;
/* eslint-enable  no-underscore-dangle, import/no-extraneous-dependencies */
