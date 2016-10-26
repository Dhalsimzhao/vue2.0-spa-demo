import Timeago from 'timeago.js';

const dateUtil = {
  timeAgo(time) {
    var str = '';
    if (time) {
      debugger;
      let timeagoInstance = new Timeago();
      str = timeagoInstance.format(time, 'zh_CN');
    }
    return str;
  }
}

export default {
  dateUtil
}