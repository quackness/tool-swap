import { useState } from "react";
import axios from "axios";

export default function UserItemsSearch(props) {
  const { setTools, categories, groups } = props;
  const [input, setInput] = useState("");
  const [category, setToolCategory] = useState("All categories");
  const [group, setGroup] = useState("All groups");

  const onSearch = function (event) {
    event.preventDefault();

    let url = `http://localhost:8001/search_user_items/?searchInput=${input}`;
    if (category !== "All categories") {
      url = url.concat(`&searchCategory=${category}`);
    }
    if (group !== "All groups") {
      url = url.concat(`&searchGroup=${group}`);
    }
    axios.get(url).then(function (res) {
      setTools([...res.data]);
    });
    resetForm();
  };

  function resetForm() {
    setInput("");
    setToolCategory("All categories");
    setGroup("All groups");
  }

  return (
    <div className="searchbar">
      <input
        className="searchbar-text"
        type="text"
        value={input}
        placeholder="Search your tools"
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <select
        className="searchbar-categories-dropdown"
        value={category}
        onChange={(e) => setToolCategory(e.target.value)}
      >
        <option>All categories</option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.category_name}
          </option>
        ))}
      </select>

      <select
        className="searchbar-categories-dropdown"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
      >
        <option>All groups</option>
        {groups.map((group) => (
          <option key={group.group_id} value={group.group_id}>
            {group.group_name}
          </option>
        ))}
      </select>

      <button className="searchbar-search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
