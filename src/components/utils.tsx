import { getCtx } from '../utils';
interface StateTabs {
  activeKey: string;
}
const iniState: StateTabs = {
  activeKey: '',
};
export const { Provider, update, useCtx } = getCtx<StateTabs>(iniState);
