// Import React
import React from "react";
import ReactLogo from "./react-logo.png";
import Context from "./prop-drilling-v-context.png";
import AnimatedComponent from "./components/AnimatedComponent";

// Import Spectacle Core tags
import {
  List,
  ListItem,
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  CodePane,
  BlockQuote,
  Cite,
  Quote
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
          <AnimatedComponent>
            <Heading size={1} textColor="primary" caps>
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={1} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={2} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={3} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={4} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={5} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
          <AnimatedComponent>
            <Heading size={6} textColor="secondary">
              Prop Drilling
            </Heading>
          </AnimatedComponent>
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
              textSize={12}
              lang="jsx"
              source={require("./examples/propDrilling.example")}
              theme="light"
            />
          </div>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} margin="0px 0 1em " textColor="secondary" caps>
            Context API
          </Heading>
          <Image src={Context} alt="react logo" />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0px 0 1em" textColor="tertiary" caps>
            Provider
          </Heading>
          <List start={2}>
            <AnimatedComponent>
              <ListItem padding="0.5em">
                allows consuming components to subscribe to context changes
              </ListItem>
            </AnimatedComponent>
            <AnimatedComponent>
              <ListItem padding="0.5em">
                Accepts a value prop to be passed to consuming components
              </ListItem>
            </AnimatedComponent>
            <AnimatedComponent>
              <ListItem padding="0.5em">
                All consumers that are descendants of a Provider will re-render
                whenever the Provider’s value prop changes.
              </ListItem>
            </AnimatedComponent>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} margin="0px 0 1em" textColor="tertiary" caps>
            Consumer
          </Heading>
          <List start={2}>
            <AnimatedComponent>
              <ListItem padding="0.5em">
                Subscribes to the provider object, and is able to access the
                values set as a value prop on the Provider.
              </ListItem>
            </AnimatedComponent>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Live demo</Quote>
            <Cite>Todo list with context and useReducer</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
