'use client';
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from 'next/navigation';

const PropertyDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  return (
    <div>
      <button onClick={() => router.push('/')} className="bg-blue-500 p-2">
        Go Home
      </button>
    </div>
  );
};
export default PropertyDetailPage;
