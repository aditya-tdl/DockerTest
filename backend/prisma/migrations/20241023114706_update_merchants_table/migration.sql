-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "common";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "inventory";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "leads";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "log";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "merchant";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "sale";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "store";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "uam";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "zatca";

-- CreateTable
CREATE TABLE "common"."addresses" (
    "id" SERIAL NOT NULL,
    "address_street_1_en" VARCHAR(255),
    "address_street_1_ar" VARCHAR(255),
    "address_street_2_en" VARCHAR(255),
    "address_street_2_ar" VARCHAR(255),
    "building_no_en" VARCHAR(20),
    "building_no_ar" VARCHAR(20),
    "additional_no_en" VARCHAR(20),
    "additional_no_ar" VARCHAR(20),
    "city_en" VARCHAR(100),
    "city_ar" VARCHAR(100),
    "postal_code_en" VARCHAR(20),
    "postal_code_ar" VARCHAR(20),
    "state_en" VARCHAR(20),
    "state_ar" VARCHAR(20),
    "district_en" VARCHAR(20),
    "district_ar" VARCHAR(20),
    "country_code_en" VARCHAR(10),
    "country_code_ar" VARCHAR(10),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory"."products" (
    "id" SERIAL NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ar" VARCHAR(255) NOT NULL,
    "product_code" VARCHAR(50) NOT NULL,
    "category_en" VARCHAR(100),
    "category_ar" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory"."stock" (
    "id" SERIAL NOT NULL,
    "merchant_id" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory"."stock_products" (
    "stock_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stock_products_pkey" PRIMARY KEY ("stock_id","product_id")
);

-- CreateTable
CREATE TABLE "inventory"."store_products" (
    "store_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "store_products_pkey" PRIMARY KEY ("store_id","product_id")
);

-- CreateTable
CREATE TABLE "leads"."contact" (
    "id" SERIAL NOT NULL,
    "name_en" VARCHAR(100),
    "name_ar" VARCHAR(100),
    "mobile" BIGINT,
    "email" VARCHAR(50),
    "city" VARCHAR(50),
    "utm" VARCHAR(400),
    "interest_category" VARCHAR(100),
    "contact_preference" VARCHAR(50),
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6)
);

-- CreateTable
CREATE TABLE "log"."activity_log" (
    "id" BIGSERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "activity_type" VARCHAR(255),
    "description" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log"."application_log" (
    "log_id" SERIAL NOT NULL,
    "log_timestamp" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "log_level" VARCHAR(50),
    "message" TEXT,
    "context" JSONB,

    CONSTRAINT "application_log_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "merchant"."merchant_address" (
    "merchant_id" INTEGER NOT NULL,
    "address_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merchant_address_pkey" PRIMARY KEY ("merchant_id","address_id")
);

-- CreateTable
CREATE TABLE "merchant"."merchant_stores" (
    "merchant_id" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merchant_stores_pkey" PRIMARY KEY ("merchant_id","store_id")
);

-- CreateTable
CREATE TABLE "merchant"."merchants" (
    "id" SERIAL NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ar" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "address_id" INTEGER,
    "vat_no" INTEGER,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "password" VARCHAR(255),
    "phone" VARCHAR(20),
    "email" VARCHAR(255),
    "termsAccepted" BOOLEAN,

    CONSTRAINT "merchants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale"."allowance" (
    "item_id" INTEGER NOT NULL,
    "discount_percent" DECIMAL(10,2),
    "discount_reason_code" TEXT,
    "discount_reason" TEXT,
    "charge_percent" DECIMAL(10,2),
    "charge_reason_code" TEXT,
    "charge_reason" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "sale"."items" (
    "id" SERIAL NOT NULL,
    "sales_id" INTEGER NOT NULL,
    "line_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "net_price" DECIMAL(18,2) NOT NULL,
    "net_price_currency_code" TEXT NOT NULL,
    "net_amount" DECIMAL(18,2) NOT NULL,
    "net_amount_currency_code" TEXT NOT NULL,
    "vat_amount" DECIMAL(18,2) NOT NULL,
    "vat_amount_currency_code" TEXT NOT NULL,
    "total_amount" DECIMAL(18,2) NOT NULL,
    "total_amount_currency_code" TEXT NOT NULL,
    "vat_category_code" TEXT NOT NULL,
    "vat_rate" DECIMAL(5,2) NOT NULL,
    "tax_scheme_id" TEXT NOT NULL,
    "base_amount" DECIMAL(18,2),
    "base_amount_currency_code" TEXT,
    "discount_amount" DECIMAL(18,2),
    "discount_amount_currency_code" TEXT,
    "charge_amount" DECIMAL(18,2),
    "charge_amount_currency_code" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale"."sales" (
    "id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "merchant_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "payment_method" VARCHAR(30),

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store"."store_address" (
    "store_id" INTEGER NOT NULL,
    "address_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "store_address_pkey" PRIMARY KEY ("store_id","address_id")
);

-- CreateTable
CREATE TABLE "store"."store_users" (
    "store_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "store_users_pkey" PRIMARY KEY ("store_id","user_id")
);

-- CreateTable
CREATE TABLE "store"."stores" (
    "id" SERIAL NOT NULL,
    "merchant_id" INTEGER NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ar" VARCHAR(255) NOT NULL,
    "status" VARCHAR(50),
    "address_id" INTEGER,
    "cr_no" BIGINT NOT NULL,
    "scheme" TEXT DEFAULT 'CRN',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uam"."activities" (
    "id" SERIAL NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "name_ar" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uam"."roles" (
    "id" SERIAL NOT NULL,
    "name_en" VARCHAR(100) NOT NULL,
    "name_ar" VARCHAR(100) NOT NULL,
    "status" VARCHAR(50),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uam"."user_activities" (
    "user_id" INTEGER NOT NULL,
    "activity_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_activities_pkey" PRIMARY KEY ("user_id","activity_id")
);

-- CreateTable
CREATE TABLE "uam"."user_roles" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "uam"."users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "first_name_en" VARCHAR(255),
    "last_name_en" VARCHAR(255),
    "first_name_ar" VARCHAR(255),
    "last_name_ar" VARCHAR(255),
    "email" VARCHAR(255),
    "mobile_no" VARCHAR(255),
    "status" VARCHAR(255),
    "set_password_flag" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "zatca"."default_value" (
    "process_type" TEXT DEFAULT 'reporting:1.0',
    "ubl_version" VARCHAR(10),
    "invoice_type_code" VARCHAR(10)
);

-- CreateTable
CREATE TABLE "zatca"."invoice" (
    "id" SERIAL NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "invoice_uuid" TEXT NOT NULL,
    "invoice_date" DATE NOT NULL,
    "invoice_time" TIME(6) NOT NULL,
    "invoice_type" TEXT NOT NULL,
    "invoice_sub_type" TEXT NOT NULL,
    "invoice_currency_code" TEXT NOT NULL,
    "invoice_counter_id" INTEGER NOT NULL,
    "previous_invoice_hash" TEXT NOT NULL,
    "mime_code" TEXT,
    "csid" TEXT,
    "vat_category" TEXT NOT NULL,
    "tax_scheme_id" TEXT NOT NULL,
    "ref_invoice_no" TEXT,
    "note_reason" TEXT,
    "discount_flag" BOOLEAN,
    "charge_indicator" BOOLEAN,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "merchant_id" BIGINT,
    "store_id" BIGINT,
    "merchant_invoice_id" BIGINT,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zatca"."invoice_allowance" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "discount_percent" DECIMAL(10,2),
    "discount_vat_vatgory" TEXT,
    "discount_vat_percent" DECIMAL(10,2),
    "discount_reason_code" TEXT,
    "discount_reason" TEXT,
    "discount_tax_scheme" TEXT,
    "charge_percent" DECIMAL(10,2),
    "charge_vat_vatgory" TEXT,
    "charge_vat_percent" DECIMAL(10,2),
    "charge_reason_code" TEXT,
    "charge_reason" TEXT,
    "charge_tax_scheme" TEXT
);

-- CreateTable
CREATE TABLE "zatca"."invoice_amounts" (
    "invoice_id" INTEGER NOT NULL,
    "total_amount" DECIMAL(18,2) NOT NULL,
    "total_amount_currency_code" TEXT NOT NULL,
    "discount_amount" DECIMAL(18,2),
    "discount_amount_currency_code" TEXT,
    "charge_amount" DECIMAL(18,2),
    "charge_amount_currency_code" TEXT,
    "net_amount" DECIMAL(18,2) NOT NULL,
    "net_amount_currency_code" TEXT NOT NULL,
    "total_vat_amount" DECIMAL(18,2) NOT NULL,
    "total_vat_amount_currency_code" TEXT NOT NULL,
    "total_amount_with_vat" DECIMAL(18,2) NOT NULL,
    "total_amount_with_vat_currency_code" TEXT NOT NULL,
    "taxable_amount" DECIMAL(18,2) NOT NULL,
    "taxable_amount_currency_code" TEXT NOT NULL,
    "tax_amount" DECIMAL(18,2) NOT NULL,
    "tax_amount_currency_code" TEXT NOT NULL,
    "payment_due_amount" DECIMAL(18,2) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_amounts_pkey" PRIMARY KEY ("invoice_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "uam"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "uam"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_mobile_no_key" ON "uam"."users"("mobile_no");

-- AddForeignKey
ALTER TABLE "inventory"."stock" ADD CONSTRAINT "fk_stock_merchant" FOREIGN KEY ("merchant_id") REFERENCES "merchant"."merchants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory"."stock" ADD CONSTRAINT "fk_stock_store" FOREIGN KEY ("store_id") REFERENCES "store"."stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory"."stock_products" ADD CONSTRAINT "fk_stock_products_product" FOREIGN KEY ("product_id") REFERENCES "inventory"."products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory"."stock_products" ADD CONSTRAINT "fk_stock_products_stock" FOREIGN KEY ("stock_id") REFERENCES "inventory"."stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory"."store_products" ADD CONSTRAINT "fk_store_products_product" FOREIGN KEY ("product_id") REFERENCES "inventory"."products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory"."store_products" ADD CONSTRAINT "fk_store_products_store" FOREIGN KEY ("store_id") REFERENCES "store"."stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "merchant"."merchant_address" ADD CONSTRAINT "fk_merchant_address_address" FOREIGN KEY ("address_id") REFERENCES "common"."addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "merchant"."merchant_address" ADD CONSTRAINT "fk_merchant_address_merchant" FOREIGN KEY ("merchant_id") REFERENCES "merchant"."merchants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "merchant"."merchant_stores" ADD CONSTRAINT "fk_merchant_stores_merchant" FOREIGN KEY ("merchant_id") REFERENCES "merchant"."merchants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "merchant"."merchant_stores" ADD CONSTRAINT "fk_merchant_stores_store" FOREIGN KEY ("store_id") REFERENCES "store"."stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale"."items" ADD CONSTRAINT "fk_items_product" FOREIGN KEY ("product_id") REFERENCES "inventory"."products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale"."items" ADD CONSTRAINT "fk_items_sales" FOREIGN KEY ("sales_id") REFERENCES "sale"."sales"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "store"."store_address" ADD CONSTRAINT "fk_store_address_address" FOREIGN KEY ("address_id") REFERENCES "common"."addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "store"."store_address" ADD CONSTRAINT "fk_store_address_store" FOREIGN KEY ("store_id") REFERENCES "store"."stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "store"."store_users" ADD CONSTRAINT "fk_store_users_store" FOREIGN KEY ("store_id") REFERENCES "store"."stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "uam"."user_activities" ADD CONSTRAINT "fk_user_activities_activity" FOREIGN KEY ("activity_id") REFERENCES "uam"."activities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "uam"."user_roles" ADD CONSTRAINT "fk_user_roles_role" FOREIGN KEY ("role_id") REFERENCES "uam"."roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zatca"."invoice_amounts" ADD CONSTRAINT "invoice_amounts_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "zatca"."invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
