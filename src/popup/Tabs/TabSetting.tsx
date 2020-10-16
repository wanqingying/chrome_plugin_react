import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { useSyncStorageGet } from '../utils';

interface Fv {
  dev_path: string;
}
interface Props {}
export const TabSetting: FC<Props> = function (_props) {
  const [form] = Form.useForm<Fv>();
  const [state, setState] = useSyncStorageGet(['dev_path']);
  return (
    <div>
      <Form<Fv>
        form={form}
        initialValues={state}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item label={'开发环境'} name={'dev_path'}>
          <Input />
        </Form.Item>
      </Form>
      <Button
        type={'primary'}
        onClick={e => {
          const fv = form.getFieldsValue();
          setState(fv);
        }}
      >
        保存
      </Button>
    </div>
  );
};
