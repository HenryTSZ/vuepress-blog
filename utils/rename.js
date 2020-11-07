const fs = require('fs')
const path = require('path')

const loadFiles = filePath => {
  const fileDirs = fs.readdirSync(filePath)
  fileDirs.forEach((filename, index) => {
    // 获取当前文件的绝对路径
    const fileDir = path.join(filePath, filename)
    // 根据文件路径获取文件信息, 返回一个 fs.Stats 对象
    const stat = fs.statSync(fileDir)
    if (stat.isDirectory()) {
      loadFiles(fileDir) // 递归, 如果是文件夹, 就继续遍历该文件夹下面的文件
    } else if (stat.isFile()) {
      if (filename.includes('.md')) {
        fs.renameSync(fileDir, path.join(filePath, `${index}.${filename}`))
      }
    } else {
      return
    }
  })
}
loadFiles(process.cwd())
