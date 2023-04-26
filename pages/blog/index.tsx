import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const { page, limit } = router.query;                   //? url ==>   http://localhost:3000/blog?page=5&limit=18
  return (
    <div>
      <h2>This is blog page: {page} limit: {limit} </h2>
    </div>                                                //! outout => This is blog page: 5 limit: 18
  )
}
