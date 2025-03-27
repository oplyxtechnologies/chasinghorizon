const cron = require("node-cron");
const Auth = require("../../model/auth.model");
const { Op } = require("sequelize");

const deleteUnverifiedUser = async () => {
  try {
    const result = await Auth.destroy({
      where: {
        isVerified: false,
        createdAt: {
          [Op.lt]: new Date(Date.now() - 3600000),
        },
      },
    });
    {
      result > 0 ? console.log(`Deleted ${result} unverified accounts.`) : null;
    }
  } catch (error) {
    console.error(error.message);
  }
};

cron.schedule("* * * * *", deleteUnverifiedUser);
