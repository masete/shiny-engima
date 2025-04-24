import Link from 'next/link';
// import Button from './Button';

type HeroProps = {
  backgroundImage: string;
  showButton: boolean;
  children: React.ReactNode;
}

export function Hero({ backgroundImage, showButton, children }: HeroProps) {

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white">
        <div className="text-center pb-1 w-[80%]">
        {children}
           {showButton && 

            <div className='w-full flex flex-col my-2 items-center justify-center mt-20 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3'>
                <Link href="/auth/login">
                  <button type="submit" className='w-[240px] text-black my-1 bg-white font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                    Log in to your account
                  </button>
                </Link>

                <Link href="/auth/register">
                  <button type="submit" className='w-[240px] text-black my-1 bg-white font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                    Create an account
                  </button>
                </Link>
            </div>
              }
        </div>
      </div>
    </div>
  );
}
