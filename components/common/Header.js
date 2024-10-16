import Link from "next/link"
import { TitleLogo } from "./Title"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          {/* <div className='logo'>
            <Link href='/'>
              <TitleLogo title='creative' caption='10' className='logomin' />
            </Link>
          </div> */}

          <div className='logo'>
            <Link href='/'>
              <Image
                src='/images/4DS5-French-Logo-removebg-preview.png'
                alt='4DS5 Logo'
                width={100}
                height={100}
                className='logomin'
              />
            </Link>
          </div>

          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Acceuil
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              À Propos
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Équipe
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Projects
            </Link>
            <Link href='/conference' className={activeLink == "/conference" ? "activeLink" : "none"}>
              Conference
            </Link>
            {/* <Link href='/donation' className={activeLink == "/donation" ? "activeLink" : "none"}>
              Donate
            </Link> */}
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <Link href='/profile' className={activeLink == "/profile" ? "activeLink" : "none"}>
              <button className='button-primary'>Profile</button>
            </Link>
            {/* <button className='button-primary'>Profile</button> */}
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
