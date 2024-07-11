<template>
  <div class="home">
    <h1>Dashboard</h1>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in stats" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
          </div>
          <div class="card-content">
            <h2>{{ item.value }}</h2>
            <el-progress :percentage="item.progress" :color="item.color"></el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      stats: [
        { title: 'Users', value: 1234, progress: 80, color: '#409EFF' },
        { title: 'Orders', value: 456, progress: 65, color: '#67C23A' },
        { title: 'Revenue', value: '$9,876', progress: 75, color: '#E6A23C' },
        { title: 'Growth', value: '12%', progress: 55, color: '#F56C6C' }
      ]
    }
  }
}
</script>