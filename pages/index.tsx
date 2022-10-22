import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {

      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: `http://192.168.50.104:3000`
        })
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      alert("Sorry! Your browser does not support Web Share API");
    }
  };
  return (
    <div >
        <div onClick={handleShareButton}>
            <button>CLICK ME</button>
        </div>



    </div>
  )
}

export default Home
