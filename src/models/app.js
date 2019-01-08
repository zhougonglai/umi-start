import { request } from '@/utils';

export default {
  namespace: 'app',
  state: {
    user: {},
    permissions: {
      visit: [],
    },
    routeList: [],
    locationPathname: '',
    locationQuery: {},
    callapesd: false,
  },
  effects: {
    *queryTeacher({payload} , {call, put}) {
      const {data} = yield call(request.get, `${process.env.NODE_ENV === "development" ? '/yapi' : 'http://yapi.demo.qunar.com/mock/35763'}/teacher/${payload}`)
      yield put({type: 'setUser', payload: data})
    }
  },
  reducers: {
    setUser (state, {payload: user}) {
      return {
        ...state,
        user
      }
    }
  }
}