import * as bcrypt from "bcrypt";
import { User } from "../interfaces/user.interface";

export default function getUsers() {
  const users: User[] = [
    {
      username: "eduardo",
      password: "eduardo2906",
    },
  ];

  users.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT));
  });

  return users;
}
