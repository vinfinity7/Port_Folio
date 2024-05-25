"use client";

import GHIcon from "@/styles/icons/GHIcon";
import LinkedIn from "@/styles/icons/LinkedIn";

import { Flex } from "@chakra-ui/react";
import { event } from "nextjs-google-analytics";
export default function SocialLinks() {
	return (
		<Flex direction={"column"} gap={8}>
			<a href="https://www.linkedin.com/in/saksham-misra-79334426b/" target="_blank">
				<Flex
					gap={4}
					alignItems={"center"}
					onClick={() => {
						event("linkedin", {
							name: "Saksham-Misra",
						});
					}}
				>
					<LinkedIn /> LinkedIn
				</Flex>
			</a>
			<a
				href="https://github.com/vinfinity7"
				target="_blank"
				onClick={() => {
					event("github", { name: "Saksham Misra" });
				}}
			>
				<Flex gap={4} alignItems={"center"}>
					<GHIcon /> GitHub
				</Flex>
			</a>
		</Flex>
	);
}
