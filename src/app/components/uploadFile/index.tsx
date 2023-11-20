'use client'
import React from 'react'
import { useState } from 'react'

const UploadFile = () => {
 const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          console.log("working")
    e.preventDefault()

    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)
      console.log("working")

      const res = await fetch('http://localhost:8181/api/files/upload', {
        method: 'POST',
        body: data
      })
     
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit} className='filesubmit'>
      <input
        className='choose'
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" className='upload' />
    </form>
  )
}

export default UploadFile
