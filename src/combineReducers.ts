import { Reducer } from "./configureStore";

export type Reducers<State, Action> = {
  [key: string]: Reducer<State, Action> | any;
};

export type States = {
  [key: string]: any;
};

export function combineReducers<State, Action>(
  reducersMap: Reducers<State, Action> = {}
): any {
  const enteris = Object.entries(reducersMap);

  return (state: State | any, action: Action) => {
    const result: States = {};

    enteris.forEach((item) => {
      const [key, reducer] = item;
      result[key] = reducer(state && state[key], action);
    });
    return result;
  };
}
