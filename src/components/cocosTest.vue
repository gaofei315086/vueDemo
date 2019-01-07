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
              window.setTimeout(()=>{
                this.initCC()
              },10)
              return
            }

            cc.game.onStart = function(){
              // 1.load resources
              cc.LoaderScene.preload(["../../static/img/HelloWorld.png",'../../static/img/testImg.jpg','../../static/img/clock.jpg','../../static/img/shuidi.png'], function () {
                // cocos只能访问到static下的静态图片
                // 创建自定义精灵类
                var SushiSprite = cc.Sprite.extend({
                  disappearAction:null,//消失动画
                  onEnter:function () {
                    cc.log("onEnter");
                    // 创建精灵时为其自动加入触摸事件
                    this.addTouchEventListenser();
                    this.disappearAction = this.createDisappearAction();
                    // 对生成的消失动画增加一次引用
                    this.disappearAction.retain();
                    this._super();
                  },
                  onExit:function () {
                    // 手动释放引用
                    this.disappearAction.release();
                    cc.log("onExit");
                  },
                  // 添加触摸事件
                  addTouchEventListenser:function(){
                    this.touchListener = cc.EventListener.create({
                      event: cc.EventListener.TOUCH_ONE_BY_ONE,
                      // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
                      swallowTouches: true,
                      //onTouchBegan event callback function
                      onTouchBegan: function (touch, event) {
                        var pos = touch.getLocation();
                        var target = event.getCurrentTarget();
                        // 在SushiSprite被点中后，`removeTouchEventListenser()`移除注册的touch事件避免被再次点击。`stopAllActions()`停止SUshiSprite正在播放的动作。`cc.Sequence`是按序列播放动作。`cc.CallFunc`是Cocos2d-JS中提供的动画播放结束的处理回调。上面的代码通过cc.Sequence创建了Sushi消失的动作序列，并在动作结束后从层上移除SushiSprite.
                        // target.removeTouchEventListenser();
                        cc.eventManager.removeListener(this.touchListener,this);
                        //响应精灵点中
                        cc.log("pos.x="+pos.x+",pos.y="+pos.y);

                        target.stopAllActions();

                        var ac = target.disappearAction;
                        var seqAc = cc.Sequence.create( ac, cc.CallFunc.create(function () {
                          target.removeFromParent();
                        },target) );
                        target.runAction(seqAc);
                        if ( cc.rectContainsPoint(target.getBoundingBox(),pos)) {
                          console.info('log')
                          return true;
                        }
                        return false;
                      }
                    });
                    cc.eventManager.addListener(this.touchListener,this);
                  },
                  createDisappearAction : function() {
                    var frames = [];
                    for (var i = 0; i < 11; i++) {
                      var str = "sushi_1n_"+i+".png"
                      //cc.log(str);
                      var frame = cc.spriteFrameCache.getSpriteFrame(str);
                      console.table(cc.spriteFrameCache.getSpriteFrame(str));
                      frames.push(frame);
                    }

                    var animation = new cc.Animation(frames, 0.02);
                    var action = new cc.Animate(animation);

                    return action;
                  },
                });


                var PlayerLayer = cc.Layer.extend({
                  // 精灵个数
                  SushiSprites:null,
                  ctor:function () {
                    this._super();
                    // 初始化
                    this.SushiSprites = [];

                    // 加载帧图片
                    cc.spriteFrameCache.addSpriteFrames('../../static/img/sushi.plist');

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
                    // var sushi = new cc.Sprite('../../static/img/shuidi.png');

                    var sushi = new SushiSprite('../../static/img/sushi.png');
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
