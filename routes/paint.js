const gallery = require("../core/gallery");
const galleryrepository = require("../core/galleryrepository");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index", { galleries: galleryrepository.GalleryRepository });
  });
};
