import { getPostgresData } from "./getPostgresData";

getPostgresData().then((data) => {
  console.log("Direct call result:", data);
  process.exit(0);
});
