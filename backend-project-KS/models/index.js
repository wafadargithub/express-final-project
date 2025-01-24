const connection = require("../dbConnection");

const {
    users,
    customers,
    admins,
    vendors,
    products,
    productVariations,
    attributes,
    variationsHasAttribute,
} = require("./definitions/index");

const models = {
    users,
    customers,
    admins,
    vendors,
    products,
    productVariations,
    attributes,
    variationsHasAttribute,
};

vendors.hasMany(products, { foreignKey: "vendorId", as: "products" });
products.belongsTo(vendors, { foreignKey: "vendorId", as: "vendors" });

products.hasMany(productVariations, {
    foreignKey: "productId ",
    as: "productVariations",
});
productVariations.belongsTo(products, {
    foreignKey: "productId",
    as: "products",
});

productVariations.hasMany(variationsHasAttribute, {
    foreignKey: "productVariationId ",
    as: "variationsHasAttribute",
});
variationsHasAttribute.belongsTo(productVariations, {
    foreignKey: "productVariationId",
    as: "productVariations",
});

attributes.hasMany(variationsHasAttribute, {
    foreignKey: "attributeId ",
    as: "variationsHasAttribute",
});
variationsHasAttribute.belongsTo(attributes, {
    foreignKey: "attributeId",
    as: "attributes",
});

const db = {};

db.connection = connection;

connection.models = models;

module.exports = { db, models };




// const connection = require("../dbConnection");
// const users = require("./definitions/users");
// const vendors = require("./definitions/vendors");
// const products = require("./definitions/products");
// const productsVariation = require("./definitions/productVariations");
// const attributes = require("./definitions/attributes");
// const variationHasAttribute = require("./definitions/variationHasAttribute")

// const models = { users, vendors, products, productsVariation, attributes, variationHasAttribute };

// // Relations

// // vendor products 1:M
// vendors.hasMany(products, { foreignKey: "vendorId", as: "product" });
// products.belongsTo(vendors, { foreignKey: "vendorId", as: "vendors" });

// //product productVariations 1:Ms
// // products.hasMany(productsVariation,{foreignKey:"productId",as:"productVariation"});
// // productsVariation.belongsTo(products,{foreignKey:"productId",as:"products"});

// products.hasMany(productsVariation, { foreignKey: "productId", as: "productVariaton" })
// productsVariation.belongsTo(products, { foreignKey: "productId", as: "products" })
// //variations attributes M:M through varionHasAttribute
// productsVariation.hasMany(variationHasAttribute, { foreignKey: "productsVariationId", as: "variationHasAttribute" });
// variationHasAttribute.belongsTo(productsVariation, { foreignKey: "productsVariationId", as: "productsVariation" })

// attributes.hasMany(variationHasAttribute, { foreignKey: "attributeId", as: "variationHasAttribute" });
// variationHasAttribute.belongsTo(attributes, { foreignKey: "attributeId", as: "attributes" })



// const db = {};

// db.connection = connection;
// connection.models = models;
// module.exports = { db, models };