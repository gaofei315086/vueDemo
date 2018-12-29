<template>
    <div>
      <div>
        <img src="../assets/img/clock.jpg" />
      </div>
      <canvas id="gameCanvas" width="800" height="450"></canvas>
    </div>
</template>

<script>
    export default {
        name: "cocosTest",
      mounted:function () {
        //加入主任务使外部引入js先执行
        window.setTimeout(()=>{
          this.initCC();
        },10);
      },
      methods:{
          initCC:function () {
            // 如果未获取到cocos插件就递归调用直到获取到位置
            if(!window.cc){
              console.info('init')
              window.setTimeout(()=>{
                this.initCC()
              },10)
              return
            }
            cc.game.onStart = function(){
              // 1.load resources
              cc.LoaderScene.preload(["../../static/img/HelloWorld.png",'../../static/img/testImg.jpg','../../static/img/clock.jpg','../../static/img/shuidi.png'], function () {
                // cocos只能访问到static下的静态图片
                var PlayerLayer = cc.Layer.extend({
                  // 精灵个数
                  SushiSprites:null,
                  ctor:function () {
                    this._super();
                    // 初始化
                    this.SushiSprites = [];

                    // add bg
                    this.bgSprite = new cc.Sprite('../../static/img/testImg.jpg');
                    this.bgSprite.attr({
                      x: 40,
                      y: 40,
                    });
                    this.addChild(this.bgSprite, 0);

                    // this.addSushi();
                    // 循环产生多个元素
                    this.schedule(this.update,1,16*1024,1);
                    return true;
                  },
                  addSushi : function() {
                    // 添加动态元素
                    var sushi = new cc.Sprite('../../static/img/shuidi.png');
                    var size = cc.winSize;

                    var x = sushi.width/2+size.width/2*cc.random0To1();
                    sushi.attr({
                      x: x,
                      y:size.height - 30
                    });

                    // 让元素动起来
                    var dorpAction = cc.MoveTo.create(4, cc.p(sushi.x,-30));
                    sushi.runAction(dorpAction);

                    this.addChild(sushi,5);
                    this.SushiSprites.push(sushi);
                  },
                  update : function() {
                    // 多个元素
                    this.addSushi();
                    this.removeSushi();
                  },
                  removeSushi : function() {
                    //移除到屏幕底部的sushi
                    for (var i = 0; i < this.SushiSprites.length; i++) {
                      cc.log("removeSushi.........");
                      if(0 == this.SushiSprites[i].y) {
                        cc.log("==============remove:"+i);
                        this.SushiSprites[i].removeFromParent();
                        this.SushiSprites[i] = undefined;
                        this.SushiSprites.splice(i,1);
                        i= i-1;
                      }
                    }
                  }
                });

                var StartLayer = cc.Layer.extend({
                  ctor:function () {
                    this._super();
                    var size = cc.winSize;

                    // add bg
                    this.bgSprite = new cc.Sprite('../../static/img/testImg.jpg');
                    this.bgSprite.attr({
                      x: 40,
                      y: 40,
                    });
                    this.addChild(this.bgSprite, 0);

                    var helloLabel = new cc.LabelTTF("Hello Wo1rld", "", 38);
                    helloLabel.x = size.width / 2;
                    helloLabel.y = size.height / 2;
                    this.addChild(helloLabel);

                    var helloLabel1 = new cc.LabelTTF(" Wo1rld", "", 38);
                    helloLabel1.x = size.width / 4;
                    helloLabel1.y = size.height / 4;
                    this.addChild(helloLabel1);

                    // add start menu
                    var startItem = new cc.MenuItemImage(
                      '../../static/img/clock.jpg',
                      '../../static/img/HelloWorld.png',
                      function () {
                        console.info('111');
                        cc.director.runScene(new PlayerScene());
                      }, this);
                    startItem.attr({
                      x: size.width/2,
                      y: size.height/2,
                      anchorX: 0.5,
                      anchorY: 0.5
                    });

                    var menu = new cc.Menu(startItem);
                    menu.x = 0;
                    menu.y = 0;
                    this.addChild(menu, 1);

                    return true;
                  }
                });

                var StartScene = cc.Scene.extend({
                  onEnter:function () {
                    this._super();
                    var layer = new StartLayer();
                    this.addChild(layer);
                  }
                });

                var PlayerScene = cc.Scene.extend({
                  onEnter:function () {
                    this._super();
                    var layer = new PlayerLayer();
                    this.addChild(layer);
                  }
                });
                cc.director.runScene(new StartScene());
              }, this);
            };


            cc.game.run("gameCanvas");
          }
      }
    }
</script>

<style scoped>

</style>
