import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-tu",
  apiKey: process.env.REACT_APP_CMS_API,
});
