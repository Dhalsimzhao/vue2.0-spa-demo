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

export default {
  dateUtil,
  stringUtil,
  mathUtil
}