import { getCtx } from './index';

interface PageState {
  devPath: string;
}
const iniState: PageState = {
  devPath: '',
};
export const { useCtx, update, Provider } = getCtx<PageState>(iniState);
