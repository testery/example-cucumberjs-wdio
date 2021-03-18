const dotenv = require('dotenv');
dotenv.config();

export const defaultTimeout = 5000;
export const baseWebUrl = process.env.TEST_WEB_URL;
export const testUser = process.env.TEST_USER;
export const testPass = process.env.TEST_PASS;