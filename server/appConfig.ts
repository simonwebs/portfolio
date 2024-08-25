interface AppConfig {
    mailUrl: string;
    rootUrl: string;
    allowedOrigins: string[];
    maxCacheAge: string;
  }
  
  const appConfig: AppConfig = {
    mailUrl: process.env.SMTP_URL || 'smtp://username:password@smtp.YOUR_APP_NAME:587',
    rootUrl: process.env.ROOT_URL || 'http://localhost:3000',
    allowedOrigins: [
      'http://localhost:3000',
    ],
    maxCacheAge: '1d', // Cache duration as a string (1 day)
  };
  
  export default appConfig;
  