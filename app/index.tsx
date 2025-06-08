import React from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  // For now, redirect to login. Later we can check auth state here
  return <Redirect href="/auth/login" />;
}