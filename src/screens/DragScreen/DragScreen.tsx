import React, { FC } from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { DragDropList } from '../../components/DragDropList';
import { DragDrop } from '../../components/DragDrop';
import { Screen } from '../../components/Screen';
import { colors } from '../../styles';
import bgImage from '../../assets/images/background.png';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

/**
 * First screen a logged out user sees, welcoming them to the app.
 */
export const DragScreen: FC<NavigationScreenProps> = ({ navigation }) => {
  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Screen testID="dragScreen" backgroundColor={colors.transparent} paddingTop={60}>
        <DragDrop />
      </Screen>
    </BackgroundImage>
  );
};
