const prisma = require("../DB/db.config.js");
const catchAsync = require("../utils/catchAsync");
exports.create_store = catchAsync(async (req, res, next) => {
  const { merchant_id, name_en, name_ar, status, cr_no, scheme } = req.body;
  // Check if required fields are present
  if (merchant_id || !name_en || !name_ar || status || cr_no || scheme) {
    return res
      .status(400)
      .json({ message: "All required fields must be provided." });
  }
});
