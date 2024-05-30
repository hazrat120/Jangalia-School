import styled from "./navbar.module.css";
import image from "/public/images/logo.png";

const Navbar = () => {
  return (
    <div className={styled.nav}>
      <ul className={styled.nav_ul}>
        <li>About</li>
        <li>Admissions</li>
        <li>Academics</li>
      </ul>
      <img className={styled.nav_logo} src={image} alt="logo" />
      <ul className={styled.nav_ul}>
        <li>Research</li>
        <li>
          Page
          {/* <ul>
            <li>Home style two</li>
            <li>Home Video</li>
            <li>Blog</li>
            <li>Blog Post</li>
            <li>Events</li>
            <li>Course Details</li>
            <li>Campus Life</li>
            <li>Our Teachers</li>
            <li>Teachers Single</li>
            <li>Gallery</li>
            <li>Other Pages</li>
          </ul> */}
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
