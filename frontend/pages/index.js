import Navbar from '@/components/Navbar/Navbar'
import LandingPage from '@/components/LandingPage/LandingPage'
import styles from "../styles/Home.module.css"
import LogoGather from "../components/Particle/Particle"

export default function Home() {

  return (
    <div className={styles.homePage}>
      <Navbar />
      <LogoGather />
      <LandingPage />
    </div>
  )
}
