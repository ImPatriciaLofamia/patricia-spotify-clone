
import { useRouter } from 'next/router';
import { SideBarNav, TrackPlayer } from '@/components';

export default function Layout({ children }) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <div>
      <div>
        <main>
          {isLoginPage ? (
            <div className="flex items-center">{children}</div>
          ) : (
            <div className="flex items-center">
              <SideBarNav />
              {children}
            </div>
          )}
        </main>
        {!isLoginPage && (
          <div className="sticky bottom-0">
            <TrackPlayer />
          </div>
        )}
      </div>
    </div>
  );
}
