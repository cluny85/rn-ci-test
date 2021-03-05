import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../Screen';
import { colors } from '../../styles';
import { Login } from './Login';

const ScreenDecorator = storyFn => <Screen padding={10}>{storyFn()}</Screen>;

storiesOf('components/Login', module)
  .addDecorator(ScreenDecorator)
  .add('Default', (): any => (
    <Login
      loginPress={(): any => console.log('login pressed')}
      forgotPasswordPress={(): any => console.log('forgot password pressed')}
      registrationPress={(): any => console.log('registration pressed')}
    />
  ));
