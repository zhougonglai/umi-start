import { query, login, schedules, schedule } from '@/services/user';

export default {
  namespace: 'app',
  state: {
    user: {},
    schedules: [],
    schedule: {},
    ua: {
      target: '',
      parsed: {},
    },
    network: {
      onLine: false,
      connection: {},
    },
  },
  effects: {
    *queryTeacher({ payload }, { call, put }) {
      const { data } = yield call(query, payload);
      yield put({ type: 'setUser', payload: data });
      return data;
    },
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, payload);
      yield put({ type: 'setUser', payload: data });
      return data;
    },
    *querySchedules({ payload }, { call, put }) {
      const { data } = yield call(schedules, payload);
      yield put({ type: 'setSchedules', payload: data });
      return data;
    },
    *querySchedule({ payload }, { call, put }) {
      const { data } = yield call(schedule, payload);
      yield put({ type: 'setSchedule', payload: data });
      return data;
    },
  },
  reducers: {
    setUser(state, { payload: user }) {
      return {
        ...state,
        user,
      };
    },
    setSchedules(state, { payload: schedules }) {
      return {
        ...state,
        schedules,
      };
    },
    setSchedule(state, { payload: schedule }) {
      return {
        ...state,
        schedule,
      };
    },
    setUA(
      state,
      {
        payload: { target, parsed },
      }
    ) {
      return {
        ...state,
        ua: {
          target,
          parsed,
        },
      };
    },
    setNetwork(state) {
      const { connection, onLine } = navigator;
      if (connection && 'type' in connection) {
        const { downlink, downlinkMax, effectiveType, type } = connection;
        return {
          ...state,
          network: {
            onLine,
            connection: {
              downlink,
              downlinkMax,
              effectiveType,
              type,
            },
          },
        };
      } else {
        return {
          ...state,
          network: {
            onLine,
            connection: {},
          },
        };
      }
    },
  },
};
