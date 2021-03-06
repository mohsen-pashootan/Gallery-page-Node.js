const url = require("url"); // Need to parse url

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

  app.get("/mostNew", (req, res) => {
    galleryrepository.mostNew();
    res.redirect("/");
  });

  app.get("/searchResult", (req, res) => {
    const q = url.parse(req.url, true).query;
    let paint = galleryrepository.get(q.search2);
    res.render("searchResult", {
      paint,
      galleries: galleryrepository.GalleryRepository,
    });
  });
};
