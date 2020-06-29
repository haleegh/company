import React from 'react'
import { Link, Route } from 'react-router-dom'
import { MainMenu, AboutMenu } from './ui/menus'
import { Company, History, Services, Location } from './ui/subMenus'

export const Home = () =>
   <section className='home'>
      <h1>[홈페이지]</h1>
      <nav>
         <Link className='navLi' to='about'>[회사 소개]</Link>
         <Link className='navLi' to='events'>[이벤트]</Link>
         <Link className='navLi' to='products'>[제품]</Link>
         <Link className='navLi' to='contact'>[고객 지원]</Link>
      </nav>
   </section>

export const About = () =>
   <PageTemplate>
      <section className='about'>
         <Route component={AboutMenu} />
         <Route exact path='/about' component={Company} />
         <Route path='/about/history' component={History} />
         <Route path='/about/services' component={Services} />
         <Route path='/about/location' component={Location} />
      </section>
   </PageTemplate>

export const Events = () =>
   <PageTemplate>
      <section className='events'>
         <h1>[이벤트 달력]</h1>
      </section>
   </PageTemplate>

export const Products = () =>
   <PageTemplate>
      <section className='products'>
         <h1>[제품 페이지]</h1>
      </section>
   </PageTemplate>

export const Contact = () =>
   <PageTemplate>
      <section className='contact'>
         <h1>[고객 지원 센터]</h1>
      </section>
   </PageTemplate>

export const Whoops404 = ({ location }) =>
   <div className='whoops-404'>
      <h1>'{location.pathname}' 경로의 자원을 찾을 수 없습니다.</h1>
   </div>

const PageTemplate = ({children}) =>
   <div className='page'>
      <MainMenu />
      {children}
   </div>