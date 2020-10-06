const article = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING
      },
      text: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );

  return Article;
};

export { article };
