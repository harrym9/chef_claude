import ReactMarkdown from "react-markdown";

export default function ClaudeResponse(props) {
  console.log(props)
  return <ReactMarkdown>{props.recipe}</ReactMarkdown>;
}
