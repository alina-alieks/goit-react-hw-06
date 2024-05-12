import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  // console.log(filterName);
  const searchContacts = contacts.filter((contact) =>
    contact.name.includes(filterName)
  );

  return (
    <ul className={css.contactList}>
      {searchContacts.map((contact) => (
        <li className={css.contacItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
