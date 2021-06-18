import axios from 'axios';

const createAxiosInstance = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL: 'ticketing-app-prod-dominikkrajcer.xyz',
      // baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default createAxiosInstance;
