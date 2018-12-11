<template>
    <div class="demo-page" ref="demoPage">
      <section class="video-page">
        <video ref="myVideo"  loop muted poster="../assets/img/testImg.jpg" webkit-playsinline   playsinline id="bgvid">
          <source src="../assets/mp4/testVideo.mp4" type="video/mp4">
        </video>
        <button ref="myButton" @click="go">点击播放</button>
      </section>
      <section class="nav-head" ref="nav_head">
        <div class="nav-item">课程介绍</div>
        <div class="nav-item">课程列表</div>
      </section>
      <div ref="content">
        <section ref="content1" v-show="show_content === 0" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" class="content1 animated fadeInLeft">
          <div>1</div>
          <div>11</div>
          <div>111</div>
          <div>11111</div>
          <div>111111</div>
          <div>1111111</div>
          <div>11111111</div>
          <div>1111111111</div>
          <div>1111111111111</div>
          <div>111111111111111</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </section>
        <section ref="content2" v-show="show_content === 1" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" class="content2 animated fadeInLeft">
          <div>1</div>
          <div>11</div>
          <div>111</div>
          <div>11111</div>
          <div>111111</div>
          <div>1111111</div>
          <div>11111111</div>
          <div>1111111111</div>
          <div>1111111111111</div>
          <div>111111111111111</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </section>

      </div>

    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    export default {
        name: "Demo001",
        data:function(){
          return{
            // 选择我展现内容
            show_content:0,
            // 滑动开始坐标
            touch_start:{
              x:0,
              y:0
            },
            touch_move:{
              x:0,
              y:0
            }
          }
        },
            watch:{
        },
        mounted:function () {
          console.log(window);
          // this.$refs.nav_head.style.width = window.innerWidth+'px';
          // this.$refs.content.style.width = window.innerWidth+'px';
          // this.$refs.content2.style.width = window.innerWidth+'px';
          window.addEventListener('scroll', this.handleScroll);
          this.audioAutoPlay('bgvid');
        },
        methods:{
            go:function () {
              this.$refs.myVideo.play();
            },
            // 解决ios呢无法自动播放问题
            audioAutoPlay:function (id) {
              var audio = document.getElementById(id);
              audio.play();
              document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
              }, false);
              document.addEventListener('YixinJSBridgeReady', function() {
                audio.play();
              }, false);
            },
            // 监听滑动开始
          touchstart:function (e) {
            // console.log(e)
            this.touch_start.x = e.touches[0].screenX;
            this.touch_start.y = e.touches[0].screenY;
          },
          touchmove:function (e) {
            // console.log(e)
            this.touch_move.x = e.touches[0].screenX;
            this.touch_move.y = e.touches[0].screenY;
          },
          // 监听滑动结束
          touchend:function (e) {
              // 向右滑动
            if(this.touch_move.x -this.touch_start.x < 0 && this.touch_start.x - this.touch_move.x >50){
              this.show_content = 1;
            }else if(this.touch_move.x -this.touch_start.x > 0 && this.touch_move.x -this.touch_start.x>50){
              this.show_content = 0;
            }
          },
          //  获取距离body的距离
          getOffsetTopByBody: function(el) {
            let offsetTop = 0
            while (el && el.tagName !== 'BODY') {
              offsetTop += el.offsetTop
              el = el.offsetParent
            }
            return offsetTop
          },
          // 监听窗体滚动
          handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 滚动到顶部固定导航栏
            console.log( window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop,document.body.offsetHeight);
            if(scrollTop>=document.body.offsetHeight){
              this.$refs.nav_head.style.position = 'fixed';
              this.$refs.nav_head.style.top = 0+'px';
              this.$refs.nav_head.style.zIndex = '1000';
            }else{
              this.$refs.nav_head.style.position = 'inherit';
            }
          }
        }
    }
</script>

<style scoped>
  @import "../assets/css/Demo001.css";
</style>
