import * as fs from "fs/promises";
const USERS_FILE = "./data/Users.json";

export async function getAll() {
  try {
    let usersTxt = await fs.readFile(USERS_FILE);
    let users = JSON.parse(usersTxt);
    return users;
  } catch (err) {
    if (err) {
      await save([]);
      return []; 
    }
  }
}


export async function addCart(id) {
  try {
  let users = await getAll();

  if (users) {
    const filteredUsers = users.filter((user) => user.UserId === id);
    let filteredUser = filteredUsers[0];
   if (users.includes(filteredUser)) {
      const usersJson = JSON.stringify(users);
      await fs.writeFile(USERS_FILE, usersJson);}
    }
  }
  catch (err) {
    if (err) {
      console.log(err);
    }
  }
}

