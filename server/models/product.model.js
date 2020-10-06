const product = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cost: {
        type: DataTypes.INTEGER
      }
    },
    { timestamps: false }
  );

  return Tutorial;
};

export { product };
