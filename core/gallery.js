class Gallery {
  constructor({ id, title, description, rate, image, className }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.rate = rate;
    this.image = image;
    this.className = className;
  }
}

module.exports = Gallery;
