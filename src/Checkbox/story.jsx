import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs } from 'storybook-addon-specifications';

import Checkbox from './index';
import CheckBoxWrapper from './wrapper';
import spec from './spec';

storiesOf('<Checkbox />', module)
  .add('with label', () => (<Checkbox id={'checkbox'} label={'Checkbox'} />))
  .add('with label checked', () => (<Checkbox id={'checkbox'} label={'Checkbox'} checked />))// $('#checkbox').focus()
  .add('with focus', () => {
    specs(() => spec);
    setTimeout(() => document.getElementById('checkbox').focus(), 750);
    return (<Checkbox id={'checkbox'} label={'Checkbox'} checked />);
  })
  .add('with onChange action and value', () => (<Checkbox id={'checkbox'} label={'Checkbox'} onChange={action('onChange')} value={1} />))
  .add('with higher order state component', () => (<CheckBoxWrapper id={'checkbox'} label={'Checkbox'} onChange={action('onChange')} value={1} />));

