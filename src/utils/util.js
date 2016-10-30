import Timeago from 'timeago.js';

const dateUtil = {
  timeAgo(time) {
    var str = '';
    if (time) {
      let timeagoInstance = new Timeago();
      str = timeagoInstance.format(time, 'zh_CN');
    }
    return str;
  }
}

const stringUtil = {

}

const mathUtil = {

}

const fnUtil = {
  debounce(fn, wait){
    var timer;
    var start = Date.now();
    var laterExec = function(context, args) {
      timer = void 0;
      return fn.apply(context, args);
    }
    return function () {
      var self = this;
      if (!timer) {
        timer = setTimeout(function(){
          laterExec(self, arguments);
        }, wait);
      }
    }
  }
}

export default {
  dateUtil,
  stringUtil,
  mathUtil,
  fnUtil
}