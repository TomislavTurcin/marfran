import React from "react";
import jasen from "../jasen.jpg";

const Ash = () => {
  return (
    <section id="ash">
      <h2 id='engtext'>Ash</h2>
      <h2 id='hrvtext'>Jasen</h2>
      <p id='engtext'>
      Ash is one of the most important autochthonous commercial forest species in Croatia. It grows in lowland floodplain forests. The structure of ash is very similar to that of oak, but it is characterized by a slightly yellowish color. It is also characterized by hardness, strength and ease of processing. It is used for interior design, floor and wall coverings, parquet, floors, stairs and furniture. High-quality ash is also used for the production of veneers and panels</p>
      <p id='hrvtext'>
      Jasen je jedna od najvažnijih autohtonih gospodarskih šumskih vrsta u Hrvatskoj. Raste u nizinskim poplavnim šumama. Struktura jasena vrlo je slična hrastu, ali ga karakterizira blago žućkasta boja. Odlikuje ga i tvrdoća, čvrstoća i lakoća obrade. Koristi se za uređenje interijera, podnih i zidnih obloga, parketa, podova, stepenica i namještaja. Visokokvalitetni pepeo također se koristi za proizvodnju furnira i ploča</p>
   
      <img id='secimage' src={jasen} alt="Slavonian Ash" />
    </section>
  );
};

export default Ash;
