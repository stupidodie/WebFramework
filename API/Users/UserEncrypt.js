import sign from "jsonwebtoken/sign.js";

// Here is a secret key for generating the token
export const SECRET_KEY = "SECRT_KEY";
const VALID_TIME = 60 * 60 * 1;

export async function encryptUserId(userId) {
  const token = sign({ userId }, SECRET_KEY, { expiresIn: VALID_TIME });
  return token;
}
