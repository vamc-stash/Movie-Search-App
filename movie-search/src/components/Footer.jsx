import React from 'react';

const Footer = () => {
	return(
		<footer className="footer-context">
			<div className="row">
				<div className="col-12 col-centered p-2" style={{"color":"#34495E"}}>
				 Made by {"   "}
			  <a
      href="https://github.com/vamc-stash"
      target="_blank"
      rel="noopener noreferrer"
     >
     <span style={{"color":"#34495E"}}>vamsi</span>
     </a>{" "}
     &copy; 2020
				</div>
			</div>
		</footer>
	)
}

export default Footer;