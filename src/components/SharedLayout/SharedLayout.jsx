import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import { Header } from "./../Header/Header"
import {Container} from "./SharedLayout.styles"


export const SharedLayout = () => {
  return (
    <>
    <Header />
    <main>
     <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  </>
  );
};