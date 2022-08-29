import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoExchangeApiHeaders = {
  "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
  "X-RapidAPI-Key": "6c5b673012mshd0c86d69c8cb531p148503jsnee5fb034ce09",
};
const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoExchangeApiHeaders });

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest("/api/exchanges/"),
    }),
    // getCryptoExchanges2: builder.query({
    //   query: () => createRequest("/api/exchanges/?id=5"),
    // }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangeApi;
