<template>
  <div class="login-container">
    <div class="login-background">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
    </div>
    <el-card class="login-card">
      <div class="login-logo">
        <svg viewBox="0 0 100 100" width="80" height="80">
          <circle cx="50" cy="50" r="45" fill="#1890ff" />
          <path d="M25,50 Q50,25 75,50 T25,50" fill="none" stroke="#fff" stroke-width="8" />
        </svg>
      </div>
      <h2 class="login-title">Welcome Back</h2>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input 
            v-model="loginForm.username" 
            prefix-icon="el-icon-user" 
            placeholder="username：admin"
            @focus="focusInput('username')"
            @blur="blurInput('username')"
            :class="{ 'input-focus': focusedInput === 'username' }"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input 
            v-model="loginForm.password" 
            type="password" 
            prefix-icon="el-icon-lock" 
            placeholder="Password：admin@123"
            @focus="focusInput('password')"
            @blur="blurInput('password')"
            :class="{ 'input-focus': focusedInput === 'password' }"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading" class="login-button">
            <span v-if="!loading">Login</span>
            <span v-else>Logging in...</span>
          </el-button>
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
        username: [
          { required: true, message: 'Please enter your username', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be 3 to 20 characters', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' },
          { min: 6, message: 'Password must be at least 6 characters', trigger: 'blur' }
        ]
      },
      loading: false,
      focusedInput: null
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
              this.$message.success('Login successful!')
              this.$router.push('/')
            } else {
              this.$message.error('Invalid username or password. Please try again.')
            }
          } catch (error) {
            this.$message.error('An error occurred. Please try again later.')
          } finally {
            this.loading = false
          }
        }
      })
    },
    focusInput(inputName) {
      this.focusedInput = inputName
    },
    blurInput() {
      this.focusedInput = null
    },
    getRandomPosition() {
      return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }
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
  background: linear-gradient(135deg, #1c3d5c, #0a2136);
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
  width: 380px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 10;
  transition: all 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.login-logo {
  text-align: center;
  margin-bottom: 30px;
}

.login-title {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600;
}

.login-button {
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

.login-logo svg {
  animation: float 6s ease-in-out infinite;
}

.el-input {
  margin-bottom: 20px;
}

.el-input__inner {
  height: 44px;
  border-radius: 22px;
  padding-left: 44px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.el-input__prefix {
  left: 16px;
  font-size: 18px;
}

.input-focus .el-input__inner {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.el-form-item__error {
  padding-left: 16px;
}
</style>