<template>
  <div class="agentPage wrap">
    <div class="content">
      <div class="descibe">
        <span class="title">{{ content[chapter].title }}</span>
        <div class="introduction">
          {{ content[chapter].introduction }}
        </div>
        <div class="features">
          <div class="feature" v-for="item in content[chapter].features" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="Carousel">
        <el-carousel height="400px" @change="lischange">
          <el-carousel-item v-for="(item) in imageList" :key="item">
            <img
              :src="item"
              width="562px"
              height="323px"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss'
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
export default {
  data () {
    return {
      content: [{
        title: '社媒联系人管理',
        introduction: '多社媒账号同时登录，聊天记录及时同步后台，一键关联线索/客户，客户动态及时查看',
        features: ['一键关联线索/客户', '聊天记录同步', '联系人打标分类筛选']
      },{
        title: '社媒群发营销',
        introduction: '针对不同客群发起群发，支持定时发送，无效账号过滤，群成员提取发起群发',
        features: ['群发任务管理', '群发模版管理', '无效账号过滤', '群成员提取']
      },{
        title: '社媒沟通提效',
        introduction: '常用回复直接维护素材库，一键复制或发送',
        features: ['一键发起新会话', '一键添加群组', '素材库管理一键回复']
      }],
      img1,
      img2,
      img3,
      imageList: [
        img1, img2, img3
      ],
      chapter: 0,
    }
  },
  methods: {
    lischange (e) {
      this.chapter = e;
    }
  }
}
</script>

<style lang="scss" scoped>
.agentPage {
  .content {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .descibe {
      width: 341px;
      padding-left: 62px;
      text-align: left;
      .title {
        font-style: normal;
        font-size: 34px;
        font-weight: 600;
        line-height: 48px;
        color: #262626
      }
      .introduction {
        margin-top: 16px;
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #595959;
      }
      .features {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;

        .feature {
          width: 150px;
          margin-right: 20px;
          margin-bottom: 12px;
        }
      }
    }
    .Carousel {
      width: 660px;
      // .el-carousel__item h3 {
      //   color: #475669;
      //   font-size: 14px;
      //   opacity: 0.75;
      //   line-height: 150px;
      //   margin: 0;
      // }

      ::v-deep .el-carousel__indicators--horizontal {
        top: 80%;
      }

      ::v-deep .el-carousel__indicator.is-active button {
        background-color: #FF934A;
        opacity: 1;
      }

      ::v-deep .el-carousel__button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #E9E9E9;
      }

      // .el-carousel__item:nth-child(2n) {
      //   background-color: #99a9bf;
      // }
      
      // .el-carousel__item:nth-child(2n+1) {
      //   background-color: #d3dce6;
      // }
    }
  }
}
</style>