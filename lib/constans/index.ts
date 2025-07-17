export const APP_NAME = process.env.APP_NAME || "egystore";
export const APP_DESC =
  process.env.APP_DESC || "The best ecommerce in egypt out here.";

export const APP_SERVER_URL =
  process.env.APP_SERVER_URL || "http://localhost:3000";

export const APP_LATEST_PRODUCTS_LIMIT =
  Number(process.env.APP_LATEST_PRODUCTS_LIMIT) || 4;
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
