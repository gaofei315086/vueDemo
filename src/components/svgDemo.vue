<template>
  <div>
    <div>
      <svg width="50%"  viewBox="0 0 200 200">
        <!--<circle cx="30"  cy="50" r="25" />-->
        <circle cx="100"  cy="100" r="20" class="red" >
          <animate attributeName="cx" from="100" to="150" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" from="100" to="150" dur="2s" repeatCount="indefinite" />
        </circle>
        <!--<circle cx="150" cy="50" r="25" class="fancy" />-->
      </svg>
    </div>
    <div>
      <svg width="500px" height="500px">
        <rect x="0" y="0" width="100" height="100" fill="#feac5e">
          <animate attributeName="x" from="0" to="500" dur="5s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  </div>

</template>

<script>
    import * as Sentry from '@sentry/browser'
    import modelA from '../model/modelA'
    export default {
        name: "svgDemo",
      mounted:function () {
        // Sentry.addBreadcrumb({
        //   category: 'auth',
        //   message: 'Authenticated user ',
        //   level: 'info'
        // });
        let params = {
          x:1,
          y:2
        }
        let viewA = new modelA(params)
        console.info(this.getCount(17))
        // try{
        //   throw new DOMException('我是一个svg异常')
        // }catch(err){
        //   console.info(err)
        //   Sentry.captureException(err);
        // }
      },
      methods:{
          getCount:function (month) {
            // 边界值
            if(month === 1){
              return {
                'a':0.8*0.2+0.2*0.3+0.1*0.5,
                'b':0.7*0.3+0.1*0.2+0.3*0.5,
                'c':0.6*0.5+0.1*0.2+0.1*0.3
              }
            }else{
              var temp = this.getCount(--month)
              return{
                'a':0.8*temp.a+0.2*temp.b+0.1*temp.c,
                'b':0.7*temp.b+0.1*temp.a+0.3*temp.c,
                'c':0.6*temp.c+0.1*temp.a+0.1*temp.b
              }
            }
          }
      }
    }
</script>

<style scoped>
  .red {
    fill: red;
  }

  .fancy {
    fill: none;
    stroke: black;
    stroke-width: 3pt;
  }
</style>
