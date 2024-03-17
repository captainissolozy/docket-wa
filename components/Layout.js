// components/Layout.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import layoutstyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
    const [isLogin ,setIsLogin] = useState(false);
    const router = useRouter();
    const { pathname } = router;

    console.log('path', pathname);
    return (
        <div className={layoutstyles.container}>
            {pathname == "/login"?<>
                <main>{children}</main>
                <Footer />
            </>:<>
                <Header />
                <main>{children}</main>
                <Footer />
            </>}
        </div>
    );
};

export default Layout;
