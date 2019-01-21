import request from '@/utils/request';

const basePath = 'https://www.easy-mock.com/mock/5c34bf0190862b0b0cf503c0';

export const query = id => request.get(`${basePath}/teacher/${id}`);
export const login = ({id, password}) => request.post(`${basePath}/teacher`,{id, password});
export const schedules = date => request.get(`${basePath}/schedules/${date}`);
export const schedule = id => request.get(`${basePath}/schedule/${id}`);

