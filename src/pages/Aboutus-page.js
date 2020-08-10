import React from 'react';

import other from '../../assets/img/other.jpg'
import other1 from '../../assets/img/other1.jpg'
import other3 from '../../assets/img/other3.jpg'
import other4 from '../../assets/img/other4.jpg'

import staff1 from '../../assets/img/staff1.jpeg'
import staff2 from '../../assets/img/staff2.jpeg'
import staff3 from '../../assets/img/staff3.jpeg'

const AboutUsPage = () => {
    return (
			<div>

				<div className="about-body">
					<div className="about-intro">
						<div className="intro-img">
							<img src={other4} alt="" />
						</div>

						<div className="para">
							<h2>Welcome to foldables</h2>
							<p>Mollit occaecat ut sint in voluptate consectetur fugiat aliqua reprehenderit. 
								Tempor ullamco duis occaecat enim incididunt qui reprehenderit dolor do. 
								Lorem nisi sit ipsum aliqua anim ea et non eu cillum do aliqua. 
								Fugiat officia nisi adipisicing nostrud velit elit sunt minim consequat aliquip sunt.</p>
								<p>Sunt exercitation eiusmod aliqua aute veniam Lorem cupidatat. 
									Sunt enim tempor culpa velit anim ipsum commodo voluptate eu aliqua. 
									Proident proident do in id culpa cillum anim ullamco fugiat est veniam. 
									Eu amet exercitation et deserunt nisi amet eu et excepteur. 
									Anim quis mollit adipisicing est voluptate dolor cillum occaecat nostrud dolore culpa est. 
									Consectetur esse est id id commodo exercitation qui. Laboris mollit eu pariatur minim duis 
									laboris commodo in in.</p>
						</div>
					</div>
					

					<div className="about-offer">
						<h1>What we offer at Foldables</h1>
						<p>A taste of sweetness</p>

						<div className="learn-more">
							<div className="about-product">
								<h3>Blueberry</h3>

								<span>
									<img src={other} alt="" className="" />
								</span>
								<p>Id aute reprehenderit Lorem mollit deserunt cillum laborum anim. Quis id ea laborum 
									amet anim.</p>
								<button>Learn more</button>
							</div>

							<div className="about-product">
								<h3>Fruit cake</h3>

								<span>
									<img src={other3} alt="" className="" />
								</span>
								<p>Id aute reprehenderit Lorem mollit deserunt cillum laborum anim. Quis id ea laborum 
									amet anim.</p>
								<button>Learn more</button>
							</div>

							<div className="about-product">
								<h3>Chocolate</h3>

								<span>
									<img src={other1} alt="" className="" />
								</span>
								<p>Id aute reprehenderit Lorem mollit deserunt cillum laborum anim. Quis id ea laborum 
									amet anim.</p>
								<button>Learn more</button>
							</div>
						</div>
					</div>

					<div className="latest-offer">
						<div>
							<h1>Foldables offer</h1>
							<h4>Our latest offer</h4>
							<p>Proident nulla cillum eu fugiat consequat commodo exercitation pariatur laboris do amet ad elit in. 
								Dolore tempor elit excepteur sit ipsum culpa consectetur anim labore. Id pariatur aliquip ad et fugiat 
								velit. Est quis aute sint id exercitation voluptate adipisicing duis eu occaecat irure.</p>
						</div>
					</div>

					<div className="meet-our-staff">
					<h1>Meet our staff</h1>
						<div className="staff">
							<figure>
								<img src={staff1} alt="" />
								<figcaption>
									<p className="name">April Smith</p>
									<p className="role">Designer</p>
								</figcaption>
							</figure>

							<figure>
								<img src={staff3} alt="" />
								<figcaption>
									<p className="name">Mary Addams</p>
									<p className="role">Chef</p>
								</figcaption>
							</figure>

							<figure>
								<img src={staff2} alt="" />
								<figcaption>
									<p className="name">Justin Peters</p>
									<p className="role">Manager</p>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
		</div>
	)
} 

export default AboutUsPage
