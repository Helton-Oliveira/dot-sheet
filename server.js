import "dotenv/config";
import app from "./app.js";

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`servidor excutando na porta ${PORT}`);
});