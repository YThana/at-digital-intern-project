import React, {useState} from 'react';
import logo from '../assets/logo.svg';
import mobileMenuToggler from '../assets/mobileMenuToggler.svg';
import hero from '../assets/hero.jpg';
import section2Img from '../assets/section2.svg';
import section3Img from '../assets/section3.svg';
import FaqAccordion from '../components/FaqAccordion';

function LandingPage() {
	const [mobielMenu, setMobileMenu] = useState(false);
	return (
		<div className="relative w-screen">
			{/* start: header section */}
			<header className="w-screen bg-primary h-[77px] items-center xl:px-[80px] lg:px-[60px] md:px-[40px] px-[20px] flex justify-between">
				<img src={logo} alt="log" className="flex" />
				<div className="hidden md:flex gap-7 text-white font-medium text-sm uppercase">
					<p>services</p>
					<p>about us</p>
					<p>contact us</p>
					<p>careers</p>
				</div>
				<div className="flex md:hidden">
					<button onClick={() => setMobileMenu(!mobielMenu)}>
						<img src={mobileMenuToggler} alt="toggler" />
					</button>
				</div>
			</header>
			{/* start: mobile menu section */}
			{mobielMenu && (
				<div className="z-20 absolute bg-white top-0  md:hidden w-screen h-screen">
					<div className="pt-4 px-5 text-black flex flex-col gap-8 font-medium text-sm uppercase">
						<div className="flex justify-between">
							<p>home</p>
							<button
								className="font-bold text-[28px]"
								onClick={() => setMobileMenu(!mobielMenu)}>
								x
							</button>
						</div>
						<p>services</p>
						<p>about us</p>
						<p>contact us</p>
						<p>careers</p>
					</div>
				</div>
			)}
			{/* end: mobile menu section */}
			{/* end:header section */}

			<section id="hero">
				<div className={`relative hero`}>
					<img className="flex lg:hidden" src={hero} alt="logo" />
					<div className="relative lg:absolute lg:left-20 lg:bottom-10 lg:h-[306px] lg:w-[630px] bg-gradient-to-r from-interstellarBlue to-richBlue">
						<p className="text-white font-bold text-4xl md:text-5xl pt-[24px] px-5 md:px-10 lg:pl-10 lg:pr-[34px]">
							We crush your competitors, goals, and sales records - without the B.S.
						</p>
						<button className="rounded-[4px] mb-8 lg:mb-0 bg-secondary text-sm font-bold uppercase text-white py-3 px-5 ml-5 md:ml-10 lg:ml-10 mt-5">
							Get free consultation
						</button>
					</div>
				</div>
			</section>
			<section
				id="web-development"
				className="xl:mx-auto flex md:flex-row flex-col py-[60px] lg:py-20 px-5 md:px-10 lg:px-[152px] xl:px-0 xl:max-w-[1064px]">
				<img
					src={section2Img}
					alt="web & mobile app development"
					className="mx-auto md:mx-0 flex xl:h-[414px] xl:w-[414px] lg:h-[346px] lg:w-[346px] h-[275px] w-[275px]"
				/>
				<div className="flex flex-1 justify-center md:justify-end items-center">
					<div className="text-center md:text-left max-w-[542px] flex flex-1 items-center md:items-start flex-col gap-5">
						<h1 className="text-[27px] text-primary font-poppins font-semibold">
							Web & Mobile App Development
						</h1>
						<p className="text-base">
							Your web and mobile Apps are pieces of the puzzle to grow your business.
							We use frameworks which tailor content and engagement methods to respond
							to different intents shown by your potential customers who interact with
							your business online.
						</p>
						<button className="rounded-[4px] uppercase flex px-5 py-3 bg-secondary text-white text-sm font-bold">
							learn more
						</button>
					</div>
				</div>
			</section>
			<section
				id="digital-stratergy"
				className="xl:mx-auto flex md:flex-row flex-col-reverse pb-[60px] lg:pb-20 px-5 md:px-10 lg:px-[152px] xl:px-0 xl:max-w-[1064px]">
				<div className="flex flex-1 justify-center md:justify-start items-center">
					<div className="text-center md:text-left max-w-[542px] flex flex-1 items-center md:items-start flex-col gap-5">
						<h1 className="text-[27px] font-poppins text-primary font-semibold">
							Digital Strategy Consulting
						</h1>
						<p className="text-base">
							Your digital strategy should complement the overall marketing strategy
							of the company. In online marketing, each component will never work in
							isolation and every business needs a different mix. We provide a clear
							concept and strategic overview to find the most efficient model for your
							business.
						</p>
						<button className="rounded-[4px] uppercase flex px-5 py-3 bg-secondary text-white text-sm font-bold">
							learn more
						</button>
					</div>
				</div>
				<img
					src={section3Img}
					alt="Digital Strategy Consulting"
					className="mx-auto md:mx-0 flex xl:h-[414px] xl:w-[414px] lg:h-[346px] lg:w-[346px] h-[275px] w-[275px]"
				/>
			</section>
			<section id="faq" className="pb-[60px] lg:pb-20">
				<h1 className="text-[27px] font-poppins font-semibold text-primary text-center">
					Frequently asked questions
				</h1>
				<div className="mt-7 flex-col gap-[15px]">
					<FaqAccordion
						title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
						content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
					/>
					<FaqAccordion
						title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
						content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
					/>
					<FaqAccordion
						title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
						content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
					/>
				</div>
			</section>
			<footer className="flex flex-col gap-10 w-screen text-white bg-primary pt-10 px-5 md:px-10 lg:px-[60px] xl:px-20">
				<div className="flex flex-col lg:flex-row lg:justify-between gap-[60px] lg:gap-0 ">
					<div className="max-w-[413px] flex flex-col gap-5">
						<img src={logo} alt="logo" className="w-[234px] h-[36px]" />
						<p className="text-base font-lato">
							Your goal is our target. Not anything in between. We use online
							marketing platforms and tools to achieve single objective - your
							business results.
						</p>
					</div>
					<div className="flex md:flex-row flex-col gap-10 md:gap-32">
						<div className="flex flex-col gap-3">
							<h1 className="text-[21px] font-semibold">Our Technologies</h1>
							<div className="flex flex-col text-sm gap-3">
								<p>ReactJS</p>
								<p>Gatsby</p>
								<p>NextJS</p>
								<p>NodeJS</p>
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-[21px] font-semibold">Our Services</h1>
							<div className="flex flex-col text-sm gap-3">
								<p>Social media Marketing</p>
								<p>Web & Mobile App Development</p>
								<p>Data & Analytics</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 mb-5">
					<div className="bg-white h-[1px] w-full md:w-[630px]"></div>
					<p>Privacy Policy | Terms & Conditions</p>
				</div>
			</footer>
		</div>
	);
}

export default LandingPage;
