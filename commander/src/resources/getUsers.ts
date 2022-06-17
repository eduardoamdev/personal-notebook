import * as bcrypt from "bcrypt";
import { User } from "../interfaces/user.interface";

export default function getUsers() {
  const users: User[] = [
    {
      username: "Mariano",
      password: "Mariano12?",
    },
    {
      username: "Alfredo",
      password: "Alfredo12?",
    },
  ];

  users.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT));
  });

  return users;
}
