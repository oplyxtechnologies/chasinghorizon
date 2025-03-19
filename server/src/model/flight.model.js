const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db/connectPostgres");

class Flight extends Model {}

Flight.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    flightName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passenger_info: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
    },
    airline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookedseat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "flight",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Flight;
