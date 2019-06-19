// Import React
import React from "react";
import ReactLogo from "./react-logo.png";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={ReactLogo} alt="react logo" />
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Context
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            and the useReducer hook
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Prop Drilling
          </Heading>
          <Heading size={1} textColor="secondary">
            Prop Drilling
          </Heading>
          <Heading size={2} textColor="secondary">
            Prop Drilling
          </Heading>
          <Heading size={3} textColor="secondary">
            Prop Drilling
          </Heading>
          <Heading size={4} textColor="secondary">
            Prop Drilling
          </Heading>
          <Heading size={5} textColor="secondary">
            Prop Drilling
          </Heading>
          <Heading size={6} textColor="secondary">
            Prop Drilling
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={6} margin="0px 0 1em " textColor="primary" caps>
            Prop Drilling
          </Heading>
          <div
            style={{
              display: "inline-block"
            }}
          >
            <CodePane
              textSize={15}
              lang="jsx"
              source={require("./examples/propDrilling.example")}
              theme="light"
            />
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
