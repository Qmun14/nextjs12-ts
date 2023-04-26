import { useRouter } from 'next/router'

export default function Add() {
  const router = useRouter();
  const publish = () => {
    console.log('publish a new blog');
    router.push('/blog');
  }

  return (
    <div>
      <h1>Add New Blog</h1>
      <button onClick={publish} className='bg-slate-200 rounded-md p-1'>Publish Blog</button>
    </div>
  )
}
