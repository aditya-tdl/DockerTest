const prisma = require("../DB/db.config.js");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const isEmail = (input) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(input);
};
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user.id);

  res.cookie("posToken", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "None",
    secure: false, // Set true in production with HTTPS
    path: "/",
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};
exports.createUser = catchAsync(async (req, res, next) => {
  const {
    username,
    password,
    first_name_en,
    last_name_en,
    first_name_ar,
    last_name_ar,
    email,
    mobile_no,
    termsAccepted,
  } = req.body;

  // Validate required fields
  if (
    !username ||
    !password ||
    !first_name_en ||
    !last_name_en ||
    !email ||
    !mobile_no ||
    termsAccepted !== true
  ) {
    return res.status(400).json({
      message: "All required fields must be provided and terms accepted.",
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  const role = await prisma.roles.findFirst({
    where: {
      name_en: "admin",
    },
  });
  // Create the user in the database
  const newUser = await prisma.users.create({
    data: {
      username,
      password_hash: hashedPassword,
      first_name_en,
      last_name_en,
      first_name_ar,
      last_name_ar,
      email,
      mobile_no,
      status: "active", // Default status
      termsAccepted,
    },
  });
  // Create the user_roles association
  await prisma.user_roles.create({
    data: {
      user_id: newUser.id,
      role_id: role.id,
    },
  });
  // Respond with the newly created user, excluding sensitive information
  return res.status(201).json({
    status: "success",
    data: {
      user: newUser,
      role: {
        role_id: role.id,
        role_name: role.name_en,
      },
    },
  });
});
exports.merchant_login = catchAsync(async (req, res, next) => {
  const { email, mobile_no, password } = req.body;
 
  // Check if either email or mobile number is provided along with the password
  if ((!email && !mobile_no) || !password) {
    return next(
      new AppError("Please provide email or mobile number and password!", 400)
    );
  }

  // Step 1: Find the user by email or mobile number in the `users` table
  const user = await prisma.users.findFirst({
    where: {
      OR: [{ email }, { mobile_no }],
    },
  });

  // If no user is found, respond with an error
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Step 2: Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Step 3: Get the role information from `user_roles` table using `user.id`
  const userRole = await prisma.user_roles.findFirst({
    where: { user_id: user.id },
    include: {
      roles: true, // This will include the related role data
    },
  });

  if (!userRole) {
    return res.status(401).json({ error: "User role not found" });
  }

  // Step 4: Send response with token and role data
  const responseData = {
    user: {
      id: user.id,
      username: user.username,
      first_name_en: user.first_name_en,
      last_name_en: user.last_name_en,
      email: user.email,
      mobile_no: user.mobile_no,
      role: userRole.roles.name_en, // Include role name if needed
    },
  };

  // Create and send token with the user and role data
  createSendToken(responseData, 200, req, res);
});

exports.getAllMerchants = catchAsync(async (req, res, next) => {
  const users = await prisma.users.findMany();

  // Check if there are users in the database
  if (!users || users.length === 0) {
    return res.status(404).json({
      status: 404,
      message: "No merchants found.",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "users retrieved successfully!",
    data: users,
  });
});
exports.createRoles = catchAsync(async (req, res, next) => {
  const { name_en, name_ar, status } = req.body;
  const newRole = await prisma.roles.create({
    data: {
      name_en: name_en.toLowerCase(),
      name_ar,
      status,
    },
  });
  res.status(201).json({
    status: "success",
    data: newRole,
  });
});
// Get all roles
exports.getRoles = catchAsync(async (req, res, next) => {
  const roles = await prisma.roles.findMany();
  res.status(200).json({
    status: "success",
    results: roles.length,
    data: roles,
  });
});
// Get a role by ID
exports.getRoleById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const role = await prisma.roles.findUnique({
    where: { id: parseInt(id) },
  });
  if (!role) {
    return res.status(404).json({
      status: "fail",
      message: "Role not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: role,
  });
});
// Update an existing role
exports.updateRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name_en, name_ar, status } = req.body;

  const updatedRole = await prisma.roles.update({
    where: { id: parseInt(id) },
    data: {
      name_en: name_en.toLowerCase(),
      name_ar,
      status,
      updated_at: new Date(),
    },
  });
  res.status(200).json({
    status: "success",
    data: updatedRole,
  });
});
// get all user roles
exports.getAllUserRoles = catchAsync(async (req, res, next) => {
  // Fetch all user roles with related user and role information
  const userRoles = await prisma.user_roles.findMany({
    include: {
      roles: true, // Include related roles
      users: true,
    },
  });

  // Respond with the user roles data, including user details
  return res.status(200).json({
    status: "success",
    data: userRoles,
  });
});
