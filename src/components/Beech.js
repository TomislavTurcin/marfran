import React from "react";
import bukva from "../bukva.jpg"
const Beech = () => {
  return (
    <section id="beech">
      <h2 id='engtext'>Beech</h2>
      <h2 id='hrvtext'>Bukva</h2>
      <p id='engtext'>It is the most widespread forest species in Croatia and belongs to the autochthonous tree species. The texture of beech is hard and fibrous. In many parts of Croatia, beech is most commonly used as firewood or solid fuel, but other end products such as furniture, tables, chairs, parquet and composite panels can also be made from beech. </p>
      <p id='hrvtext'>Najrasprostranjenija je šumska vrsta u Hrvatskoj i spada u autohtone vrste drveća. Tekstura bukve je tvrda i vlaknasta. U mnogim dijelovima Hrvatske bukva se najčešće koristi kao ogrjev ili kruto gorivo, no od bukve se mogu izrađivati ​​i drugi krajnji proizvodi poput namještaja, stolova, stolica, parketa i kompozitnih ploča.</p>
   <img id='secimage' src={bukva} alt="Slavonian Beech" />
   
    </section>

     
  );
};

export default Beech;