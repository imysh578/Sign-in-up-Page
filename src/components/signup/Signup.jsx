import "./Signup.scss";
import { Box, Button, TextField } from "@mui/material";

export default function Signup() {
	return (
		<>
			<Box
				className="signup-container"
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 2, width: "40ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<div className="text-fields-box">
					<TextField
						required
						label="Email"
						variant="standard"
						helperText="example@google.com"
					/>
					<TextField
						required
						label="Password"
						type="password"
						autoComplete="current-password"
						variant="standard"
					/>
					<TextField
						required
						label="Repeat Password"
						type="password"
						autoComplete="current-password"
						variant="standard"
					/>
				</div>
				<div className="buttons-box">
					<Button variant="contained" size="medium">
						SUBMIT
					</Button>
				</div>
			</Box>
		</>
	);
}
