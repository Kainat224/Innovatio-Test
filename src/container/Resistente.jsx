import React from 'react';
import { HeadingSec, ResistenteCard } from '../components';
import images from '../constants/images';

const Resistente = () => {
  return (
    <div className="container-fluid sections__padding resistente_bg" id='sireFeatures'>
      <div className="row container mx-auto">
        <div className="col-md-12 text-center">
          <HeadingSec title={'Connesso, Intelligente, Resistente'}/>
        </div>
        <div className='row resisBg'>
          <div className="col-md-6 mt-5">
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
          </div>
          <div className="col-md-6  mt-5">
          <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
            <ResistenteCard imgUrl={images.res} title={'Versatile'} text={`Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resistente
