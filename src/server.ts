import app from "./app";
import config from "./config";

const PORT = config.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Status check at ${PORT}/status`);
});
