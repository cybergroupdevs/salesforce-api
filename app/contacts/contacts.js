const { Contact } = require("./contact");

const getContacts = async (req, res) => {
  try {
    const Contacts = await Contact.findAll();

    sendResponse(res, true, "Contact Fetched Successfully!", Contacts);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Contact Fetch Unsuccessful!", err);
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
  getContacts
};
