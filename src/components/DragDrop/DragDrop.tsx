import React, { FC } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { DraxProvider, DraxView } from 'react-native-drax';
import { BorderProps, ColorProps, SpaceProps, FlexProps } from 'styled-system';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

type ComponentProps = FlexProps & SpaceProps & BorderProps & ColorProps;

export const DragDrop: FC<ComponentProps> = ({ children, ...props }) => {
  return (
    <DraxProvider>
      <View style={styles.container}>
        <DraxView
          testID="drag-item-1"
          style={styles.draggable}
          payload="blueeee"
          onDragStart={(): any => {
            console.log('start drag blue');
          }}
          onReceiveDragEnter={({ dragged: { payload } }): any => {
            console.log(`hello ${payload}`);
          }}
          onReceiveDragExit={({ dragged: { payload } }): any => {
            console.log(`goodbye ${payload}`);
          }}
          onReceiveDragDrop={({ dragged: { payload } }): any => {
            console.log(`received ${payload}`);
            Alert.alert('Droped!', `received ${payload}`);
          }}
        />
        <DraxView
          testID="drag-item-2"
          style={styles.receiver}
          payload="weeeed"
          onDragStart={(): any => {
            console.log('start drag green');
          }}
          onReceiveDragEnter={({ dragged: { payload } }): any => {
            console.log(`hello ${payload}`);
          }}
          onReceiveDragExit={({ dragged: { payload } }): any => {
            console.log(`goodbye ${payload}`);
          }}
          onReceiveDragDrop={({ dragged: { payload } }): any => {
            console.log(`received ${payload}`);
            Alert.alert('Droped!', `received ${payload}`);
          }}
        />
      </View>
    </DraxProvider>
  );
};
