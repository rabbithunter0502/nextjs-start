import Link from 'next/link';
import {API_URL} from '@/constants/api-routes.constant';

async function fetchProperties() {
  try {
    const res = await fetch(API_URL.PROPERTIES);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {

  }
}
const PropertiesPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Properties</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
};
export default PropertiesPage;
