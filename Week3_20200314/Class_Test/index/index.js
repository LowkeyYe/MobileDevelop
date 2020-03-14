Page({
  onShareAppMessage() {
    return {
      title: 'cover-view',
      path: 'page/component/pages/cover-view/cover-view'
    }
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    x:5,
    y:5,
  },

  tap: function (e) {
    this.setData({
      x: 30,
      y: 30,
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
})