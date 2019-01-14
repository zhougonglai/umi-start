import { query, schedules } from '@/services/user';

export default {
  namespace: 'app',
  state: {
    user: {},
    schedules: [],
  },
  effects: {
    *queryTeacher({payload} , {call, put}) {
      const {data} = yield call(query, payload)
      yield put({type: 'setUser', payload: data})
      return data;
    },
    *querySchedule({payload}, {call, put}) {
      const {data} = yield call(schedules, payload)
      yield put({type: 'setSchedules', payload: data})
      return data;
    }
  },
  reducers: {
    setUser (state, {payload: user}) {
      return {
        ...state,
        user
      }
    },
    setSchedules (state, {payload: schedules}) {
      return {
        ...state,
        schedules
      }
    }
  }
}
