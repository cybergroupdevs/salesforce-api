const { Case } = require("./Case");

const createCase = async (req, res) => {
  try {
    const CaseData = req.body;
    const Case = new Case(CaseData);
    Case.productId = CaseData.productId;

    const result = await Case.create(Case);

    sendResponse(res, true, "Case Created Successfully!", result);
  } catch (err) {
    sendResponse(res, false, "Case Create Unsuccessful!", err);
  }
};

const getCase = async (req, res) => {
  try {
    const id = req.params.id;
    const Case = await Case.find({
      CaseNumber: id
    }).populate("product");

    if (Case[0].isDeleted) {
      const deletedAtDate = new Date(Case[0].deletedAt),
        message = `Case Deleted by you on ${deletedAtDate}!`;

      sendResponse(res, true, message, Case);
    }

    sendResponse(res, true, "Case Fetched Successfully!", Case);
  } catch (err) {
    sendResponse(res, false, "Case Fetch Unsuccessful!", err);
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

    const result = await Case.updateOne(
      { CaseNumber: id },
      { $set: updateCaseData },
      { new: true }
    );

    sendResponse(res, true, "Case Updated Successfully!", result);
  } catch (err) {
    sendResponse(res, false, "Case Update Unsuccessful!", err);
  }
};

const deleteCase = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Case.updateOne(
      { CaseNumber: id },
      {
        $set: {
          isDeleted: true,
          deletedAt: new Date().toISOString()
        }
      },
      { new: true }
    );

    sendResponse(res, true, "Case Deleted Successfully!", result);
  } catch (err) {
    sendResponse(res, false, "Case Delete Unsuccessful!", err);
  }
};

const sendResponse = async (res, status, message, resultOrErr) => {
  res.send({
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
