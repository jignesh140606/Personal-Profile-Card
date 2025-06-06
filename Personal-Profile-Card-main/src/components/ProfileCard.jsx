import github from "../../public/github.png";
import insta from "../../public/insta.png";
import twitter from "../../public/twitter.png";
import linkedin from "../../public/linkedin.png";

function ProfileCard() {
  return (
    <main>
      <div className="profile-card">
        <div className="card-header">
          <img src="/profile.jpg" alt="profile thumbnail" className="avatar" />
          <div className="profile-info">
            <p className="profile-name">Yug Buha</p>
            <p className="profile-title">FrontEnd Engineer</p>
          </div>
        </div>
        <p className="profile-bio">
          I turn coffee into bugs which are fixed by someone else. 
          Certified Stack Overflow and ChatGPT developer.
        </p>
        <button className="contact-button">Contact me</button>
        <div className="actions-container">
          <a
            href="https://github.com/Yug23IT013"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="icon" aria-label="github link" />
          </a>
          <a
            href="www.linkedin.com/in/yugbuha001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="icon" aria-label="linkedin link" />
          </a>
          <a
            href="https://www.instagram.com/yugbuha001?igsh=MXI3enV6d2t2eXJhOA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} className="icon" aria-label="insta link" />
          </a>
          <a
            href="https://x.com/YugBuha001?t=5cO_4rRcDDuh9H6kWAK-oA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className="icon" aria-label="twitter link" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProfileCard;
