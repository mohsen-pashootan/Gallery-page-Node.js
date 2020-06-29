const Gallery = require("./gallery");
let Repository = [
  {
    id: "1",
    title: "Ladybug Insect Nature",
    description:
      "Sed velit lacus, laoreet at venenatis convallis in lorem tincidunt.",
    rate: 9,
    image: {
      url: "./images/01.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "2",
    title: "Sloe Nature Crop Berry",
    description:
      "Tristique in nulla vel congue. Sed sociis natoque parturient nascetur.",
    rate: 9,
    image: {
      url: "./images/02.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "3",
    title: "Kingfisher Bird Aviary Color Nature Animal Beak",
    description:
      "In pellentesque cursus velit id posuere. Donec vehicula nulla.",
    rate: 10,
    image: {
      url: "./images/03.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "4",
    title: "Stork Bird Animal Fly White Stork Rattle Stork",
    description:
      "Nulla dignissim libero maximus tellus varius dictum ut posuere magna.",
    rate: 9,
    image: {
      url: "./images/04.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "5",
    title: "Butterfly Nature Living Nature",
    description:
      "Etiam ultricies, lorem quis efficitur porttitor, facilisis ante orci urna.",
    rate: 9,
    image: {
      url: "./images/05.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "6",
    title: "Ladybug Insect Nature Meadow",
    description:
      "Nunc egestas congue lorem. Nullam dictum placerat ex sapien tortor mattis.",
    rate: 9,
    image: {
      url: "./images/06.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "7",
    title: "Kolos Grass Meadow Field Green Nature Plant",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus ac tincidunt dolor.",
    rate: 9,
    image: {
      url: "./images/07.jpg",
    },
    className: "fa fa-heart-o",
  },
  {
    id: "8",
    title: "Flower Floral Blossom Nature Spring Summer Bloom",
    description:
      "Feugiat auctor leo massa, nec vestibulum nisl erat faucibus, rutrum nulla.",
    rate: 9,
    image: {
      url: "./images/08.jpg",
    },
    className: "fa fa-heart-o",
  },
];

class GalleryRepository {
  constructor() {
    this.galleryRepository = Repository.map(
      (item) =>
        new Gallery({
          id: item.id,
          title: item.title,
          description: item.description,
          rate: item.rate,
          image: item.image,
          className: item.className,
        })
    );
  }

  inc(id) {
    const index = this.galleryRepository.findIndex(
      (gallery) => gallery.id === id
    );

    if (index !== -1) {
      if (this.galleryRepository[index].className === "fa fa-heart-o") {
        return (
          ++this.galleryRepository[index].rate,
          (Repository = [...this.galleryRepository]),
          (this.galleryRepository[index].className = "fa fa-heart")
        );
      } else {
        return (
          --this.galleryRepository[index].rate,
          (Repository = [...this.galleryRepository]),
          (this.galleryRepository[index].className = "fa fa-heart-o")
        );
      }
    }
  }

  get(input) {
    const filteredItems = this.galleryRepository.filter((item) => {
      return (
        item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
        item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      );
    });
    return filteredItems;
  }

  sort() {
    this.galleryRepository.sort((a, b) => {
      if (a.rate < b.rate) {
        return 1;
      } else if (a.rate > b.rate) {
        return -1;
      } else {
        return 0;
      }
    });
    return this.galleryRepository;
  }
  mostNew() {
    this.galleryRepository.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else if (a.id > b.id) {
        return -1;
      } else {
        return 0;
      }
    });
    return this.galleryRepository;
  }
}

module.exports = new GalleryRepository();
