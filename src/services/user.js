import request from '@/utils/request';

const basePath = 'https://www.easy-mock.com/mock/5c34bf0190862b0b0cf503c0';

export const query = id => request.get(`${basePath}/teacher/${id}`);

export const schedules = date => request.get(`${basePath}/schedules/${date}`);
