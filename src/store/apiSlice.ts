import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Schedule } from '../interfaces/Schedule';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7100/api' }),
  endpoints: (builder) => ({
    getSchedulesByService: builder.query<Schedule[], number>({
      query: (serviceId) => `schedules/${serviceId}`,
      // Los datos se mantienen en caché hasta que se actualice la aplicación
      keepUnusedDataFor: Infinity,
    }),
  }),
});

export const { useGetSchedulesByServiceQuery } = api; 