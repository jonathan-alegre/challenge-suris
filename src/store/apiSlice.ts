import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Schedule } from '../interfaces/Schedule';

const port = 7152;

export const api = createApi({        
  baseQuery: fetchBaseQuery({ baseUrl: `https://localhost:${port}/api` }),
  endpoints: (builder) => ({
    getSchedulesByService: builder.query<Schedule[], number>({
      query: (serviceId) => `schedule/GetByService/${serviceId}`,
      // Los datos se mantienen en caché hasta que se actualice la aplicación
      keepUnusedDataFor: Infinity,
    }),
  }),
});

export const { useGetSchedulesByServiceQuery } = api; 