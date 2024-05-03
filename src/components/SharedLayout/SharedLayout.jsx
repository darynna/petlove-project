import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import { Header } from "./../Header/Header"


export const SharedLayout = () => {
  return (
    <>
    <Header />
    <main>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  </>
  );
};