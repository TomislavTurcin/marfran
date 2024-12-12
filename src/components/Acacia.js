import React from "react";
import bagrem from "../bagrem.jpg"

const Acacia = () => {
  return (
    <section id="acacia">
      <h2 id='engtext'>Acacia</h2>
      <h2 id='hrvtext'>Bagrem</h2>
      <p id='engtext'> Acacia is a solid, heavy and very hard wood that is resistant to decay. It is used in carpentry and as firewood.</p>
      <p id='hrvtext'> Bagrem je čvrsto, teško i vrlo tvrdo drvo otporno na truljenje. Koristi se u stolarstvu i kao ogrjevno drvo.</p>
    
      <img id='secimage' src={bagrem} alt="Slavonian Acacia" />
    </section>
  );
};

export default Acacia;