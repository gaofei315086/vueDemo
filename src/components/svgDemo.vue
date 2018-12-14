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
    export default {
        name: "svgDemo"
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
