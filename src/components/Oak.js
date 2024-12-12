import React from "react";
import hrast from "../hrast.jpg";

const Oak = () => {
  return (
    <section id="oak">
      <h2 id='engtext'>Oak</h2>
      <h2 id='hrvtext'>Hrast</h2>
      <p id='engtext'>The Slavonian oak is one of the most prized oak species due to its outstanding characteristics such as strength, durability and esthetics. This species of oak grows in the rich lowland forests of Slavonia, where the ideal soil and climatic conditions have enabled the growth of the alder oak, which has become a symbol of the quality of wood. The wood of Slavonian oak is characterized by a fine texture, a dense structure and a light brown to golden color, making it suitable for various applications, from furniture to parquet.</p>
      <p id='hrvtext'>Slavonski hrast jedna je od najcjenjenijih vrsta hrasta zbog svojih iznimnih karakteristika poput čvrstoće, trajnosti i estetike. Ova vrsta hrasta raste u bogatim nizinskim šumama Slavonije, gdje su idealni zemljišni i klimatski uvjeti omogućili rast hrasta johe, koji je postao simbolom kvalitete drva. Drvo slavonskog hrasta odlikuje se finom teksturom, gustom strukturom i svijetlosmeđom do zlatnom bojom, što ga čini pogodnim za različite primjene, od namještaja do parketa.</p>
       
      <img id='secimage' src={hrast} alt="Slavonian Oak" />
    </section>
  );
};

export default Oak;
