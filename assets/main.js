const app = new Vue({
  el: '#carousel',
  data: {
    images: [
      {
        imgSrc: '../img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        imgSrc: '../img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        imgSrc: '../img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        imgSrc: '../img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        imgSrc: '../img/05.jpg',
        title: 'Paradise',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
    ],

    counter: 0,

    classOfImg: 'obscure'
  },
  methods: {
    downClick() {
      // console.log('clicked');
      ++this.counter;

      if (this.counter > this.images.length - 1) {
        this.counter = 0;
      }
    },
    upClick() {
      --this.counter;

      if (this.counter < 0) {
        this.counter = this.images.length - 1;
      }
    },

    loop() {
      setInterval(this.downClick, 1 * 1000)
    },

  }
})
