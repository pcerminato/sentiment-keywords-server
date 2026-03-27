import dotenv from "dotenv";

const config: { PORT?: string; ATLAS_URI?: string } = {};

dotenv.config({ processEnv: config });

export default config;
