export default {
  namespace: 'view',
  state: {
    tabs: {
      home: {},
      schedule: {},
      account: {},
      select: 'home'
    },
    todoList: []
  },
  reducers: {
    delete(state, { payload: id }) {
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== id)
      };
    },
    add(state, {payload}) {
      return {
        ...state,
        todoList: state.todoList.concat([payload])
      };
    },
    select(state, {payload}) {
      return {
        ...state,
        tabs: {
          ...state.tabs,
          select: payload
        }
      }
    }
  }
}