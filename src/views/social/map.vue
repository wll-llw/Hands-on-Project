<template>
  <div class="map wrap">
    <EchartsComponent :option="echartsOption" />
  </div>
</template>

<script>
import EchartsComponent from "@/components/EchartsComponent.vue";
import { Option } from "@/config/echarts"
export default {
  components: {
    EchartsComponent
  },
  data() {
    return {
      echartsData: [],
      echartsOption: Option(),
    }
  },
  mounted() {
    this.echartsOption.series[0].data = [
      {
        name: 'flare',
        children: [
          {
            name: 'data',
            children: [
              {
                name: 'converters',
                children: [
                  { name: 'Converters', value: 721 },
                  { name: 'DelimitedTextConverter', value: 4294 }
                ]
              },
              {
                name: 'DataUtil',
                value: 3322
              }
            ]
          },
          {
            name: 'display',
            children: [
              { name: 'DirtySprite', value: 8833 },
              { name: 'LineSprite', value: 1732 },
              { name: 'RectSprite', value: 3623 }
            ]
          },
        ]
      }
    ]
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
