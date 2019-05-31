const { Case } = require("./case");

const createCase = async (req, res) => {
  try {
    const CaseData = req.body;
    const result = await Case.create(CaseData);
    sendResponse(res, true, "Case Created Successfully!", result);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Case Create Unsuccessful!", err, 406);
  }
};

const getCase = async (req, res) => {
  try {
    const id = req.params.id;
    const CaseData = await Case.findOne({
      where: {
        id: id
      }
    });

    sendResponse(res, true, "Case Fetched Successfully!", CaseData);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Case Fetch Unsuccessful!", err, 404);
  }
};

const getCases = async (req, res) => {
  try {
    const Cases = await Case.findAll();

    sendResponse(res, true, "Case Fetched Successfully!", Cases);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Case Fetch Unsuccessful!", err);
  }
};

const updateCase = async (req, res) => {

  try {
    const id = req.params.id,
    updateCaseData = req.body;

    const result = await Case.update(
      updateCaseData,
      {returning: true, where: {id: id} }
    );
    sendResponse(res, true, "Case Updated Successfully!", result[1][0]);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Case Update Unsuccessful!", err, 406);
  }
};

const deleteCase = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Case.destroy(
      {
        where: { id: id }
      }
    );

    sendResponse(res, true, "Case Deleted Successfully!", result);
  } catch (err) {
    console.log(err)
    sendResponse(res, false, "Case Delete Unsuccessful!", err);
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
  createCase,
  getCase,
  getCases,
  updateCase,
  deleteCase
};
