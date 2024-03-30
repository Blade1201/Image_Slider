import { useEffect } from "react";
import "./style/style.css";
import IMG1 from "./images/img1.jpg";
import IMG2 from "./images/img2.jpg";
import IMG3 from "./images/img3.jpg";
import IMG4 from "./images/img4.jpg";
import IMG5 from "./images/img5.jpg";
import IMG6 from "./images/img6.jpg";

function App() {

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const nextClickHandler = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const prevClickHandler = () => {
      const items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', nextClickHandler);
    prev.addEventListener('click', prevClickHandler);

    return () => {
      next.removeEventListener('click', nextClickHandler);
      prev.removeEventListener('click', prevClickHandler);
    };
  }, []);


  return (
    <div className="App">
       <div className="container">
      <div className="slide">
        <div className="item" style={{backgroundImage: IMG1}}>
          <div className="content">
            <div className="name">Svájc</div>
            <div className="des">Svájc, hivatalos nevén Svájci Konföderáció, Svájci Államszövetség, Svájci Esküszövetség tengerparttal nem rendelkező, kantonokból álló szövetségi köztársaság Közép-Európában. Szomszédai Németország, Franciaország, Olaszország, Ausztria és Liechtenstein.</div>
            <button>Részletek</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: IMG2}}>
          <div className="content">
            <div className="name">Finnország</div>
            <div className="des">Finnország észak-európai ország. Délnyugatról a Balti-tenger, délkeletről a Finn-öböl, nyugatról a Botteni-öböl határolja. Szárazföldön Svédországgal, Norvégiával és Oroszországgal határos, tengeren pedig Észtországgal. „Az ezer tó országaként” emlegetik, de a területén ennél sokkal több, mintegy 180000 tó található.</div>
            <button>Részletek</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: IMG3}}>
          <div className="content">
            <div className="name">Izland</div>
            <div className="des">Izland szigetország az Atlanti-óceán északi részén, Grönland és Skócia között, Feröertől északnyugatra, a két globális jelentőségű tektonikai lemez – az eurázsiai és az észak-amerikai lemez határvonalán. Hivatalos nyelve az indoeurópai nyelvcsaládba tartozó izlandi nyelv. Fővárosa és legnépesebb városa Reykjavík.</div>
            <button>Részletek</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: IMG4}}>
          <div className="content">
            <div className="name">Ausztrália</div>
            <div className="des">Ausztrália, hivatalos nevén az Ausztrál Államszövetség föderatív királyság, mely az ausztrál kontinenst, Tasmania szigetét és számos kisebb szigetet foglal magába. Északról Pápua Új-Guinea, Indonézia és Kelet-Timor; északkelet felől a Salamon-szigetek és Vanuatu; délkelet felől pedig Új-Zéland határolja tengeren. </div>
            <button>Részletek</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: IMG5}}>
          <div className="content">
            <div className="name">Hollandia</div>
            <div className="des">Hollandia, hivatalosan a Holland Királyság északnyugat-európai ország, amely tengerentúli területekkel is rendelkezik a Karib-térségben. Európa egyik legsűrűbben lakott országa. Európában Hollandia tizenkét tartományból áll.</div>
            <button>Részletek</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: IMG6}}>
          <div className="content">
            <div className="name">Írország</div>
            <div className="des">Írország vagy Ír Köztársaság Európa északnyugati részén és harmadik legnagyobb szigetén, az Ír-szigeten található állam. A sziget északi része a brit korona fennhatósága alá tartozik, az Egyesült Királyság része, ezt nevezik Észak-Írországnak. A sziget többi része a tulajdonképpeni Írország. </div>
            <button>Részletek</button>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    </div>
  );
}

export default App;
