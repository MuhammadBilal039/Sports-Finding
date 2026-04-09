// import createMatch from "./assets/mockupImages/createMatchMockup.svg";
// import home from "./assets/mockupImages/homeMockup.svg";
// import details from "./assets/mockupImages/detailsMockup.svg";

// export default function Mockups() {
//   return (
//     <div className="mockup-container">
//       <div className="">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//           reprehenderit dolores dolore id minima quod eum necessitatibus odio
//           porro perferendis atque quo voluptates natus exercitationem cumque
//           nulla, ea, vitae numquam consectetur! Eveniet magnam optio eius
//           quaerat reiciendis eligendi iusto ipsa numquam accusamus, maiores quo,
//           quae pariatur obcaecati molestias earum nesciunt necessitatibus aut
//           cupiditate eum dolorem nisi temporibus incidunt. Eius reprehenderit
//           architecto consequatur recusandae labore. Aspernatur optio enim
//           perferendis, cum quam excepturi cumque deserunt sit? Rem officiis
//           repellat animi nisi magni deserunt ullam earum, voluptatem minima ab
//           esse enim non consectetur soluta ipsum facere nesciunt quae dolore
//           voluptatum illo, reiciendis quas eos voluptas et! Odio soluta sunt
//           ipsa non eius quasi, tempore assumenda sapiente incidunt explicabo quo
//           debitis illum eum vero, voluptatem laboriosam odit aperiam aspernatur
//           sit perspiciatis est repudiandae quos! Accusamus consequuntur sed
//           recusandae deleniti a. Rem optio totam tempora inventore molestiae
//           quis, voluptatibus ducimus dolores ut facilis vero illo explicabo
//           reprehenderit ipsa atque deleniti esse! Earum officiis iure autem
//           corrupti qui! Itaque sunt error nam aperiam iste adipisci porro, unde
//           aspernatur velit ea numquam debitis dicta! Expedita rerum numquam enim
//           culpa, velit non dignissimos et. Expedita porro suscipit tenetur
//           dignissimos blanditiis! Facilis iure assumenda pariatur suscipit fugit
//           accusantium tempore?
//         </p>
//       </div>
//       <div>
//         <img src={home} className="home" alt="homeMockup" />
//         <img src={createMatch} className="left" alt="createMatchMockup" />
//         <img src={details} className="right" alt="detailsMockup" />
//       </div>
//     </div>
//   );
// }

import createMatch from "./assets/mockupImages/createMatchMockup.svg";
import home from "./assets/mockupImages/homeMockup.svg";
import details from "./assets/mockupImages/detailsMockup.svg";

export default function Mockups() {
  return (
    <div className="mockup-container">
      <div className="mockup-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>

      <div className="mockup-images">
        <img src={home} className="home" alt="homeMockup" />

        <div className="bottom-images">
          <img src={createMatch} className="left" alt="createMatchMockup" />
          <img src={details} className="right" alt="detailsMockup" />
        </div>
      </div>
    </div>
  );
}
