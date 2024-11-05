// // update user
// exports.updateuser = async (req, res) => {
//     const userId = req.params.id;
//     const { name, email, password } = req.body;

//     try {
//       // Check if the user with the given ID exists
//       const existingUser = await prisma.merchant.findUnique({
//         where: { id: Number(userId) },
//       });

//       if (!existingUser) {
//         return res.status(404).json({
//           status: 404,
//           message: "User not found!",
//         });
//       }

//       // Check if the email is different and if the new email already exists in another user
//       if (email && email !== existingUser.email) {
//         const emailExists = await prisma.merchant.findUnique({
//           where: { email: email },
//         });

//         if (emailExists) {
//           return res.status(400).json({
//             status: 400,
//             message: "Email already in use by another user!",
//           });
//         }
//       }

//       // Update the user details, only changing fields if provided in the request
//       const updatedUser = await prisma.merchant.update({
//         where: { id: Number(userId) },
//         data: {
//           name: name || existingUser.name, // If no new name, use the existing one
//           email: email || existingUser.email, // If no new email, use the existing one
//           password: password || existingUser.password, // If no new password, use the existing one
//         },
//       });

//       return res.status(200).json({
//         status: 200,
//         message: "User updated successfully!",
//         data: updatedUser,
//       });
//     } catch (error) {
//       console.error("Error updating user:", error);
//       return res.status(500).json({
//         status: 500,
//         message: "An error occurred while updating the user.",
//       });
//     }
//   };
//   exports.getAllUsers = async (req, res) => {
//     try {
//       // Retrieve all users from the database
//       const users = await prisma.user.findMany();

//       // Check if there are users in the database
//       if (!users || users.length === 0) {
//         return res.status(404).json({
//           status: 404,
//           message: "No users found.",
//         });
//       }

//       return res.status(200).json({
//         status: 200,
//         message: "Users retrieved successfully!",
//         data: users,
//       });
//     } catch (error) {
//       console.error("Error retrieving users:", error);
//       return res.status(500).json({
//         status: 500,
//         message: "An error occurred while retrieving the users.",
//       });
//     }
//   };
//   exports.deleteUser = async (req, res) => {
//     const userId = req.params.id; // Get the user ID from the request parameters

//     try {
//       // Check if the user exists
//       const existingUser = await prisma.user.findUnique({
//         where: { id: Number(userId) },
//       });

//       if (!existingUser) {
//         return res.status(404).json({
//           status: 404,
//           message: "User not found!",
//         });
//       }

//       // Delete the user if they exist
//       await prisma.user.delete({
//         where: { id: Number(userId) },
//       });

//       return res.status(200).json({
//         status: 200,
//         message: "User deleted successfully!",
//       });
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       return res.status(500).json({
//         status: 500,
//         message: "An error occurred while deleting the user.",
//       });
//     }
//   };
