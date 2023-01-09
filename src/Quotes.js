import React from "react";
import {
  Paper,
  Blockquote,
  Button,
  Box,
  Divider,
  Space,
  ActionIcon,
} from "@mantine/core";

function Quotes(props) {
  const { content, author } = props;
  return (
    <Paper shadow="xs" p="md" style={{ minWidth: "80vw" }}>
      <Blockquote cite={author ? `- ${author}` : ""}>{content}</Blockquote>
      <Space h="md" />
      <Divider />
      <Space h="md" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button>Get Quote</Button>
      </Box>
    </Paper>
  );
}

export default Quotes;
