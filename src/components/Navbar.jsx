import useWindowStore from "../store/window";
import { navLinks, navIcons } from "../constants";
import dayjs from "dayjs";
const Navbar = () => {

  const {openWindow} = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold text-sm">Dipto's Portfolio</p>
        <ul>
          {navLinks.map(({id,name,type}) => (
            <li key={id} onClick={()=>openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((item) => (
            <li key={item.id}>
              <img className="icon-hover" src={item.img} alt={item.name} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D, hh:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
