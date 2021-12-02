import UserModel from '../models/user.model';

const userInfrastructure = {
  get: async ({ condition = {}, skip = 0, limit = 0, sort }) => {
    console.log(condition, skip, limit);
    try {
      const result = await UserModel.find(condition)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .lean();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  post: async ({ data }) => {
    try {
      const result = await UserModel.create(data);
      console.log('result', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userInfrastructure;
