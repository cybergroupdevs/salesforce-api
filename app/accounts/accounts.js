const { Account } = require("./account");
const { Contact } = require("../contacts/contact");

const getAccount = async (req, res) => {
  try {
    const sfid = req.params.id;
    const AccountData = await Account.findOne({
      where: {
        sfid: sfid
      }
    });

    sendResponse(res, true, "Account Fetched Successfully!", AccountData);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Account Fetch Unsuccessful!", err, 404);
  }
};

const getAccounts = async (req, res) => {
  try {
    const Accounts = await Account.findAll();

    sendResponse(res, true, "Account Fetched Successfully!", Accounts);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Account Fetch Unsuccessful!", err);
  }
};

const getAccountContacts = async (req, res) => {
  console.log('here');
  try {
    const sfid = req.params.id;
    const AccountData = await Account.findOne({
      where: {
        sfid: sfid
      }
    });
    if (AccountData){
      const ContactData = await Contact.findAll({
        where: {
          accountid: sfid
        }
      });

      sendResponse(res, true, "Account Contacts Fetched Successfully!", ContactData);
    } else {
      sendResponse(res, false, "Account Contacts Fetch Unsuccessful!", err, 404);
    }
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
  getAccount,
  getAccounts,
  getAccountContacts
};
