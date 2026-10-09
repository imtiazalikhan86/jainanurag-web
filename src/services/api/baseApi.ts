import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LeadRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface LeadResponse {
  reference: string;
  receivedAt: string;
}

/**
 * The single RTK Query API slice. Server state belongs here rather than in hand-written
 * slices, which is why there is no `isLoading` boolean maintained by hand anywhere.
 *
 * The homepage is static content and touches none of this; it exists so the contact form
 * and any later authenticated screens plug in without restructuring the store.
 */
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL ?? '/api',
  }),
  tagTypes: ['Lead'],
  endpoints: (builder) => ({
    submitLead: builder.mutation<LeadResponse, LeadRequest>({
      query: (body) => ({ url: '/leads', method: 'POST', body }),
      invalidatesTags: ['Lead'],
    }),
  }),
});

export const { useSubmitLeadMutation } = baseApi;
