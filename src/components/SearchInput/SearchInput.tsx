import { ChangeEvent } from "react";
import "./index.css";

const className = "search-input";

interface IProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput = ({ onChange, placeholder, value }: IProps) => {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div className="search-icon">
        <span>🔍</span>
      </div>
    </div>
  );
};

export default SearchInput;
