'use strict'
let app = new Vue({
    el: '#app',
    data: {
       title: 'support your local artisans',
       text_notify: 'Free Delivery over $100. Gift with Purchase over $150',
       show_notify: true,
       show: true,
       input_text: null,
       show_input_text: false,
       templateText: '',
       show_time: false,
       leftMouse: 'left click',
       rightMouse: 'right click',
       whatMouse: '',
       formatTime: '',
    },
    methods: {
       firstLetterToUpperCase(text) {
          let text_arr = text.split(' ')
          let arr_Upper = text_arr.map(item => {
             return item[0].toUpperCase() + item.slice(1)
          })
          return arr_Upper.join(' ');
       },
       hideNotify() {
          this.show_notify = false
       },
       showText() {
          this.show_input_text = true;
          this.templateText = this.input_text;
          this.input_text = null;
       },
       showTime() {
          this.show_time = true;
          const DayTime = new Date();
          let hours = DayTime.getHours();
          let minutes = DayTime.getMinutes();
          if (minutes < 10) {
             minutes = '0' + minutes;
          }
          let seconds = DayTime.getSeconds();
          if (seconds < 10) {
             seconds = '0' + seconds;
          }
          this.formatTime = hours + ':' + minutes + ':' + seconds;
       },
       showMouse(key) {
          this.whatMouse = key;
       }
    }
 })