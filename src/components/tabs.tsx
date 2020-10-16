import React, { FC } from 'react';
import { Provider, useCtx } from './utils';

interface Props {}
export const Tabs: FC<Props> = function (_props) {
  return (
    <Provider>
      <div>tabs</div>
    </Provider>
  );
};

function TabHeader() {}

function TabBox() {}

export interface PropsTabPane {
  tabKey: string;
  tabLabel: string;
  children: any;
}
export function TabPane(props: PropsTabPane) {
  const { state, update } = useCtx(['activeKey']);
  if (state.activeKey === props.tabKey) {
    return <div>{props.children}</div>;
  }
  return null;
}
