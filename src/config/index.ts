import dotenv from "dotenv";

const config: {
  PORT?: string;
  ATLAS_URI?: string;
  JWT_SECRET?: string;
  LOGIN_USER_NAME?: string;
  LOGIN_PASSWORD?: string;
  UI_URL?: string;
} = {};

dotenv.config({ processEnv: config });

export default config;
