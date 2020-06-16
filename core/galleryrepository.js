const Gallery = require("./gallery");
let Repository = [
  {
    id: 01,
    title: "Ladybug Insect Nature",
    description:
      "Sed velit lacus, laoreet at venenatis convallis in lorem tincidunt.",
    rate: 9,
    image: {
      url: "./images/01.jpg",
    },
  },
  {
    id: 02,
    title: "Sloe Nature Crop Berry",
    description:
      "Tristique in nulla vel congue. Sed sociis natoque parturient nascetur.",
    rate: 9,
    image: {
      url: "./images/02.jpg",
    },
  },
  {
    id: 03,
    title: "Kingfisher Bird Aviary Color Nature Animal Beak",
    description:
      "In pellentesque cursus velit id posuere. Donec vehicula nulla.",
    rate: 10,
    image: {
      url: "./images/03.jpg",
    },
  },
  {
    id: 04,
    title: "Stork Bird Animal Fly White Stork Rattle Stork",
    description:
      "Nulla dignissim libero maximus tellus varius dictum ut posuere magna.",
    rate: 9,
    image: {
      url: "./images/04.jpg",
    },
  },
  {
    id: 05,
    title: "Butterfly Nature Living Nature",
    description:
      "Etiam ultricies, lorem quis efficitur porttitor, facilisis ante orci urna.",
    rate: 9,
    image: {
      url: "./images/05.jpg",
    },
  },
  {
    id: 06,
    title: "Ladybug Insect Nature Meadow",
    description:
      "Nunc egestas congue lorem. Nullam dictum placerat ex sapien tortor mattis.",
    rate: 9,
    image: {
      url: "./images/06.jpg",
    },
  },
  {
    id: 07,
    title: "Kolos Grass Meadow Field Green Nature Plant",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus ac tincidunt dolor.",
    rate: 9,
    image: {
      url: "./images/07.jpg",
    },
  },
  {
    id: 08,
    title: "Flower Floral Blossom Nature Spring Summer Bloom",
    description:
      "Feugiat auctor leo massa, nec vestibulum nisl erat faucibus, rutrum nulla.",
    rate: 9,
    image: {
      url: "./images/08.jpg",
    },
  },
];
class GalleryRepository {
  constructor() {
    this.GalleryRepository = Repository.map(
      (item) =>
        new Gallery({
          id: item.id,
          title: item.title,
          description: item.description,
          rate: item.rate,
          image: item.image,
        })
    );
  }
}

module.exports = new GalleryRepository();
