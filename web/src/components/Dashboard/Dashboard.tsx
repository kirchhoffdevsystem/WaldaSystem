import { Outlet } from 'react-router-dom';

import Header from '../UI/Header/Header';
import Sidebar from '../UI/Sidebar/Sidebar';
import Footer from '../UI/Footer/Footer';

import Centralizar from '../CentralizarComponent/CentralizarComponent';

import css from "./dashboard.module.css";

export default function Dashboard_Component() {
  return (
    <div className={css.dashboard}>
      <div className={css.dashboard__container}>
        <Sidebar />
        <div className={css.dashboard__content}>
          <Header />
          <Centralizar>
            <Outlet />
          </Centralizar>
        </div>
      </div>
      <Footer />
    </div>
  );
}
