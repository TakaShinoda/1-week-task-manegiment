import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';
import Title from '../components/title';
import Button from '@material-ui/core/Button';

const Home = () => (
  <div>
    <Head>
      <title>Schedule Sticker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />


    <div className="hero">
        <Title />
      <p className="description">
        ここ1週間でやりたい事を管理する
      </p>
      
      <div className="row card">
        <Link href='./signin'>
          <Button size="large" variant="outlined" color="primary" size="large" >
            はじめる
          </Button>
        </Link>  
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .description {
        text-align: center;
        padding-top: 10px;
      }
      .row {
        margin: 40px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
)

export default Home
