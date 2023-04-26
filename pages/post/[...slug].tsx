import { useRouter } from 'next/router'

export default function Slug() {
  const router = useRouter();
  const { slug = [] } = router.query;
  return (
    <div>Slug {slug[0]} - {slug[1]} - {slug[2]} </div>
  )
}










// ==========================================================================================================================

// Rute dinamis dapat diperluas untuk menangkap semua jalur dengan menambahkan tiga titik (...) di dalam tanda kurung. Sebagai contoh:

//     pages/post/[...slug].js tidak hanya cocok dengan /post/a, tetapi juga /post/a/b, /post/a/b/c, dan seterusnya.
//     pages/post/[...slug].js tidak cocok dengan /post.

//     Catatan: Anda dapat menggunakan nama selain slug, seperti: [...param]

// Parameter yang cocok akan dikirim sebagai parameter kueri (slug dalam contoh) ke halaman, dan akan selalu berupa larik, jadi, jalur /post/a akan memiliki objek kueri berikut ini:

// { " slug ": ["a"] }

// Dan dalam kasus /post/a/b, dan jalur lain yang cocok, parameter baru akan ditambahkan ke dalam larik, seperti ini:

// { " slug ": ["a", "b"] }