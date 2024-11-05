const prisma = require("../DB/db.config.js");
const catchAsync = require("../utils/catchAsync");
const { pagination } = require("../utils/pagination.js");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  let { limitPerPage, pageNo } = req.query;
  limitPerPage = limitPerPage ? parseInt(limitPerPage) : 10;
  const allproducts = await prisma.products.findMany();
  pageNo = pageNo ? parseInt(pageNo) : 1;
  const allData = pagination(allproducts, limitPerPage, pageNo);
  if (allproducts.length > 0) {
    res.status(200).json({
      success: true,
      message: "All users data",
      pageInfo: {
        limitPerPage: parseInt(limitPerPage),
        totalData: allproducts.length,
        totalPages: Math.ceil(allproducts.length / limitPerPage),
        currentPageDataLength: allData.length,
        currentPage: parseInt(pageNo),
      },
      allproducts: allData,
    });
  } else {
    res.status(404).json({ success: false, message: "No products found" });
  }
});
