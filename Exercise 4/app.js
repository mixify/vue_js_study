new Vue({
  el: '#exercise',
  data: {
    eventClass : {
      shrink:true,
      highlight:true
    },
      userClass : '',
      isVisible : false,
      myStyle : {
        width : '100px',
          height : '200px',
          backgroundColor : 'gray'
      }
  },
  methods: {
    startEffect: function() {
        var vm = this
        setInterval(function () {
            vm.eventClass.shrink = !vm.eventClass.shrink
            vm.eventClass.highlight = !vm.eventClass.highlight
        }, 1000)
    },
      startProgress: function() {
          var vm = this
          setInterval(function () {
              vm.eventClass.shrink = !vm.eventClass.shrink
              vm.eventClass.highlight = !vm.eventClass.highlight
          }, 1000)
      }
  }
});
