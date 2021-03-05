import React, { FC } from 'react';
import { Alert, ImageBackground, StatusBar, StyleSheet, View, Text } from 'react-native';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import { BorderProps, ColorProps, SpaceProps, FlexProps } from 'styled-system';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getBackgroundColor = (alphaIndex): string => {
  switch (alphaIndex % 6) {
    case 0:
      return '#ffaaaa';
    case 1:
      return '#aaffaa';
    case 2:
      return '#aaaaff';
    case 3:
      return '#ffffaa';
    case 4:
      return '#ffaaff';
    case 5:
      return '#aaffff';
    default:
      return '#aaaaaa';
  }
};

const getHeight = (alphaIndex): number => {
  let height = 50;

  if (alphaIndex % 2 === 0) {
    height += 10;
  }

  if (alphaIndex % 3 === 0) {
    height += 20;
  }

  return height;
};

const getItemStyleTweaks = (alphaItem): any => {
  const alphaIndex = alphabet.indexOf(alphaItem);
  return {
    backgroundColor: getBackgroundColor(alphaIndex),
    height: getHeight(alphaIndex),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
  },
  alphaItem: {
    backgroundColor: '#aaaaff',
    borderRadius: 8,
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphaText: {
    fontSize: 28,
  },
});

type ComponentProps = FlexProps & SpaceProps & BorderProps & ColorProps;

export const DragDropList: FC<ComponentProps> = ({ children, ...props }) => {
  const [alphaData, setAlphaData] = React.useState(alphabet);
  return (
    <DraxProvider>
      <View style={styles.container}>
        <DraxList
          data={alphaData}
          renderItemContent={({ item }): any => (
            <View style={[styles.alphaItem, getItemStyleTweaks(item)]}>
              <Text style={styles.alphaText}>{item}</Text>
            </View>
          )}
          onItemReorder={({ fromIndex, toIndex }): any => {
            const newData = alphaData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setAlphaData(newData);
          }}
          keyExtractor={(item: any) => item}
        />
      </View>
    </DraxProvider>
  );
};
