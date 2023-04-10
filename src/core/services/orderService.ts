import baseService from "@/core/services/baseService";

const url = import.meta.env.VITE_APP_API_URL;

export default (version = 'v1', useInterceptor: boolean = true) => baseService({ url, version, useInterceptor });
