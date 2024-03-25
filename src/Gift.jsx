import { useRef } from "react";
import "./styles/gift.css";

const Gift = () => {

    const mountRef = useRef(null);
    const parallax = (e) => {

        let initial_y = window.scrollY;

        mountRef.current.style.left = initial_y * 2; 

    }
  return (
    <>
      <div className="container_1">
        <img src="src\assets\PyJ2024-03.webp" alt="Pao y Yo" />
        <h1 id="title" ref={mountRef} onScroll={parallax}>TEXTO DE EJEMPLO</h1>
      </div>
      <div className="ejemplo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta minima sit, vero at totam, optio delectus quo excepturi minus repellat earum magni. Delectus, ut? Provident, et. Quos quas voluptate velit libero et possimus obcaecati porro blanditiis nostrum perferendis animi distinctio unde laudantium sunt exercitationem, mollitia odio itaque dolor soluta minima doloremque quo! Expedita dolor quisquam in tempore voluptates nihil labore rerum consequatur, minima molestiae. Quaerat aliquid odit animi harum autem tempore nostrum impedit assumenda optio magnam molestias esse dolorum corporis, natus deserunt eligendi corrupti debitis libero ducimus, ad voluptatem illum reiciendis pariatur sunt. Repudiandae eius deserunt architecto explicabo delectus provident molestiae consequuntur facilis nisi recusandae placeat tempore quidem consectetur, sequi temporibus ratione suscipit quisquam nobis perferendis laboriosam inventore id quia ex omnis. Nam ea beatae laborum nobis, adipisci fuga similique aliquid ullam aut id modi aperiam officia dolore rerum maiores quae corrupti tempore architecto nostrum quos! Aspernatur numquam nostrum maxime, dolores debitis cum odio, saepe accusantium quia repellat dolor temporibus corporis aut quo. Facere architecto distinctio debitis. Corrupti facilis ipsa blanditiis reprehenderit fuga, magni quod vel debitis maxime nesciunt velit ut minima quasi doloribus exercitationem, nihil in eveniet dolorem vero ducimus! Sequi id quidem aut sed. Magni, vel facilis. Cumque ullam quidem consequuntur ducimus fugit in blanditiis facilis cupiditate similique, doloremque molestiae error totam ex magnam! Aut doloremque laudantium iure eveniet optio ab repellendus odit dicta, eaque magni voluptate quis ex non, recusandae facilis. Minus magni cupiditate eveniet similique sed eius temporibus dolorem impedit fuga eum necessitatibus incidunt inventore labore sint architecto blanditiis minima, optio odit laboriosam repellendus nobis officiis alias. Animi excepturi, tempore, dignissimos sed nemo earum laboriosam quis obcaecati cupiditate, doloremque a nihil rem illo sapiente illum? Neque, nostrum! In voluptate labore saepe nobis nostrum nemo dicta voluptates, velit doloribus nam. Doloribus architecto magnam, dolorum culpa non provident?
      </div>
    </>
  );
};

export default Gift;
