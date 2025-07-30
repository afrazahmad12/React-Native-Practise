import { useAuthStore } from '@/modules/auth/store/useAuthStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AuthIndex() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    router.replace(isAuthenticated ? '/' : '/(auth)/login');
  }, [isAuthenticated]);

  return null;
}
