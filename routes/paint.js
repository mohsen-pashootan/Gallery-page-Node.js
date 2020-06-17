const gallery = require("../core/gallery");
const galleryrepository = require("../core/galleryrepository");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index", {
      galleries: galleryrepository.GalleryRepository,
    });
  });

  app.get("/liked/:id", (req, res) => {
    const userId = req.params.id;
    galleryrepository.inc(userId);
    res.redirect("/");
  });

  app.get("/mostLiked", (req, res) => {
    galleryrepository.sort();
    res.redirect("/");
  });
};
