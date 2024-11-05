// // Merchant Model
// model Merchant {
//     id            Int      @id @default(autoincrement())
//     name_en       String   @db.VarChar(255)
//     name_ar       String   @db.VarChar(255)
//     status        String   @db.VarChar(50)
//     vatNo         String?  @db.VarChar(255)
//     phone         String   @unique @db.VarChar(20)
//     email         String   @unique @db.VarChar(255)
//     password      String   @db.VarChar(255) // Use a suitable length for your password
//     termsAccepted Boolean  @default(false)
//     created_at     DateTime @default(now())
//     updated_at     DateTime @updatedAt

//     // Optional: Specify the table name if it is different from the model name
//     @@map("merchants")
//     // Specify the schema for the Merchant model
//     @@schema("merchant")
//   }
