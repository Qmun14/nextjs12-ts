import { useRouter } from 'next/router';

export default function CommentId() {
  const router = useRouter();                                 //! url
  const { blogId, commentId } = router.query;                 //? http://localhost:3000/blog/3/comment/2
  return (
    <div>
      <h2>Blog Dynamic Route : {blogId} - {commentId}</h2>
    </div>                                                    //? outputnya ==>>   Blog Dynamic Route : 3 - 2
  )
}
