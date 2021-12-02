import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import Jwt from 'jsonwebtoken';

import { DEMO_USER } from '../utils/constants';

const controller = {
  login: async (req, res, next) => {
    try {
      const myHash =
        '$2b$10$NWJYCQ1Vhr971H83LDr7yORdV8J9rl3eOM9cMHDFXuXL54uQGmyUu';
      const myKey = fs.readFileSync(path.resolve('private.key'), 'utf8');
      const { username, password } = req.body;
      if (username !== DEMO_USER) {
        return res.json({ msg: 'User not found', code: 90010 });
      }
      if (!bcrypt.compareSync(password, myHash)) {
        return res.json({ msg: 'Username or password wrong', code: 90009 });
      }
      const token = Jwt.sign(
        { username: DEMO_USER, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        myKey,
        { algorithm: 'HS256' },
      );
      res.json({ msg: 'OK', code: 90011, token });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
