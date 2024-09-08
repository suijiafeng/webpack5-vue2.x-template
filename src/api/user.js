// 模拟API调用
export function login(credentials) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟的用户数据库
      const users = [
        { username: 'admin', password: 'admin@123' },
        { username: 'user', password: 'user@123' }
      ]

      const user = users.find(u => u.username === credentials.username && u.password === credentials.password)

      if (user) {
        resolve({
          token: 'mock_token_' + Date.now(),
          user: { id: user.username === 'admin' ? 1 : 2, username: user.username }
        })
      } else {
        reject(new Error('Invalid username or password'))
      }
    }, 1000)
  })
}

export function logout() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
      ])
    }, 1000)
  })
}