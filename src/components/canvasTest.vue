<template>
  <canvas id="canvas">

  </canvas>
</template>

<script>
  export default {
    name: "canvasTest",
    data:function(){
      return {
        context:null,
        canvas:null,
        FONT_HEIGHT:15,
        MARGIN:35,
        HAND_TRANCATION:0,
        HOUR_HAND_TRANCATION:0,
        NUMERAL_SPACING:0,
        RADIUS:0,
        HAND_RADIUS:0
      }
    },
    mounted: function () {
      this.canvas = document.getElementById('canvas')
      this.context = document.getElementById('canvas').getContext('2d')
      this.FONT_HEIGHT = 15
      this.MARGIN = 35
      this.HAND_TRANCATION = this.canvas.width/25
      this.HOUR_HAND_TRANCATION = this.canvas.width/10
      this.NUMERAL_SPACING = 20
      this.RADIUS = this.canvas.width - this.MARGIN
      this.HAND_RADIUS = this.RADIUS + this.NUMERAL_SPACING

      this.context.font = this.FONT_HEIGHT + 'px Arial'
      let loop = window.setInterval(this.drawClock,1000)
    },
    methods:{
      drawCircle:function () {
        this.context.beginPath()
        this.context.arc(this.canvas.width/2,this.canvas.height/2,this.RADIUS,0,Math.PI*2,true)
        this.context.stroke()
      },
      drawNumerals:function () {
        let numerals = [1,2,3,4,5,6,7,8,9,10,11,12]
        let angle = 0
        let numeralWidth = 0

        numerals.forEach((numeral)=>{
          angle = Math.PI/6 * (numeral-3)
          numeralWidth = this.context.measureText(numeral+'').width
          this.context.fillText(numeral,this.canvas.width/2+Math.cos(angle)*this.HAND_RADIUS -numeralWidth/2,this.canvas.height/2+Math.sin(angle)*this.HAND_RADIUS -this.FONT_HEIGHT/3)
        })
      },
      drawCenter:function () {
        this.context.beginPath()
        this.context.arc(this.canvas.width/2,this.canvas.height/2,5,0,Math.PI*2,true)
        this.context.fill()
      },
      drawHand:function (loc,isHour) {
        let angle = (Math.PI*2) * (loc/60) -(Math.PI/2)
        let handRadius = isHour? this.RADIUS-this.HAND_TRANCATION - this.HOUR_HAND_TRANCATION:this.RADIUS-this.HAND_TRANCATION
        this.context.moveTo(this.canvas.width/2,this.canvas.height/2)
        this.context.lineTo(this.canvas.width/2+Math.cos(angle)*handRadius,this.canvas.height/2+Math.sin(angle)*handRadius)
        this.context.stroke()
      },
      drawHands:function () {
        let date = new Date()
        let hour = date.getHours()
        hour = hour>12?hour-12:hour
        this.drawHand(hour*5+(date.getMinutes()/60)*5,true,0.5)
        this.drawHand(date.getMinutes(),false,0.5)
        this.drawHand(date.getSeconds(),false,0.2)
      },
      drawClock:function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.drawCircle()
        this.drawCenter()
        this.drawHands()
        this.drawNumerals()
      }
    }
  }
</script>

<style scoped>

</style>
