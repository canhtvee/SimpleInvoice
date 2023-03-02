import React from 'react';
import {
  Edge,
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {Colors} from '../../utils';

type EdgesType = 'lr' | 'lrt' | 'lrb' | 'lrtb';

export interface AppContainerProps
  extends Omit<NativeSafeAreaViewProps, 'edges'> {
  edges?: EdgesType;
}

const EdgesValues: Record<EdgesType, ReadonlyArray<Edge>> = {
  lr: ['left', 'right'],
  lrt: ['left', 'right', 'top'],
  lrb: ['left', 'right', 'bottom'],
  lrtb: ['left', 'right', 'top', 'bottom'],
};

export function AppContainer({
  children,
  style,
  edges = 'lr',
  ...safeViewProps
}: AppContainerProps) {
  return (
    <SafeAreaView
      edges={EdgesValues[edges]}
      style={[
        {
          flex: 1,
          justifyContent: 'flex-start',
          backgroundColor: Colors.background,
        },
        style,
      ]}
      {...safeViewProps}>
      {children}
    </SafeAreaView>
  );
}
