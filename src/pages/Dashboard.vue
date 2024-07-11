<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="24">
        <h1>Welcome back, {{ currentUser.username }}!</h1>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="stats-row">
      <el-col :xs="24" :sm="12" :md="6" v-for="(stat, index) in stats" :key="index">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="16">
        <el-card class="recent-activities">
          <div slot="header">
            <span>Recent Activities</span>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in recentActivities"
              :key="index"
              :timestamp="activity.timestamp"
              :type="activity.type"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="quick-actions">
          <div slot="header">
            <span>Quick Actions</span>
          </div>
          <el-button-group>
            <el-button type="primary" icon="el-icon-plus">New Project</el-button>
            <el-button type="success" icon="el-icon-message">Send Message</el-button>
            <el-button type="warning" icon="el-icon-setting">Settings</el-button>
          </el-button-group>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      stats: [
        { icon: 'el-icon-s-data', value: '150', label: 'Total Projects' },
        { icon: 'el-icon-s-order', value: '53', label: 'Tasks' },
        { icon: 'el-icon-s-custom', value: '27', label: 'Team Members' },
        { icon: 'el-icon-s-release', value: '$14,500', label: 'Total Revenue' }
      ],
      recentActivities: [
        { content: 'Project X completed', timestamp: '2023-04-01', type: 'success' },
        { content: 'New team member joined', timestamp: '2023-03-28', type: 'info' },
        { content: 'Client meeting scheduled', timestamp: '2023-03-25', type: 'warning' },
        { content: 'System update', timestamp: '2023-03-20', type: 'primary' }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['currentUser'])
  }
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.stats-row {
  margin-bottom: 20px;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 20px;
}

.stat-icon {
  font-size: 48px;
  margin-right: 20px;
}

.stat-info {
  flex-grow: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
}

.stat-label {
  color: #909399;
}

.recent-activities, .quick-actions {
  margin-bottom: 20px;
}

.quick-actions .el-button-group {
  display: flex;
  flex-direction: column;
}

.quick-actions .el-button-group .el-button {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .stat-card {
    margin-bottom: 20px;
  }
}
</style>