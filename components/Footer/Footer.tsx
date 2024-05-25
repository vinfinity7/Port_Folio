import { Box } from "@chakra-ui/react";
import styles from "./Footer.module.css";

import MsgBox from "../MsgBox";
import SocialLinks from "../SocialLinks";

export default async function Footer() {
	return (
		<div className={styles.footer} id="Contact">
			<Box className={styles.footerWrapper}>
				<Box className={styles.linkContentWrapper}>
					<SocialLinks />
					<MsgBox />
				</Box>

				<div className={styles.divider} />
					<div className={styles.viewsWrapper}>
			Thank You !		</div>
			</Box>
		</div>
	);
}
