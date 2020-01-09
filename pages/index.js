import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Image from '../static/Image'

const Home = () => (
  <div>
    <Head>
      <title>Schedule Sticker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">
        {/*<Image fname='logo.png' size='900' />*/}
        Schedule Sticker
      </h1>
      <p className="description">
        Schedule Stickerは1週間のタスクを管理するサイト
      </p>
      
      <div className="row card">
        <Link href='./other'>
          <h3>はじめる</h3>
        </Link>  
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 90px;
        color: #FF7E73;
        font-family: 'Impact', sans-serif;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        text-align:center;
        font-size: 22px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
