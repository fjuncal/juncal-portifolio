"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const HeroSection = () => {
	return (
		<section id="home">
			<div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
				<div className="md:mt-2 md:w-1/2">
					<Image
						src="/screen-photo.png"
						alt=""
						width={325}
						height={325}
						className="rounded-full shadow-2xl"
					/>
				</div>
				<div className="md:mt-2 md:w-3/5">
					<h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
						Hi, I&#39;m Fellipe!
					</h1>
					<p className="mt-4 mb-6 text-lg md:text-2xl">
						I&#39;m a{" "}
						<span className="font-semibold text-teal-600">
							Software Engineer{" "}
						</span>
						from Rio de Janeiro, Brazil, passionate about building clean,
						scalable, and meaningful software that solves real-world problems.
					</p>
					<div className="space-x-4 mt-7">
						<Link
							to="projects"
							className="px-6 py-3 font-semibold bg-teal-600 rounded shadow text-neutral-100 hover:bg-teal-700 hover:cursor-pointer"
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							Projects
						</Link>
						<a
							href="/juncal-refact-be.pdf"
							target="_blank"
							rel="noreferrer"
							className="px-6 py-3 font-semibold bg-teal-600 rounded shadow text-neutral-100 hover:bg-teal-700 hover:cursor-pointer"
						>
							View CV
						</a>
						<div className="flex flex-row space-x-4 mt-7">
							<a
								href="https://github.com/fjuncal"
								rel="noreferrer"
								target="_blank"
							>
								<AiOutlineGithub
									className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
									size={30}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/fellipe-juncal/"
								rel="noreferrer"
								target="_blank"
							>
								<AiOutlineLinkedin
									className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
									size={30}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center text-center ">
				<Link
					to="about"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} className="animate-bounce" />
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
