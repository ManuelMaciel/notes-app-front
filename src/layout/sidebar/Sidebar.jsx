import { Fragment, memo, useState, useEffect } from 'react';
import { routes } from '../../routes/routes'
import sidebar from './sidebar.module.css'

const Sidebar = memo(({width, height}) => {

  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  useEffect(() => {
    setX(0);
  }, []);
  console.log('routes, ', routes)

  return (
    <div
      className={sidebar.bar}
      style={{
        transform: `translatex(${xPosition}px)`,
        width: width,
        minHeight: height
      }}
    >
      <button
        onClick={() => toggleMenu()}
        className={sidebar.toggle_menu}
        style={{
          transform: `translate(${width}px, 20vh)`
        }}
      ></button>
      <Fragment>
        <ul>
          <li>

          </li>
        </ul>
      </Fragment>
    </div>
  );
})

export default Sidebar;
