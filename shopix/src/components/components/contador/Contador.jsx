import React, { useState, useEffect } from 'react';

function Contador() {
  const [horas, setHoras] = useState(2);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (segundos > 0) {
        setSegundos(segundos - 1);
      } else if (minutos > 0) {
        setSegundos(59);
        setMinutos(minutos - 1);
      } else if (horas > 0) {
        setSegundos(59);
        setMinutos(59);
        setHoras(horas - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [horas, minutos, segundos]);

  return (
    <div>
      <h1>{horas}:{minutos}:{segundos}</h1>
    </div>
  );
}

export default Contador;
