import * as archiver from 'archiver'
import { createWriteStream, mkdirSync, unlinkSync } from 'fs'
import { basename, dirname } from 'path'

export default {

  zip (sources: string[], dist: string, level = 9, delete_source = true) {

    mkdirSync(dirname(dist), { recursive: true })

    return new Promise<string>((resolve, reject) => {

      // 创建流对象
      const output = createWriteStream(dist)

      //创建压缩对象 设置压缩格式及级别
      const archive = archiver('zip', { zlib: { level } })

      //监听error事件
      archive.on('error', e => {
        if (e) reject(e)
      })

      //监听close事件
      output.on('close', () => {
        // 删除
        delete_source && sources.forEach(i => unlinkSync(i))
        resolve(dist)
      })

      //将流对象传入压缩对象中
      archive.pipe(output)

      //循环添加要压缩的文件
      sources.forEach(item => {
        const name = basename(item)
        archive.file(item, { name })
      })

      //完成压缩对象的配置
      archive.finalize().then()

    })
  }
}