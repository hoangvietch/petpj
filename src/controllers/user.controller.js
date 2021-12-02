import { validationResult } from 'express-validator';
import userInfrastructure from '../infrastructures/user.infrastructure';

const controller = {
  getAllUsers: async (req, res, next) => {
    try {
      const filter = { sort: '' };
      const users = await userInfrastructure.get(filter);
      res.json({ msg: 'OK', result: users });
    } catch (error) {
      next(error);
    }
  },
  getUsers: async (req, res, next) => {
    try {
      const filter = {
        condition: {},
        skip: 0,
        limit: 10,
        sort: '',
      };
      const users = await userInfrastructure.get(filter);
      res.json({ msg: 'OK', result: users });
    } catch (error) {
      next(error);
    }
  },
  addUser: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const data = req.body;
      const user = await userInfrastructure.post({ data });
      res.json({ msg: 'OK', data: user });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
