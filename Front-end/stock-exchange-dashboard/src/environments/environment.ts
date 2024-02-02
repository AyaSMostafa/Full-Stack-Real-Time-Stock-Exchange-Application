// environment.ts

export const environment = {
    production: false,
    apiUrl: 'http://localhost:5209/api', // Update with your backend API URL
    websocketUrl: 'http://localhost:5209/stockHub', // Update with your SignalR WebSocket URL
    jwtConfig: {
      issuer: 'http://localhost:5209', // Update with your backend API URL
      audience: 'http://localhost:4200/', // Update with your Angular app URL
      secret: 'WTeeeg1jNZc3DRgFk2Y96gX084/CF1cRwaCOzEm8dLA=' // Update with your JWT secret
    }
  };
  