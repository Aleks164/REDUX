export type Store<State = any, Action = { type: string }> = {
  getState(): State | undefined;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
};

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type Middleware<State, Action> = (
  store: Store<State, Action>
) => (next: (action: Action) => any) => (action: Action) => any;

export type Subscriber = () => void;

export type ConfigureStore<State, Action> = (
  reducer: Reducer<State, Action>,
  initialState?: State | undefined,
  middlewares?: Middleware<State, Action>[]
) => Store<State, Action>;

export function configureStore<State = any, Action = { type: string }>(
  reducer: Reducer<State, Action>,
  state?: State | undefined,
  middlewares?: Middleware<State, Action>[]
): Store<State, Action> {
  const subscribers = new Set<Subscriber>([]);
  const getState = (): State | undefined => {
    return state;
  };
  const dispatch = (action: Action) => {
    // eslint-disable-next-line no-param-reassign
    state = reducer(state, action);
    subscribers.forEach((el) => {
      el();
    });
  };
  const subscribe = (subscriber: Subscriber) => {
    subscribers.add(subscriber);
    return () => {
      subscribers.delete(subscriber);
    };
  };
  const store = {
    getState,
    dispatch,
    subscribe,
  };

  middlewares?.forEach((middleware) => {
    store.dispatch = middleware(store)(store.dispatch);
  });

  return store;
}
