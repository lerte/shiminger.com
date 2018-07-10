<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1249" height="120">
    <!--  52 White keys   -->
    <rect 
      style="fill:white;stroke:black" 
      y="0" width="24" height="120" 
      :key="index"
      :x="(index*24)"
      :data="whiteKey"
      v-for="(whiteKey, index) in keys.whiteKeys">
    </rect>
    <!--  36 Black keys (overlap with the white keys)  -->
    <rect 
      style="fill:black;stroke:white" 
      y="0" width="12" height="80" 
      :key="index"
      :x="/^[B|E]\d?$/i.test(whiteKey) ? (index-1) * 24 + 18 : (index-1) * 24 + 42"
      v-if="index!=(keys.whiteKeys.length-1)"
      v-for="(whiteKey, index) in keys.whiteKeys">
    </rect>
    <text
      y="105" fill="black"
      :x="index*24 + 4"
      :key="index"
      v-text="whiteKey"
      v-for="(whiteKey, index) in keys.whiteKeys">
    </text>
  </svg>
</template>

<script>
export default {
  data: ()=>({
    keys: {
      whiteKeys:[
        'A2', 'B2',
        'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1',
        'C', 'D', 'E', 'F', 'G', 'A', 'B',
        'c', 'd', 'e', 'f', 'g', 'a', 'b',
        'c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1',
        'c2', 'd2', 'e2', 'f2', 'g2', 'a2', 'b2',
        'c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3',
        'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4',
        'c5'
      ]
    }
  })
}
</script>

