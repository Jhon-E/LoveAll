import { useEffect, useState } from "react";
import "./styles/gift.css";
import Escena from "./components/Escena.jsx";
import { LoadMesh } from "./components/LoadMesh.jsx";
import { opciones } from "./data/opciones.js";
import { movScroll } from "./components/functions.js";

const Gift = () => {
  const [object, setObject] = useState(null);
  const [positionCamera, setPositionCamera] = useState([8, 0, 0]);
  async function cargarModelo(url) {
    try {
      const modelo = await LoadMesh(url);
      setObject(modelo);
    } catch (error) {
      console.error("Error al cargar el modelo:", error);
    }
  }
  useEffect(() => {
    cargarModelo("./Models/corazon.gltf");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setPositionCamera(movScroll(positionCamera))
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="containerEscena">
        <div className="container_1">
          {object ? (
            <Escena
              objeto={object}
              background={opciones[2].background}
              color={opciones[2].color}
              coor_camera={positionCamera}
              isfloating={false}
            />
          ) : (
            "cargando..."
          )}
        </div>
      </div>
      <div className="ejem">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        laudantium, explicabo omnis consectetur possimus dolorum ab unde velit
        sunt voluptatum nobis delectus quibusdam laborum, ut beatae veritatis
        sed assumenda iste! Iure, asperiores autem assumenda nemo maxime harum
        non explicabo natus dignissimos iste dolor, aperiam veniam quia vero
        eius culpa, corporis vel quo officiis consequuntur. Quos atque neque
        facere earum molestias. Quibusdam quod sed beatae, odit alias a eaque
        ipsam praesentium! Quis illum quidem repudiandae eveniet, sit tempora?
        Placeat dignissimos neque quam deleniti libero cum quasi vero.
        Distinctio ab eligendi aliquam. Cum voluptas non perferendis atque rem
        iste illo? Tempore exercitationem nam dicta neque aspernatur alias
        labore impedit deserunt accusamus minus corrupti optio vitae
        necessitatibus numquam omnis maiores dolorem, sint praesentium. Possimus
        sapiente distinctio voluptates nisi cupiditate, ipsa corporis soluta
        cumque velit a perspiciatis exercitationem ad laboriosam neque ea harum,
        quod ipsum iure magni deserunt atque eum tempore. Beatae, voluptatibus
        sapiente. Aperiam assumenda dolorum delectus obcaecati necessitatibus
        incidunt, magni, itaque amet in non exercitationem optio deleniti modi
        maiores laborum ducimus. In velit placeat aperiam, hic eius eaque at
        expedita quas ad! Asperiores similique, dolore iure ad pariatur
        molestiae accusantium harum placeat expedita deleniti, adipisci debitis
        quasi voluptas in vel! Quas minus iure illo debitis iste magnam
        voluptatem in, modi unde dolores! Porro quae id iste hic molestiae
        possimus labore totam. Ut asperiores quos expedita veritatis, corrupti
        corporis iusto totam quas reiciendis ducimus consequatur nobis, error,
        quaerat inventore possimus reprehenderit ratione nam. Obcaecati harum
        non, reiciendis earum facere corrupti dicta error? Culpa magni et omnis
        cum temporibus, fugit ratione earum corporis sequi impedit voluptas in
        unde veniam non quo molestiae est quis! Officiis, modi deleniti
        voluptatem illum aliquam asperiores qui, reiciendis pariatur sint nam
        dolorum nulla quam id! Aliquam eos quam quidem corrupti repellendus
        explicabo animi optio, asperiores deleniti nihil sint cumque. Amet
        mollitia consequuntur molestiae velit explicabo dolores! Distinctio
        magnam ullam ut obcaecati. Reprehenderit suscipit eveniet atque optio,
        reiciendis facilis distinctio enim, officia vitae qui mollitia nemo
        velit id quod aliquid. Nulla, saepe. Aliquid id similique numquam vel
        quo laborum unde culpa corporis ipsam accusamus. Soluta modi
        consequuntur est porro, enim esse expedita necessitatibus temporibus,
        libero recusandae repellat! Incidunt, consectetur dicta. Voluptatem
        expedita, porro deleniti enim dolor repudiandae debitis dolores magni ab
        possimus sapiente dolore nobis et ad? Repudiandae rem commodi distinctio
        reiciendis, eveniet nam omnis laudantium, error libero, magni deleniti.
        Consequatur aliquam, et quos facere itaque aspernatur explicabo
        asperiores nostrum! Provident molestias esse unde laborum accusantium!
        Debitis itaque culpa aspernatur recusandae, officiis porro facere ex
        eius dolor, nesciunt ipsam excepturi. Vitae blanditiis libero odio
        aperiam nulla asperiores voluptatem veritatis consequatur, expedita
        architecto repellat quidem suscipit? Explicabo repellendus voluptates
        illo quasi, maiores officia a eveniet! Doloremque atque nostrum tempore
        modi quisquam. Facere, voluptate libero. Repellendus ullam est culpa
        accusamus, ut iste nobis assumenda vitae voluptatem esse aliquam ipsam
        unde labore optio. Voluptates debitis error dicta similique numquam
        maiores aperiam illum placeat. Porro corporis architecto dicta iure
        asperiores voluptatum non tempore, dolores sunt nihil totam cum ex
        excepturi. Sed animi et, dolores sequi voluptatibus natus! Sed,
        praesentium ex libero rerum est molestias! Iste, vero aspernatur. Nobis,
        dolores. Provident maxime accusamus tempora eaque magni. Temporibus
        cupiditate esse aut excepturi! Ipsam, fugit, quas esse ullam neque quo
        fugiat accusamus debitis obcaecati tenetur delectus quisquam. Nemo eius
        dolor velit, ex consequuntur recusandae explicabo illum perferendis
        aspernatur quisquam unde modi culpa quos voluptates error laboriosam
        harum obcaecati in sapiente iste voluptatum vel, ducimus dicta sequi?
        Laudantium! Sint sit nam doloremque tempore optio reprehenderit nihil
        tenetur vero consequuntur officiis? Recusandae obcaecati ducimus error,
        cum ad voluptatem cumque dolor optio repudiandae, ea maiores possimus
        ratione molestias placeat debitis.
      </div>
    </>
  );
};

export default Gift;
