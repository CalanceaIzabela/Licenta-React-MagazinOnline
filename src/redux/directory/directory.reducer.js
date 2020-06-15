const INITIAL_STATE = {
  sections: [
    {
      title: 'permanent',
      imageUrl: 'https://i.ibb.co/KmWgyw1/oja-Permanenta.jpg',
    //   imageUrl: 'images/... .png', // local file in public/images/
      id: 1,
      linkUrl: 'shop/permanent'
    },
    {
      title: 'semipermanent',
      imageUrl: 'https://i.ibb.co/GVDzxVd/oja-Semipermanenta.jpg',
      id: 2,
      linkUrl: 'shop/semipermanent'
    },
    {
      title: 'acrylic',
      imageUrl: 'https://i.ibb.co/26692Zk/acrilice.jpg',
      id: 3,
      linkUrl: 'shop/acrylic'
    },
    {
      title: 'accesory',
      imageUrl: 'https://i.ibb.co/5jPsGFq/accesorii.jpg',
      id: 4,
      linkUrl: 'shop/accesory'
    },
    {
      title: 'models',
      imageUrl: 'https://i.ibb.co/0hSybsR/model2.jpg',
      id: 5,
      linkUrl: 'shop/models'
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
