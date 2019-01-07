<template>
    <div class="demo-page" ref="demoPage">
      <section class="video-page">
        <video ref="myVideo"  loop muted poster="../assets/img/testImg.jpg" webkit-playsinline   playsinline id="bgvid">
          <source src="../assets/mp4/testVideo.mp4" type="video/mp4">
        </video>
        <button ref="myButton" @click="go">点击播放</button>
      </section>
      <section class="nav-head" ref="nav_head">
        <div class="nav-item" ref="nav_item">
          <div ref="text_desc">
            课程介绍
            <div ref="process" class="process"></div>
          </div>
        </div>
        <div class="nav-item">
          <div>
            课程列表
          </div>
        </div>
      </section>
      <div class="content" ref="content">
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
        <section ref="content2" v-show="show_content === 1" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove" class="content2 animated fadeInRight">
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
    import $ from 'jquery'
    export default {
        name: "Demo001",
        data:function(){
          return{
            // keyframe对象
            cssRule:{},
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
        created:function(){

        },
        destroyed:function(){
          //取消监听离开时
          // console.info(this.handleScroll)
          window.removeEventListener('scroll',this.handleScroll);
        },
        mounted:function () {
          console.log(window);
          window.addEventListener('scroll', this.handleScroll);
          this.audioAutoPlay('bgvid');

          // 监听进度条动画完成  处理transition多段变换
          this.$refs.process.addEventListener('transitionend',this.processFinish)

          // var styleEl = document.createElement('style'),
          //   styleSheet;
          // document.head.appendChild(styleEl);
          // // 获取样式
          // styleSheet = styleEl.sheet;
          // // 插入样式
          // styleSheet.insertRule('@keyframes processGo { 0% {left: 0;width: 100%;} 100% { left: 200px;width: 100%; } }', styleSheet.cssRules.length);


          // this.cssRule = this.getRule('processGo');
          // 动态修改iframe！！！！
          // this.cssRule.deleteRule(0);
          // this.cssRule.deleteRule(1);
          // this.cssRule.appendRule('0% { left: 0;width: 100%; }');
          // this.cssRule.appendRule('100% { left: 200px;width: 100%; }');
          // 重新指定动画名字使之生效  vue 生成的 class 带了data-value的随机码 只能动态获取
          // document.querySelector('.process').style.webkitAnimationName = this.cssRule.name;
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
            // 计算线条最大宽度
            // var maxWidth = (this.$refs.nav_item.offsetWidth - this.$refs.text_desc.offsetWidth)/2 + this.$refs.text_desc.offsetWidth
              // 向右滑动
            if(this.touch_move.x -this.touch_start.x < 0 && this.touch_start.x - this.touch_move.x >50 && this.show_content === 0){
              this.show_content = 1;
              this.$refs.process.style.width = this.$refs.nav_item.offsetWidth + 'px'
              this.$refs.process.style.left = this.$refs.process.offsetWidth/2 +'px'
            }else if(this.touch_move.x -this.touch_start.x > 0 && this.touch_move.x -this.touch_start.x>50 && this.show_content === 1){
              this.show_content = 0;
              this.$refs.process.style.width = this.$refs.nav_item.offsetWidth + 'px'
              this.$refs.process.style.left = this.$refs.process.offsetWidth/2 +'px'
              // this.$refs.process.style.width = '100%'
              // this.$refs.process.style.left = '0'
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
          handleScroll:function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 滚动到顶部固定导航栏
            if(scrollTop>=document.body.offsetHeight){
              this.$refs.nav_head.style.position = 'fixed';
              this.$refs.nav_head.style.top = 0+'px';
              this.$refs.nav_head.style.zIndex = '1000';
            }else{
              this.$refs.nav_head.style.position = 'inherit';
            }
          },
          //todo 转移至公用方法
         getRule:function(name) {
            var rule;
            var ss = document.styleSheets
            for (var i = 0; i < ss.length; ++i) {
              // loop through all the rules!
              for (var x = 0; x < ss[i].cssRules.length; ++x) {
                rule = ss[i].cssRules[x];
                if (rule.name && rule.name.indexOf(name)!== -1 && rule.type == CSSRule.KEYFRAMES_RULE) {
                  // debugger
                  return rule
                }
              }
            }
          },
          // 动画监听
          processFinish:function () {
            // 重写就可以重新出发动画效果
            if(this.show_content === 1){
              this.$refs.process.style.transition = 'width .25s linear,left .25s linear'
              this.$refs.process.style.width = '100%'
              this.$refs.process.style.left = this.$refs.nav_item.offsetWidth +'px'
            }else if(this.show_content === 0){
              this.$refs.process.style.left = '0'
              this.$refs.process.style.width = '100%'
              this.$refs.process.style.transition = 'width .25s linear,left .25s linear'
            }

          }
        }
    }
</script>

<style scoped>
  @import "../assets/css/Demo001.css";
</style>
