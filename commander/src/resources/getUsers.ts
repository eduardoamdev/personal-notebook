import * as bcrypt from "bcrypt";
import { User } from "../interfaces/user.interface";

export default function getUsers() {
  const users: User[] = [
    {
      username: "Eduardo",
      password: "Eduardo2906?",
    },
  ];

  users.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.SALT));
  });

  return users;
}
