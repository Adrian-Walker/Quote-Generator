import React from "react";
import { Volume, Copy, BrandTwitter } from "tabler-icons-react";
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
  const { content, author, getQuotes } = props;
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
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ActionIcon size="lg" variant="outline">
            <Volume size={24} />
          </ActionIcon>
          <Space w="xs" />

          <ActionIcon size="lg" variant="outline">
            <Copy size={24} />
          </ActionIcon>
          <Space w="xs" />

          <ActionIcon size="lg" variant="outline">
            <BrandTwitter size={24} />
          </ActionIcon>
        </Box>

        <Button
          onClick={getQuotes}
          style={{ backgroundColor: "red", padding: "5px" }}
        >
          {console.log(getQuotes)}
          Get Quote
        </Button>
      </Box>
    </Paper>
  );
}

export default Quotes;
