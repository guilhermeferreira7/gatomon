import * as SQLite from "expo-sqlite";

import User from "./entities/User";

const config = {
  database: "mydatabase",
  driver: SQLite,
  entities: [User],
  synchronize: true,
  type: "expo",
};

export default config;
