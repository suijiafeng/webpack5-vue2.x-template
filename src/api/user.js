// 模拟API调用
export function login(credentials) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock_token_' + Date.now(),
        user: { id: 1, username: credentials.username }
      })
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