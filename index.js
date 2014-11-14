var Model = require('ampersand-model'),
    Collection = require('ampersand-collection');

var UserModel = Model.extend({
  props: {
    id: { type: 'number' },
    name: { type: 'string' }
  },
  children: {
    image: ImageModel,
  },
  collections: {
    interests: InterestCollection
  }
});

var ImageModel = Model.extend({
  props: {
    id: { type: 'number' },
    path: { type: 'string' }
  }
});

var InterestModel = Model.extend({
  props: {
    id: { type: 'number' },
    title: { type: 'string' }
  },
  children: {
    image: ImageModel
  }
});

var InterestCollection = Model.extend({
  model: InterestModel
});

var user = new UserModel({
  id: 1,
  name: "Brian Berlin",
  interests: [{
    id: 1,
    title: "Bowling",
    image: {
      id: 2,
      path: '/path/to/image2.jpg'
    }
  }],
  image: {
    id: 1,
    path: '/path/to/image.jpg'
  }
});

console.log(user.image.path);