const { Account } = require("./account");

const getAccounts = async (req, res) => {
  try {
    const Accounts = await Account.findAll();

    sendResponse(res, true, "Account Fetched Successfully!", Accounts);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Account Fetch Unsuccessful!", err);
  }
};

const sendResponse = async (res, status, message, resultOrErr, code=200) => {
  res.status(code).send({
    status: status,
    message: message,
    data: resultOrErr
  });
};

module.exports = {
  getAccounts
};
