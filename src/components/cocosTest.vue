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
        console.info('cocosTest')
        //加入主任务使外部引入js先执行
        window.setTimeout(()=>{
          this.initCC();
        },10);
      },
      methods:{
          initCC:function () {
            console.info(window.cc)
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
              cc.LoaderScene.preload(["../../static/img/HelloWorld.png",'../../static/img/testImg.jpg','../../static/img/clock.jpg'], function () {
                // var MyScene = cc.Scene.extend({
                //   onEnter:function () {
                //     this._super();
                //     var size = cc.director.getWinSize();
                //     var sprite = cc.Sprite.create("../assets/HelloWorld.png");
                //     sprite.setPosition(size.width / 2, size.height / 2);
                //     sprite.setScale(0.8);
                //     this.addChild(sprite, 0);
                //
                //     var label = cc.LabelTTF.create("Hello World", "Arial", 40);
                //     label.setPosition(size.width / 2, size.height / 2);
                //     this.addChild(label, 1);
                //   }
                // });
                // cc.director.runScene(new MyScene());

                // cocos只能访问到static下的静态图片
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
                        cc.log("Menu is clicked!");
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
