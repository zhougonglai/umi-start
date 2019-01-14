export default {
  namespace: 'view',
  state: {
    tabs: {
      home: {
        search: false,
      },
      schedule: {},
      account: {},
      select: 'home'
    },
    theme: {
      light: {},
      dark: {},
      mode: 'light'
    }
  },
  reducers: {
    homeSearch(state, {payload}){
      return {
        ...state,
        tabs: {
          ...state.tabs,
          home: {
            ...state.tabs.home,
            search: payload
          }
        }
      }
    },
    select(state, {payload}) {
      return {
        ...state,
        tabs: {
          ...state.tabs,
          select: payload
        }
      }
    },
    themeMode (state, {payload}) {
      return {
        ...state,
        theme: {
          ...state.theme,
          mode: payload
        }
      }
    }
  }
}
