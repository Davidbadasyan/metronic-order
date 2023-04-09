import axios from 'axios';
import tokenInterceptor from '@/core/services/interceptors/tokenInterceptor';
import authInterceptor from '@/core/services/interceptors/tokenInterceptor';

export default ({ url, version }) => {
  const instance = axios.create({
    baseURL: `${url}/${version}`,
    headers: { Pragma: 'no-cache' },
  });

  instance.interceptors.request.use(tokenInterceptor);
  instance.interceptors.response.use((response) => response, authInterceptor);
  return instance;
};
