import { useRouter } from 'next/router';

export default function BlogId() {
  const router = useRouter();
  const { blogId } = router.query;       //! var. destruct ini harus sama seperti nama file yg ada di dynamic router [blogId]
  return (
    <div>
      <h2>Blog Dynamic Route : {blogId}</h2>
    </div>
  )
}
