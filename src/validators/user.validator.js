import { check } from 'express-validator';

const userValidator = () => [
  check('email').isEmail(),
  check('phone').isMobilePhone(),
];

export default userValidator;
