<template>
  <div class="login-container">
    <div class="login-background">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
    </div>
    <el-card class="login-card">
      <div class="login-logo">
        <svg viewBox="0 0 100 100" width="60" height="60">
          <circle cx="50" cy="50" r="45" fill="#1890ff" />
          <path d="M25,50 Q50,25 75,50 T25,50" fill="none" stroke="#fff" stroke-width="8" />
        </svg>
      </div>
      <h2 class="login-title">欢迎登录</h2>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading" class="login-button">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            const success = await this.login(this.loginForm)
            if (success) {
              this.$message.success('登录成功！')
              this.$router.push('/')
            } else {
              this.$message.error('登录失败，请检查您的用户名和密码。')
            }
          } catch (error) {
            this.$message.error('发生错误，请稍后重试。')
          } finally {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  position: relative;
  overflow: hidden;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, #1890ff, #36cfc9);
  opacity: 0.1;
}

.circle1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
}

.circle2 {
  width: 500px;
  height: 500px;
  bottom: -200px;
  right: -200px;
}

.circle3 {
  width: 200px;
  height: 200px;
  bottom: 100px;
  left: 100px;
}

.login-card {
  width: 350px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 10;
}

.login-logo {
  text-align: center;
  margin-bottom: 20px;
}

.login-title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.login-button {
  width: 100%;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.login-logo svg {
  animation: float 3s ease-in-out infinite;
}
</style>