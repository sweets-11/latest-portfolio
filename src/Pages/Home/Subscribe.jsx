import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Box width="100%" margin="140px auto 0" textAlign="center">
        <Typography fontFamily="roboto" variant="h2">Get In Touch</Typography>
        <Box  display="flex" justifyContent="space-between" alignItems="center" marginTop="50px">
        <Typography fontFamily="roboto" variant="h4">
          <MailIcon fontSize="large" /> aniketjain2018@gmail.com
        </Typography>
        <Typography fontFamily="roboto" variant="h4">
          <LocalPhoneIcon fontSize="large" /> (+91) 8305041219
        </Typography>
        </Box>
      </Box>
      <Box width="100%" margin="120px auto" textAlign="center">
        <IconButton>
          <MarkEmailReadOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography fontFamily="roboto" variant="h2">Subscribe To Our Newsletter</Typography>
        <Typography fontFamily="roboto">
          and receive $20 coupon for your first order when you checkout
        </Typography>
        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#FAF3F0"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Typography fontFamily="roboto" sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
            Subscribe
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Subscribe;
