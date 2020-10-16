import React from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import './index.css';
import { Popup } from './popup';
import { Provider } from './utils/help';

const App = () => {
  return (
    <div>
      <Provider>
        <Popup />
      </Provider>
    </div>
  );
};

export default App;
