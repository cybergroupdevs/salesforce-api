const { Contact } = require("./contact");

const getContact = async (req, res) => {
  try {
    const sfid = req.params.id;
    const ContactData = await Contact.findOne({
      where: {
        sfid: sfid
      }
    });

    sendResponse(res, true, "Contact Fetched Successfully!", ContactData);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Contact Fetch Unsuccessful!", err, 404);
  }
};

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
  getContacts,
  getContact
};
