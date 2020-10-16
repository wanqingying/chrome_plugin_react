import React, { useEffect, createContext, useContext } from 'react';
import { get, cloneDeep, isEqual } from 'lodash';

class CtxState<T> {
  state: T;
  constructor(iniState: T) {
    this.state = iniState;
  }
  updates: { fn: any; keys: string[] | any }[] = [];
  update = (fn: (state: T) => any) => {
    let newState;
    const preState = cloneDeep(this.state);
    if (typeof fn === 'function') {
      newState = fn(this.state);
    } else {
      newState = fn;
    }
    this.state = Object.assign(this.state, newState);
    const newKeys = Object.keys(preState).filter(k => {
      return !isEqual(get(preState, k), get(this.state, k));
    });
    this.updates.forEach(item => {
      const { fn, keys } = item;
      if (Array.isArray(keys)) {
        if (newKeys.find(k => keys.includes(k))) {
          fn();
        }
      } else {
        fn();
      }
    });
  };
}
export function getCtx<T>(
  iniState: T,
): {
  Provider: any;
  update: (fn: (state: T) => T | any) => void;
  useCtx: (
    keys?: (keyof T)[],
  ) => {
    state: T;
    update: (fn: (state: T) => T | any) => void;
  };
} {
  const state = new CtxState<T>(iniState);
  const Ctx = createContext(state);
  function Provider(props: any) {
    return <Ctx.Provider value={state}>{props.children}</Ctx.Provider>;
  }
  function useCtx(keys?: (keyof T)[]) {
    const ctx = useContext(Ctx);
    const [count, setCount] = React.useState(0);
    const countRef = React.useRef(count);
    const fnRef = React.useRef(function () {
      setCount(countRef.current + 1);
    });
    countRef.current = count;
    useEffect(function () {
      ctx.updates.push({ fn: fnRef.current, keys });
      return function () {
        ctx.updates = ctx.updates.filter(item => item.fn !== fnRef.current);
      };
    }, []);
    return { state: ctx.state, update: ctx.update };
  }
  return { Provider, useCtx, update: state.update };
}
