const isDev = process.env.NODE_ENV === 'development';

let config = {
  request: {
    token: ['9c48ed2297d7d9bf9447', '6de723dbf1a6e4adeacd'],
    clientID: isDev ? '56af6ab05592f0a2d399' : '694df1779e48d5a450d3',
    clientSecret: isDev
      ? '5d7e71a1b6130001e84956420ca5b88bc45b7d3c'
      : '23420dd29f671adc5107a5565ed47f655f8e1260',
    pageSize: 6,
    autoProxy:
      'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token',
    owner: 'SimonAKing',
    repo: 'weibo',
  },

  app: {
    onlyShowOwner: false,
    enableRepoSwitcher: true,
    enableAbout: false,
    enableEgg: false,
  },
};

const gConfig = (window as any).GWITTER_CONFIG;

if (gConfig) {
  if (gConfig.request) {
    config.request = {
      ...config.request,
      ...gConfig.request,
    };
  }
  if (gConfig.app) {
    config.app = {
      ...config.app,
      ...gConfig.app,
    };
  }
}

export default config;
