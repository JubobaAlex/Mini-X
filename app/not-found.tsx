import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white-600">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-white-800">
          Страница не найдена
        </h2>
        <p className="mt-2 text-lg text-wgite-600">
          Извините, запрашиваемая страница не существует.
        </p>
        <div className='flex justify-center'>
          <Link
          href="/"
          className="items-center justify-center mt-8 w-45 h-10 flex rounded-lg bg-green-600 px-6 py-3 text-white 
                     hover:bg-green-700 focus:outline-none focus:ring-2 
                     focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
         <p> Вернуться на главную</p>
        </Link>
        </div>
      </div>
    </div>
  )
}