// import React, { useEffect, useState } from "react";
// import { Paper, TextField, Button, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";

// import { addUser, getAllUsers } from "./indexedDB";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     // Fetch users from IndexedDB when component mounts
//     const fetchUsers = async () => {
//       const usersFromDB = await getAllUsers();
//       setUsers(usersFromDB);
//     };

//     fetchUsers();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = { name: userName };

//     if (navigator.onLine) {
//       // Send user data to API
//       try {
//         await fetch("https://your-api-endpoint.com/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         });
//         alert("User added to API");
//       } catch (error) {
//         alert("Failed to add user to API, storing in IndexedDB");
//         await addUser(userData); // Store in IndexedDB
//       }
//     } else {
//       // If offline, store data in IndexedDB
//       await addUser(userData);
//       alert("User added to IndexedDB (offline)");
//     }

//     setUserName(""); // Clear input field
//     // Update users state
//     const updatedUsers = await getAllUsers();
//     setUsers(updatedUsers);
//   };

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }} // Background color for better visibility
//     >
//       <Grid item xs={12} sm={8} md={6}>
//         <Paper elevation={3} style={{ padding: "20px" }}>
//           <Typography variant="h4" align="center" gutterBottom>
//             User Registration
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="User Name"
//               variant="outlined"
//               fullWidth
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               required
//               style={{ marginBottom: "20px" }} // Add some space between elements
//             />
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Add User
//             </Button>
//           </form>

//           <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
//             Registered Users
//           </Typography>
//           <ul
//             style={{ padding: 0, listStyleType: "none", textAlign: "center" }}
//           >
//             {users.map((user, index) => (
//               <li key={index}>{user.name}</li>
//             ))}
//           </ul>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default App;
