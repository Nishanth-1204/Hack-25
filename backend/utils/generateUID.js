const generateUID = () => {
  id = "KPR";
  for (let i = 0; i < 3; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};

module.exports = generateUID;
