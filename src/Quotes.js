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
import { toast } from "react-toastify";

const synth = window.speechSynthesis;

const speak = (content) => {
  if (synth.speaking) {
    return;
  }
  const toSpeak = new SpeechSynthesisUtterance(content);
  toSpeak.onend = (e) => {
    console.log("done speaking...");
  };

  toSpeak.onerror = (e) => {
    console.log("error on speaking");
  };
  synth.speak(toSpeak);
};

function Quotes(props) {
  const { content, author, getQuotes } = props;

  if (!content) {
    return null;
  }

  const handleSpeakOnClick = () => {
    speak(content);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(content);
    toast.info("Quote Has Been Copied");
  };

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
          <ActionIcon size="lg" variant="outline" onClick={handleSpeakOnClick}>
            <Volume size={24} />
          </ActionIcon>
          <Space w="xs" />

          <ActionIcon size="lg" variant="outline" onClick={handleCopyQuote}>
            <Copy size={24} />
          </ActionIcon>
          <Space w="xs" />

          <ActionIcon
            component="a"
            target="_blank"
            href={`https://www.twitter.com/intent/tweet?text=${content} - ${author}`}
            size="lg"
            variant="outline"
          >
            <BrandTwitter size={24} />
          </ActionIcon>
        </Box>

        <Button
          onClick={getQuotes}
          style={{ backgroundColor: "red", padding: "5px" }}
        >
          {console.log(getQuotes)}
          New Quote
        </Button>
      </Box>
    </Paper>
  );
}

export default Quotes;
