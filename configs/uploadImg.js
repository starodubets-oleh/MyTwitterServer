const uniqid = require('uniqid');
const path = require('path');

const uploadImg = (type) => (req, res, next) => {
  try {
    const img = req.files[type];
    const nameImg = `${uniqid()}-${img.name}`
    const imgPath = path.join(__dirname, '..', '/images', `/${nameImg}`);
    img.mv(imgPath, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          message: 'Something went wrong',
          error
        });
      } else {
        req.nameImg = nameImg;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
      error
    });
  }
};

module.exports = uploadImg;
