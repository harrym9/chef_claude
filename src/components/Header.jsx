import "../styles/Header.css";
import chefClaudeIcon from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img className="chefLogo" src={chefClaudeIcon} alt="Ai chef logo" />
      <h1 className="headerTitle">Chef Claude</h1>
    </header>
  );
}
