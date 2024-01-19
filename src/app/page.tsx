'use client'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useState } from 'react'

export default function Home({}) {
  const [noteId, setNoteId] = useState<string>('')

  return (
    <>
      <NavBar />
      <div className='Home'>
        <div className='InputBox'>
          <input type='text' value={noteId} onChange={(e) => setNoteId(e.target.value)} required />
          <span>HackMD ID</span>
        </div>
        <Link className='ActiveButton' href={`/${noteId}.md`}>
          Submit
        </Link>
      </div>
      <Footer />
    </>
  )
}
