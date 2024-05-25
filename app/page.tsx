import styles from "./page.module.css";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import TypeWriter from "@/components/TypeWriter";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Text } from "@chakra-ui/react";
export const revalidate = 15;
export default async function Home() {
	return (
		<main className={styles.main}>
			<Flex className={styles.intro} flexDirection={"column"} gap={"4px"}>
			<Image
  borderRadius='full'
  boxSize='25vh'
  src='icon.png'
  alt='Saksham Misra'
  
/>

				<Heading>Hi, I&apos;m Saksham.</Heading>

				<Box>
					<Flex
						direction={"row"}
						fontSize={"1.5em"}
						style={{
							color: "hsl(var(--primary))",
							fontWeight: "bold",
						}}
					>
						<TypeWriter
							style={{
								color: "hsl(var(--primary))",
								fontWeight: "bold",
								textDecoration: "underline",
								textDecorationThickness: "4px",
							}}
							words={["Full Stack ", "Hobby ", "Next.js "]}
						/>{" "}
						Developer
					</Flex>
					<Box opacity={0.7}>
						I began coding in year 2021, and it has evolved into a
						passionate hobby for me.
					</Box>
				</Box>
			</Flex>
			<div className={styles.divider} />
			<Flex direction={"column"} gap={"4px"}>
				<Heading>Education</Heading>
				<Box>
					<Box fontSize={"large"}>
						Indian Institute of Technology , BHU
						<span
							style={{
								opacity: 0.6,
							}}
						>
							,&nbsp;Varanasi, India.
						</span>
					</Box>
					<Box fontSize={"large"}>
						B.Tech in Electronics Engineering
					</Box>
					<Box>2022 - 2026</Box>
				</Box>
			</Flex>
			<div className={styles.divider} />
			<Flex direction={"column"} gap={"4px"}>
				<Heading>Skills</Heading>
				<Box>
					<Box fontSize={"x-large"}>Languages</Box>
					<Box opacity={0.7}>TypeScript, JavaScript, C++, C</Box>
				</Box>
				<Box>
					<Box fontSize={"x-large"}>Frameworks</Box>
					<Box opacity={0.7}>
						React, Next.js, Three.js, Shephard.js
					</Box>
				</Box>
				<Box>
					<Box fontSize={"x-large"}>Tools & Databases </Box>
					<Box opacity={0.7}>
						Figma, Git, MongoDB{" "}
					</Box>
				</Box>
			</Flex>
			<div className={styles.divider} />
			<Flex direction={"column"} gap={"16px"}>
				<Heading id="Projects">Projects</Heading>
				<div className={styles.projectCardsGrid}>
					<ProjectCard
						title="Three.js COPS Project"
						brief="A Project Embeding 3-D components to showcase COPS Verticals"
						startDate="June 2023"
						endDate="July 2024"
						tags={[
							"Three.js",
							"Javascript",
							"Git",
						]}
						GHLink="https://github.com/vinfinity7/Threejs_COPS"
						demoLink="https://cops-freshers-page.vercel.app/"
						>
						<Flex gap={2} direction="column">
							
							<div>
								<Text
									color="hsl(var(--secondary))"
									fontWeight={"bold"}
								>
									Background
								</Text>
								<Text opacity={0.7} fontWeight={"lighter"}>
								This is an Introductory website to all the verticals in our college coding group COPS .This makes Club of Programmers one of the most important clubs in the institute. Club of Programmers (or better known as COPS) understands this responsibility and plays a crucial part in maintaining the coding culture in the institute. Introductory workshops are held for freshers to introduce them to the various facets of programming. Regular competitions are held for the general student body to test and sharpen their programming skills.
								</Text>
							</div>
						</Flex>
					</ProjectCard>
					<ProjectCard
						title="IIT BHU Wi-Fi Logger"
						brief="Wi-Fi Logger Once and For-All"
						startDate="October 2023"
						endDate="January 2024"
						tags={["Electron.js", "JavaScript"]}
						GHLink="https://github.com/vinfinity7/wifi_login"
						>
						<div>
							<Text
								color="hsl(var(--primary))"
								fontWeight={"bold"}
								>
								Features
							</Text>

							<ul
								style={{
									opacity: 0.7,
								}}
								>
  <li>The main functionality of this application is to automate the process of logging into the WiFi network at IIT BHU.</li>
  <li>It achieves this by sending multiple Axios-based requests to the firewall URL of the college WiFi.</li>
  <li>It includes error handling to manage failed login attempts and retries automatically.</li>
  <li>The application runs in the background, ensuring seamless WiFi connectivity without user intervention.</li>
  <li>The application is designed to be lightweight and have minimal impact on system performance.</li>

							</ul>
						</div>
					</ProjectCard>

					<ProjectCard
						title="Personal Portfolio"
						brief="Wi-Fi Logger Once and For-All"
						startDate="May 2024"
						endDate="June 2024"
						tags={["Next.js", "MongoDB","Git"]}
						GHLink="#"
						demoLink="https://sakshamdev.vercel.app/"
						>
						<Flex direction={"column"} gap={2}>
							<div>
								<Text
									color="hsl(var(--primary))"
									opacity={0.7}
								>
									Background
								</Text>
								<Text opacity={0.7}>
								A portfolio developed using Next.js and MongoDB showcases a dynamic and efficient web application. Next.js enables server-side rendering and static site generation, enhancing performance and SEO. MongoDB, as a NoSQL database, offers flexibility in storing and managing data. Together, they create a seamless, responsive portfolio with fast load times and a modern user experience. This tech stack is ideal for developers looking to build scalable, high-performance websites that can handle dynamic content effortlessly.
								</Text>
							</div>
						</Flex>
					</ProjectCard>
					<ProjectCard
						title="Chip8 Emulator"
						brief="Chip8 Emulator made using classic C++"
						startDate="May 2024"
						endDate="June 2024"
						tags={["C++"]}
						GHLink="https://github.com/vinfinity7/CHIP8"
						>
						<div>
							<Text
								color="hsl(var(--primary))"
								fontWeight={"bold"}
								>
								Features
							</Text>

							<Text opacity={0.7}>
							I developed a Chip8 emulator in C++, bringing the classic 1970s programming language to modern systems. This project involved simulating the original Chip8 hardware, managing memory, handling I/O, and interpreting opcodes. Through this process, I deepened my understanding of emulation and low-level programming. Creating this emulator allowed me to merge my passion for retro gaming with my C++ development skills, resulting in a functional piece of computing history that runs seamlessly on contemporary devices.
							</Text>
						</div>
					</ProjectCard>
					<ProjectCard
						title="Netflix Frontend Clone"
						brief="Frontend Clone developed on Vanilla.js"
						startDate="May 2023"
						endDate="June 2023"
						tags={["HTML","CSS","Vanilla","Youtube API"]}
						GHLink="https://github.com/vinfinity7/netflix-frontend-clone"
						demoLink="https://vinfinity7.github.io/netflix-frontend-clone/"
					>
						<div>
							<Text
								color="hsl(var(--primary))"
								fontWeight={"bold"}
							>
								Features
							</Text>

							<Text opacity={0.7}>
							In my attempt to recreate Netflix look using basic JavaScript, I used the YouTube API to add cool videos. With careful coding, I made sure the website looked just like Netflix. JavaScript helped me get videos dynamically, so users could browse a bunch of cool stuff. From smooth moving around to easy video playing, I made sure every part felt just like the real Netflix site.
							</Text>
						</div>
					</ProjectCard>
				</div>
			</Flex>
		</main>
	);
}
