import React, { FC } from 'react';
import { TabSetting } from './Tabs/TabSetting';
import { TabLinks } from './Tabs/TabLinks';

interface Props {}
export const Popup: FC<Props> = function (_props) {
  return (
    <div>
      <Tabs defaultActiveKey={'setting'}>
        <Tabs.TabPane tabKey={'setting'} key={'setting'} tab={'设置'}>
          <TabSetting />
        </Tabs.TabPane>
        <Tabs.TabPane tabKey={'links'} key={'links'} tab={'链接'}>
          <TabLinks />
        </Tabs.TabPane>
        <Tabs.TabPane tabKey={'test'} key={'test'} tab={'测试'}>
          test
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
