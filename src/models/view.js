export default {
  namespace: 'view',
  state: {
    tabs: {
      home: {
        search: false,
      },
      schedule: {},
      account: {},
      select: 'home',
    },
    theme: {
      light: {},
      dark: {},
      mode: 'light',
    },
  },
  effects: {
    *select({ payload }, { call, put }) {
      const date = new Date();
      if (payload === 'account') {
        yield put({ type: 'app/queryTeacher', payload: 70816 });
        yield put({ type: 'selectTab', payload });
      } else if (payload === 'schedule') {
        yield put({
          type: 'app/querySchedules',
          payload: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        });
        yield put({ type: 'selectTab', payload });
      } else if (payload === 'home') {
        yield put({ type: 'selectTab', payload });
      }
    },
  },
  reducers: {
    homeSearch(state, { payload }) {
      return {
        ...state,
        tabs: {
          ...state.tabs,
          home: {
            ...state.tabs.home,
            search: payload,
          },
        },
      };
    },
    selectTab(state, { payload }) {
      return {
        ...state,
        tabs: {
          ...state.tabs,
          select: payload,
        },
      };
    },
    themeMode(state, { payload }) {
      return {
        ...state,
        theme: {
          ...state.theme,
          mode: payload,
        },
      };
    },
  },
};
