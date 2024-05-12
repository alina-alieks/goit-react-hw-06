import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useState } from "react";
import css from "./SearchBox.module.css";
// import { selectContacts } from "../../redux/contactsSlice";

export default function SearchBox() {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleOnChange = (event) => {
    setFilter(event.target.value.toLowerCase());
    dispatch(changeFilter(filter));
    console.log(filterName);
  };

  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={handleOnChange}
      />
    </label>
  );
}
